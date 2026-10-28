// GERADO por tools/extract.py a partir dos PDFs oficiais. Não edite à mão.
export const STRUGGLES = [
 {
  "name": "Betrayed",
  "id": "betrayed",
  "widgets": [],
  "tagline": "A dearly beloved double-crossed you, and you’ve never been able to trust again",
  "body": [
   "Questions: Who was the betrayer to you? How did they betray you? How can you heal that wound?",
   "Driven(+) You can suffer 1d4 dmg #piercing to ignore all Condition penalties for your next roll.",
   "Hurting(+) When you Comfort or Support (or receive it), you may also ask, “Did I tell them about my betrayer?”. If “Yes”, the comforted gets an extra option.",
   "Wary(-) When you gain Depth with another PC, mark a Condition."
  ]
 },
 {
  "name": "Disillusioned",
  "id": "disillusioned",
  "widgets": [],
  "tagline": "You were once a true believer, a champion, aparagon. No more Questions: What was the cause? What defeat or revelation showed you the meaninglessness of it all? Is there any way to make you believe again?",
  "body": [
   "Cynic (+) You can always ask one extra question when you Sense Motive, even on a 6-. You also get adv to Defy Danger when you try to overcome deceptions of any kind.",
   "Pessimist (-) The comforted gets one less option when you Comfort or Support them."
  ]
 },
 {
  "name": "Amnesia",
  "id": "amnesia",
  "widgets": [
   {
    "type": "circles",
    "label": "Memories",
    "n": 5
   }
  ],
  "tagline": "You have no memory of your past. You know one thing, though: you may not want to remember it.",
  "body": [
   "Questions: Where did you wake up without memory? What places, behaviours, or people feel familiar? What new identity are you building for yourself?",
   "Shards (+)(-) Once per session, when you would mark your last condition (thus Reaching Your Limit), you can instead mark Memories and Have a Flashback. When you do, you discover an important part of your past; mark 1 XP and the GM advances a Threat.",
   "When you reach 5 Memories, the picture of your past is complete; this Struggle is resolved (see Reveal a Struggle for details)."
  ]
 },
 {
  "name": "Coward",
  "id": "coward",
  "widgets": [],
  "tagline": "Most adventurers are used to frequent dangers and near death experiences. You are not one of them.",
  "body": [
   "Questions: Who did you once abandon? How do you try to fight your fears? How do you (over)compensate for them?",
   "Skittish (+) While Frightened, you have adv on rolls made to flee or hide from danger, and you mark 1 XP when you make such a roll.",
   "Brave Face (+) You may clear Frightened by landing the final blow on an enemy, or taking credit for such a blow.",
   "Terrified (-) When you mark Frightened, and when you mark a condition while already Frightened (other than from this Move), mark an additional condition."
  ]
 },
 {
  "name": "Caretaker",
  "id": "caretaker",
  "widgets": [],
  "tagline": "You travel with an NPC who depends on you for aid or guidance Questions: Why does this person depend on you so much? Do they know how much you do for them? How do they tax your patience? Biggest Fan (+) When you give or receive Comfort or Support alongside your dependent, treat one “No” as if it were a “Yes”. Guardian (+) When you worry about your dependent, you may mark a condition to ask the GM a question about their location, activities, or wellbeing, and they will answer truthfully. When you End the Session, if you feel your dependent mostly did what you wanted, gain 1 XP.",
  "body": [
   "Troublesome (-) When you hurt them or fail to protect them (GM’s call), mark a Condition."
  ]
 },
 {
  "name": "Dark Whisperer",
  "id": "dark-whisperer",
  "widgets": [
   {
    "type": "circles",
    "label": "Whispers",
    "n": 5
   }
  ],
  "tagline": "A voice tells you truths you couldn’t know, and lies you can’t discern Questions: How does the voice communicate with you? Which other PC did they warn you about? How did they help you when no one else could?",
  "body": [
   "Shoulder Devil (+) Your Dark Whisperer is an NPC that no one else can perceive and that you can’t Sense Motive against. When you ask your Dark Whisperer a question, they will usually tell you the truth or what they want you to do next. If you accept their words, gain adv on your next roll, but mark a Whisper (max 5). Shadow Puppet (-) When you try to reject your Dark Whisperer’s words, roll+Whispers, then erase your Whispers. ✴On a 6- you shut them down; mark 1 XP. ✴On a 7-9 their words echo in your mind; mark two conditions. ✴On a 10+ you obey them, perhaps without realizing it, mark XP and the GM makes a Move."
  ]
 },
 {
  "name": "Lost Heritage",
  "id": "lost-heritage",
  "widgets": [],
  "tagline": "You search for your people (or whatever’s left of them), lost long ago to conquering or catastrophe",
  "body": [
   "Questions: Who or what took your people away? How did you manage to escape and/or survive? Who or what’s keeping you from learning more?",
   "Seeker (+) When you Unearth Secrets or Sneak Past in pursuit of something or someone related to your people, roll with adv. Once per session, when you find and study a relic of your people, tell the group what you learned and mark 1 XP. Open Wound (-) When you encounter an incomplete, lost part of your people’s culture, or a stolen relic, mark a Condition."
  ]
 },
 {
  "name": "Folk Hero",
  "id": "folk-hero",
  "widgets": [],
  "tagline": "You once saved a humble community all on your own, and some now see you as a symbol of hope",
  "body": [
   "Questions: What heroic deed did you accomplish in your community? What did you lose? What prophecy of your heroic future have you heard?",
   "Inspiring Presence (+) Anybody who isn’t a noble or someone with power will treat you as family, offering you shelter & whatever resources they have. When you Trade Blows to defend ordinary people, ✴On a 10+, you can have another PC clear a Condition (instead of the other options).",
   "Burdened (-) When you refuse a chance to help the common folk, mark a Condition."
  ]
 },
 {
  "name": "Doomed",
  "id": "doomed",
  "widgets": [
   {
    "type": "circles",
    "label": "Doom",
    "n": 5
   }
  ],
  "tagline": "A terrible affliction will claim your life (or worse), unless you can find a cure",
  "body": [
   "Questions: How were you afflicted? What are the symptoms so far? What dubious lead do you have on a potential cure?",
   "Good Days (+) When you End the Session, ask the group “Did I learn more about my affliction, or made notable progress towards a cure?” If “Yes”, mark 1 XP, clear a Condition, and clear 1 Doom. Bad Days (-) If the answer to the question above is “No”, mark 1 Doom and a Condition. Doom starts at 0 and represents your affliction’s progress. At 5 Doom, it’s too late for a cure; your affliction will claim you the next session.",
   "Not Like This(+) When you would Face Death, you may instead Invoke Your Doom—Say how your affliction (or how others view it) helps you survive, then mark 1 Doom and regain 1 HP."
  ]
 },
 {
  "name": "Ominous Dreams",
  "id": "ominous-dreams",
  "widgets": [
   {
    "type": "circles",
    "label": "Wyrd",
    "n": 3
   }
  ],
  "tagline": "You’ve begun experiencing confusing visions of an upcoming danger or catastrophic event",
  "body": [
   "Questions: What one aspect of your prophetic dreams is consistently clear? Do you know who sends you these visions? Who close to you do they depict as in danger?",
   "Saw It Coming (+) When you finish Making Camp successfully, gain Wyrd equal to your WIS. When something terrible happens to another PC (your call), you may spend 1 or 2 Wyrd to allow their Player to re-roll that number of dice after making a roll and seeing the consequences. The new result is what really happens. No Rest for the All-Seeing (-) When you finish Making Camp successfully you recover only half the amount of HP you normally would (rounded down)."
  ]
 },
 {
  "name": "Forbidden Romance",
  "id": "forbidden-romance",
  "widgets": [],
  "tagline": "You and an NPC are deeply in love, but you must remain apart Questions: Who is your loved one? What impossible obstacle stands in your way? What far-fetched solution could bring you together? The Power of Love (+) Once per session, when you share a memory of your loved one with another PC, clear Conditions equal to your Depth with them (min. 1).",
  "body": [
   "Soft Spot (-) When you get news that your beloved is in danger, mark a Condition, plus another one if you don’t immediately drop everything to go and try saving them."
  ]
 },
 {
  "name": "Innocent",
  "id": "innocent",
  "widgets": [],
  "tagline": "You’re new to this life, and are still figuring out yourself and the world Questions: What other PC first took you in? What do you accept without question? What do you endlessly interrogate?",
  "body": [
   "Wide-Eyed (+) Once per session, when another PC receives Comfort or Support near you, you can also receive the same number of benefits (though can make different choices). Impressionable (-) Once per scene, when you reject the words of a PC or NPC, mark a condition."
  ]
 },
 {
  "name": "Loner",
  "id": "loner",
  "widgets": [],
  "tagline": "You’re a misunderstood renegade who doesn’t need any friends… right?",
  "body": [
   "Questions: What is your (presumably tragic) backstory? How did the last person who got close to you suffer or betray you?",
   "Guarded (+) When you use or receive Comfort or Support, you may also answer “Did I show that I really do care?” If “Yes”, the comforted gains a benefit like the other questions. If “No”, you mark 1 XP.",
   "Aloof (-) Forge a Bond requires 1 additional Depth from both you and the other PC."
  ]
 },
 {
  "name": "Hunted",
  "id": "hunted",
  "widgets": [
   {
    "type": "circles",
    "label": "Heat",
    "n": 3
   }
  ],
  "tagline": "A powerful individual or organization is actively hunting you down Questions: Who leads the hunt for you? How did they once almost catch you? What have you sacrificed to escape them?",
  "body": [
   "Catch Me If You Can (+) When you would mark a condition, you may instead mark Heat. How do you leave evidence of your presence behind? When you Enjoy Downtime, you may spend 1 Treasure to erase your Heat.",
   "Reckoning (-) When you reach 3 Heat, or Make Camp with 1 or more Heat, roll+Heat then erase your Heat. ✴On a 10+, hunters arrive in force here and now. ✴On a 7-9 hunters arrive, but you have a chance to act before they spot you. ✴On a 6- hunters get distressingly close to finding you, but you slip away; mark 1 XP."
  ]
 },
 {
  "name": "Indebted",
  "id": "indebted",
  "widgets": [
   {
    "type": "circles",
    "label": "Debt",
    "n": 5
   }
  ],
  "tagline": "You owe a steep debt to some very dangerous people.",
  "body": [
   "Questions: Who do you owe? What makes them so dangerous? Who or what did they take as collateral?",
   "Keep Digging (+) When you would spend Treasure, you may instead mark an equal amount of Debt, which represents additional dues beyond what you initially owed. You can also buy items beyond your current Wealth tier by marking 1 Debt per tier difference. When you give your creditor something they really want (GM’s call), reset Debt to 0.",
   "Collectors (-) After you Enjoy Downtime, agents of your creditor approach; roll+Debt. ✴On a 6- they only want to remind you of your dues; mark XP. ✴On a 7-9 they want a small favor or item; mark a condition if you refuse them. ✴On a 10+ they want something big, and are prepared to force your hand."
  ]
 },
 {
  "name": "Reformed",
  "id": "reformed",
  "widgets": [
   {
    "type": "circles",
    "label": "Guilt",
    "n": 3
   }
  ],
  "tagline": "You did terrible things in the past, and now seek atonement Questions: Which PC used to be your enemy? Who doesn’t think you’ve changed? What do you regret the most?",
  "body": [
   "Haunted (+)(-) You start with 2 Guilt; mark it now. When you act selfishly, you may mark Guilt to gain adv on a roll. Whenever you have fewer marked+locked conditions than your Guilt, including when you first gain this Struggle, immediately mark Conditions until they match.",
   "Reparations (+) Once per session, when you significantly help an NPC (GM’s call), clear 1 Guilt and a Condition.",
   "Retribution (-) When you Trade Blows with someone from your dark past, add your Guilt to all dmg dealt to them."
  ]
 },
 {
  "name": "Renowned",
  "id": "renowned",
  "widgets": [],
  "tagline": "Stories of your exploits have spread far and wide. Some are true, others are brazenly false",
  "body": [
   "Questions: How do the stories depict you? What’s the most difficult part to live up to? What other PC is a frequent side character? Rumors & Legends (+)(-) Your Fame starts at 1. At the start of each session, tell the group a story someone heard about you. If your Fame is 2 or more, the GM may then add a twist or complication someone else heard. When you End the Session, if you lived up to the story (GM’s final say), gain 1 Fame (max 3). Otherwise, lose 1 Fame (min -1) and mark a condition.",
   "Larger Than Life (-) When you interact with the public, or try to live up to this session’s story, you may roll+Fame instead of another stat. If you do, ✴on a 9 or lower, you also reduce Fame by 1."
  ]
 },
 {
  "name": "Traumatized",
  "id": "traumatized",
  "widgets": [],
  "tagline": "Your past was dark, violent, and still haunts you. Were you a victim or a perpetrator?",
  "body": [
   "Questions: What other PC was affected by your dark past? How do you calm down or cope with the stress? What mystery from your past was never answered?",
   "Don’t Provoke Me (+) You have adv on rolls intended to directly prevent or de-escalate violence.",
   "Instincts (-) Once per scene, when you get hurt or witness unexpected violence, choose one instinct below. Until the violence is over or the scene ends, when you act in a way that doesn’t follow this instinct, mark a Condition.",
   "◆ Freeze: stop, stare, follow orders, hold tightly",
   "◆ Flee: hide, escape, run, fortify",
   "◆ Fight: charge, attack, throw, destroy"
  ]
 },
 {
  "name": "Secret Identity",
  "id": "secret-identity",
  "widgets": [],
  "tagline": "You’ve been keeping your true identity a secret this whole time, and the wrong people are looking for you",
  "body": [
   "Questions: What’s your real name and appearance? Who are “the wrong people”? What nefarious scheme do they want you for? Scion (+) Once per session, you can mark one of the following to get temporary access to: ☐ancient lore ☐bountiful resources",
   "☐iconic treasure ☐powerful allies ☐unique magic source. When you assume your real identity, clear one of the boxes.",
   "Unmasked (-) When your real identity is revealed to someone new, the GM may have the wrong people get news of you or the GM advances a Threat (GM’s call)."
  ]
 },
 {
  "name": "Vengeful",
  "id": "vengeful",
  "widgets": [],
  "tagline": "There’s no justice in this world, but the one you will wield against your archenemy",
  "body": [
   "Questions: Who’s your archenemy? What did they take from you? What stands between you and satisfaction?",
   "Unwavering (+) When you Trade Blows with your archenemy (or anyone associated with them), roll dmg with adv. Once per session, while pursuing your archenemy, when you would Face Death you instead stay at 1 HP.",
   "Consumed (-) When you would take a course of action that pulls you away from vengeance against your archenemy, mark a Condition."
  ]
 },
 {
  "name": "Pariah",
  "id": "pariah",
  "widgets": [],
  "tagline": "You’re reviled by polite society, and most who learn who you really are reject you",
  "body": [
   "Questions: What aspect about you is reviled? Do you hide your reviled aspect or revel in it? If you, would you get rid of it? Monster (+) When you first reveal your reviled aspect to an NPC, they’re surprised for a moment and they’re now #afraid of you (GM’s call). You get adv to Defy Danger, Pull Strings, or Trade Blows against any NPC who’s #afraid of you.",
   "Wretch (-) You get dis to Defy Danger, Pull Strings, or Trade Blows against any NPC who isn’t #afraid of you."
  ]
 },
 {
  "name": "Treasure Obsession",
  "id": "treasure-obsession",
  "widgets": [
   {
    "type": "circles",
    "label": "Leads",
    "n": 5
   }
  ],
  "tagline": "You’re consumed with finding a legendary lost treasure, to succeed where so many have failed and died",
  "body": [
   "Questions: What is the treasure and what the legends say about it? Why is it so important to you? Who is a dangerous and deadly competitor for it?",
   "On The Trail (+) Once per session, after you Spout Lore or Unearth Secrets, mark a Lead to ask the GM a question about your treasure, such as: who guards it, who could abuse it, or what curse it supposedly places on whoever finds it, just to name a few. When you mark your 5th Lead, you can ask the GM: where exactly can I find my treasure?",
   "Dragon Sickness (-) You can only Comfort or Support (or receive it) from other PCs who have promised to help you obtain your treasure."
  ]
 }
];
export const STRUGGLES_INTRO = [
 "Struggles are powerful narrative aspects of a character that they grapple with over the course of play. All Struggles are, at their heart, a question about who the PC is, what matters to them, and what choices they are willing to make.",
 "By default, each PC can only have one Struggle at a time. If you want to reveal a second Struggle, you must first resolve your current one. When a Struggle is revealed, do each of the following:",
 "◆ Read through the Struggle’s questions and decide which to answer now and which to explore in play.",
 "◆ Answer each “now” question, then collaborate with the rest of the group to fit your answer into the shared fiction. The GM has final say over the world itself, but should make reasonable accomodations for each player.",
 "◆ Gain the Struggle’s benefits (+) and drawbacks (-) until resolved.",
 "◆ Clear a locked Condition, if you have one.",
 "While you have a Struggle, try to:",
 "◆ Dramatically engage with both its benefits and its drawbacks",
 "◆ Grapple with the hard choices or circumstances it puts you in",
 "◆ Explore new details or emotions about it when appropriate, especially when someone Comforts or Supports you",
 "◆ Ponder a terrible truth about it, which might be revealed in the future",
 "◆ Resolve it only when narratively satisfying",
 "When another PC has a Struggle, other Players should try to:",
 "◆ Have your PC ask questions and express opinions about it",
 "◆ Adapt your Relationship and/or Bond with them to their Struggle and how it affects the narrative",
 "◆ Comfort, support, and sometimes challenge them regarding it",
 "◆ Gasp in shock when a terrible truth is confessed",
 "The GM should reflect a PC Struggle in the world by:",
 "◆ Making it the focus of an obstacle, danger, or hard choice",
 "◆ Portray the benefits and drawbacks of it without holding back",
 "◆ Present opportunities to resolve it when the time feels right",
 "When your revealed Struggle is resolved, Level Up (without erasing XP), erase the Struggle, and lose its benefits (+) and drawbacks (-). Erase the Reveal a Struggle Advancement box if it was marked; you can choose a new Struggle in the future.",
 "See Reveal Your Struggle in Campaign Moves in the DW2 Beta Quickstart."
];
