let forbidden_skills_Volcanic_Cave = [
  "melvorD:Thieving",
  "melvorD:Cooking",
  "melvorD:Summoning",
];

let forbidden_skills_Impending_Darkness = [
  "melvorD:Smithing",
  "melvorD:Agility",
  "melvorD:Crafting",
  "melvorD:Herblore",
];
let forbidden_skills_Throne_of_the_Herald = [
  "melvorD:Astrology",
  "melvorD:Runecrafting",
  "melvorD:Fletching",
  "melvorD:Township",
];
let forbidden_skills = [
  "melvorD:Firemaking",
  "melvorD:Woodcutting",
  "melvorD:Fishing",
  "melvorD:Mining",
  "melvorD:Farming",
];

export async function setup(ctx) {
  //load Data
  const gamemodeJSON = await ctx.loadData("data/gamemode.json");
  const monstersJSON = await ctx.loadData("data/monsters.json");

  // Helper patch functions
  const conquestGamemodeCheck = (gamemode = game.currentGamemode) => {
    // Check if the user is playing a Conquest game mode current
    return gamemode.id.includes("conquest");
  };

  const setForbiddenSkillLevels = () => {
    //Set Levels to 120
    if (game.firemaking.level < 120)
      game.firemaking.setXP(exp.level_to_xp(120) + 1);
    if (game.woodcutting.level < 120)
      game.woodcutting.setXP(exp.level_to_xp(120) + 1);
    if (game.fishing.level < 120)
      game.fishing.setXP(exp.level_to_xp(120) + 1);
    if (game.mining.level < 120)
      game.mining.setXP(exp.level_to_xp(120) + 1);
    if (game.firemaking.level < 120)
      game.farming.setXP(exp.level_to_xp(120) + 1); //could be in a loop i guess?
  };

  //Lifecycle Hooks
  ctx.onCharacterLoaded((ctx) => {
    if (conquestGamemodeCheck()) {
      //Keeps the mod from breaching containment
      //Set summon attack Speed
      game.combat.player.summonAttackInterval = 500;

      setForbiddenSkillLevels();
    } else {
      console.log("Not in Conquest Mode.");
    }
  });

  ctx.onInterfaceReady((ctx) => {
    if (!conquestGamemodeCheck()) {
      return;
    }
    toggleLockedSkills();
  });
  /****************************************************/
  //CONQUEST MODE PATCHES
  /****************************************************/
  //Fires After an enemy is killed
  ctx.patch(CombatManager, "onEnemyDeath").after(function () {
    if (!conquestGamemodeCheck()) return;
    //Award Marks here
    //  // console.log("Jobs done: " + this.enemy.monster.id);
    //  // if (this.enemy.monster.id == "melvorD:Plant") {
    //  //   console.log("Dead plant");
    // // }

    //Refresh Locked Skills
    toggleLockedSkills();
  });

  //Adds pre-ID level caps, Dont know why it needs to be out here to work?
  ctx.patch(Skill, "levelCap").get((o) => {
    if (game.currentGamemode.id.includes("conquest")) {
      let beatID = game.combat.getDungeonCompleteCount(
        game.dungeons.getObjectByID("melvorF:Impending_Darkness")
      );
      if (beatID >= 1) {
        return cloudManager.hasTotHEntitlement ? 120 : 99;
      } else {
        return 99;
      }
    } else {
      return cloudManager.hasTotHEntitlement ? 120 : 99;
    }
  });

  //Restricts which skills can be unlocked
  ctx.patch(Skill, "unlockOnClick").replace(function () {
    //Custom Code
    if (conquestGamemodeCheck()) {
      let ToTH_Count = game.combat.getDungeonCompleteCount(
        game.dungeons.getObjectByID("melvorTotH:Throne_of_the_Herald")
      );
      let Impending_Darkness_Count = game.combat.getDungeonCompleteCount(
        game.dungeons.getObjectByID("melvorF:Impending_Darkness")
      );
      let Volcanic_Cave_Count = game.combat.getDungeonCompleteCount(
        game.dungeons.getObjectByID("melvorD:Volcanic_Cave")
      );
      if (Volcanic_Cave_Count < 1) {
        return;
      } else if (
        forbidden_skills_Impending_Darkness.includes(this.id) &&
        Impending_Darkness_Count < 1
      ) {
        return;
      } else if (
        forbidden_skills_Throne_of_the_Herald.includes(this.id) &&
        ToTH_Count < 1
      ) {
        return;
      } else if (forbidden_skills.includes(this.id)) {
        return;
      }
    }
    //End Custom Code
    if (this._unlocked) return;
    const cost = this.game.getSkillUnlockCost();
    if (!this.game.gp.canAfford(cost)) return;
    this.game.gp.remove(cost);
    this.setUnlock(true);
    SwalLocale.fire({
      icon: "success",
      title: getLangString("MENU_TEXT", "SKILL_UNLOCKED"),
      html: `<span class='text-dark'>${getLangString(
        "MENU_TEXT",
        "YOU_MAY_USE_SKILL"
      )}</span>`,
    });
    sendPlayFabEvent("adv_skill_unlocked", {
      skillID: this.id,
      unlockOrder: this.game.getSkillUnlockCount(),
    });
  });

  //Kill count and Skill View
  ctx.patch(Enemy, "renderImageAndName").after(function () {
    if (!conquestGamemodeCheck()) return;

    if (this.state === EnemyState.Alive)
      //Display Kill count
      $(enemyHTMLElements.name)[0].append(
        " - " + game.stats.monsterKillCount(game.combat.selectedMonster)
      );
  });

  //Patch Bank slots
  ctx.patch(ShopPurchase, "getBuyLimit").after(function (limit) {
    if (!conquestGamemodeCheck()) return;

    let tracker = 0;
    game.dungeons.forEach((dungeon) => {
      let beatCount = game.combat.getDungeonCompleteCount(
        game.dungeons.getObjectByID(dungeon.id)
      );
      if (beatCount >= 10) {
        tracker += 3;
      } else if (beatCount >= 3) {
        tracker += 2;
      } else if (beatCount >= 1) {
        tracker += 1;
      }
    });
    // console.log("tracker: " + tracker);
    if (this.id === "melvorD:Extra_Bank_Slot") {
      limit = tracker;
    }
    return limit;
  });

  //Double XP patch
  ctx.patch(Skill, "addXP").before(function (amount, masteryAction) {
    if (game.currentGamemode.id.includes("conquest")) {
      return [amount * 2, masteryAction];
    }
  });

  /****************************************************/
  //Base Game Patches
  /****************************************************/
  //Slayer Task Reroll Speed
  ctx
    .patch(SlayerTask, "selectTask")
    .replace(function (o, tier, costsCoins, render, fromClick = false) {
      const data = SlayerTask.data[tier];
      if (costsCoins && !this.game.slayerCoins.canAfford(data.cost)) {
        notifyPlayer(
          this.game.slayer,
          getLangString("TOASTS", "CANNOT_AFFORD_THAT"),
          "danger"
        );
      } else {
        const monsterSelection = this.getMonsterSelection(tier);
        if (monsterSelection.length > 0) {
          const newMonster =
            monsterSelection[rollInteger(0, monsterSelection.length - 1)];
          if (costsCoins) this.game.slayerCoins.remove(data.cost);
          this.monster = newMonster;
          this.tier = tier;
          this.active = false;
          this.autoStartNext = !fromClick;
          //Custom Code
          if (conquestGamemodeCheck()) {
            this.taskTimer.start(50);
          } else {
            this.taskTimer.start(1000);
          }
          //End Custom Code
          this.renderRequired = true;
          this.renderNewButton = true;
        } else if (this.autoSlayer) {
          notifyPlayer(
            this.game.slayer,
            getLangString("TOASTS", "NO_TASK_FOUND_EQUIPMENT"),
            "danger"
          );
        } else {
          notifyPlayer(
            this.game.slayer,
            getLangString("TOASTS", "NO_TASK_FOUND_TIER"),
            "danger"
          );
        }
      }
      if (render) {
        this.render();
        this.clickNewTask();
      }
    });

  //Interval Caps
  ctx
    .patch(SkillWithMastery, "modifyInterval")
    .replace(function (o, interval, action) {
      const flatModifier = this.getFlatIntervalModifier(action);
      const percentModifier = this.getPercentageIntervalModifier(action);
      interval *= 1 + percentModifier / 100;
      interval += flatModifier;
      interval = roundToTickInterval(interval);
      //Custom Code
      if (conquestGamemodeCheck()) {
        return Math.max(interval, 50);
      } else {
        return Math.max(interval, 500);
      }
    });
  ctx.patch(Character, "computeAttackInterval").replace(function () {
    let attackInterval = this.equipmentStats.attackSpeed || 4000;
    attackInterval = this.modifyAttackInterval(attackInterval);
    attackInterval = roundToTickInterval(attackInterval);
    //Custom Code
    if (conquestGamemodeCheck()) {
      attackInterval = Math.max(attackInterval, 50);
    } else {
      attackInterval = Math.max(attackInterval, 500);
    }
    //End Custom Code
    this.stats.attackInterval = attackInterval;
  });

  //Auto-eat Patch, pulled from Zxv's HCCO mod
  ctx.patch(Player, "autoEat").replace(function (o, foodSwapped) {
    // Fix autoeat potatoes in Arid Plains
    if (
      (this.hitpoints <= this.autoEatThreshold || foodSwapped) &&
      this.food.currentSlot.item !== this.game.emptyFoodItem
    ) {
      const autoEatHealing = Math.max(
        Math.floor(
          (this.getFoodHealing(this.food.currentSlot.item) *
            this.autoEatEfficiency) /
            100
        ),
        1
      ); // This line is the fix
      let foodQty = Math.ceil(
        (this.autoEatHPLimit - this.hitpoints) / autoEatHealing
      );
      foodQty = Math.min(foodQty, this.food.currentSlot.quantity);
      this.eatFood(foodQty, false, this.autoEatEfficiency);
      if (
        this.food.currentSlot.quantity < 1 &&
        this.modifiers.autoSwapFoodUnlocked > 0 &&
        this.game.settings.enableAutoSwapFood
      ) {
        const nonEmptySlot = this.food.slots.findIndex(
          (slot) => slot.item !== this.game.emptyFoodItem
        );
        if (nonEmptySlot >= 0) {
          this.food.setSlot(nonEmptySlot);
          if (this.hitpoints < this.autoEatHPLimit) this.autoEat(true);
        }
      }
    }
  });
}

