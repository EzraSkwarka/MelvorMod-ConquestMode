# ############################################
# TODO:
# ############################################
- Find list of items not available to CO + skills i'm allowing
- Make forbidden skill skill-capes purchase-able or otherwise obtainable
- Adjust mark drop chance logic to be more in line with the vanilla rates
  - Also add the "Can't find more till you make one" logic
- Dynamically load data files so added items and enemies don't break containment
- Apply Interval reduction to dot Effects
  - Not sure if this is possible tbh

# ############################################
# Done:
# ############################################

- Find a way to award mastery tokens for forbidden skills
  - Can drop from the Treasured Golbin (wandering Normal slayer task); V0.9.7
- Move theiving and summoning behind Volc Cave
  - Done in V0.9.4
- Restructure Code to better contain patches to conquest mode
  - Added conquestGamemodeCheck() function; V0.9.7
- Find a way to disperse Marks and pets for forbidden skills
  - Done in V0.9.7
- Unobtainable Marks are:
  - [x] Mark of the Ent: Woodcutting
    - Add to Lumberjack Thieving Table
  - [x] Mark of the Mole: Mining
    - Add to Miner Thieving Table
  - [x] Mark of the Octopus: Fishing
    - Add to Tentacle 'Drop Table'
  - [x] Mark of the Devil: Firemaking
    - Add to Fierce Devil 'Drop Table'
  - [x] Mark of the Owl: ToTH Astrology
    - Add to Seething Horn Elite if Impending Darkness is beaten
- Unobtainable Pets are:
  - [x] Beavis: Woodcutting
    - Hide in Spider Forest
  - [x] Pudding Duckie: Fishing
    - Hide in Deep Sea Ship
  - [x] Pyro: Firemaking
    - Hide in Infernal Stronghold
  - [x] Cool Rock: Mining
    - Hide in Miolite Caves
  - [x] Larry, the Lonely Lizard: Farming
    - Hide in Chicken Coop
  - [x] Astro: Astrology
    - Hide in the Frozen Cave
    - Ripper the Reindeer: Christmas Event 2020
    - Festive Cool Rock: Holiday Event 2021
    - Festive Chio: Holiday Event 2021

# ############################################
# Item Breakdown
# ############################################

Codes:
 - [V] - Vanilia (Combat, Pickpocketing, Unlocked Skills)
 - [O] - Needs to Add
 - [X] - Added
 - [C] - Not in Completion Log
 - [<] - If a previous item is added, will be obtainable
 - [?] - Unclear
 
# ##################
# Filtered:

**If there is conflicting info, go with the entry in the Filtered Section**

Filtered Item ID info:
  [O] melvorF:Stardust:
  [O] melvorF:Golden_Stardust:
  ^ Add a Odious Collector golbin, make these the common drops
   - Call it the Repugnant Golbin
  
  [X] melvorTotH:Hornbeam_Logs: Add to melvorTotH:Raven_Nest
  [X] melvorTotH:Linden_Logs: Add to melvorTotH:Raven_Nest
  [X] melvorTotH:Red_Oak_Logs: Add to melvorTotH:Raven_Nest
  [X] melvorTotH:Mystic_Logs: Add to melvorTotH:Raven_Nest
  
  [O] melvorTotH:Corundumite_Ore:
  [O] melvorTotH:Augite_Ore:
  [O] melvorTotH:Divinite_Ore:
  ^ Add a Odious Collector golbin, make these scaling rare drops

  [<] melvorTotH:Meteorite_Ore: <= melvorTotH:Meteorite_Dust

  [O] melvorD:Raw_Poison_Fish:
  [O] melvorD:Leaping_Trout:
  [O] melvorD:Leaping_Salmon:
  [O] melvorD:Leaping_Broad_Fish:
  [O] melvorD:Raw_Seahorse:
  [O] melvorTotH:Raw_Lava_Fish:
  [O] melvorTotH:Raw_Spike_Fish:
  [O] melvorTotH:Raw_Rockfish:
  [O] melvorTotH:Raw_Magma_Fish:
  [O] melvorTotH:Raw_Large_Blowfish:
  [O] melvorTotH:Raw_Static_Jellyfish:
  [O] melvorTotH:Raw_Magma_Eel:
  [O] melvorTotH:Raw_Frozen_Manta_Ray:
  [O] melvorTotH:Raw_Ghost_Fish:
  [O] melvorTotH:Raw_Mystic_Seahorse:
  [O] melvorTotH:Raw_Terrorfish:
  [O] melvorTotH:Raw_Mystic_Shark:
  ^ Gelatinous Sire and Spawn split on ToTH and vanilla fish

  [<] melvorTotH:Carrion_Tree_Seeds: <= melvorTotH:Raven_Nest
  [<] melvorTotH:Meteorite_Bar: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Divinite_Bar: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Meteorite_Javelin_Heads: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Meteorite_Crossbow_Head: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Divine_Arrowtips: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Javelin_Heads: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Crossbow_Head: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Woodcutting_Ring_Fragment: <= melvorTotH:Raven_Nest
  [<] melvorTotH:Woodcutting_Amulet_Fragment: <= melvorTotH:Raven_Nest

  [C] melvorTotH:Meteorite_Dust: This maybe the way to make meteorite ore obtainable?
   - Modify this to upgrade some number of them to melvorTotH:Meteorite_Ore

Filtered Equipment Item ID: 
  [O] melvorD:Farming_Skillcape:
  [O] melvorD:Firemaking_Skillcape:
  [O] melvorD:Fishing_Skillcape:
  [O] melvorD:Mining_Skillcape:
  [O] melvorD:Woodcutting_Skillcape:
  [O] melvorF:Astrology_Skillcape:
  [O] melvorTotH:Superior_Astrology_Skillcape:
  [O] melvorTotH:Superior_Farming_Skillcape:
  [O] melvorTotH:Superior_Firemaking_Skillcape:
  [O] melvorTotH:Superior_Fishing_Skillcape:
  [O] melvorTotH:Superior_Mining_Skillcape:
  [O] melvorTotH:Superior_Woodcutting_Skillcape:
  ^ Add a blood shard golbin, have it drop blood shards. upgrade those shards into a chest, add skill capes to chest table
    - Call it the Hemo Golbin and add a rare drop of melvorTotH:Meteorite_Dust

  [X] melvorD:Pirates_Lost_Ring: Add to melvorD:Treasure_Chest
  [X] melvorD:Barbarian_Gloves: Add to melvorD:Treasure_Chest
  [X] melvorD:Ancient_Ring_Of_Skills: Add to melvorD:Treasure_Chest
  [X] melvorD:Ancient_Ring_Of_Mastery: Add to melvorD:Treasure_Chest
  
  [<] melvorTotH:Burning_Amulet_of_Gold: <= melvorTotH:Generous_Fire_Spirit
  [<] melvorTotH:Burning_Amulet_of_Stardust: <= melvorTotH:Generous_Fire_Spirit
  [<] melvorTotH:Burning_Amulet_of_Ash: <= melvorTotH:Generous_Fire_Spirit
  [<] melvorTotH:Burning_Amulet_of_Charcoal: <= melvorTotH:Generous_Fire_Spirit
  [<] melvorTotH:Burning_Amulet_of_XP: <= melvorTotH:Generous_Fire_Spirit

  [<] melvorF:Max_Skillcape: Dependent on other skills?
  [<] melvorF:Cape_of_Completion: Dependent on all non-TotH items
  [<] melvorTotH:Meteorite_Helmet: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Meteorite_Platelegs: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Meteorite_Platebody: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Divine_Helmet: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Boots: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Platelegs: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Platebody: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Shield: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Gloves: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Helmet_T_I: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Boots_T_I: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Platelegs_T_I: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Platebody_T_I: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Shield_T_I: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Helmet_T_P: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Boots_T_P: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Platelegs_T_P: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Platebody_T_P: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Shield_T_P: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Meteorite_Woodcutting_Ring: Needs Raven's nest
  [<] melvorTotH:Meteorite_Woodcutting_Amulet: Needs Raven's nest
  [<] melvorTotH:Divine_Arrows: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Ethereal_Arrows: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Meteorite_Bolts: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Meteorite_Warrior_Ring: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Meteorite_Marksman_Ring: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Burning_Protection_Platelegs: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Ward_of_Flame_Platebody: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Superior_Max_Skillcape:
  [<] melvorTotH:Golden_Reel: <= melvorTotH:Lost_Chest
  [<] melvorTotH:Burning_Reel: <= melvorTotH:Lost_Chest
  [<] melvorTotH:Meteorite_Spellcaster_Ring: <= melvorTotH:Meteorite_Ore

Filtered Weapon Item IDs:
  [<] melvorTotH:Meteorite_2H_Sword: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Divine_Dagger: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Sword: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Battleaxe: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_2H_Sword: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Scimitar: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Throwing_Knife: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Divine_Crossbow: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Meteorite_Crossbow: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Divine_Javelin: <= melvorTotH:Divinite_Ore
  [<] melvorTotH:Meteorite_Javelin: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Meteorite_Staff: <= melvorTotH:Meteorite_Ore

Filtered Item IDs:
  [X] melvorD:Raw_Magic_Fish: Add to melvorD:Treasure_Chest

  [O] melvorTotH:Pumpkin: Find out if Lucky Herb Potion works on normal seeds (or could be made to)
  [O] melvorTotH:Chilli: see melvorTotH:Pumpkin
  [O] melvorTotH:Starfruit: see melvorTotH:Pumpkin
  [O] melvorTotH:Bananas: see melvorTotH:Pumpkin

  [<] melvorD:Seahorse: Needs <= melvorD:Raw_Seahorse
  [<] melvorD:Seahorse_Perfect: <= melvorD:Raw_Seahorse
  [<] melvorTotH:Lava_Fish: <= melvorTotH:Raw_Lava_Fish 
  [<] melvorTotH:Lava_Fish_Perfect: <= melvorTotH:Raw_Lava_Fish
  [<] melvorTotH:Magma_Eel: <= melvorTotH:Raw_Magma_Eel
  [<] melvorTotH:Magma_Eel_Perfect: <= melvorTotH:Raw_Magma_Eel
  [<] melvorTotH:Terrorfish: <= melvorTotH:Raw_Terrorfish
  [<] melvorTotH:Terrorfish_Perfect: <= melvorTotH:Raw_Terrorfish
  [<] melvorTotH:Mystic_Shark: <= melvorTotH:Raw_Mystic_Shark
  [<] melvorTotH:Mystic_Shark_Perfect: <= melvorTotH:Raw_Mystic_Shark
  [<] melvorTotH:Banana_Bread: <= melvorTotH:Bananas
  [<] melvorTotH:Banana_Bread_Perfect: <= melvorTotH:Bananas
  [<] melvorTotH:Spicy_Shrimp_Soup: <= melvorTotH:Chilli
  [<] melvorTotH:Chilli_Frost_Crab: <= melvorTotH:Chilli
  [<] melvorTotH:Chilli_Frost_Crab_Perfect: <= melvorTotH:Chilli
  [<] melvorTotH:Starfruit_Cake: <= melvorTotH:Starfruit
  [<] melvorTotH:Starfruit_Cake_Perfect: <= melvorTotH:Starfruit

Filtered Bone Item IDs:
  [X] melvorD:Raw_Skeleton_Fish: Add to melvorD:Treasure_Chest

Filtered Herblore Item IDs:
  [<] melvorF:Performance_Enhancing_Potion_I: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Performance_Enhancing_Potion_II: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Performance_Enhancing_Potion_III: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Performance_Enhancing_Potion_IV: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Lethal_Toxins_Potion_I: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Lethal_Toxins_Potion_II: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Lethal_Toxins_Potion_III: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Lethal_Toxins_Potion_IV: <= melvorD:Raw_Poison_Fish
  [<] melvorF:Secret_Stardust_Potion_I: <= melvorF:Stardust
  [<] melvorF:Secret_Stardust_Potion_II: <= melvorF:Stardust
  [<] melvorF:Secret_Stardust_Potion_III: <= melvorF:Stardust
  [<] melvorF:Secret_Stardust_Potion_IV: <= melvorF:Stardust
  [<] melvorTotH:Reaper_Potion_I: <= melvorTotH:Raw_Ghost_Fish
  [<] melvorTotH:Reaper_Potion_II: <= melvorTotH:Raw_Ghost_Fish
  [<] melvorTotH:Reaper_Potion_III: <= melvorTotH:Raw_Ghost_Fish
  [<] melvorTotH:Reaper_Potion_IV: <= melvorTotH:Raw_Ghost_Fish
  [<] melvorTotH:Alchemic_Practice_Potion_I: <= melvorTotH:Pumpkin
  [<] melvorTotH:Alchemic_Practice_Potion_II: <= melvorTotH:Pumpkin
  [<] melvorTotH:Alchemic_Practice_Potion_III: <= melvorTotH:Pumpkin
  [<] melvorTotH:Alchemic_Practice_Potion_IV: <= melvorTotH:Pumpkin
  [<] melvorTotH:Star_Seeker_Potion_I: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Star_Seeker_Potion_II: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Star_Seeker_Potion_III: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Star_Seeker_Potion_IV: <= melvorTotH:Meteorite_Ore
  [<] melvorTotH:Deadly_Toxins_Potion: <= melvorD:Raw_Poison_Fish

Filtered Readable Item IDs:
  [X] melvorD:Message_In_A_Bottle: Add to melvorD:Treasure_Chest

Filtered Openable Item ID:
  [X] melvorD:Bird_Nest: Add to Moss Giant drop table
  [X] melvorTotH:Raven_Nest: Add to Madremonte pickpocket table
  [X] melvorTotH:Generous_Fire_Spirit: Add to melvorF:Fire_Chest
  [X] melvorTotH:Lost_Chest: Add to Vampire Lord pickpocket table

Filtered TokenItemID: 
  [X] melvorD:Mastery_Token_Farming: Droped by "conquest:treasured_golbin"
  [X] melvorD:Mastery_Token_Firemaking: Droped by "conquest:treasured_golbin"
  [X] melvorD:Mastery_Token_Fishing: Droped by "conquest:treasured_golbin"
  [X] melvorD:Mastery_Token_Mining: Droped by "conquest:treasured_golbin"
  [X] melvorD:Mastery_Token_Woodcutting: Droped by "conquest:treasured_golbin"
  [X] melvorF:Mastery_Token_Astrology: Droped by "conquest:treasured_golbin"


# ##################
# All:

**If there is conflicting info, go with the entry in the Filtered Section**

