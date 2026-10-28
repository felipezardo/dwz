// GERADO por tools/extract.py a partir dos PDFs oficiais. Não edite à mão.
export const MOVES = [
 {
  "name": "Aid a PC",
  "stat": null,
  "body": [
   "While you help another PC, they have adv on their rolls. Before the helped PC rolls, you must choose one:",
   "◆ It's risky; all consequences from this also affect you",
   "◆ It's stressful; mark a Condition",
   "◆ They frustrate you; erase 1 Depth with them"
  ],
  "id": "aid-a-pc",
  "group": "Core Moves"
 },
 {
  "name": "Cast a Spell",
  "stat": "+Variable",
  "body": [
   "When you invoke magic you can use, say what you want to happen; the GM will tell you the effect's mag and then you compare it to your Casting Stat (see the Class or Path that is your magic’s source).",
   "◆ If the mag exceeds your Casting Stat, the spell is beyond you; negotiate a lesser effect or Perform a Ritual to achieve it",
   "◆ If the mag equals your Casting Stat, roll+Casting Stat with dis",
   "◆ If the mag is less than your Casting Stat, roll+Casting Stat ✴On a 10+, the effect comes to fruition as intended. ✴On a 7-9, it happens, but choose one:",
   "◆ A unique option depending on your magic’s source",
   "◆ The effort is tiring; mark a Condition",
   "◆ There’s a twist; the GM will add an “and” or “but” to its effect ✴On a 6-, something goes terribly wrong; mark 1 XP and the GM makes a Move."
  ],
  "id": "cast-a-spell",
  "group": "Core Moves"
 },
 {
  "name": "Defy Danger",
  "stat": "+Variable",
  "body": [
   "When you contend with a risk, threat, or obstacle—and no other Move fits—describe how you do it, then the GM chooses one and you roll:",
   "◆ + str if you power through, physically endure, or break it",
   "◆ + dex if you dodge, outpace, or target it precisely",
   "◆ + int if you analyze, notice, or outsmart it",
   "◆ + wis if you scrutinize, empathize with, or resolutely resist it",
   "◆ + cha if you charm, trick, impress, or provoke it",
   "✴On a 10+, you overcome it flawlessly. ✴On a 7-9, you prevail over it, but choose one below:",
   "◆ Doing so draws unwanted attention or escalates the situation; the GM will say how after you choose this option",
   "◆ The effort drains or rattles you; mark a condition",
   "◆ You sacrifice something to do it; say what it is. The GM may ask for more",
   "✴On a 6-, your efforts are thwarted or go terribly wrong; mark 1 XP and the GM makes a Move."
  ],
  "id": "defy-danger",
  "group": "Core Moves"
 },
 {
  "name": "Sense Motive",
  "stat": "+wis",
  "body": [
   "When you scrutinize someone throughout a conversation, roll+ wis. ✴On a 10+, you can ask their player two questions during the conversation (if they’re an NPC, the GM answers). ✴On a 7-9, ask them only one. These questions can be about a character’s thoughts, feelings, or motivations. All answers must be truthful, even if the character(s) might not be. ✴On a 6-, if studying an NPC, then you’re discovered or interrupted; mark 1 XP and the GM makes a Move. If studying a PC, then they ask you a question instead."
  ],
  "id": "sense-motive",
  "group": "Core Moves"
 },
 {
  "name": "Sneak Past",
  "stat": "+DEX",
  "body": [
   "When you stealthily evade notice, roll+ dex. ✴On a 10+, you remain completely undetected. ✴On a 7-9, you do it, but the GM chooses one:",
   "◆ Someone grows suspicious; you have dis to Sneak Past until that changes",
   "◆ You did it by the skin of your teeth; mark a condition",
   "◆ You don’t have long; act now before the window of opportunity closes ✴On a 6-, you’re spotted or expected; mark 1 XP and the GM makes a Move."
  ],
  "id": "sneak-past",
  "group": "Core Moves"
 },
 {
  "name": "Spout Lore",
  "stat": "+Questions",
  "body": [
   "When you rack your brain for information about a specific subject, ask the GM one question about it, answer the questions below, then roll with +1 for each “Yes”:",
   "◆ Do you have access to a book or equivalent record about this subject?",
   "◆ Is this subject related to your Origins?",
   "◆ Is this subject relevant to your Struggle?",
   "✴On a 10+, the GM answers generously, and you or an ally also gain adv the first time someone acts on the answer. ✴On a 7-9, the GM just answers generously. ✴On a 6-, the GM answers with danger or an unwelcome truth; mark 1 XP and the GM makes a Move."
  ],
  "id": "spout-lore",
  "group": "Core Moves"
 },
 {
  "name": "Unearth Secrets",
  "stat": "+int",
  "body": [
   "When you investigate a mysterious situation or location, ask the GM, Are there any secrets to discover here? If “Yes”, roll+ int. No matter what you roll, you always discover something; the GM will tell you what. ✴On a 10+, your discovery is clear and significant. ✴On a 7-9, choose one from below:",
   "◆ It is an important clue, but not a clear answer",
   "◆ The discovery puts you at risk; the GM will say how after you choose this option",
   "◆ The discovery rattles you; mark a Condition",
   "✴On a 6-, the discovery is dangerous; mark 1 XP and the GM makes a Move."
  ],
  "id": "unearth-secrets",
  "group": "Core Moves"
 },
 {
  "name": "Comfort or Support",
  "stat": null,
  "body": [
   "Once per session, after you offer comfort or support to another PC, answer the following questions:",
   "◆ Did you explore, change, or reaffirm a Relationship or Bond?",
   "◆ Did they open up to you in return?",
   "◆ Did either of you reveal something new about your Struggle?",
   "For each “Yes”, the comforted can choose to clear a marked Condition, gain 1 Depth to their Relationship with the comforter, or have the comforter clear a marked Condition. The comforted can choose an option more than once."
  ],
  "id": "comfort-or-support",
  "group": "Core Moves"
 },
 {
  "name": "Pull Strings",
  "stat": "+CHA",
  "body": [
   "When you influence an NPC to do what you want, choose an approach below and roll+ cha:",
   "◆ If you deceive them with false words or actions, they might later seek the truth or learn a secret about you",
   "◆ If you persuade them openly and honestly, they might ask for a promise and/or payment, or only partly follow through",
   "◆ If you threaten their safety or interests, they might escalate the conflict now, or escape or betray you later",
   "✴On a 10+, they’ll do it as best as they can. ✴On a 7-9, they’ll try, but the GM will add a complication based on your approach. ✴On a 6-, they make things worse; mark 1 XP and the GM makes a Move."
  ],
  "id": "pull-strings",
  "group": "Core Moves"
 },
 {
  "name": "Trade Blows",
  "stat": "+STR or +DEX",
  "body": [
   "When you engage a foe in battle, roll+ str in melee or + dex at range (or with #precise weapons) ✴On a 10+, choose one:",
   "◆ An ally gets a fleeting opportunity",
   "◆ You inflict max dmg",
   "◆ You suffer min dmg",
   "✴On a 7-9, choose one of these instead:",
   "◆ Something upsets or provokes you; mark a condition",
   "◆ You grant the opponent a fleeting opportunity",
   "◆ You lose or break something. Choose what; the GM may ask for more ✴On a 6-, you inflict min dmg or suffer max dmg (your call); mark 1 XP and the GM makes a Move.",
   "After choices have been made, inflict your dmg and suffer theirs."
  ],
  "id": "trade-blows",
  "group": "Core Moves"
 },
 {
  "name": "Damage Dice Size",
  "stat": null,
  "body": [
   "Some effects can increase or decrease the dmg die size. Dungeon World 2's polyhedral die size levels are as follows:",
   "d4 | d6 | d8 | d10 | d12 | d12+d4 | d12+d6 | d12+d8 | d12+d10"
  ],
  "id": "damage-dice-size",
  "group": "Extra Moves"
 },
 {
  "name": "Make Camp",
  "stat": null,
  "body": [],
  "id": "make-camp",
  "group": "Extra Moves"
 },
 {
  "name": "End the Session",
  "stat": null,
  "body": [
   "When you reach the end of a session, answer the following questions as a group:",
   "◆ Did anyone add Depth to their Relationship(s)?",
   "◆ Did we defeat a dangerous threat, visit a new location, and/or find a memorable treasure?",
   "◆ Did we learn something new and important about the world or NPCs?",
   "For each “Yes”, everyone marks XP."
  ],
  "id": "end-the-session",
  "group": "Extra Moves"
 },
 {
  "name": "Face Death",
  "stat": null,
  "body": [
   "When you reach 0 HP, you’re Helpless until you recover HP or the Scene ends. While Helpless, if you lose any HP, you die. When you recover any HP, lock one of your Conditions and you’re no longer Helpless. When you take decisive action while Helpless, choose one before resolving the action:",
   "◆ Gamble with Death, roll+nothing. ✴On a 10+, you push past the pain; recover half your max HP (rounded down) then resolve your action. ✴On a 7-9, the GM says what part of you won’t survive; accept the loss and recover 1 HP, or hold on to it and die after acting. ✴On a 6-, you’re too hurt to act and will die before this Scene ends; you say when. What are your last words?",
   "◆ Go Out in a Blaze of Glory; briefly take control of the Scene, describe one last deed you accomplish, then die."
  ],
  "id": "face-death",
  "group": "Extra Moves"
 },
 {
  "name": "Level Up",
  "stat": null,
  "body": [
   "When you mark the last XP on your PC’s Experience track, clear the track, add 1 to your Level and current/maximum hp (up to +10), and gain one Advancement available to your new Level (or lower)."
  ],
  "id": "level-up",
  "group": "Extra Moves"
 },
 {
  "name": "Reach Your Limit",
  "stat": null,
  "body": [
   "When you mark your last Condition, clear all your marked Conditions then choose and act out one of the following outbursts:",
   "◆ Angry — Lash out at your allies or break something important",
   "◆ Distracted — Wander off alone or miss something relevant",
   "◆ Exhausted — Collapse or give up when it matters",
   "◆ Frightened — Hide or flee from danger",
   "◆ Insecure — Overcompensate or harshly criticize someone",
   "If your outburst isn't extreme enough, the GM may ask you to go further. After the outburst, lock the chosen Condition.",
   "Once per session, when you spend a few hours resting (even while adventuring), describe cooperatively what each PC is up to. Things in the world worsen each time you Make Camp.",
   "When you finish Making Camp, each PC regains all HP and clears one marked Condition."
  ],
  "id": "reach-your-limit",
  "group": "Extra Moves"
 },
 {
  "name": "Perform a Ritual",
  "stat": null,
  "body": [
   "When you draw on a font of magical power (object, person, or place) to create an effect, tell the GM what you’re trying to achieve. The GM will tell you a number of requirements up to the effect’s mag (min. 1) from the following (filling in the blanks or making choices when needed):",
   "◆ First you must ___________",
   "◆ It’s going to take days/weeks/months",
   "◆ It will require ___________",
   "◆ The effect will be unreliable or limited",
   "◆ You and your allies will risk ___________",
   "◆ You’ll need help from ___________",
   "◆ You’ll have to destroy ___________ to do it",
   "Once all requirements are fulfilled, the ritual is complete and the magical effect takes place."
  ],
  "id": "perform-a-ritual",
  "group": "Extra Moves"
 },
 {
  "name": "Undertake a Perilous Journey",
  "stat": null,
  "body": [
   "When you travel through hostile territory, choose a destination, a leader, and a method of travel:",
   "◆ Quickly, risking it all. -1 to the roll, everyone marks a Condition; you arrive earlier than expected",
   "◆ Regular pace. +1 to the roll, only the leader marks a Condition; you arrive when expected",
   "◆ Slow & careful. +2 to the roll; you arrive later than expected",
   "Then the leader rolls with the corresponding modifier. ✴On a 10+, you arrive with a boon; the GM will tell you what. ✴On a 7-9, you’ll get there but choose one:",
   "◆ Someone’s following you; let them, or everyone marks a Condition to lose them",
   "◆ Something unpleasant awaits at your destination",
   "◆ You encounter a danger along the way, but you have the drop on them",
   "✴On a 6-, a danger surprises you; everyone marks 1 XP and the GM makes a Move.",
   "A \"boon\" might be a valuable ruin, a helpful NPC, a magical tree, an abandoned treasure, or something else. Even if it isn't immediately obviously useful, with some hard work and/or smart ideas it can still pay off."
  ],
  "id": "undertake-a-perilous-journey",
  "group": "Extra Moves"
 },
 {
  "name": "Magnitude (Mag)",
  "stat": "Mag",
  "body": [
   "Magnitude (mag) represent a spell's overall power. The GM has the final say on a spell's mag, based on the effect's target, severity, range, duration, area, and similar factors. These guidelines below should help:",
   "Mag 0 — Minor magic (sometimes called cantrips, orisons, or rote spells) can be executed even by beginners. They are the equivalent of 5e's Spell Levels 0 and 1. These could be achieved without magic at all. Examples include: shoot a magical dart (1d4 dmg); heal scratches and bruises (1d4 HP restored), communicate from across a room; summon a tiny sprite; read someone's current emotions; charm someone distracted or exhausted; induce a light fitful, sleep; slow down a fall; turn someone invisible for a few seconds, repair ordinary wear and tear.",
   "mag 1 — Standard magic commonly done by ordinary practitioners, the equivalent of 5e's Spell Levels 2 and 3. Doing something similar without magic would require complex, lengthy, or coordinated effort. Examples include: shoot an acid arrow (1d8 dmg #piercing); heal deep cuts (1d8 HP restored); communicate from across a country; summon a sly imp; read someone’s surface thoughts; charm an ordinary person; induce a deep but ordinary slumber; float up to a #near distance; turn someone invisible for a few minutes; create a mundane item from raw materials",
   "mag 2 — Major magic that strains the abilities of most practitioners, only masters can perform it reliably every day. Similar to 5e's Spell Levels 4 and 5, doing these things without magic would take extreme effort, coordination, tools, time, and/or training. Examples include: shoot an explosive fireball (1d12 dmg #piercing); heal broken bones (1d12 HP restored); communicate with a ghost or spirit; summon an elemental servant; read someone's secret desire; charm a guarded or hostile mind; induce sleep that won't end until the next day; fly for the next few minutes; turn someone invisible for an hour; conjure a mundane item out of thin air",
   "mag 3 — High magic that is impossible for everyone but master practitioners. Equivalent to 5e's Spell Levels 6-7, it would be nearly impossible to do something similar without magic, even with all the help in the world. Example effects include: emit a cloud of gas that poisons those who breath it (1d12+1d6 dmg #piercing); restore someone on the verge of death (1d12+1d6 HP restored); communicate with another realm of existence; summon a demonic guardian; control a weakened mind; induce a year-long slumber; fly for a few hours; turn someone invisible for the rest of the day; transform one creature into another similar one; create a door to another dimension; telekinetically lift a boulder or small house; teleport a few kilometers",
   "mag 4+ — Mythical magic that some masters spend their entire lives in pursuit of, only the best of the best can accomplish these effects with a spell; most need to Perform a Ritual instead. Equivalent to 5e's Spell Levels 8 and 9, even with magic these feats are often only heard about in stories and legends. Example effects include: utter a forbidden word of power that kills someone instantly or inflicts (1d12+1d10 dmg #piercing); resurrect someone from the dead; communicate through time and space; summon a monstrous behemoth; control an alien or guarded mind; induce an eternal slumber; fly forever; create a magic item or Artifact; teleport yourself and allies anywhere in the world"
  ],
  "id": "magnitude-mag",
  "group": "Extra Moves"
 }
];
export const CHANGING_CLASSES = [
 "1. Choose your new Class.",
 "2. Assign your Stats as if you were creating a new character. You can use your old Stats as guidance or completely ignore them and use this opportunity to start with a clean slate.",
 "3. Gain your new Class Starting Move. Lose the one from your old Class.",
 "4. Reassign your Advancements. Count the number of advancements you had from your old Class, and gain the same number in your old Class.",
 "5. Your XP, Level, and Treasure Track remain unchanged. 6. Your max HP changes to that of your new Class, modified by your per Level bonus (+1 per Level beyond 1, max +10). Your current HP goes up or down by the same amount (this can’t lower it below 1). For example, Erinyette the level 5 Rogue resolved her Reformed Struggle, and decided to change to the Paladin Class to represent her determination to fight for what’s right. Erinyette had 4 Advancements as a Rogue. Her Player decides to keep the Burglar Path and it’s Starting Move, Expert Treasure-hunter as a Multiclass, but she’ll use the other 3 Advancements to improve her WIS, unlock the Inquisitor Path (their nemesis has hidden devotees everywhere), and to reveal a new Struggle: Vengeful."
];