//Helper functions for hiding skills
function toggleLockedSkills() {
  let chatter = false;
  let ToTH_Count = game.combat.getDungeonCompleteCount(
    game.dungeons.getObjectByID("melvorTotH:Throne_of_the_Herald")
  );
  let Impending_Darkness_Count = game.combat.getDungeonCompleteCount(
    game.dungeons.getObjectByID("melvorF:Impending_Darkness")
  );
  let Volcanic_Cave_Count = game.combat.getDungeonCompleteCount(
    game.dungeons.getObjectByID("melvorD:Volcanic_Cave")
  );

  function toggleLogic(categoryItems) {
    categoryItems.forEach((item) => {
      if (forbidden_skills.includes(item.id)) {
        if (chatter) console.log("Lock Forbidden Skill: " + item.id);
        item.rootEl.classList.add("hidden");
        item.rootEl.setAttribute("aria-hidden", "true");
      } else if (
        forbidden_skills_Throne_of_the_Herald.includes(item.id) &&
        ToTH_Count < 1
      ) {
        if (chatter) console.log("Lock ToTH Skill: " + item.id);
        item.rootEl.classList.add("hidden");
        item.rootEl.setAttribute("aria-hidden", "true");
      } else if (
        forbidden_skills_Impending_Darkness.includes(item.id) &&
        Impending_Darkness_Count < 1
      ) {
        if (chatter) console.log("Lock ID Skill: " + item.id);
        item.rootEl.classList.add("hidden");
        item.rootEl.setAttribute("aria-hidden", "true");
      } else if (
        forbidden_skills_Volcanic_Cave.includes(item.id) &&
        Volcanic_Cave_Count < 1
      ) {
        if (chatter) console.log("Lock Volcanic Cave Skill: " + item.id);
        item.rootEl.classList.add("hidden");
        item.rootEl.setAttribute("aria-hidden", "true");
      } else {
        if (chatter) console.log("Unlock Skill: " + item.id);
        item.rootEl.classList.remove("hidden");
        item.rootEl.removeAttribute("aria-hidden");
      }
    });
  }
  toggleLogic(
    sidebar
      .categories()
      .find((c) => c.id === "Non-Combat")
      .items()
  );
  toggleLogic(
    sidebar
      .categories()
      .find((c) => c.id === "Passive")
      .items()
  );
}