Raw Item ID info:
  [V] melvorD:Normal_Logs: Combat
  [V] melvorD:Oak_Logs: Com
  [V] melvorD:Willow_Logs: Combat
  [V] melvorD:Teak_Logs: Combat
  [V] melvorD:Maple_Logs: Combat
  [V] melvorD:Mahogany_Logs: Pickpocket
  [V] melvorD:Yew_Logs: Combat
  [V] melvorD:Magic_Logs: Pick
  [V] melvorD:Redwood_Logs: Pick
  [V] melvorD:Raw_Shrimp: C
  [V] melvorD:Raw_Sardine: C
  [V] melvorD:Raw_Herring: C
  [V] melvorD:Raw_Trout: C
  [V] melvorD:Raw_Salmon: C
  [V] melvorD:Raw_Lobster: C
  [V] melvorD:Raw_Swordfish: Pick
  [V] melvorD:Raw_Crab: C
  [V] melvorD:Raw_Shark: Pick
  [V] melvorD:Raw_Cave_Fish: Pick
  [V] melvorD:Raw_Manta_Ray: 
  [V] melvorD:Raw_Whale:
  [C] melvorD:Burnt_Shrimp:
  [C] melvorD:Burnt_Sardine:
  [C] melvorD:Burnt_Herring:
  [C] melvorD:Burnt_Trout:
  [C] melvorD:Burnt_Salmon:
  [C] melvorD:Burnt_Lobster:
  [C] melvorD:Burnt_Swordfish:
  [C] melvorD:Burnt_Crab:
  [C] melvorD:Burnt_Shark:
  [V] melvorD:Burnt_Cave_Fish:
  [C] melvorD:Burnt_Manta_Ray:
  [C] melvorD:Burnt_Whale:
  [V] melvorD:Copper_Ore:
  [V] melvorD:Tin_Ore:
  [V] melvorD:Iron_Ore:
  [V] melvorD:Coal_Ore:
  [V] melvorD:Silver_Ore:
  [V] melvorD:Gold_Ore:
  [V] melvorD:Mithril_Ore:
  [V] melvorD:Adamantite_Ore:
  [V] melvorD:Runite_Ore:
  [V] melvorD:Dragonite_Ore:
  [V] melvorD:Bronze_Bar:
  [V] melvorD:Iron_Bar:
  [V] melvorD:Steel_Bar:
  [V] melvorD:Gold_Bar:
  [V] melvorD:Mithril_Bar:
  [V] melvorD:Adamantite_Bar:
  [V] melvorD:Runite_Bar:
  [V] melvorD:Dragonite_Bar:
  [V] melvorD:Topaz:
  [V] melvorD:Sapphire:
  [V] melvorD:Ruby:
  [V] melvorD:Emerald:
  [V] melvorD:Diamond:
  [V] melvorD:Silver_Bar:
  [V] melvorD:Potato_Seed:
  [V] melvorD:Onion_Seed:
  [V] melvorD:Cabbage_Seed:
  [V] melvorD:Tomato_Seed:
  [V] melvorD:Sweetcorn_Seed:
  [V] melvorD:Strawberry_Seed:
  [V] melvorD:Watermelon_Seed:
  [V] melvorD:Snape_Grass_Seed:
  [V] melvorD:Oak_Tree_Seed:
  [V] melvorD:Willow_Tree_Seed:
  [V] melvorD:Maple_Tree_Seed:
  [V] melvorD:Yew_Tree_Seed:
  [V] melvorD:Magic_Tree_Seed:
  [V] melvorD:Bronze_Arrowtips:
  [V] melvorD:Iron_Arrowtips:
  [V] melvorD:Steel_Arrowtips:
  [V] melvorD:Mithril_Arrowtips:
  [V] melvorD:Adamant_Arrowtips:
  [V] melvorD:Rune_Arrowtips:
  [V] melvorD:Dragon_Arrowtips:
  [V] melvorD:Headless_Arrows:
  [V] melvorD:Feathers:
  [V] melvorD:Bowstring:
  [V] melvorD:Leather:
  [V] melvorD:Green_Dragonhide:
  [V] melvorD:Blue_Dragonhide:
  [V] melvorD:Red_Dragonhide:
  [V] melvorD:Black_Dragonhide:
  [V] melvorD:Rune_Essence:
  [V] melvorD:Air_Rune:
  [V] melvorD:Mind_Rune:
  [V] melvorD:Water_Rune:
  [V] melvorD:Earth_Rune:
  [V] melvorD:Fire_Rune:
  [V] melvorD:Body_Rune:
  [V] melvorD:Chaos_Rune:
  [V] melvorD:Death_Rune:
  [V] melvorD:Blood_Rune:
  [V] melvorD:Ancient_Rune:
  [V] melvorD:Carrot_Seeds:
  [V] melvorD:Garum_Herb:
  [V] melvorD:Sourweed_Herb:
  [V] melvorD:Mantalyme_Herb:
  [V] melvorD:Lemontyle_Herb:
  [V] melvorD:Oxilyme_Herb:
  [V] melvorD:Garum_Seed:
  [V] melvorD:Sourweed_Seed:
  [V] melvorD:Mantalyme_Seed:
  [V] melvorD:Lemontyle_Seed:
  [V] melvorD:Oxilyme_Seed:
  [V] melvorD:Signet_Ring_Half_A:
  [V] melvorD:Signet_Ring_Half_B:
  [V] melvorD:Old_Boot:
  [V] melvorD:Old_Hat:
  [V] melvorD:Seaweed:
  [V] melvorD:Rusty_Key:
  [V] melvorD:Shell:
  [V] melvorD:Rope:
  [V] melvorD:Glass_Bottle:
  [V] melvorD:Rubber_Ducky:
  [V] melvorD:Raw_Blowfish:
  [O] melvorD:Raw_Poison_Fish:
  [O] melvorD:Leaping_Trout:
  [O] melvorD:Leaping_Salmon:
  [O] melvorD:Leaping_Broad_Fish:
  [V] melvorD:Raw_Anglerfish:
  [V] melvorD:Raw_Fanfish:
  [O] melvorD:Raw_Seahorse:
  [V] melvorD:Raw_Carp:
  [C] melvorD:Burnt_Anglerfish:
  [C] melvorD:Burnt_Fanfish:
  [C] melvorD:Burnt_Seahorse:
  [C] melvorD:Burnt_Carp:
  [C] melvorD:Lemon:
  [C] melvorD:Lemons:
  [V] melvorD:Headless_Bolts:
  [V] melvorD:Bronze_Crossbow_Head:
  [V] melvorD:Iron_Crossbow_Head:
  [V] melvorD:Steel_Crossbow_Head:
  [V] melvorD:Mithril_Crossbow_Head:
  [V] melvorD:Adamant_Crossbow_Head:
  [V] melvorD:Rune_Crossbow_Head:
  [V] melvorD:Dragon_Crossbow_Head:
  [V] melvorD:Bronze_Javelin_Heads:
  [V] melvorD:Iron_Javelin_Heads:
  [V] melvorD:Steel_Javelin_Heads:
  [V] melvorD:Mithril_Javelin_Heads:
  [V] melvorD:Adamant_Javelin_Heads:
  [V] melvorD:Rune_Javelin_Heads:
  [V] melvorD:Dragon_Javelin_Heads:
  [C] melvorD:Eight:
  [V] melvorD:Light_Rune:
  [V] melvorD:Mist_Rune:
  [V] melvorD:Dust_Rune:
  [V] melvorD:Smoke_Rune:
  [V] melvorD:Circlet_of_Rhaelyx:
  [V] melvorD:Jewel_of_Rhaelyx:
  [V] melvorD:Charge_Stone_of_Rhaelyx:
  [V] melvorD:Mysterious_Stone:
  [C] melvorD:Event_Clue_1:
  [C] melvorD:Event_Clue_2:
  [C] melvorD:Event_Clue_3:
  [C] melvorD:Event_Clue_4:
  [C] melvorD:Cake_Base:
  [C] melvorD:Candle:
  [C] melvorD:Magical_Icing:
  [C] melvorD:Magical_Flavouring:
  [C] melvorD:Birthday_Token:
  [C] melvorD:Christmas_Cracker:
  [C] melvorD:Easter_Egg:
  [C] melvorD:Red_Herring:
  [V] melvorD:Bag_of_Flour:
  [V] melvorD:Raw_Beef:
  [V] melvorD:Raw_Chicken:
  [V] melvorD:Cherry_Seeds:
  [V] melvorD:Cheese:
  [V] melvorD:Cream:
  [V] melvorD:Natures_Call_Staff_Top:
  [C] melvorD:Event_Token:
  [C] melvorD:Christmas_Scarf:
  [C] melvorD:Locked_Chest_Key:
  [C] melvorD:Event_Token_Christmas2021:
  [V] melvorF:Arrow_Shafts:
  [V] melvorF:Normal_Shortbow_U:
  [V] melvorF:Oak_Shortbow_U:
  [V] melvorF:Willow_Shortbow_U:
  [V] melvorF:Maple_Shortbow_U:
  [V] melvorF:Yew_Shortbow_U:
  [V] melvorF:Magic_Shortbow_U:
  [V] melvorF:Normal_Longbow_U:
  [V] melvorF:Oak_Longbow_U:
  [V] melvorF:Willow_Longbow_U:
  [V] melvorF:Maple_Longbow_U:
  [V] melvorF:Yew_Longbow_U:
  [V] melvorF:Magic_Longbow_U:
  [V] melvorF:Redwood_Shortbow_U:
  [V] melvorF:Redwood_Longbow_U:
  [V] melvorF:Bobbys_Pocket:
  [V] melvorF:Eyeball:
  [V] melvorF:Dragon_Claw_Fragment:
  [V] melvorF:Ancient_Claw_Fragment:
  [V] melvorF:Poraxx_Herb:
  [V] melvorF:Pigtayle_Herb:
  [V] melvorF:Barrentoe_Herb:
  [V] melvorF:Poraxx_Seed:
  [V] melvorF:Pigtayle_Seed:
  [V] melvorF:Barrentoe_Seed:
  [V] melvorF:Large_Horn:
  [V] melvorF:Elder_Dragonhide:
  [V] melvorF:Air_Shard:
  [V] melvorF:Water_Shard:
  [V] melvorF:Earth_Shard:
  [V] melvorF:Fire_Shard:
  [V] melvorF:Slayer_Crossbow_Head:
  [V] melvorF:Nature_Rune:
  [V] melvorF:Havoc_Rune:
  [V] melvorF:Spirit_Rune:
  [V] melvorF:Mud_Rune:
  [V] melvorF:Steam_Rune:
  [V] melvorF:Lava_Rune:
  [V] melvorF:Tidal_Edge_Fragment:
  [V] melvorF:Ocean_Song_Fragment:
  [V] melvorF:Shockwave_Fragment:
  [V] melvorF:Infernal_Core:
  [V] melvorF:Slayer_Upgrade_Kit_Strong:
  [V] melvorF:Slayer_Upgrade_Kit_Elite:
  [V] melvorF:Slayer_Upgrade_Kit_Master:
  [V] melvorF:Summoning_Shard_Red:
  [V] melvorF:Summoning_Shard_Green:
  [V] melvorF:Summoning_Shard_Blue:
  [V] melvorF:Summoning_Shard_Silver:
  [V] melvorF:Summoning_Shard_Gold:
  [V] melvorF:Summoning_Shard_Black:
  [C] melvorF:Abnormal_Log:
  [V] melvorF:Marksmans_Sigil:
  [V] melvorF:Basic_Bag:
  [V] melvorF:Shipwheel:
  [V] melvorF:Giant_Club:
  [V] melvorF:Knights_Sigil:
  [V] melvorF:Wizards_Sigil:
  [V] melvorF:Antique_Vase:
  [V] melvorF:Jadestone:
  [V] melvorF:Apple_Tree_Seeds:
  [V] melvorF:Goo:
  [V] melvorF:Wildflower:
  [V] melvorF:Natures_Call_Staff_Bottom:
  [V] melvorF:Fine_Poison_Powder:
  [V] melvorF:Poison_Scales:
  [V] melvorF:Miolite_Spore:
  [V] melvorF:Poison_Essence:
  [V] melvorF:Worm_Spike:
  [V] melvorF:Burning_Essence:
  [V] melvorF:Cursed_Hands:
  [V] melvorF:Stinging_Essence:
  [V] melvorF:Tough_Shell:
  [V] melvorF:Undead_Essence:
  [V] melvorF:Desecrated_Bones:
  [O] melvorF:Stardust:
  [O] melvorF:Golden_Stardust:
  [V] melvorF:Small_Urn:
  [V] melvorF:Medium_Urn:
  [V] melvorTotH:Spruce_Logs:
  [O] melvorTotH:Hornbeam_Logs:
  [V] melvorTotH:Grove_Logs:
  [O] melvorTotH:Linden_Logs:
  [V] melvorTotH:Elderwood_Logs:
  [O] melvorTotH:Red_Oak_Logs:
  [V] melvorTotH:Revenant_Logs:
  [O] melvorTotH:Mystic_Logs:
  [V] melvorTotH:Carrion_Logs:
  [O] melvorTotH:Corundumite_Ore:
  [V] melvorTotH:Pure_Essence:
  [V] melvorTotH:Iridium_Ore:
  [V] melvorTotH:Palladium_Ore:
  [O] melvorTotH:Augite_Ore:
  [V] melvorTotH:Onyx:
  [O] melvorTotH:Meteorite_Ore:
  [O] melvorTotH:Divinite_Ore:
  [V] melvorTotH:Oricha:
  [V] melvorTotH:Cerulean:
  [V] melvorTotH:Zephyte:
  [V] melvorTotH:Corundumite_Bar:
  [V] melvorTotH:Iridium_Bar:
  [V] melvorTotH:Palladium_Bar:
  [V] melvorTotH:Augite_Bar:
  [O] melvorTotH:Meteorite_Bar:
  [O] melvorTotH:Divinite_Bar:
  [V] melvorTotH:Corundum_Arrowtips:
  [V] melvorTotH:Corundum_Javelin_Heads:
  [V] melvorTotH:Corundum_Crossbow_Head:
  [V] melvorTotH:Augite_Arrowtips:
  [V] melvorTotH:Augite_Javelin_Heads:
  [V] melvorTotH:Augite_Crossbow_Head:
  [O] melvorTotH:Meteorite_Javelin_Heads:
  [O] melvorTotH:Meteorite_Crossbow_Head:
  [O] melvorTotH:Divine_Arrowtips:
  [O] melvorTotH:Divine_Javelin_Heads:
  [O] melvorTotH:Divine_Crossbow_Head:
  [O] melvorTotH:Woodcutting_Ring_Fragment: Can be found in Raven Nests
  [O] melvorTotH:Woodcutting_Amulet_Fragment: Can be found in Raven Nests
  [O] melvorTotH:Raw_Lava_Fish:
  [O] melvorTotH:Raw_Spike_Fish:
  [O] melvorTotH:Raw_Rockfish:
  [V] melvorTotH:Raw_Blue_Crab:
  [O] melvorTotH:Raw_Magma_Fish:
  [O] melvorTotH:Raw_Large_Blowfish:
  [O] melvorTotH:Raw_Static_Jellyfish:
  [V] melvorTotH:Raw_Frost_Crab:
  [O] melvorTotH:Raw_Magma_Eel:
  [O] melvorTotH:Raw_Frozen_Manta_Ray:
  [O] melvorTotH:Raw_Ghost_Fish:
  [O] melvorTotH:Raw_Mystic_Seahorse:
  [O] melvorTotH:Raw_Terrorfish:
  [O] melvorTotH:Raw_Mystic_Shark:
  [V] melvorTotH:Pumpkin_Seeds:
  [V] melvorTotH:Chilli_Seeds:
  [V] melvorTotH:Mushroom_Spores:
  [V] melvorTotH:Starfruit_Seeds:
  [V] melvorTotH:Snowcress_Seeds:
  [V] melvorTotH:Snowcress_Herb:
  [V] melvorTotH:Bitterlyme_Seeds:
  [V] melvorTotH:Bitterlyme_Herb:
  [V] melvorTotH:Moonwort_Seeds:
  [V] melvorTotH:Moonwort_Herb:
  [V] melvorTotH:Wurmtayle_Seeds:
  [V] melvorTotH:Wurmtayle_Herb:
  [V] melvorTotH:Banana_Tree_Seeds:
  [V] melvorTotH:Grove_Tree_Seeds:
  [V] melvorTotH:Elderwood_Tree_Seeds:
  [O] melvorTotH:Carrion_Tree_Seeds: Can be found in Raven Nests
  [V] melvorTotH:Elderwood_Shortbow_U:
  [V] melvorTotH:Elderwood_Longbow_U:
  [V] melvorTotH:Revenant_Shortbow_U:
  [V] melvorTotH:Revenant_Longbow_U:
  [V] melvorTotH:Carrion_Shortbow_U:
  [V] melvorTotH:Carrion_Longbow_U:
  [V] melvorTotH:Large_Urn:
  [V] melvorTotH:Carrion_Bark:
  [?] melvorTotH:Poison_Rune:
  [V] melvorTotH:Decay_Rune:
  [V] melvorTotH:Infernal_Rune:
  [V] melvorTotH:Despair_Rune:
  [V] melvorTotH:Soul_Rune:
  [?] melvorTotH:Lightning_Rune:
  [?] melvorTotH:Archaic_Rune:
  [V] melvorTotH:Calamity_Rune:
  [V] melvorTotH:Runestone:
  [V] melvorTotH:Perfect_Sight_Legs_Material:
  [V] melvorTotH:Bundled_Protection_Body_Material:
  [V] melvorTotH:Jungle_Spores:
  [V] melvorTotH:Weakness_Exploiter_Cape_Material:
  [V] melvorTotH:Thorned_Power_Core:
  [V] melvorTotH:Burning_Protection_Material:
  [V] melvorTotH:Ward_of_Flame_Material:
  [V] melvorTotH:Frost_Walker_Boots_Material:
  [V] melvorTotH:Freezing_Touch_Material:
  [V] melvorTotH:Spectral_Ice_Sword_Shard:
  [V] melvorTotH:Leviathan_Shield_Material:
  [V] melvorTotH:Torrential_Blast_Crossbow_Shard:
  [V] melvorTotH:Spider_Queen_Eggs:
  [V] melvorTotH:Ectoplasm:
  [V] melvorTotH:Feather_Storm_Crossbow_Shard:
  [V] melvorTotH:Agile_Wings_Rapier_Shard:
  [V] melvorTotH:Slicing_Maelstrom_Wand_Shard:
  [V] melvorTotH:Slayer_Upgrade_Kit_Legendary:
  [V] melvorTotH:Slayer_Upgrade_Kit_Mythical:
  [V] melvorTotH:Labyrinth_Clue_1:
  [V] melvorTotH:Labyrinth_Clue_2:
  [V] melvorTotH:Labyrinth_Clue_3:
  [V] melvorTotH:Labyrinth_Clue_4:
  [V] melvorTotH:Labyrinth_Clue_5:
  [V] melvorTotH:Charcoal:
  [V] melvorTotH:Decaying_Stem:
  [C] melvorTotH:Meteorite_Dust:
  [C] melvorTotH:Lemonade_Empty:
  [C] melvorTotH:Lemonade_Very_empty:
  [C] melvorTotH:Lemonade_Still_very_empty:
  [C] melvorTotH:Lemonade_Not_as_empty_as_before:
  [C] melvorTotH:Lemonade_Not_much:
  [C] melvorTotH:Lemonade_Has_a_bit_now:
  [C] melvorTotH:Lemonade_A_little_bit_more_now:
  [C] melvorTotH:Lemonade_Half_full:
  [C] melvorTotH:Lemonade_Just_over_half_full:
  [C] melvorTotH:Lemonade_Maybe_this_is_half_full:
  [C] melvorTotH:Lemonade_Nope_this_is_half_full_now:
  [C] melvorTotH:Lemonade_Wow_this_is_slow:
  [C] melvorTotH:Lemonade_Just_fill_it_up_already:
  [C] melvorTotH:Lemonade_Still_not_full:
  [C] melvorTotH:Lemonade_Again_still_not_full:
  [C] melvorTotH:Lemonade_Less_than_before_because_you_drank_some:
  [C] melvorTotH:Lemonade_Back_to_where_we_were_before:
  [C] melvorTotH:Lemonade_Almost_full:
  [C] melvorTotH:Lemonade_Still_almost_full:
  [C] melvorTotH:Lemonade_How_full_is_it_supposed_to_be:
  [C] melvorTotH:Lemonade_Wait_this_might_be_half_full_now:
  [C] melvorTotH:Lemonade_Haha_just_joking_hurry_up:
  [C] melvorTotH:Lemonade_Okay_this_looks_pretty_full_now:
  [C] melvorTotH:Lemonade_Now:
  [C] melvorTotH:Lemonade_What_about_now:
  [C] melvorTotH:Lemonade_YAY_ITS_FINALLY_FULL:
  [C] melvorTotH:Lemonade_Oh_still_not_full:
  [C] melvorTotH:Lemonade_Wait_for_it:
  [C] melvorTotH:Lemonade_Wait_for_it2:
  [V] melvorTotH:Golden_Key"

Raw Equipment Item ID: 
  [C] melvorD:Empty_Equipment:
  [V] melvorD:Bronze_Helmet:
  [V] melvorD:Bronze_Boots:
  [V] melvorD:Bronze_Platelegs:
  [V] melvorD:Bronze_Platebody:
  [V] melvorD:Iron_Helmet:
  [V] melvorD:Iron_Boots:
  [V] melvorD:Iron_Platelegs:
  [V] melvorD:Iron_Platebody:
  [V] melvorD:Steel_Helmet:
  [V] melvorD:Steel_Boots:
  [V] melvorD:Steel_Platelegs:
  [V] melvorD:Steel_Platebody:
  [V] melvorD:Mithril_Helmet:
  [V] melvorD:Mithril_Boots:
  [V] melvorD:Mithril_Platelegs:
  [V] melvorD:Mithril_Platebody:
  [V] melvorD:Adamant_Helmet:
  [V] melvorD:Adamant_Boots:
  [V] melvorD:Adamant_Platelegs:
  [V] melvorD:Adamant_Platebody:
  [V] melvorD:Rune_Helmet:
  [V] melvorD:Rune_Boots:
  [V] melvorD:Rune_Platelegs:
  [V] melvorD:Rune_Platebody:
  [V] melvorD:Dragon_Helmet:
  [V] melvorD:Dragon_Boots:
  [V] melvorD:Dragon_Platelegs:
  [V] melvorD:Dragon_Platebody:
  [V] melvorD:Bronze_Shield:
  [V] melvorD:Iron_Shield:
  [V] melvorD:Steel_Shield:
  [V] melvorD:Mithril_Shield:
  [V] melvorD:Adamant_Shield:
  [V] melvorD:Rune_Shield:
  [V] melvorD:Dragon_Shield:
  [V] melvorD:Black_Helmet:
  [V] melvorD:Black_Boots:
  [V] melvorD:Black_Platelegs:
  [V] melvorD:Black_Platebody:
  [V] melvorD:Black_Shield:
  [V] melvorD:Bronze_Helmet_T_S:
  [V] melvorD:Bronze_Boots_T_S:
  [V] melvorD:Bronze_Platelegs_T_S:
  [V] melvorD:Bronze_Platebody_T_S:
  [V] melvorD:Bronze_Shield_T_S:
  [V] melvorD:Iron_Helmet_T_S:
  [V] melvorD:Iron_Boots_T_S:
  [V] melvorD:Iron_Platelegs_T_S:
  [V] melvorD:Iron_Platebody_T_S:
  [V] melvorD:Iron_Shield_T_S:
  [V] melvorD:Steel_Helmet_T_S:
  [V] melvorD:Steel_Boots_T_S:
  [V] melvorD:Steel_Platelegs_T_S:
  [V] melvorD:Steel_Platebody_T_S:
  [V] melvorD:Steel_Shield_T_S:
  [V] melvorD:Black_Helmet_T_S:
  [V] melvorD:Black_Boots_T_S:
  [V] melvorD:Black_Platelegs_T_S:
  [V] melvorD:Black_Platebody_T_S:
  [V] melvorD:Black_Shield_T_S:
  [V] melvorD:Mithril_Helmet_T_S:
  [V] melvorD:Mithril_Boots_T_S:
  [V] melvorD:Mithril_Platelegs_T_S:
  [V] melvorD:Mithril_Platebody_T_S:
  [V] melvorD:Mithril_Shield_T_S:
  [V] melvorD:Adamant_Helmet_T_S:
  [V] melvorD:Adamant_Boots_T_S:
  [V] melvorD:Adamant_Platelegs_T_S:
  [V] melvorD:Adamant_Platebody_T_S:
  [V] melvorD:Adamant_Shield_T_S:
  [V] melvorD:Rune_Helmet_T_S:
  [V] melvorD:Rune_Boots_T_S:
  [V] melvorD:Rune_Platelegs_T_S:
  [V] melvorD:Rune_Platebody_T_S:
  [V] melvorD:Rune_Shield_T_S:
  [V] melvorD:Dragon_Helmet_T_S:
  [V] melvorD:Dragon_Boots_T_S:
  [V] melvorD:Dragon_Platelegs_T_S:
  [V] melvorD:Dragon_Platebody_T_S:
  [V] melvorD:Dragon_Shield_T_S:
  [V] melvorD:Bronze_Helmet_T_G:
  [V] melvorD:Bronze_Boots_T_G:
  [V] melvorD:Bronze_Platelegs_T_G:
  [V] melvorD:Bronze_Platebody_T_G:
  [V] melvorD:Bronze_Shield_T_G:
  [V] melvorD:Iron_Helmet_T_G:
  [V] melvorD:Iron_Boots_T_G:
  [V] melvorD:Iron_Platelegs_T_G:
  [V] melvorD:Iron_Platebody_T_G:
  [V] melvorD:Iron_Shield_T_G:
  [V] melvorD:Steel_Helmet_T_G:
  [V] melvorD:Steel_Boots_T_G:
  [V] melvorD:Steel_Platelegs_T_G:
  [V] melvorD:Steel_Platebody_T_G:
  [V] melvorD:Steel_Shield_T_G:
  [V] melvorD:Black_Helmet_T_G:
  [V] melvorD:Black_Boots_T_G:
  [V] melvorD:Black_Platelegs_T_G:
  [V] melvorD:Black_Platebody_T_G:
  [V] melvorD:Black_Shield_T_G:
  [V] melvorD:Mithril_Helmet_T_G:
  [V] melvorD:Mithril_Boots_T_G:
  [V] melvorD:Mithril_Platelegs_T_G:
  [V] melvorD:Mithril_Platebody_T_G:
  [V] melvorD:Mithril_Shield_T_G:
  [V] melvorD:Adamant_Helmet_T_G:
  [V] melvorD:Adamant_Boots_T_G:
  [V] melvorD:Adamant_Platelegs_T_G:
  [V] melvorD:Adamant_Platebody_T_G:
  [V] melvorD:Adamant_Shield_T_G:
  [V] melvorD:Rune_Helmet_T_G:
  [V] melvorD:Rune_Boots_T_G:
  [V] melvorD:Rune_Platelegs_T_G:
  [V] melvorD:Rune_Platebody_T_G:
  [V] melvorD:Rune_Shield_T_G:
  [V] melvorD:Dragon_Helmet_T_G:
  [V] melvorD:Dragon_Boots_T_G:
  [V] melvorD:Dragon_Platelegs_T_G:
  [V] melvorD:Dragon_Platebody_T_G:
  [V] melvorD:Dragon_Shield_T_G:
  [V] melvorD:Amulet_of_Fishing:
  [V] melvorD:Amulet_of_Strength:
  [V] melvorD:Amulet_of_Accuracy:
  [V] melvorD:Amulet_of_Defence:
  [V] melvorD:Amulet_of_Glory:
  [V] melvorD:Bronze_Arrows:
  [V] melvorD:Iron_Arrows:
  [V] melvorD:Steel_Arrows:
  [V] melvorD:Mithril_Arrows:
  [V] melvorD:Adamant_Arrows:
  [V] melvorD:Rune_Arrows:
  [V] melvorD:Dragon_Arrows:
  [V] melvorD:Leather_Boots:
  [V] melvorD:Leather_Cowl:
  [V] melvorD:Leather_Vambraces:
  [V] melvorD:Leather_Chaps:
  [V] melvorD:Green_Dhide_Vambraces:
  [V] melvorD:Green_Dhide_Chaps:
  [V] melvorD:Green_Dhide_Body:
  [V] melvorD:Blue_Dhide_Vambraces:
  [V] melvorD:Blue_Dhide_Chaps:
  [V] melvorD:Blue_Dhide_Body:
  [V] melvorD:Red_Dhide_Vambraces:
  [V] melvorD:Red_Dhide_Chaps:
  [V] melvorD:Red_Dhide_Body:
  [V] melvorD:Black_Dhide_Vambraces:
  [V] melvorD:Black_Dhide_Chaps:
  [V] melvorD:Black_Dhide_Body:
  [V] melvorD:Gold_Topaz_Ring:
  [V] melvorD:Cooking_Gloves:
  [V] melvorD:Mining_Gloves:
  [V] melvorD:Smithing_Gloves:
  [V] melvorD:Gem_Gloves:
  [V] melvorD:Cape_Of_Prat:
  [V] melvorD:Obsidian_Cape:
  [V] melvorD:Elite_Amulet_of_Strength:
  [V] melvorD:Elite_Amulet_of_Accuracy:
  [V] melvorD:Elite_Amulet_of_Defence:
  [V] melvorD:Elite_Amulet_of_Glory:
  [V] melvorD:Ancient_Helmet:
  [V] melvorD:Ancient_Platelegs:
  [V] melvorD:Ancient_Platebody:
  [V] melvorD:Ancient_Shield:
  [V] melvorD:Ancient_Helmet_T_S:
  [V] melvorD:Ancient_Platelegs_T_S:
  [V] melvorD:Ancient_Platebody_T_S:
  [V] melvorD:Ancient_Shield_T_S:
  [V] melvorD:Ancient_Helmet_T_G:
  [V] melvorD:Ancient_Platelegs_T_G:
  [V] melvorD:Ancient_Platebody_T_G:
  [V] melvorD:Ancient_Shield_T_G:
  [V] melvorD:Fire_Cape:
  [V] melvorD:Rangers_Hat:
  [V] melvorD:Ranger_Boots:
  [V] melvorD:Amulet_of_Fury:
  [V] melvorD:Amulet_of_Torture:
  [V] melvorD:Amulet_of_Ranged:
  [V] melvorD:Ice_Helmet:
  [V] melvorD:Ice_Boots:
  [V] melvorD:Ice_Platelegs:
  [V] melvorD:Ice_Platebody:
  [V] melvorD:Ice_Shield:
  [V] melvorD:Ice_Arrows:
  [V] melvorD:Amulet_of_Looting:
  [V] melvorD:Green_Wizard_Hat:
  [V] melvorD:Green_Wizard_Robes:
  [V] melvorD:Green_Wizard_Bottoms:
  [V] melvorD:Green_Wizard_Boots:
  [V] melvorD:Blue_Wizard_Hat:
  [V] melvorD:Blue_Wizard_Robes:
  [V] melvorD:Blue_Wizard_Bottoms:
  [V] melvorD:Blue_Wizard_Boots:
  [V] melvorD:Red_Wizard_Hat:
  [V] melvorD:Red_Wizard_Robes:
  [V] melvorD:Red_Wizard_Bottoms:
  [V] melvorD:Red_Wizard_Boots:
  [V] melvorD:Black_Wizard_Hat:
  [V] melvorD:Black_Wizard_Robes:
  [V] melvorD:Black_Wizard_Bottoms:
  [V] melvorD:Black_Wizard_Boots:
  [V] melvorD:Ancient_Wizard_Hat:
  [V] melvorD:Ancient_Wizard_Robes:
  [V] melvorD:Ancient_Wizard_Bottoms:
  [V] melvorD:Ancient_Wizard_Boots:
  [V] melvorD:Attack_Skillcape:
  [V] melvorD:Cooking_Skillcape:
  [V] melvorD:Defence_Skillcape:
  [O] melvorD:Farming_Skillcape:
  [O] melvorD:Firemaking_Skillcape:
  [O] melvorD:Fishing_Skillcape:
  [V] melvorD:Hitpoints_Skillcape:
  [O] melvorD:Mining_Skillcape:
  [V] melvorD:Smithing_Skillcape:
  [V] melvorD:Strength_Skillcape:
  [O] melvorD:Woodcutting_Skillcape:
  [V] melvorD:Bronze_Gloves:
  [V] melvorD:Iron_Gloves:
  [V] melvorD:Steel_Gloves:
  [V] melvorD:Mithril_Gloves:
  [V] melvorD:Adamant_Gloves:
  [V] melvorD:Rune_Gloves:
  [V] melvorD:Dragon_Gloves:
  [C] melvorD:Amulet_of_Calculated_Promotion:
  [V] melvorD:Aorpheats_Signet_Ring:
  [O] melvorD:Pirates_Lost_Ring:
  [O] melvorD:Barbarian_Gloves:
  [O] melvorD:Ancient_Ring_Of_Skills:
  [V] melvorD:Clue_Chasers_Insignia:
  [V] melvorD:Green_Dhide_Vambraces_U:
  [V] melvorD:Green_Dhide_Chaps_U:
  [V] melvorD:Green_Dhide_Body_U:
  [V] melvorD:Blue_Dhide_Vambraces_U:
  [V] melvorD:Blue_Dhide_Chaps_U:
  [V] melvorD:Blue_Dhide_Body_U:
  [V] melvorD:Red_Dhide_Vambraces_U:
  [V] melvorD:Red_Dhide_Chaps_U:
  [V] melvorD:Red_Dhide_Body_U:
  [V] melvorD:Black_Dhide_Vambraces_U:
  [V] melvorD:Black_Dhide_Chaps_U:
  [V] melvorD:Black_Dhide_Body_U:
  [V] melvorD:Elite_Amulet_of_Ranged:
  [V] melvorD:Amulet_of_Magic:
  [V] melvorD:Elite_Amulet_of_Magic:
  [V] melvorD:Bone_Necklace:
  [V] melvorD:Fury_of_the_Elemental_Zodiac:
  [V] melvorD:Red_Party_Hat:
  [V] melvorD:Dragonfire_Shield:
  [V] melvorD:Crown_of_Rhaelyx:
  [V] melvorD:Enchanted_Cape:
  [V] melvorD:Enchanted_Shield:
  [C] melvorD:Purple_Party_Hat:
  [O] melvorD:Ancient_Ring_Of_Mastery:
  [C] melvorD:Santa_Hat:
  [C] melvorD:Friendship_Bracelet:
  [C] melvorD:Christmas_Coal:
  [C] melvorD:Christmas_Sweater:
  [C] melvorD:Christmas_Wreath:
  [C] melvorD:Yellow_Party_Hat:
  [C] melvorD:Cool_Glasses:
  [C] melvorD:Enchanted_Topaz_Bolts:
  [C] melvorD:Enchanted_Sapphire_Bolts:
  [C] melvorD:Enchanted_Ruby_Bolts:
  [C] melvorD:Enchanted_Emerald_Bolts:
  [C] melvorD:Enchanted_Diamond_Bolts:
  [C] melvorD:Enchanted_Jadestone_Bolts:
  [C] melvorD:Poison_Ring:
  [C] melvorD:Burning_Ring:
  [C] melvorD:Frostburn_Ring:
  [C] melvorD:Poison_Arrows:
  [C] melvorD:Fire_Arrows:
  [C] melvorD:Frost_Arrows:
  [C] melvorD:Ring_Of_Balance:
  [C] melvorD:Flying_Cape:
  [C] melvorD:Amulet_Of_Healing:
  [C] melvorD:One_Layer_Shield:
  [C] melvorD:Warding_Shield:
  [C] melvorD:Ultimate_Speed_Boots:
  [C] melvorD:I_Cant_See_Helmet:
  [C] melvorD:Almighty_Ring:
  [C] melvorD:Punching_Bag_Platebody:
  [C] melvorD:Precision_Gloves:
  [C] melvorD:Heavy_Gloves:
  [C] melvorD:Ultimate_Slapping_Gloves:
  [C] melvorD:Amulet_Of_Burning_Leech:
  [C] melvorD:Amulet_Of_Poison_Leech:
  [C] melvorD:Magic_Crit_Amulet:
  [C] melvorD:Melee_Crit_Amulet:
  [C] melvorD:Bloodthirst_Amulet:
  [C] melvorD:Dragon_Head_Helmet:
  [C] melvorD:Stonewall_Shield:
  [V] melvorD:Book_of_Eli:
  [V] melvorF:Leather_Gloves:
  [V] melvorF:Leather_Body:
  [V] melvorF:Silver_Topaz_Ring:
  [V] melvorF:Silver_Sapphire_Ring:
  [V] melvorF:Silver_Ruby_Ring:
  [V] melvorF:Silver_Emerald_Ring:
  [V] melvorF:Silver_Diamond_Ring:
  [V] melvorF:Gold_Sapphire_Ring:
  [V] melvorF:Gold_Ruby_Ring:
  [V] melvorF:Gold_Emerald_Ring:
  [V] melvorF:Gold_Diamond_Ring:
  [V] melvorF:Silver_Topaz_Necklace:
  [V] melvorF:Silver_Sapphire_Necklace:
  [V] melvorF:Silver_Ruby_Necklace:
  [V] melvorF:Silver_Emerald_Necklace:
  [V] melvorF:Silver_Diamond_Necklace:
  [V] melvorF:Gold_Topaz_Necklace:
  [V] melvorF:Gold_Sapphire_Necklace:
  [V] melvorF:Gold_Ruby_Necklace:
  [V] melvorF:Gold_Emerald_Necklace:
  [V] melvorF:Gold_Diamond_Necklace:
  [V] melvorF:Thieving_Gloves:
  [V] melvorF:Crafting_Skillcape:
  [V] melvorF:Fletching_Skillcape:
  [V] melvorF:Magic_Skillcape:
  [V] melvorF:Ranged_Skillcape:
  [V] melvorF:Runecrafting_Skillcape:
  [V] melvorF:Thieving_Skillcape:
  [V] melvorF:Prayer_Skillcape:
  [V] melvorF:Slayer_Helmet_Basic:
  [V] melvorF:Slayer_Platebody_Basic:
  [V] melvorF:Slayer_Helmet_Strong:
  [V] melvorF:Slayer_Platebody_Strong:
  [V] melvorF:Slayer_Helmet_Elite:
  [V] melvorF:Slayer_Platebody_Elite:
  [V] melvorF:Mirror_Shield:
  [V] melvorF:Cape_of_Arrow_Preservation:
  [V] melvorF:Magical_Ring:
  [V] melvorF:Ancient_Arrow:
  [V] melvorF:Slayer_Skillcape:
  [V] melvorF:Slayer_Wizard_Hat_Basic:
  [V] melvorF:Slayer_Wizard_Robes_Basic:
  [V] melvorF:Slayer_Wizard_Hat_Strong:
  [V] melvorF:Slayer_Wizard_Robes_Strong:
  [V] melvorF:Slayer_Wizard_Hat_Elite:
  [V] melvorF:Slayer_Wizard_Robes_Elite:
  [V] melvorF:Slayer_Cowl_Basic:
  [V] melvorF:Slayer_Leather_Body_Basic:
  [V] melvorF:Slayer_Cowl_Strong:
  [V] melvorF:Slayer_Leather_Body_Strong:
  [V] melvorF:Slayer_Cowl_Elite:
  [V] melvorF:Slayer_Leather_Body_Elite:
  [V] melvorF:Hard_Leather_Gloves:
  [V] melvorF:Hard_Leather_Boots:
  [V] melvorF:Hard_Leather_Cowl:
  [V] melvorF:Hard_Leather_Vambraces:
  [V] melvorF:Hard_Leather_Body:
  [V] melvorF:Hard_Leather_Chaps:
  [V] melvorF:Chapeau_Noir:
  [V] melvorF:Herblore_Skillcape:
  [V] melvorF:Topaz_Bolts:
  [V] melvorF:Sapphire_Bolts:
  [V] melvorF:Ruby_Bolts:
  [V] melvorF:Emerald_Bolts:
  [V] melvorF:Diamond_Bolts:
  [V] melvorF:Aeris_God_Helmet:
  [V] melvorF:Aeris_God_Platelegs:
  [V] melvorF:Aeris_God_Platebody:
  [V] melvorF:Aeris_God_Boots:
  [V] melvorF:Aeris_God_Gloves:
  [V] melvorF:Glacia_God_Helmet:
  [V] melvorF:Glacia_God_Platelegs:
  [V] melvorF:Glacia_God_Platebody:
  [V] melvorF:Glacia_God_Boots:
  [V] melvorF:Glacia_God_Gloves:
  [V] melvorF:Ancient_Dhide_Vambraces:
  [V] melvorF:Ancient_Dhide_Chaps:
  [V] melvorF:Ancient_Dhide_Body:
  [V] melvorF:Ancient_Dhide_Vambraces_U:
  [V] melvorF:Ancient_Dhide_Chaps_U:
  [V] melvorF:Ancient_Dhide_Body_U:
  [V] melvorF:Green_Dhide_Shield:
  [V] melvorF:Blue_Dhide_Shield:
  [V] melvorF:Red_Dhide_Shield:
  [V] melvorF:Black_Dhide_Shield:
  [V] melvorF:Ancient_Dhide_Shield:
  [V] melvorF:Green_Dhide_Shield_U:
  [V] melvorF:Blue_Dhide_Shield_U:
  [V] melvorF:Red_Dhide_Shield_U:
  [V] melvorF:Black_Dhide_Shield_U:
  [V] melvorF:Ancient_Dhide_Shield_U:
  [V] melvorF:Terran_God_Helmet:
  [V] melvorF:Terran_God_Platelegs:
  [V] melvorF:Terran_God_Platebody:
  [V] melvorF:Terran_God_Boots:
  [V] melvorF:Terran_God_Gloves:
  [V] melvorF:Ragnar_God_Helmet:
  [V] melvorF:Ragnar_God_Platelegs:
  [V] melvorF:Ragnar_God_Platebody:
  [V] melvorF:Ragnar_God_Boots:
  [V] melvorF:Ragnar_God_Gloves:
  [V] melvorF:Deadeye_Ring:
  [V] melvorF:Deadeye_Amulet:
  [V] melvorF:Warlock_Ring:
  [V] melvorF:Warlock_Amulet:
  [V] melvorF:Guardian_Ring:
  [V] melvorF:Guardian_Amulet:
  [V] melvorF:Fighter_Ring:
  [V] melvorF:Fighter_Amulet:
  [O] melvorF:Max_Skillcape:
  [V] melvorF:Earth_Layered_Shield:
  [V] melvorF:Skull_Cape:
  [V] melvorF:Air_Acolyte_Wizard_Hat:
  [V] melvorF:Air_Acolyte_Wizard_Robes:
  [V] melvorF:Air_Acolyte_Wizard_Bottoms:
  [V] melvorF:Air_Acolyte_Wizard_Boots:
  [V] melvorF:Water_Acolyte_Wizard_Hat:
  [V] melvorF:Water_Acolyte_Wizard_Robes:
  [V] melvorF:Water_Acolyte_Wizard_Bottoms:
  [V] melvorF:Water_Acolyte_Wizard_Boots:
  [V] melvorF:Earth_Acolyte_Wizard_Hat:
  [V] melvorF:Earth_Acolyte_Wizard_Robes:
  [V] melvorF:Earth_Acolyte_Wizard_Bottoms:
  [V] melvorF:Earth_Acolyte_Wizard_Boots:
  [V] melvorF:Fire_Acolyte_Wizard_Hat:
  [V] melvorF:Fire_Acolyte_Wizard_Robes:
  [V] melvorF:Fire_Acolyte_Wizard_Bottoms:
  [V] melvorF:Fire_Acolyte_Wizard_Boots:
  [V] melvorF:Air_Adept_Wizard_Hat:
  [V] melvorF:Air_Adept_Wizard_Robes:
  [V] melvorF:Air_Adept_Wizard_Bottoms:
  [V] melvorF:Air_Adept_Wizard_Boots:
  [V] melvorF:Water_Adept_Wizard_Hat:
  [V] melvorF:Water_Adept_Wizard_Robes:
  [V] melvorF:Water_Adept_Wizard_Bottoms:
  [V] melvorF:Water_Adept_Wizard_Boots:
  [V] melvorF:Earth_Adept_Wizard_Hat:
  [V] melvorF:Earth_Adept_Wizard_Robes:
  [V] melvorF:Earth_Adept_Wizard_Bottoms:
  [V] melvorF:Earth_Adept_Wizard_Boots:
  [V] melvorF:Fire_Adept_Wizard_Hat:
  [V] melvorF:Fire_Adept_Wizard_Robes:
  [V] melvorF:Fire_Adept_Wizard_Bottoms:
  [V] melvorF:Fire_Adept_Wizard_Boots:
  [V] melvorF:Air_Expert_Wizard_Hat:
  [V] melvorF:Air_Expert_Wizard_Robes:
  [V] melvorF:Air_Expert_Wizard_Bottoms:
  [V] melvorF:Air_Expert_Wizard_Boots:
  [V] melvorF:Water_Expert_Wizard_Hat:
  [V] melvorF:Water_Expert_Wizard_Robes:
  [V] melvorF:Water_Expert_Wizard_Bottoms:
  [V] melvorF:Water_Expert_Wizard_Boots:
  [V] melvorF:Earth_Expert_Wizard_Hat:
  [V] melvorF:Earth_Expert_Wizard_Robes:
  [V] melvorF:Earth_Expert_Wizard_Bottoms:
  [V] melvorF:Earth_Expert_Wizard_Boots:
  [V] melvorF:Fire_Expert_Wizard_Hat:
  [V] melvorF:Fire_Expert_Wizard_Robes:
  [V] melvorF:Fire_Expert_Wizard_Bottoms:
  [V] melvorF:Fire_Expert_Wizard_Boots:
  [O] melvorF:Cape_of_Completion:
  [V] melvorF:Desert_Hat:
  [V] melvorF:Blazing_Lantern:
  [V] melvorF:Climbing_Boots:
  [V] melvorF:Miolite_Helmet:
  [V] melvorF:Miolite_Boots:
  [V] melvorF:Miolite_Platelegs:
  [V] melvorF:Miolite_Platebody:
  [V] melvorF:Miolite_Shield:
  [V] melvorF:Gloves_of_Silence:
  [V] melvorF:Shaman_Ring:
  [V] melvorF:Book_of_Occults:
  [V] melvorF:Elementalist_Gloves:
  [V] melvorF:Sand_Treaders:
  [V] melvorF:Desert_Wrappings:
  [V] melvorF:Sandstorm_Ring:
  [V] melvorF:Elder_Crown:
  [V] melvorF:Tormented_Ring:
  [V] melvorF:Recoil_Shield:
  [V] melvorF:Wasteful_Ring:
  [V] melvorF:Jadestone_Bolts:
  [V] melvorF:Paladin_Gloves:
  [V] melvorF:Priest_Hat:
  [V] melvorF:Infernal_Cape:
  [V] melvorF:Slayer_Helmet_Master:
  [V] melvorF:Slayer_Platebody_Master:
  [V] melvorF:Slayer_Cowl_Master:
  [V] melvorF:Slayer_Leather_Body_Master:
  [V] melvorF:Slayer_Wizard_Hat_Master:
  [V] melvorF:Slayer_Wizard_Robes_Master:
  [V] melvorF:Green_Party_Hat:
  [V] melvorF:Hunters_Ring:
  [V] melvorF:Agility_Skillcape:
  [V] melvorF:Summoning_Familiar_Golbin_Thief:
  [V] melvorF:Summoning_Familiar_Occultist:
  [V] melvorF:Summoning_Familiar_Wolf:
  [V] melvorF:Summoning_Familiar_Ent:
  [V] melvorF:Summoning_Familiar_Mole:
  [V] melvorF:Summoning_Familiar_Octopus:
  [V] melvorF:Summoning_Familiar_Minotaur:
  [V] melvorF:Summoning_Familiar_Centaur:
  [V] melvorF:Summoning_Familiar_Witch:
  [V] melvorF:Summoning_Familiar_Pig:
  [V] melvorF:Summoning_Familiar_Crow:
  [V] melvorF:Summoning_Familiar_Leprechaun:
  [V] melvorF:Summoning_Familiar_Cyclops:
  [V] melvorF:Summoning_Familiar_Yak:
  [V] melvorF:Summoning_Familiar_Unicorn:
  [V] melvorF:Summoning_Familiar_Dragon:
  [V] melvorF:Summoning_Familiar_Monkey:
  [V] melvorF:Summoning_Familiar_Salamander:
  [V] melvorF:Summoning_Familiar_Bear:
  [V] melvorF:Summoning_Familiar_Devil:
  [V] melvorF:Summoning_Skillcape:
  [V] melvorF:Necromancer_Hat:
  [V] melvorF:Necromancer_Robes:
  [V] melvorF:Necromancer_Bottoms:
  [V] melvorF:Necromancer_Boots:
  [V] melvorF:Boots_Of_Stealth:
  [V] melvorF:Jeweled_Necklace:
  [V] melvorF:Thievers_Cape:
  [V] melvorF:Cooking_Apron:
  [V] melvorF:Fishing_Hook:
  [V] melvorF:Knights_Cape:
  [V] melvorF:Whetstone:
  [V] melvorF:Wizards_Scroll:
  [V] melvorF:Prayer_Scroll:
  [V] melvorF:Ring_Of_Wealth:
  [V] melvorF:Absorbing_Shield:
  [V] melvorF:Chefs_Hat:
  [V] melvorF:Training_Shield:
  [V] melvorF:Knights_Defender:
  [V] melvorF:Cave_Giant_Boots:
  [V] melvorF:Bobs_Gloves:
  [V] melvorF:Golbin_Mask:
  [V] melvorF:Fine_Coinpurse:
  [V] melvorF:Lumberjacks_Top:
  [V] melvorF:Miners_Helmet:
  [V] melvorF:Sailors_Top:
  [V] melvorF:Jesters_Hat:
  [V] melvorF:Gold_Crested_Shield:
  [V] melvorF:Book_Of_Scholars:
  [V] melvorF:Amulet_Of_Incantation:
  [V] melvorF:Thiefs_Moneysack:
  [V] melvorF:Seed_Pouch:
  [V] melvorF:Runecrafting_Pouch:
  [V] melvorF:Alchemists_Bag:
  [V] melvorF:Shield_Of_Melee_Power:
  [V] melvorF:Shield_Of_Ranged_Power:
  [V] melvorF:Shield_Of_Magic_Power:
  [V] melvorF:Ring_Of_Power:
  [V] melvorF:Throwing_Power_Gloves:
  [V] melvorF:Natures_Blessing_Ring:
  [V] melvorF:Scaled_Shield:
  [V] melvorF:Poison_Virulence_Ring:
  [V] melvorF:Poison_Virulence_Gloves:
  [V] melvorF:Burning_Madness_Ring:
  [V] melvorF:Burning_Madness_Gloves:
  [V] melvorF:Spiked_Shell_Ring:
  [V] melvorF:Spiked_Shell_Gloves:
  [V] melvorF:Relentless_Fury_Ring:
  [V] melvorF:Relentless_Fury_Gloves:
  [V] melvorF:Ring_Of_Blade_Echoes:
  [V] melvorF:Ring_Of_Barrage:
  [V] melvorF:Ring_Of_Spirit_Power:
  [O] melvorF:Astrology_Skillcape:
  [?] melvorF:Woodcutters_Hat:
  [?] melvorF:Woodcutters_Body:
  [?] melvorF:Woodcutters_Leggings:
  [?] melvorF:Woodcutters_Boots:
  [?] melvorF:Burning_Mans_Hat:
  [?] melvorF:Burning_Mans_Body:
  [?] melvorF:Burning_Mans_Leggings:
  [?] melvorF:Burning_Mans_Boots:
  [?] melvorF:Fishermans_Hat:
  [?] melvorF:Fishermans_Body:
  [?] melvorF:Fishermans_Leggings:
  [?] melvorF:Fishermans_Boots:
  [?] melvorF:Miners_Hat:
  [?] melvorF:Miners_Body:
  [?] melvorF:Miners_Leggings:
  [?] melvorF:Miners_Boots:
  [?] melvorF:Blacksmiths_Hat:
  [?] melvorF:Blacksmiths_Body:
  [?] melvorF:Blacksmiths_Leggings:
  [?] melvorF:Blacksmiths_Boots:
  [?] melvorF:Fletchers_Hat:
  [?] melvorF:Fletchers_Body:
  [?] melvorF:Fletchers_Leggings:
  [?] melvorF:Fletchers_Boots:
  [?] melvorF:Crafters_Hat:
  [?] melvorF:Crafters_Body:
  [?] melvorF:Crafters_Leggings:
  [?] melvorF:Crafters_Boots:
  [?] melvorF:Runecrafters_Hat:
  [?] melvorF:Runecrafters_Body:
  [?] melvorF:Runecrafters_Leggings:
  [?] melvorF:Runecrafters_Boots:
  [?] melvorF:Potion_Makers_Hat:
  [?] melvorF:Potion_Makers_Body:
  [?] melvorF:Potion_Makers_Leggings:
  [?] melvorF:Potion_Makers_Boots:
  [?] melvorF:Performance_Enhancing_Hat:
  [?] melvorF:Performance_Enhancing_Body:
  [?] melvorF:Performance_Enhancing_Leggings:
  [?] melvorF:Performance_Enhancing_Boots:
  [?] melvorF:Star_Gazing_Hat:
  [?] melvorF:Star_Gazing_Body:
  [?] melvorF:Star_Gazing_Leggings:
  [?] melvorF:Star_Gazing_Boots:
  [?] melvorF:Skillers_Hat:
  [?] melvorF:Skillers_Body:
  [?] melvorF:Skillers_Leggings:
  [?] melvorF:Skillers_Boots:
  [V] melvorF:Warm_Beanie:
  [V] melvorF:Pirate_Captain_Hat:
  [V] melvorF:Prats_Hat:
  [V] melvorF:Top_Hat:
  [V] melvorF:Hunters_Hat:
  [V] melvorF:Clown_Hat:
  [V] melvorF:Township_Skillcape:
  [V] melvorTotH:Corundum_Helmet:
  [V] melvorTotH:Corundum_Boots:
  [V] melvorTotH:Corundum_Platelegs:
  [V] melvorTotH:Corundum_Platebody:
  [V] melvorTotH:Corundum_Shield:
  [V] melvorTotH:Corundum_Gloves:
  [V] melvorTotH:Augite_Helmet:
  [V] melvorTotH:Augite_Boots:
  [V] melvorTotH:Augite_Platelegs:
  [V] melvorTotH:Augite_Platebody:
  [V] melvorTotH:Augite_Shield:
  [V] melvorTotH:Augite_Gloves:
  [O] melvorTotH:Meteorite_Helmet:
  [O] melvorTotH:Meteorite_Platelegs:
  [O] melvorTotH:Meteorite_Platebody:
  [O] melvorTotH:Divine_Helmet:
  [O] melvorTotH:Divine_Boots:
  [O] melvorTotH:Divine_Platelegs:
  [O] melvorTotH:Divine_Platebody:
  [O] melvorTotH:Divine_Shield:
  [O] melvorTotH:Divine_Gloves:
  [V] melvorTotH:Corundum_Helmet_T_I:
  [V] melvorTotH:Corundum_Boots_T_I:
  [V] melvorTotH:Corundum_Platelegs_T_I:
  [V] melvorTotH:Corundum_Platebody_T_I:
  [V] melvorTotH:Corundum_Shield_T_I:
  [V] melvorTotH:Corundum_Helmet_T_P:
  [V] melvorTotH:Corundum_Boots_T_P:
  [V] melvorTotH:Corundum_Platelegs_T_P:
  [V] melvorTotH:Corundum_Platebody_T_P:
  [V] melvorTotH:Corundum_Shield_T_P:
  [<] melvorTotH:Augite_Helmet_T_I:
  [<] melvorTotH:Augite_Boots_T_I:
  [<] melvorTotH:Augite_Platelegs_T_I:
  [<] melvorTotH:Augite_Platebody_T_I:
  [<] melvorTotH:Augite_Shield_T_I:
  [<] melvorTotH:Augite_Helmet_T_P:
  [<] melvorTotH:Augite_Boots_T_P:
  [<] melvorTotH:Augite_Platelegs_T_P:
  [<] melvorTotH:Augite_Platebody_T_P:
  [<] melvorTotH:Augite_Shield_T_P:
  [<] melvorTotH:Divine_Helmet_T_I:
  [<] melvorTotH:Divine_Boots_T_I:
  [<] melvorTotH:Divine_Platelegs_T_I:
  [<] melvorTotH:Divine_Platebody_T_I:
  [<] melvorTotH:Divine_Shield_T_I:
  [<] melvorTotH:Divine_Helmet_T_P:
  [<] melvorTotH:Divine_Boots_T_P:
  [<] melvorTotH:Divine_Platelegs_T_P:
  [<] melvorTotH:Divine_Platebody_T_P:
  [<] melvorTotH:Divine_Shield_T_P:
  [<] melvorTotH:Meteorite_Woodcutting_Ring:
  [<] melvorTotH:Meteorite_Woodcutting_Amulet:
  [O] melvorTotH:Burning_Amulet_of_Gold:
  [O] melvorTotH:Burning_Amulet_of_Stardust:
  [O] melvorTotH:Burning_Amulet_of_Ash:
  [O] melvorTotH:Burning_Amulet_of_Charcoal:
  [O] melvorTotH:Burning_Amulet_of_XP:
  [V] melvorTotH:Explorers_Map:
  [V] melvorTotH:Necromancers_Crown:
  [V] melvorTotH:Amulet_of_Prayers:
  [V] melvorTotH:Adventurers_Backpack:
  [V] melvorTotH:Hunters_Journal:
  [V] melvorTotH:Crown_of_Madremonte:
  [V] melvorTotH:Vampiric_Cloak:
  [V] melvorTotH:Corundum_Arrows:
  [<] melvorTotH:Augite_Arrows:
  [<] melvorTotH:Divine_Arrows:
  [<] melvorTotH:Ethereal_Arrows:
  [V] melvorTotH:Onyx_Bolts:
  [<] melvorTotH:Meteorite_Bolts:
  [V] melvorTotH:Decay_Bolts:
  [V] melvorTotH:Zephyte_Bolts:
  [V] melvorTotH:Elderwood_Vambraces:
  [V] melvorTotH:Elderwood_Vambraces_U:
  [V] melvorTotH:Elderwood_Chaps:
  [V] melvorTotH:Elderwood_Chaps_U:
  [V] melvorTotH:Elderwood_Shield:
  [V] melvorTotH:Elderwood_Shield_U:
  [V] melvorTotH:Elderwood_Body:
  [V] melvorTotH:Elderwood_Body_U:
  [V] melvorTotH:Revenant_Vambraces:
  [V] melvorTotH:Revenant_Vambraces_U:
  [V] melvorTotH:Revenant_Chaps:
  [V] melvorTotH:Revenant_Chaps_U:
  [V] melvorTotH:Revenant_Shield:
  [V] melvorTotH:Revenant_Shield_U:
  [V] melvorTotH:Revenant_Body:
  [V] melvorTotH:Revenant_Body_U:
  [V] melvorTotH:Carrion_Vambraces:
  [V] melvorTotH:Carrion_Vambraces_U:
  [V] melvorTotH:Carrion_Chaps:
  [V] melvorTotH:Carrion_Chaps_U:
  [V] melvorTotH:Carrion_Shield:
  [V] melvorTotH:Carrion_Shield_U:
  [V] melvorTotH:Carrion_Body:
  [V] melvorTotH:Carrion_Body_U:
  [V] melvorTotH:Iridium_Onyx_Ring:
  [V] melvorTotH:Palladium_Onyx_Ring:
  [V] melvorTotH:Iridium_Oricha_Ring:
  [V] melvorTotH:Palladium_Oricha_Ring:
  [V] melvorTotH:Iridium_Cerulean_Ring:
  [V] melvorTotH:Palladium_Cerulean_Ring:
  [V] melvorTotH:Iridium_Runestone_Ring:
  [V] melvorTotH:Palladium_Runestone_Ring:
  [V] melvorTotH:Iridium_Zephyte_Ring:
  [V] melvorTotH:Palladium_Zephyte_Ring:
  [<] melvorTotH:Meteorite_Warrior_Ring:
  [<] melvorTotH:Meteorite_Marksman_Ring:
  [V] melvorTotH:Iridium_Onyx_Necklace:
  [V] melvorTotH:Palladium_Onyx_Necklace:
  [V] melvorTotH:Iridium_Oricha_Necklace:
  [V] melvorTotH:Palladium_Oricha_Necklace:
  [V] melvorTotH:Iridium_Cerulean_Necklace:
  [V] melvorTotH:Palladium_Cerulean_Necklace:
  [V] melvorTotH:Iridium_Runestone_Necklace:
  [V] melvorTotH:Palladium_Runestone_Necklace:
  [V] melvorTotH:Iridium_Zephyte_Necklace:
  [V] melvorTotH:Palladium_Zephyte_Necklace:
  [V] melvorTotH:Artisan_Pouch:
  [V] melvorTotH:Kindling_Pouch:
  [V] melvorTotH:Stamina_Pouch:
  [V] melvorTotH:Spirit_Bag:
  [V] melvorTotH:Chefs_Bag:
  [V] melvorTotH:Summoners_Bag:
  [V] melvorTotH:Poison_Master_Wizard_Hat:
  [V] melvorTotH:Poison_Master_Wizard_Boots:
  [V] melvorTotH:Poison_Master_Wizard_Bottoms:
  [V] melvorTotH:Poison_Master_Wizard_Robes:
  [V] melvorTotH:Infernal_Master_Wizard_Hat:
  [V] melvorTotH:Infernal_Master_Wizard_Boots:
  [V] melvorTotH:Infernal_Master_Wizard_Bottoms:
  [V] melvorTotH:Infernal_Master_Wizard_Robes:
  [V] melvorTotH:Lightning_Master_Wizard_Hat:
  [V] melvorTotH:Lightning_Master_Wizard_Boots:
  [V] melvorTotH:Lightning_Master_Wizard_Bottoms:
  [V] melvorTotH:Lightning_Master_Wizard_Robes:
  [V] melvorTotH:Poison_Legendary_Wizard_Hat:
  [V] melvorTotH:Poison_Legendary_Wizard_Boots:
  [V] melvorTotH:Poison_Legendary_Wizard_Bottoms:
  [V] melvorTotH:Poison_Legendary_Wizard_Robes:
  [V] melvorTotH:Infernal_Legendary_Wizard_Hat:
  [V] melvorTotH:Infernal_Legendary_Wizard_Boots:
  [V] melvorTotH:Infernal_Legendary_Wizard_Bottoms:
  [V] melvorTotH:Infernal_Legendary_Wizard_Robes:
  [V] melvorTotH:Lightning_Legendary_Wizard_Hat:
  [V] melvorTotH:Lightning_Legendary_Wizard_Boots:
  [V] melvorTotH:Lightning_Legendary_Wizard_Bottoms:
  [V] melvorTotH:Lightning_Legendary_Wizard_Robes:
  [V] melvorTotH:Poison_Mythical_Wizard_Hat:
  [V] melvorTotH:Poison_Mythical_Wizard_Boots:
  [V] melvorTotH:Poison_Mythical_Wizard_Bottoms:
  [V] melvorTotH:Poison_Mythical_Wizard_Robes:
  [V] melvorTotH:Infernal_Mythical_Wizard_Hat:
  [V] melvorTotH:Infernal_Mythical_Wizard_Boots:
  [V] melvorTotH:Infernal_Mythical_Wizard_Bottoms:
  [V] melvorTotH:Infernal_Mythical_Wizard_Robes:
  [V] melvorTotH:Lightning_Mythical_Wizard_Hat:
  [V] melvorTotH:Lightning_Mythical_Wizard_Boots:
  [V] melvorTotH:Lightning_Mythical_Wizard_Bottoms:
  [V] melvorTotH:Lightning_Mythical_Wizard_Robes:
  [V] melvorTotH:Summoning_Familiar_Eagle:
  [V] melvorTotH:Summoning_Familiar_Owl:
  [V] melvorTotH:Summoning_Familiar_Beaver:
  [V] melvorTotH:Summoning_Familiar_Fox:
  [V] melvorTotH:Summoning_Familiar_Lightning_Spirit:
  [V] melvorTotH:Summoning_Familiar_Siren:
  [V] melvorTotH:Summoning_Familiar_Spider:
  [V] melvorTotH:Summoning_Familiar_Spectre:
  [V] melvorTotH:Weakness_Finder_Cape:
  [V] melvorTotH:Sharp_Fletcher_Gloves:
  [V] melvorTotH:Perfect_Sight_Legs:
  [V] melvorTotH:Bundled_Protection_Body:
  [V] melvorTotH:Poison_Lifesteal_Amulet:
  [V] melvorTotH:Weakness_Exploiter_Cape:
  [V] melvorTotH:Toxic_Maker_Gloves:
  [V] melvorTotH:Blacksmiths_Gloves:
  [V] melvorTotH:Burning_Embers_Book:
  [<] melvorTotH:Burning_Protection_Platelegs:
  [<] melvorTotH:Ward_of_Flame_Platebody:
  [V] melvorTotH:Blazing_Helmet:
  [V] melvorTotH:Frost_Walker_Boots:
  [V] melvorTotH:Cool_Winds_Gloves:
  [V] melvorTotH:Freezing_Touch_Body:
  [V] melvorTotH:Frostshield_Amulet:
  [V] melvorTotH:Lightning_Amulet:
  [V] melvorTotH:FrostSpark_Amulet:
  [V] melvorTotH:Lightning_Boots:
  [V] melvorTotH:Frostspark_Boots:
  [V] melvorTotH:Lightning_Aura_Helmet:
  [V] melvorTotH:Allure_Amulet:
  [V] melvorTotH:Bleed_Burner_Cape:
  [V] melvorTotH:Leviathan_Shield:
  [V] melvorTotH:Gauntlets_of_Rage:
  [V] melvorTotH:Ring_of_Curse_Protection:
  [V] melvorTotH:Mask_of_Madness:
  [V] melvorTotH:Mask_of_Torment:
  [V] melvorTotH:Mask_of_Despair:
  [V] melvorTotH:Voodoo_Trinket:
  [V] melvorTotH:Hood_of_Shade_Summon:
  [V] melvorTotH:Gloves_of_Greater_Shade_Summon:
  [V] melvorTotH:Ring_of_Phantom_Summon:
  [V] melvorTotH:Amulet_of_Curse_Totem_Summon:
  [V] melvorTotH:Summoning_Scrolls:
  [V] melvorTotH:Vorloran_Devastator_Gauntlets:
  [V] melvorTotH:Vorloran_Devastator_Boots:
  [V] melvorTotH:Vorloran_Devastator_Helmet:
  [V] melvorTotH:Vorloran_Devastator_Platelegs:
  [V] melvorTotH:Vorloran_Devastator_Platebody:
  [V] melvorTotH:Vorloran_Watcher_Gauntlets:
  [V] melvorTotH:Vorloran_Watcher_Boots:
  [V] melvorTotH:Vorloran_Watcher_Helmet:
  [V] melvorTotH:Vorloran_Watcher_Platelegs:
  [V] melvorTotH:Vorloran_Watcher_Platebody:
  [V] melvorTotH:Vorloran_Protector_Gauntlets:
  [V] melvorTotH:Vorloran_Protector_Boots:
  [V] melvorTotH:Vorloran_Protector_Helmet:
  [V] melvorTotH:Vorloran_Protector_Platelegs:
  [V] melvorTotH:Vorloran_Protector_Platebody:
  [V] melvorTotH:Slayer_Helmet_Legendary:
  [V] melvorTotH:Slayer_Platebody_Legendary:
  [V] melvorTotH:Slayer_Cowl_Legendary:
  [V] melvorTotH:Slayer_Leather_Body_Legendary:
  [V] melvorTotH:Slayer_Wizard_Hat_Legendary:
  [V] melvorTotH:Slayer_Wizard_Robes_Legendary:
  [V] melvorTotH:Slayer_Helmet_Mythical:
  [V] melvorTotH:Slayer_Platebody_Mythical:
  [V] melvorTotH:Slayer_Cowl_Mythical:
  [V] melvorTotH:Slayer_Leather_Body_Mythical:
  [V] melvorTotH:Slayer_Wizard_Hat_Mythical:
  [V] melvorTotH:Slayer_Wizard_Robes_Mythical:
  [V] melvorTotH:Slayer_Torch:
  [V] melvorTotH:Mystic_Lantern:
  [V] melvorTotH:Book_of_the_Ancients:
  [V] melvorTotH:Travellers_Compass:
  [V] melvorTotH:Blood_Ring:
  [V] melvorTotH:Portable_Rations:
  [V] melvorTotH:Mortar_and_Pestle:
  [V] melvorTotH:Blood_Vial:
  [V] melvorTotH:Masquerade_Mask:
  [V] melvorTotH:Superior_Agility_Skillcape:
  [O] melvorTotH:Superior_Astrology_Skillcape:
  [V] melvorTotH:Superior_Attack_Skillcape:
  [V] melvorTotH:Superior_Cooking_Skillcape:
  [V] melvorTotH:Superior_Crafting_Skillcape:
  [V] melvorTotH:Superior_Defence_Skillcape:
  [O] melvorTotH:Superior_Farming_Skillcape:
  [O] melvorTotH:Superior_Firemaking_Skillcape:
  [O] melvorTotH:Superior_Fishing_Skillcape:
  [V] melvorTotH:Superior_Fletching_Skillcape:
  [V] melvorTotH:Superior_Herblore_Skillcape:
  [V] melvorTotH:Superior_Hitpoints_Skillcape:
  [V] melvorTotH:Superior_Magic_Skillcape:
  [O] melvorTotH:Superior_Mining_Skillcape:
  [V] melvorTotH:Superior_Prayer_Skillcape:
  [V] melvorTotH:Superior_Ranged_Skillcape:
  [V] melvorTotH:Superior_Runecrafting_Skillcape:
  [V] melvorTotH:Superior_Slayer_Skillcape:
  [V] melvorTotH:Superior_Smithing_Skillcape:
  [V] melvorTotH:Superior_Strength_Skillcape:
  [V] melvorTotH:Superior_Summoning_Skillcape:
  [V] melvorTotH:Superior_Thieving_Skillcape:
  [V] melvorTotH:Superior_Township_Skillcape:
  [O] melvorTotH:Superior_Woodcutting_Skillcape:
  [<] melvorTotH:Superior_Max_Skillcape:
  [V] melvorTotH:Shadow_Cloak:
  [<] melvorTotH:Golden_Reel:
  [<] melvorTotH:Burning_Reel:
  [V] melvorTotH:Thieving_Shorts:
  [<] melvorTotH:Meteorite_Spellcaster_Ring"

Raw Weapon Item IDs:
  [V] melvorD:Bronze_Dagger:
  [V] melvorD:Bronze_Sword:
  [V] melvorD:Bronze_Battleaxe:
  [V] melvorD:Bronze_2H_Sword:
  [V] melvorD:Iron_Dagger:
  [V] melvorD:Iron_Sword:
  [V] melvorD:Iron_Battleaxe:
  [V] melvorD:Iron_2H_Sword:
  [V] melvorD:Steel_Dagger:
  [V] melvorD:Steel_Sword:
  [V] melvorD:Steel_Battleaxe:
  [V] melvorD:Steel_2H_Sword:
  [V] melvorD:Mithril_Dagger:
  [V] melvorD:Mithril_Sword:
  [V] melvorD:Mithril_Battleaxe:
  [V] melvorD:Mithril_2H_Sword:
  [V] melvorD:Adamant_Dagger:
  [V] melvorD:Adamant_Sword:
  [V] melvorD:Adamant_Battleaxe:
  [V] melvorD:Adamant_2H_Sword:
  [V] melvorD:Rune_Dagger:
  [V] melvorD:Rune_Sword:
  [V] melvorD:Rune_Battleaxe:
  [V] melvorD:Rune_2H_Sword:
  [V] melvorD:Dragon_Dagger:
  [V] melvorD:Dragon_Sword:
  [V] melvorD:Dragon_Battleaxe:
  [V] melvorD:Dragon_2H_Sword:
  [V] melvorD:Black_Dagger:
  [V] melvorD:Black_Sword:
  [V] melvorD:Black_Battleaxe:
  [V] melvorD:Black_2H_Sword:
  [V] melvorD:Normal_Shortbow:
  [V] melvorD:Oak_Shortbow:
  [V] melvorD:Maple_Shortbow:
  [V] melvorD:Yew_Shortbow:
  [V] melvorD:Magic_Shortbow:
  [V] melvorD:Maple_Longbow:
  [V] melvorD:Magic_Longbow:
  [V] melvorD:Ancient_Sword:
  [V] melvorD:Ice_Dagger:
  [V] melvorD:Ice_Sword:
  [V] melvorD:Ice_Battleaxe:
  [V] melvorD:Ice_2h_Sword:
  [V] melvorD:Ice_Shortbow:
  [V] melvorD:Ice_Longbow:
  [V] melvorD:Redwood_Longbow:
  [V] melvorD:Air_Battlestaff:
  [V] melvorD:Water_Battlestaff:
  [V] melvorD:Earth_Battlestaff:
  [V] melvorD:Fire_Battlestaff:
  [V] melvorD:Mystic_Air_Staff:
  [V] melvorD:Bronze_Scimitar:
  [V] melvorD:Iron_Scimitar:
  [V] melvorD:Steel_Scimitar:
  [V] melvorD:Black_Scimitar:
  [V] melvorD:Mithril_Scimitar:
  [V] melvorD:Adamant_Scimitar:
  [V] melvorD:Rune_Scimitar:
  [V] melvorD:Dragon_Scimitar:
  [V] melvorD:Ancient_Longbow:
  [V] melvorD:Magic_Wand_Basic:
  [V] melvorD:Magic_Wand_Powerful:
  [V] melvorD:Magic_Wand_Elite:
  [V] melvorD:Sunset_Rapier:
  [V] melvorD:Bronze_Throwing_Knife:
  [V] melvorD:Iron_Throwing_Knife:
  [V] melvorD:Steel_Throwing_Knife:
  [V] melvorD:Mithril_Throwing_Knife:
  [V] melvorD:Adamant_Throwing_Knife:
  [V] melvorD:Rune_Throwing_Knife:
  [V] melvorD:Dragon_Throwing_Knife:
  [V] melvorD:Bobs_Rake:
  [C] melvorD:Candy_Cane:
  [V] melvorD:Slingshot:
  [V] melvorD:Elerine_Longbow:
  [V] melvorD:Elerine_Spear:
  [C] melvorD:Mystery_Wand:
  [C] melvorD:Burning_Wand:
  [C] melvorD:Frostburn_Wand:
  [C] melvorD:Sword_Of_Some_Reliability:
  [C] melvorD:Tilted_Crossbow:
  [C] melvorD:Impossible_Longbow:
  [C] melvorD:Throwing_Dragon_Sword:
  [V] melvorF:Willow_Shortbow:
  [V] melvorF:Normal_Longbow:
  [V] melvorF:Oak_Longbow:
  [V] melvorF:Willow_Longbow:
  [V] melvorF:Yew_Longbow:
  [V] melvorF:Redwood_Shortbow:
  [V] melvorF:Staff_of_Air:
  [V] melvorF:Staff_of_Water:
  [V] melvorF:Staff_of_Earth:
  [V] melvorF:Staff_of_Fire:
  [V] melvorF:Mystic_Water_Staff:
  [V] melvorF:Mystic_Earth_Staff:
  [V] melvorF:Mystic_Fire_Staff:
  [V] melvorF:Dragon_Claw:
  [V] melvorF:Ancient_Claw:
  [V] melvorF:Ancient_2H_Sword:
  [V] melvorF:Bronze_Crossbow:
  [V] melvorF:Iron_Crossbow:
  [V] melvorF:Steel_Crossbow:
  [V] melvorF:Mithril_Crossbow:
  [V] melvorF:Adamant_Crossbow:
  [V] melvorF:Rune_Crossbow:
  [V] melvorF:Dragon_Crossbow:
  [V] melvorF:Ancient_Crossbow:
  [V] melvorF:Bronze_Javelin:
  [V] melvorF:Iron_Javelin:
  [V] melvorF:Steel_Javelin:
  [V] melvorF:Mithril_Javelin:
  [V] melvorF:Adamant_Javelin:
  [V] melvorF:Rune_Javelin:
  [V] melvorF:Dragon_Javelin:
  [V] melvorF:Ancient_Javelin:
  [V] melvorF:Ancient_Throwing_Knife:
  [V] melvorF:Aeris_Godsword:
  [V] melvorF:Glacia_Godsword:
  [V] melvorF:Terran_Godsword:
  [V] melvorF:Ragnar_Godsword:
  [V] melvorF:Stormsnap:
  [V] melvorF:Big_Ron:
  [V] melvorF:Confetti_Crossbow:
  [V] melvorF:Slayer_Crossbow:
  [V] melvorF:Twin_Exiles:
  [V] melvorF:Cloudburst_Staff:
  [V] melvorF:Air_Imbued_Wand:
  [V] melvorF:Water_Imbued_Wand:
  [V] melvorF:Earth_Imbued_Wand:
  [V] melvorF:Fire_Imbued_Wand:
  [V] melvorF:Miolite_Sceptre:
  [V] melvorF:Desert_Sabre:
  [V] melvorF:Desert_Shortbow:
  [V] melvorF:Darksteel_Dagger:
  [V] melvorF:Sanguine_Blade:
  [V] melvorF:Infernal_Claw:
  [V] melvorF:Tidal_Edge:
  [V] melvorF:Ocean_Song:
  [V] melvorF:Shockwave:
  [V] melvorF:Almighty_Lute:
  [V] melvorF:Chefs_Spoon:
  [V] melvorF:War_Axe:
  [V] melvorF:Warberd:
  [V] melvorF:Natures_Call_Staff:
  [V] melvorF:Natures_Wrath_Staff:
  [V] melvorF:Poisoned_Shortbow:
  [V] melvorF:Poisoned_Dagger:
  [V] melvorF:Ultima_Godsword:
  [V] melvorTotH:Corundum_Dagger:
  [V] melvorTotH:Corundum_Sword:
  [V] melvorTotH:Corundum_Battleaxe:
  [V] melvorTotH:Corundum_2H_Sword:
  [V] melvorTotH:Corundum_Scimitar:
  [V] melvorTotH:Corundum_Throwing_Knife:
  [V] melvorTotH:Augite_Dagger:
  [V] melvorTotH:Augite_Sword:
  [V] melvorTotH:Augite_Battleaxe:
  [V] melvorTotH:Augite_2H_Sword:
  [V] melvorTotH:Augite_Scimitar:
  [V] melvorTotH:Augite_Throwing_Knife:
  [<] melvorTotH:Meteorite_2H_Sword:
  [<] melvorTotH:Divine_Dagger:
  [<] melvorTotH:Divine_Sword:
  [<] melvorTotH:Divine_Battleaxe:
  [<] melvorTotH:Divine_2H_Sword:
  [<] melvorTotH:Divine_Scimitar:
  [<] melvorTotH:Divine_Throwing_Knife:
  [V] melvorTotH:Potion_Stirrer:
  [V] melvorTotH:Elderwood_Shortbow:
  [V] melvorTotH:Elderwood_Longbow:
  [V] melvorTotH:Revenant_Shortbow:
  [V] melvorTotH:Revenant_Longbow:
  [V] melvorTotH:Carrion_Shortbow:
  [V] melvorTotH:Carrion_Longbow:
  [V] melvorTotH:Corundum_Crossbow:
  [V] melvorTotH:Augite_Crossbow:
  [<] melvorTotH:Divine_Crossbow:
  [<] melvorTotH:Meteorite_Crossbow:
  [V] melvorTotH:Corundum_Javelin:
  [V] melvorTotH:Augite_Javelin:
  [<] melvorTotH:Divine_Javelin:
  [<] melvorTotH:Meteorite_Javelin:
  [V] melvorTotH:Poison_Staff:
  [V] melvorTotH:Infernal_Staff:
  [V] melvorTotH:Lightning_Staff:
  [<] melvorTotH:Meteorite_Staff:
  [V] melvorTotH:Despair_Wand:
  [V] melvorTotH:Archaic_Wand:
  [V] melvorTotH:Calamity_Wand:
  [V] melvorTotH:Thorned_Power_Bow:
  [V] melvorTotH:Heated_Fury_2H_Hammer:
  [V] melvorTotH:Spectral_Ice_Sword:
  [V] melvorTotH:Lightning_Strike_1H_Sword:
  [V] melvorTotH:FrostSpark_1H_Sword:
  [V] melvorTotH:Lightning_Coil_2H_Staff:
  [V] melvorTotH:Torrential_Blast_Crossbow:
  [V] melvorTotH:Royal_Toxins_Spear:
  [V] melvorTotH:Ethereal_Longbow:
  [V] melvorTotH:Ethereal_Staff:
  [V] melvorTotH:Ethereal_Greataxe:
  [V] melvorTotH:Feather_Storm_Crossbow:
  [V] melvorTotH:Agile_Wings_Rapier:
  [V] melvorTotH:Slicing_Maelstrom_Wand:
  [V] melvorTotH:Dark_Blade_Defender:
  [V] melvorTotH:Grappling_Hook"

Food Item IDs:
  [C] melvorD:Empty_Food:
  [V] melvorD:Shrimp:
  [V] melvorD:Sardine:
  [V] melvorD:Herring:
  [V] melvorD:Trout:
  [V] melvorD:Salmon:
  [V] melvorD:Lobster:
  [V] melvorD:Swordfish:
  [V] melvorD:Crab:
  [V] melvorD:Shark:
  [V] melvorD:Cave_Fish:
  [V] melvorD:Manta_Ray:
  [V] melvorD:Whale:
  [V] melvorD:Potatoes:
  [V] melvorD:Onions:
  [V] melvorD:Cabbage:
  [V] melvorD:Tomatoes:
  [V] melvorD:Sweetcorn:
  [V] melvorD:Strawberries:
  [V] melvorD:Watermelon:
  [V] melvorD:Snape_Grass:
  [V] melvorD:Carrot:
  [O] melvorD:Raw_Magic_Fish:
  [V] melvorD:Anglerfish:
  [V] melvorD:Fanfish:
  [<] melvorD:Seahorse:
  [V] melvorD:Carp:
  [C] melvorD:Lemonade:
  [C] melvorD:Birthday_Cake:
  [V] melvorD:Bread:
  [V] melvorD:Beef:
  [V] melvorD:Chicken:
  [V] melvorD:Plain_Pizza_Slice:
  [V] melvorD:Beef_Pie:
  [V] melvorD:Meat_Pizza_Slice:
  [V] melvorD:Basic_Soup:
  [V] melvorD:Strawberry_Cupcake:
  [V] melvorD:Hearty_Soup:
  [V] melvorD:Cherry_Cupcake:
  [V] melvorD:Cream_Corn_Soup:
  [V] melvorD:Chicken_Soup:
  [V] melvorD:Strawberry_Cake:
  [V] melvorD:Carrot_Cake:
  [V] melvorD:Shrimp_Perfect:
  [V] melvorD:Sardine_Perfect:
  [V] melvorD:Herring_Perfect:
  [<] melvorD:Seahorse_Perfect:
  [V] melvorD:Trout_Perfect:
  [V] melvorD:Salmon_Perfect:
  [V] melvorD:Lobster_Perfect:
  [V] melvorD:Swordfish_Perfect:
  [V] melvorD:Anglerfish_Perfect:
  [V] melvorD:Fanfish_Perfect:
  [V] melvorD:Crab_Perfect:
  [V] melvorD:Carp_Perfect:
  [V] melvorD:Shark_Perfect:
  [V] melvorD:Cave_Fish_Perfect:
  [V] melvorD:Manta_Ray_Perfect:
  [V] melvorD:Whale_Perfect:
  [V] melvorD:Bread_Perfect:
  [V] melvorD:Beef_Perfect:
  [V] melvorD:Chicken_Perfect:
  [V] melvorD:Plain_Pizza_Slice_Perfect:
  [V] melvorD:Beef_Pie_Perfect:
  [V] melvorD:Meat_Pizza_Slice_Perfect:
  [V] melvorD:Basic_Soup_Perfect:
  [V] melvorD:Strawberry_Cupcake_Perfect:
  [V] melvorD:Hearty_Soup_Perfect:
  [V] melvorD:Cherry_Cupcake_Perfect:
  [V] melvorD:Cream_Corn_Soup_Perfect:
  [V] melvorD:Chicken_Soup_Perfect:
  [V] melvorD:Strawberry_Cake_Perfect:
  [V] melvorD:Carrot_Cake_Perfect:
  [V] melvorD:Cherry:
  [C] melvorD:Gingerbread_House:
  [C] melvorD:Gingerbread_Man:
  [C] melvorD:Edible_Candy_Cane:
  [V] melvorF:Apple:
  [V] melvorF:Apple_Pie:
  [C] melvorF:Lemon_Cake:
  [V] melvorF:Apple_Pie_Perfect:
  [C] melvorF:Lemon_Cake_Perfect:
  [<] melvorTotH:Lava_Fish:
  [<] melvorTotH:Lava_Fish_Perfect:
  [V] melvorTotH:Blue_Crab:
  [V] melvorTotH:Blue_Crab_Perfect:
  [V] melvorTotH:Magma_Fish:
  [V] melvorTotH:Magma_Fish_Perfect:
  [V] melvorTotH:Static_Jellyfish:
  [V] melvorTotH:Static_Jellyfish_Perfect:
  [<] melvorTotH:Magma_Eel:
  [<] melvorTotH:Magma_Eel_Perfect:
  [V] melvorTotH:Frost_Crab:
  [V] melvorTotH:Frost_Crab_Perfect:
  [v] melvorTotH:Frozen_Manta_Ray:
  [v] melvorTotH:Frozen_Manta_Ray_Perfect:
  [<] melvorTotH:Terrorfish:
  [<] melvorTotH:Terrorfish_Perfect:
  [<] melvorTotH:Mystic_Shark:
  [<] melvorTotH:Mystic_Shark_Perfect:
  [?] melvorTotH:Banana_Bread:
  [<] melvorTotH:Banana_Bread_Perfect:
  [?] melvorTotH:Mushroom_Soup:
  [<] melvorTotH:Mushroom_Soup_Perfect:
  [?] melvorTotH:Spicy_Chicken_Pizza:
  [<] melvorTotH:Spicy_Chicken_Pizza_Perfect:
  [?] melvorTotH:Beef_Mushroom_Stew:
  [<] melvorTotH:Beef_Mushroom_Stew_Perfect:
  [V] melvorTotH:Sandwich:
  [V] melvorTotH:Sandwich_Perfect:
  [V] melvorTotH:Pumpkin_Soup:
  [V] melvorTotH:Pumpkin_Soup_Perfect:
  [?] melvorTotH:Spicy_Shrimp_Soup:
  [V] melvorTotH:Spicy_Shrimp_Soup_Perfect:
  [?] melvorTotH:Fancy_Meat_Pizza:
  [V] melvorTotH:Fancy_Meat_Pizza_Perfect:
  [?] melvorTotH:Chicken_Cream_Mushroom_Soup:
  [<] melvorTotH:Chicken_Cream_Mushroom_Soup_Perfect:
  [?] melvorTotH:Chilli_Frost_Crab:
  [<] melvorTotH:Chilli_Frost_Crab_Perfect:
  [?] melvorTotH:Starfruit_Cake:
  [<] melvorTotH:Starfruit_Cake_Perfect:
  [O] melvorTotH:Pumpkin:
  [?] melvorTotH:Chilli:
  [V] melvorTotH:Mushrooms:
  [O] melvorTotH:Starfruit:
  [O] melvorTotH:Bananas:
  [C] melvorTotH:Lemonade_Full"

Bone Item IDs:
  [V] melvorD:Bones:
  [V] melvorD:Dragon_Bones:
  [V] melvorD:Magic_Bones:
  [V] melvorD:Big_Bones:
  [O] melvorD:Raw_Skeleton_Fish:
  [V] melvorF:Holy_Dust:
  [<] melvorF:Ash:
  [V] melvorF:Small_Urn_Enchanted:
  [V] melvorF:Medium_Urn_Enchanted:
  [V] melvorTotH:Large_Urn_Enchanted:
  [V] melvorTotH:Infernal_Bones"

Potion Item IDs:
  [V] melvorF:Melee_Accuracy_Potion_I:
  [V] melvorF:Melee_Accuracy_Potion_II:
  [V] melvorF:Melee_Accuracy_Potion_III:
  [V] melvorF:Melee_Accuracy_Potion_IV:
  [V] melvorF:Melee_Strength_Potion_I:
  [V] melvorF:Melee_Strength_Potion_II:
  [V] melvorF:Melee_Strength_Potion_III:
  [V] melvorF:Melee_Strength_Potion_IV:
  [V] melvorF:Melee_Evasion_Potion_I:
  [V] melvorF:Melee_Evasion_Potion_II:
  [V] melvorF:Melee_Evasion_Potion_III:
  [V] melvorF:Melee_Evasion_Potion_IV:
  [V] melvorF:Ranged_Assistance_Potion_I:
  [V] melvorF:Ranged_Assistance_Potion_II:
  [V] melvorF:Ranged_Assistance_Potion_III:
  [V] melvorF:Ranged_Assistance_Potion_IV:
  [V] melvorF:Magic_Assistance_Potion_I:
  [V] melvorF:Magic_Assistance_Potion_II:
  [V] melvorF:Magic_Assistance_Potion_III:
  [V] melvorF:Magic_Assistance_Potion_IV:
  [V] melvorF:Regeneration_Potion_I:
  [V] melvorF:Regeneration_Potion_II:
  [V] melvorF:Regeneration_Potion_III:
  [V] melvorF:Regeneration_Potion_IV:
  [V] melvorF:Damage_Reduction_Potion_I:
  [V] melvorF:Damage_Reduction_Potion_II:
  [V] melvorF:Damage_Reduction_Potion_III:
  [V] melvorF:Damage_Reduction_Potion_IV:
  [V] melvorF:Bird_Nest_Potion_I:
  [V] melvorF:Bird_Nest_Potion_II:
  [V] melvorF:Bird_Nest_Potion_III:
  [V] melvorF:Bird_Nest_Potion_IV:
  [V] melvorF:Fishermans_Potion_I:
  [V] melvorF:Fishermans_Potion_II:
  [V] melvorF:Fishermans_Potion_III:
  [V] melvorF:Fishermans_Potion_IV:
  [V] melvorF:Controlled_Heat_Potion_I:
  [V] melvorF:Controlled_Heat_Potion_II:
  [V] melvorF:Controlled_Heat_Potion_III:
  [V] melvorF:Controlled_Heat_Potion_IV:
  [V] melvorF:Generous_Cook_Potion_I:
  [V] melvorF:Generous_Cook_Potion_II:
  [V] melvorF:Generous_Cook_Potion_III:
  [V] melvorF:Generous_Cook_Potion_IV:
  [V] melvorF:Perfect_Swing_Potion_I:
  [V] melvorF:Perfect_Swing_Potion_II:
  [V] melvorF:Perfect_Swing_Potion_III:
  [V] melvorF:Perfect_Swing_Potion_IV:
  [V] melvorF:Seeing_Gold_Potion_I:
  [V] melvorF:Seeing_Gold_Potion_II:
  [V] melvorF:Seeing_Gold_Potion_III:
  [V] melvorF:Seeing_Gold_Potion_IV:
  [V] melvorF:Gentle_Hands_Potion_I:
  [V] melvorF:Gentle_Hands_Potion_II:
  [V] melvorF:Gentle_Hands_Potion_III:
  [V] melvorF:Gentle_Hands_Potion_IV:
  [V] melvorF:Farming_Potion_I:
  [V] melvorF:Farming_Potion_II:
  [V] melvorF:Farming_Potion_III:
  [V] melvorF:Farming_Potion_IV:
  [V] melvorF:Fletching_Potion_I:
  [V] melvorF:Fletching_Potion_II:
  [V] melvorF:Fletching_Potion_III:
  [V] melvorF:Fletching_Potion_IV:
  [V] melvorF:Crafting_Potion_I:
  [V] melvorF:Crafting_Potion_II:
  [V] melvorF:Crafting_Potion_III:
  [V] melvorF:Crafting_Potion_IV:
  [V] melvorF:Elemental_Potion_I:
  [V] melvorF:Elemental_Potion_II:
  [V] melvorF:Elemental_Potion_III:
  [V] melvorF:Elemental_Potion_IV:
  [V] melvorF:Herblore_Potion_I:
  [V] melvorF:Herblore_Potion_II:
  [V] melvorF:Herblore_Potion_III:
  [V] melvorF:Herblore_Potion_IV:
  [V] melvorF:Ranged_Strength_Potion_I:
  [V] melvorF:Ranged_Strength_Potion_II:
  [V] melvorF:Ranged_Strength_Potion_III:
  [V] melvorF:Ranged_Strength_Potion_IV:
  [V] melvorF:Magic_Damage_Potion_I:
  [V] melvorF:Magic_Damage_Potion_II:
  [V] melvorF:Magic_Damage_Potion_III:
  [V] melvorF:Magic_Damage_Potion_IV:
  [V] melvorF:Diamond_Luck_Potion_I:
  [V] melvorF:Diamond_Luck_Potion_II:
  [V] melvorF:Diamond_Luck_Potion_III:
  [V] melvorF:Diamond_Luck_Potion_IV:
  [V] melvorF:Divine_Potion_I:
  [V] melvorF:Divine_Potion_II:
  [V] melvorF:Divine_Potion_III:
  [V] melvorF:Divine_Potion_IV:
  [V] melvorF:Lucky_Herb_Potion_I:
  [V] melvorF:Lucky_Herb_Potion_II:
  [V] melvorF:Lucky_Herb_Potion_III:
  [V] melvorF:Lucky_Herb_Potion_IV:
  [<] melvorF:Performance_Enhancing_Potion_I:
  [<] melvorF:Performance_Enhancing_Potion_II:
  [<] melvorF:Performance_Enhancing_Potion_III:
  [<] melvorF:Performance_Enhancing_Potion_IV:
  [V] melvorF:Necromancer_Potion_I:
  [V] melvorF:Necromancer_Potion_II:
  [V] melvorF:Necromancer_Potion_III:
  [V] melvorF:Necromancer_Potion_IV:
  [V] melvorF:Hinder_Potion_I:
  [V] melvorF:Hinder_Potion_II:
  [V] melvorF:Hinder_Potion_III:
  [V] melvorF:Hinder_Potion_IV:
  [V] melvorF:Famished_Potion_I:
  [V] melvorF:Famished_Potion_II:
  [V] melvorF:Famished_Potion_III:
  [V] melvorF:Famished_Potion_IV:
  [<] melvorF:Lethal_Toxins_Potion_I:
  [<] melvorF:Lethal_Toxins_Potion_II:
  [<] melvorF:Lethal_Toxins_Potion_III:
  [<] melvorF:Lethal_Toxins_Potion_IV:
  [<] melvorF:Secret_Stardust_Potion_I:
  [<] melvorF:Secret_Stardust_Potion_II:
  [<] melvorF:Secret_Stardust_Potion_III:
  [<] melvorF:Secret_Stardust_Potion_IV:
  [V] melvorTotH:Area_Control_Potion_I:
  [V] melvorTotH:Area_Control_Potion_II:
  [V] melvorTotH:Area_Control_Potion_III:
  [V] melvorTotH:Area_Control_Potion_IV:
  [V] melvorTotH:Adaptive_Defence_Potion_I:
  [V] melvorTotH:Adaptive_Defence_Potion_II:
  [V] melvorTotH:Adaptive_Defence_Potion_III:
  [V] melvorTotH:Adaptive_Defence_Potion_IV:
  [V] melvorTotH:Slayer_Bounty_Potion_I:
  [V] melvorTotH:Slayer_Bounty_Potion_II:
  [V] melvorTotH:Slayer_Bounty_Potion_III:
  [V] melvorTotH:Slayer_Bounty_Potion_IV:
  [V] melvorTotH:Holy_Bulwark_Potion_I:
  [V] melvorTotH:Holy_Bulwark_Potion_II:
  [V] melvorTotH:Holy_Bulwark_Potion_III:
  [V] melvorTotH:Holy_Bulwark_Potion_IV:
  [V] melvorTotH:Adaptive_Accuracy_Potion_I:
  [V] melvorTotH:Adaptive_Accuracy_Potion_II:
  [V] melvorTotH:Adaptive_Accuracy_Potion_III:
  [V] melvorTotH:Adaptive_Accuracy_Potion_IV:
  [<] melvorTotH:Reaper_Potion_I:
  [<] melvorTotH:Reaper_Potion_II:
  [<] melvorTotH:Reaper_Potion_III:
  [<] melvorTotH:Reaper_Potion_IV:
  [V] melvorTotH:Penetration_Potion_I:
  [V] melvorTotH:Penetration_Potion_II:
  [V] melvorTotH:Penetration_Potion_III:
  [V] melvorTotH:Penetration_Potion_IV:
  [V] melvorTotH:Critical_Strike_Potion_I:
  [V] melvorTotH:Critical_Strike_Potion_II:
  [V] melvorTotH:Critical_Strike_Potion_III:
  [V] melvorTotH:Critical_Strike_Potion_IV:
  [<] melvorTotH:Alchemic_Practice_Potion_I:
  [<] melvorTotH:Alchemic_Practice_Potion_II:
  [<] melvorTotH:Alchemic_Practice_Potion_III:
  [<] melvorTotH:Alchemic_Practice_Potion_IV:
  [V] melvorTotH:Gem_Detector_Potion_I:
  [V] melvorTotH:Gem_Detector_Potion_II:
  [V] melvorTotH:Gem_Detector_Potion_III:
  [V] melvorTotH:Gem_Detector_Potion_IV:
  [<] melvorTotH:Star_Seeker_Potion_I:
  [<] melvorTotH:Star_Seeker_Potion_II:
  [<] melvorTotH:Star_Seeker_Potion_III:
  [<] melvorTotH:Star_Seeker_Potion_IV:
  [V] melvorTotH:Traps_Potion_I:
  [V] melvorTotH:Traps_Potion_II:
  [V] melvorTotH:Traps_Potion_III:
  [V] melvorTotH:Traps_Potion_IV:
  [V] melvorTotH:Blacksmith_Potion_I:
  [V] melvorTotH:Blacksmith_Potion_II:
  [V] melvorTotH:Blacksmith_Potion_III:
  [V] melvorTotH:Blacksmith_Potion_IV:
  [V] melvorTotH:Enkindled_Yields_Potion_I:
  [V] melvorTotH:Enkindled_Yields_Potion_II:
  [V] melvorTotH:Enkindled_Yields_Potion_III:
  [V] melvorTotH:Enkindled_Yields_Potion_IV:
  [V] melvorTotH:Alt_Magic_Potion_I:
  [V] melvorTotH:Alt_Magic_Potion_II:
  [V] melvorTotH:Alt_Magic_Potion_III:
  [V] melvorTotH:Alt_Magic_Potion_IV:
  [<] melvorTotH:Multicooker_Potion_I:
  [<] melvorTotH:Multicooker_Potion_II:
  [<] melvorTotH:Multicooker_Potion_III:
  [<] melvorTotH:Multicooker_Potion_IV:
  [?] melvorTotH:Deadly_Toxins_Potion"

Readable Item IDs:
  [O] melvorD:Message_In_A_Bottle:
  [C] melvorD:Futures_Prophecy:
  [C] melvorF:Unknown_Evil:
  [C] melvorF:New_Dawn:
  [V] melvorF:Merchants_Permit:
  [C] melvorF:Beginning_Of_The_End:
  [C] melvorF:Impending_Darkness"

Openable Item ID:
  [V] melvorD:Frozen_Chest:
  [V] melvorD:Chest_of_Witwix:
  [?] melvorD:Bird_Nest:
  [V] melvorD:Treasure_Chest:
  [V] melvorD:Egg_Chest:
  [V] melvorD:Pirate_Booty:
  [V] melvorD:Elite_Chest:
  [V] melvorD:Spider_Chest:
  [V] melvorD:Standard_Chest:
  [V] melvorD:Bandit_Chest:
  [C] melvorD:Christmas_Present_Yellow:
  [C] melvorD:Christmas_Present_Blue:
  [C] melvorD:Christmas_Present_Green:
  [C] melvorD:Christmas_Present_White:
  [C] melvorD:Christmas_Present_Purple:
  [C] melvorD:Christmas_Present_General:
  [C] melvorD:Locked_Chest:
  [V] melvorD:Magic_Chest:
  [V] melvorF:Herb_Sack:
  [V] melvorF:Elder_Chest:
  [V] melvorF:Crate_Of_Basic_Supplies:
  [V] melvorF:Crate_Of_Food:
  [V] melvorF:Stack_Of_Bones:
  [V] melvorF:Pile_Of_Logs:
  [V] melvorF:Pile_Of_Ores:
  [V] melvorF:Chest_Of_Gems:
  [V] melvorF:Air_Chest:
  [V] melvorF:Water_Chest:
  [V] melvorF:Earth_Chest:
  [V] melvorF:Fire_Chest:
  [V] melvorF:Scroll_of_Aeris:
  [V] melvorF:Scroll_of_Glacia:
  [V] melvorF:Scroll_of_Terran:
  [V] melvorF:Scroll_of_Ragnar:
  [V] melvorF:Miolite_Chest:
  [O] melvorTotH:Raven_Nest:
  [O] melvorTotH:Generous_Fire_Spirit:
  [V] melvorTotH:Golden_Chest:
  [V] melvorTotH:Crate_of_Lost_Supplies:
  [V] melvorTotH:Ancient_Chest:
  [V] melvorTotH:Burning_Chest:
  [V] melvorTotH:Static_Chest:
  [V] melvorTotH:Webbed_Chest:
  [V] melvorTotH:Cursed_Chest:
  [V] melvorTotH:Bone_Chest:
  [V] melvorTotH:Exotic_Herb_Sack:
  [O] melvorTotH:Lost_Chest"

TokenItemID: 
  [V] melvorD:Mastery_Token_Cooking:
  [X] melvorD:Mastery_Token_Farming:
  [X] melvorD:Mastery_Token_Firemaking:
  [X] melvorD:Mastery_Token_Fishing:
  [X] melvorD:Mastery_Token_Mining:
  [V] melvorD:Mastery_Token_Smithing:
  [X] melvorD:Mastery_Token_Woodcutting:
  [V] melvorF:Mastery_Token_Crafting:
  [V] melvorF:Mastery_Token_Fletching:
  [V] melvorF:Mastery_Token_Runecrafting:
  [V] melvorF:Mastery_Token_Thieving:
  [V] melvorF:Mastery_Token_Herblore:
  [V] melvorF:Bank_Slot_Token:
  [V] melvorF:Mastery_Token_Agility:
  [V] melvorF:Mastery_Token_Summoning:
  [X] melvorF:Mastery_Token_Astrology"

Compost Item IDs: 
  [V] melvorD:Compost:
  [V] melvorD:Weird_Gloop"