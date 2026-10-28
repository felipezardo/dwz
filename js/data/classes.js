// Dados de Classes (EN-US e PT-BR)
export const CLASSES_EN = {
 "barbarian": {
  "title": "The Barbarian",
  "tagline": "A mighty stranger from an even stranger land",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. construct, minotaur, nephilim, etc. What makes your homeland so different from places here?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. brutal warriors, hospitable travelers, isolated devotees, etc. How did they adapt to your homeland’s environment?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. dangerous bandit, powerful leader, renowned gladiator, etc. What betrayal or calamity caused your departure?"
   }
  ],
  "relationshipExamples": "I delight in their company; I wanna spend more time with them ◆ I hurt or abandoned them in a moment of rage or overindulgence ◆ I’m teaching them about my ways, whether they like it or not ◆ They are weak and pathetic; I will make them strong ◆ They showed me a new comfort of these lands; I want more of it! ◆ They’re the only one I’d trust with my life ◆ They’ve seen my homeland more recently than me",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Rage!",
   "body": [
    "When you enter a rage, mark Angry. When you calm down, you may mark a different Condition to clear Angry. While Angry, you get the following penalties and benefits:",
    "◆ When you deal max dmg, increase the dmg by str",
    "◆ Ignore penalties from Conditions when you Trade Blows+STR or Defy Danger+STR",
    "◆ Whenever you would mark a Condition (including from calming down), you may instead suffer 1d4 dmg #piercing",
    "◆ You can’t benefit from wearing armor (you can still wear a shield, though)",
    "◆ If you don’t act on your Rage at least once per scene you’re in (usually attacking someone or something), mark an additional Condition at the end of that scene"
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose a weapon (or create a new one with the GM):",
    "rows": [
     [
      "ancestral longsword 1d6 #close + shield O use. Mark to ignore all dmg from one attack"
     ],
     [
      "bloodstained greataxe 1d8 dmg #close #two-handed #forceful"
     ],
     [
      "dual hammers 1d6 dmg #close #light, adv on dmg rolls"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "hearty feast O use. Mark to share it with your allies; everyone recovers half their max HP (rounded down)"
     ],
     [
      "potion of healing O use. Mark to recover half your max HP or clear a locked Condition"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ],
     [
      "trap kit OO uses. When you spend time setting up a trap, mark once to create a dangerous, impeding hazard for anyone in its range; it typically deals 1d4 dmg"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "cultural raiment",
      "hides and furs",
      "intricate tattoos"
     ],
     [
      "impressive scar",
      "massive stature",
      "monster skull trophy"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 12 and your str is +2. Choose wis or cha to be +2 too, then assign 0, 0, and -1 to the others.",
  "maxHp": 12,
  "nameExamples": "e.g. Alareiks, Clovis, Boudica, Etzel, Gaisarix, Gorm, Haepha, Hariman, Otakar, Silas, Tiidrik",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "barbarian",
  "paths": [
   {
    "name": "Berserker",
    "tagline": "You’re the hardest of them, with a touch of the uncanny",
    "moves": [
     {
      "name": "Trance-Like Fury",
      "first": true,
      "body": [
       "Gain the Rage! Barbarian Starting Move.",
       "If you already have Rage! then you get the following additional benefits and penalties:",
       "◆ Add your str to your armor",
       "◆ When you calm down, mark an additional Condition",
       "◆ When you Trade Blows, you and your foe have adv to their dmg rolls"
      ],
      "widgets": []
     },
     {
      "name": "Red Nails",
      "first": false,
      "body": [
       "Once per session, when you become Bloodied (your HP reaches half or less), clear a Condition.",
       "While Bloodied, increase all dmg you deal by 1.",
       "When you deal dmg to a Bloodied foe, it’s #piercing"
      ],
      "widgets": []
     },
     {
      "name": "Spine-Chilling Countenance",
      "first": false,
      "body": [
       "You can Pull Strings+STR by physically overpowering or manhandling them. If you do and they go back on their word later, gain adv the next Move you roll against them."
      ],
      "widgets": []
     },
     {
      "name": "The Beast Within",
      "first": false,
      "body": [
       "When you unleash the beast inside while Angry, you shapeshift into a hybrid form between yours and one of following animals:",
       "◆ Bear. You Resist mundane weapons and fire",
       "◆ Boar. You Resist fear, terror, and intimidation, even from supernatural sources",
       "◆ Wolf. Increase your dmg dice size one step",
       "To put the beast back under requires a great effort; mark a Condition."
      ],
      "widgets": []
     },
     {
      "name": "When It Earns Me",
      "first": false,
      "body": [
       "When you Face Death while Angry, you may also choose the option below.",
       "◆ Spit in Death’s Face. Recover all HP and you don’t become Helpless. Don’t lock a Condition either.",
       "When you do, lose access to this Move until you gain it as an Advancement again."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Hedonist",
    "tagline": "You know what is best in life, and how to take it",
    "moves": [
     {
      "name": "Herculean Appetite",
      "first": true,
      "body": [
       "You have a grand and terrible need that pushes you to greater heights and deeper depths. Say what it is now.",
       "Appetite: ____________________________________________ Examples include: fame and glory, mortal pleasures, power over others, riches and property, the pride of my ancestors, the thrill of chaos, utter destruction.",
       "You have the additional Condition, Unsatisfied. It can be marked, locked, and cleared the same as any Condition, and Reach Your Limit only triggers when it has also been marked.",
       "While Unsatisfied is marked, you have dis to all Move rolls that don’t pursue satisfaction of your appetite.",
       "Whenever you look to satisfy your appetite, ask the GM how to pursue it here and now; they will tell you, usually with a risk or cost. When you satiate it, clear Unsatisfied. If locked, it only clears if you gratuitously overindulge it, usually with extreme cost and/or risk."
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Unsatisfied",
        "n": 1
       }
      ]
     },
     {
      "name": "Basking in Victory",
      "first": false,
      "body": [
       "When you satiate an appetite to the extreme (destroy something precious, gain enormous fame, mountains of riches, etc.), in addition to clearing Unsatisfied, choose two: ◆ Clear an additional Condition ◆ Gain 1 Depth with a PC that helped you satisfy it ◆ Mark 1 XP ◆ Rewrite one of your appetites"
      ],
      "widgets": []
     },
     {
      "name": "Forthright Speech",
      "first": false,
      "body": [
       "When you smash through social etiquette to call something what it really is, roll+ cha. ✴On a 10+, name someone here who agrees and is willing to help, and clear a Condition. ✴On a 7-9, you find an ally or clear a Condition (your call). ✴On a 6-, you’ll regret your honesty; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Insatiable",
      "first": false,
      "body": [
       "You have a second appetite. What is it? Did you always have it? While you’re Unsatisfied, you only need to pursue one of your appetites to not suffer its penalty. When you look to satisfy your appetite, tell the GM which one before they tell you how.",
       "Appetite: ____________________________________________"
      ],
      "widgets": []
     },
     {
      "name": "Strong As a Bull",
      "first": false,
      "body": [
       "When you strain yourself to break free of a restraint or compulsion (physical or mental), you can mark a Condition to automatically succeed."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Outlander",
    "tagline": "You can’t take the homeland out of the…",
    "moves": [
     {
      "name": "Where I Come From…",
      "first": true,
      "body": [
       "When you tell someone a new story from your homeland (or about its practices, stories, traditions, etc.), mark and answer a question below and clear a Condition. When all five are marked, gain 1 XP and clear all questions.",
       "▢ What drawback or failure of your homeland still bothers you?",
       "▢ What heroes or monsters feature in your homeland’s stories?",
       "▢ What unique wonder or danger is native to your homeland?",
       "▢ What food, art, or event is central to your homeland’s lifestyle?",
       "▢ Who from your homeland do you look up to—or despise?"
      ],
      "widgets": []
     },
     {
      "name": "Pack Reader",
      "first": false,
      "body": [
       "When you Sense the Motive of a group of people, you may ask an extra question below, no matter the roll. ◆What recent event still troubles or excites them? ◆Who have they outcast recently, and where can I find them? ◆Who is hiding a secret from the others? ◆Who’s really in charge here?"
      ],
      "widgets": []
     },
     {
      "name": "Sacrificial Rite",
      "first": false,
      "body": [
       "When you ritually sacrifice something significant to your homeland’s wardens (be it ancestors, deities, spirits, totem, etc.), roll+WIS. ✴On a 10+, gain all three. ✴On a 7-9, choose two. ◆ Ask the GM a question about an enemy; they’ll answer honestly ◆ Everyone who participated in the ritual clears a Condition ◆ Gain a blessing proportional to the offering you made. ask for what you want, the GM will say what you get. ✴On a 6-, choose one, but the wardens will not accept your sacrifices again until you’ve fulfilled a demand; mark XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Tread the Jeweled",
      "first": false,
      "body": [
       "When you Sense the Motive of someone more powerful than you (politically, physically, economically, etc.), you may always also ask them “How can I best ruin or humiliate you?”. When you accomplish it, mark 1 XP and clear a Condition."
      ],
      "widgets": []
     },
     {
      "name": "Unerring Intuition",
      "first": false,
      "body": [
       "When you arrive at a place you haven’t visited before, roll+WIS. ✴On a 10+, the GM will tell you what’s terribly wrong here; ask a follow-up question and gain adv to the first Move you roll when acting on the answer. ✴On a 7-9, as a 10+ but the answer disturbs or unsettles you; mark a Condition. ✴On a 6-, you get a cryptic hint…And nothing more; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "bard": {
  "title": "The Bard",
  "tagline": "An artist through and through, with ambitions far beyond merely pleasing an audience",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. gnome, orc, giantkin, etc. What makes your art different from your people’s?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. ever-curious scholars, filthy rich people,, reclusive artists, etc. How do your life circumstances still influence your art?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. dreaming librarian, gossipmonger sailor, prestigious curator, etc. Why did you choose art and danger over a simpler life?"
   }
  ],
  "relationshipExamples": "I would never betray or abandon them… again ◆ We are were an item. It’s complicated ◆ They are a fan of my art—and me, of course! ◆ They are my Muse ◆ They help me perform; with them, everything’s better ◆ They know a secret of my art; I need to convince them to share it with me ◆ They think my art’s useless; I’ll prove them wrong",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Perform for an Audience",
   "body": [
    "You express yourself and affect others with a particular artistic skill. Is it cooking, music, poetry, or something else? When you perform your art for an audience, roll+CHA.",
    "✴On a 10+, choose three from below. ✴On a 7-9, only two. ✴On a 6-, you feel the performance was awful; choose one below, but mark a Condition. An option chosen more than once must apply to a new audience member.",
    "◆ Affect — An audience member clears a marked Condition",
    "◆ Connect — A PC audience member marks 1 Depth with you",
    "◆ Craft — Regain one use of artistic samples (see below)",
    "◆ Dazzle — An NPC audience member gives you a gift or tries to meet you privately (their call)"
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose a weapon (or create a new one with the GM):",
    "rows": [
     [
      "a noble’s crossbow 1d8 dmg #ammo #near #far #precise #piercing #reload #two-handed"
     ],
     [
      "deadly-sharp sword cane 1d6 dmg #concealed #hand #precise #two-handed"
     ],
     [
      "decorated long sword 1d6 dmg #hand + buckler O use. Mark to ignore half dmg (rounded down) from one attack"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "artistic samples OO uses. Mark once to share with an NPC while you Sense Motive to roll with adv"
     ],
     [
      "bag of books OOO uses. Mark to find a record of relevant information"
     ],
     [
      "fine delicacies O use. Mark while you Make Camp to recover all hp. You can share with any number of PCs. Everyone who eats gets the benefit"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "colorful costume",
      "fanciful suit/dress",
      "masked leathers"
     ],
     [
      "durable lute",
      "enormous wok",
      "numerous paintbrushes"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 8 and your cha is +2. Choose dex or int to be +1, then assign +1, 0, and -1 to the others.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "bard",
  "paths": [
   {
    "name": "Dabbler",
    "tagline": "Jack of all trades, master of none",
    "moves": [
     {
      "name": "Bardic Lore",
      "first": true,
      "body": [
       "You’ve studied a variety of arcane subjects, including:",
       "▢ A Bestiary of Creatures Most Unusual",
       "▢ Gods and Their Servants",
       "▢ Grand Histories of the Known World",
       "▢ Legends of Heroes Past",
       "▢ Spells and Magicks",
       "▢ The Dead and Undead",
       "▢ The Planar Spheres",
       "Mark one as active when you choose this Move. You can ask the GM questions about your active subject times per session equal to your int; the GM will answer truthfully. When you Make Camp, you can spend some time studying and/or remembering your training to change your active subject."
      ],
      "widgets": []
     },
     {
      "name": "A Kind of Magic",
      "first": false,
      "body": [
       "You can Cast a Spell+INT by combining a verb and a substance from the Wizard’s Enchantment (substance: sapient beings; verbs: modify emotions; temporarily charm) or Illusion (substance: sight and/or sounds; verbs: cloak; disguise) Schools. To Cast a Spell you need to do a performance, and your unique ✴7-9 option is:",
       "◆ Your magic is drained; forget one of the Schools of Magic you have access to until you next Make Camp",
       "If you could already use these Schools, work with the GM to create a new verb for each redundant School."
      ],
      "widgets": []
     },
     {
      "name": "A Knave, a Rascal",
      "first": false,
      "body": [
       "You get access to the following Roguish Skills: ◆ climb walls ◆ detect noises ◆ pick pockets ◆ understand languages. When you Defy Danger or Sneak Past using one of your Roguish Skills, you may roll+INT (instead of another Stat)."
      ],
      "widgets": []
     },
     {
      "name": "Artisan’s Apprentice",
      "first": false,
      "body": [
       "Gain the Perform Your Art Starting Move from the Bard Class. If you already have Perform Your Art, you gain a second artistic skill. When you Perform Your Art by showcasing both artistic skills together, make an additional choice (no matter the roll)."
      ],
      "widgets": []
     },
     {
      "name": "Virtuoso’s Mind",
      "first": false,
      "body": [
       "You can have up to two Bardic Lore subjects active at a time. When you ask the GM a question about an active subject, instead of them answering you may choose to Spout Lore with adv. ✴On a 12+, you may answer (instead of the GM)."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Diplomat",
    "tagline": "Mastery of people is an art in and unto itself",
    "moves": [
     {
      "name": "The Oldest Game",
      "first": true,
      "body": [
       "When you accomplish a significant task for a relevant NPC (GM’s call), now you hold a Debt against them. While you hold a Debt over someone: ◆ Treat any 6- when you Pull Strings on them as a 7-9 ◆ You can always ask them “What do you really need right now?” when you Sense Motive, regardless of the roll ◆ They’ll give you small favors (in their eyes), such as: minor funding; introduction; lent items; etc.",
       "When you cash in your Debt, choose one: ◆ Name something they have; they’ll give it to you ◆ Point them at an enemy or obstacle; they’ll act against it ◆ Tell them you’re in trouble; they’ll protect you."
      ],
      "widgets": []
     },
     {
      "name": "Cards on the Table",
      "first": false,
      "body": [
       "When you reveal your true intentions to a foe or stranger, you may ask them a number of questions from the list below, up to your cha (min 1). They will answer honestly, but ask a question back from the list in return each time. At the end of the scene, if you lied in your own answers, lock a Condition.",
       "How might I convince you to _____? ◆ What do you most want me to do? ◆ What leverage or advantage do you have? ◆ What obligation or vulnerability is limiting you? ◆ Who or what do you serve?"
      ],
      "widgets": []
     },
     {
      "name": "Countercharm",
      "first": false,
      "body": [
       "When you try to impede a mind-influencing effect, roll+CHA. ✴On a 10+, it doesn’t affect you or your allies. ✴On a 7-9, you or your allies are unaffected (your call). ✴On a 6-, it’s beyond your ken; mark 1 XP and the GM makes a Move.",
       "Once per scene, when you or an ally would mark a Condition due to external influence, you (or they) don’t."
      ],
      "widgets": []
     },
     {
      "name": "Friends in High Places",
      "first": false,
      "body": [
       "When you seek the help of a relevant NPC, roll+CHA. If you owe them a favor (your call) or hold a Debt against them, roll with adv. ✴On a 10+, they’re free and able to help. ✴On a 7-9, they’re in trouble and can’t help until that’s dealt with. ✴On a 6-, you find only treachery or tragedy; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Parley",
      "first": false,
      "body": [
       "When you call for a truce or ceasefire, roll+CHA. If you know what all parties want (or you hold a Debt against them), roll with adv. ✴On a 10+, hostilities pause and you get a chance to negotiate; you can also ask them one question as if you Sense Motive. ✴On a 7-9, you only get the chance to negotiate. ✴On a 6-, they misread or exploit your intent; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Swashbuckler",
    "tagline": "There’s beauty in all things, even fighting!",
    "moves": [
     {
      "name": "Style is Everything",
      "first": true,
      "body": [
       "Once per Scene, when you do something in an unnecessarily dramatic manner, you may mark a Condition to reset Panache to equal your cha.",
       "While you have Panache, when you Trade Blows using a #precise weapon, you can roll+CHA (instead of +DEX), and you may spend 1 Panache to gain adv on the roll."
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Panache",
        "n": 3
       }
      ]
     },
     {
      "name": "Fly Into the Face of Danger",
      "first": false,
      "body": [
       "When you Defy Danger by attempting something you’ve never tried before, after the roll you may spend 1 Panache to treat a 6- as if it were 7-9, or a 7-9 as if it were a 10+."
      ],
      "widgets": []
     },
     {
      "name": "I Am Not Left-Handed!",
      "first": false,
      "body": [
       "When you Trade Blows, after you roll you can spend 1 Panache to do one of the following:",
       "◆ Disarm — ✴On a 10+, you can make your opponent drop something they’re holding (instead of the other choices)",
       "◆ Feint — #pierce your opponent’s armor, ignoring it for this blow",
       "◆ Parry — Reduce dmg received by your cha, to a minimum of 0"
      ],
      "widgets": []
     },
     {
      "name": "Very Intricate Backstory",
      "first": false,
      "body": [
       "You can have two Struggles active at the same time. Now or the next time you Make Camp, clear a locked Condition (if possible) or Level Up and Reveal a Struggle."
      ],
      "widgets": []
     },
     {
      "name": "Watch Me Shine",
      "first": false,
      "body": [
       "When​ ​you​ ​draw attention by doing something unnecessarily dramatic, you may spend 1 Panache​ to r ​ oll+DEX.​ ✴​ On​ ​a​ ​10+,​ ​ choose two.​ ✴​ On​ ​a​ ​7-9,​ ​only one:",
       "◆ Defuse​ ​or​ ​intensify​ ​a​ ​situation (your call)",
       "◆ Your​ ​allies are ignored; they get an opportunity",
       "◆ Your​ drama ​isn’t​ ​interrupted,​ ​by​ ​word​ ​or​ ​by​ ​violence ✴On a 6-, the attention is followed by violent action; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "cleric": {
  "title": "The Cleric",
  "tagline": "No mere priest, a divine emissary armed with steel and powers from above",
  "relationshipSlots": 4,
  "deity": true,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. halfling, owlkin, tiefling, etc. What is their view of your faith?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. a bunch of lowlifes, devout people, law enforcers, etc. What traditions do you still honor separately from your deity?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. disillusioned sheriff, helpless urchin, skeptical wizard’s apprentice, etc. What “divine intervention” made you quit and become a cleric?"
   }
  ],
  "relationshipExamples": "I frequently need to mediate on their behalf ◆ My deity showed me their destiny ◆ We share very similar beliefs ◆ They follow a power who opposes my deity ◆ They have a history with a sworn enemy of my deity ◆ They have lost their way; I need to help them ◆ They knew me from before I found my faith",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "spellEffects": [
   "Craft: assemble or create objects, dismantle crafted objects, know who created something. Law: command someone, detect deceit, summon enforcers. Light: light up a room, conjure light-based illusions, call down searing light from above. Nature: rapidly grow vegetation, summon animals to your aid, change the weather. Travel: find or create shelter, carve a path through a hazard or obstacle, teleport somewhere."
  ],
  "startingMove": {
   "name": "Invoke the Divine",
   "body": [
    "You have a close connection with a deity who empowers you to spread their ideals. Give them a name and pronouns, then choose one per row below (or write your own):",
    "◆ Domain: ☐ Craft ☐ Law ☐ Light ☐ Nature ☐ Travel",
    "◆ Worshippers: ☐ artists ☐ explorers ☐ farmers ☐ merchants",
    "☐ nobles",
    "◆ Enemies: ☐ bandits ☐ industrialists ☐ nocturnal monsters ☐ rebels",
    "☐ undead",
    "You can Cast a Spell+WIS with any effect under your deity’s Domain(s). To Cast a Spell you need to invoke your deity’s name aloud. Write a 2-Depth Relationship with them. When you Cast a Spell this way, your unique ✴7-9 option is:",
    "◆ your deity disapproves; erase 1 Depth with them",
    "You can gain Depth with your deity by protecting their worshippers, spreading their faith, and vanquishing their enemies (GM’s call)."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose a blunt weapon (or create a new one with the GM):",
    "rows": [
     [
      "consecrated mace 1d6 dmg #hand + shield O use. Mark to ignore all dmg from one attack"
     ],
     [
      "plain quarterstaff 1d6 dmg #close #hand #two-handed"
     ],
     [
      "reinforced net 0 dmg #close #hand O use. Mark to trap one medium or some small creatures under it"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "holy water vials #holy #close OOO uses. Mark to ignore all Resistances of an enemy of your deity until the end of the Scene"
     ],
     [
      "leather armor dmg reduction 1 (reduces all incoming dmg by 1, to a min of 1). Min STR+1 to use properly"
     ],
     [
      "medicine OO uses. Mark to have someone double the HP they recover next or to cure a minor disease or poison"
     ],
     [
      "pious supplies OOO uses. Mark to rummage through and find an item used in your deity’s worship, such as candles, censer, incense, or holy vestments"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "ancient uniform",
      "prized hide coat",
      "simple robes"
     ],
     [
      "animated tattoo",
      "blessed amulet",
      "stolen reliquary"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 8 and your wis is +2. Choose str or cha to be +1, then assign +1, 0, and -1 to the others.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "cleric",
  "paths": [
   {
    "name": "Caregiver",
    "tagline": "What good is a faith that doesn’t make the world whole?",
    "moves": [
     {
      "name": "The Greatest Miracle",
      "first": true,
      "body": [
       "Gain the Invoke the Divine Cleric Starting Move if you don’t already have it, except your deity’s domain is Life. Choose your deity’s worshippers and enemies as detailed in the Move. If you already have Invoke the Divine, add Life to your deity’s domains. Is this a new aspect of your deity, a result of your unique connection to them, or something else?",
       "Battlefield Medic — Once per session, when you endanger yourself to protect or heal someone, gain 1 Depth with your deity. Cure Wounds — Whenever you Cast a Spell to heal someone (e.g. restore HP, cure disease, etc.), treat the mag as if it were 1 lower when comparing it to your Casting Stat."
      ],
      "widgets": []
     },
     {
      "name": "Awake! The Shadow Is Gone",
      "first": false,
      "body": [
       "When someone else Faces Death in your presence, you may parley with Death and grant the other PC access to the following option:",
       "◆ Revivified — You’re no longer Helpless and you recover half your max HP. You still lock a Condition after Facing Death.",
       "If they choose this, you cannot use this Move again until you’ve settled your deal with Death."
      ],
      "widgets": []
     },
     {
      "name": "I’ll Carry It For You",
      "first": false,
      "body": [
       "When you touch someone else and offer yourself as a sacrifice, erase 1 Depth with your deity then do either or both:",
       "◆ Choose any Conditions they have; they clear those Conditions, and you mark them",
       "◆ Choose any amount of HP they are missing; they restore it, and you lose them"
      ],
      "widgets": []
     },
     {
      "name": "Face of an Angel",
      "first": false,
      "body": [
       "No one will attack you directly and unprovoked, unless they’ve seen you fight or have a score to settle. When you Pull Strings, you get access to the following approach:",
       "◆ If you implore them to turn away from violence, they might leave now or change their mind later."
      ],
      "widgets": []
     },
     {
      "name": "Mass Cure Wounds",
      "first": false,
      "body": [
       "When you proclaim your faith, erase 1 Depth with your deity to restore half of your and your #close allies maximum HP (rounded down)."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Oracle",
    "tagline": "Things that were, are, and yet may be",
    "moves": [
     {
      "name": "Visions From Above",
      "first": true,
      "body": [
       "Gain the Invoke the Divine Cleric Starting Move if you don’t already have it, except your deity’s domain is Knowledge. Choose your deity’s worshippers and enemies as detailed in the Move. If you already have Invoke the Divine, add Knowledge to your deity’s domains. Is this a new aspect of your deity, a result of your unique connection to them, or something else?",
       "Guidance — Now and at the start of each session, roll 1d6 as your Fate Die and keep its result. Once per scene, after someone rolls for a Move (not for dmg or similar), you may switch one die with your Fate Die. The die that was switched out becomes your new Fate Die."
      ],
      "widgets": [
       {
        "type": "field",
        "label": "Fate Die"
       }
      ]
     },
     {
      "name": "A Moth to the Sacred Flame",
      "first": false,
      "body": [
       "When you willingly expose yourself to an enemy attack, roll+ cha; if you’re vulnerable while doing so, roll with adv. ✴On a 10+, they boast and babble at you, and you can ask any two questions about them or their superiors. ✴On a 7-9, you can ask one question, but after answering they’ll turn to violence. ✴On a 6-, they’re far more cunning or powerful than they appear (GM’s call); mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Haruspication",
      "first": false,
      "body": [
       "When you ritually sacrifice something important, ask your deity one question about your sacrifice or something associated with it",
       "(owners, loved ones, history, etc.), and roll+WIS. ✴On a 10+, your deity shows you a vivid vision that answers your question fully. ✴On a 7-9, the vision is cryptic and it’ll need deciphering. ✴On a 6-, your vision includes an omen of doom; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Sacred Truth",
      "first": false,
      "body": [
       "Once per session, when you publicly reveal the truth about a secret or mystery, gain 1 Depth with your deity. If someone present doesn’t want it known, you also gain adv on your next rolled Move against them."
      ],
      "widgets": []
     },
     {
      "name": "True Colors",
      "first": false,
      "body": [
       "When you Sense Motive, you can also ask one of the following questions, even on a 6-. ◆ What are your true feelings about me? ◆ What do you not want to admit (to me, to another, to yourself, etc.)? ◆ Who or what do you care for most of all?"
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Warpriest",
    "tagline": "Evil cannot be tolerated",
    "moves": [
     {
      "name": "Punishment Divine",
      "first": true,
      "body": [
       "Gain the Invoke the Divine Cleric Starting Move if you don’t already have it, except your deity’s domain is War. Choose your deity’s worshippers and enemies as detailed in the Move. If you already have Invoke the Divine, add War to your deity’s domains. Is this a new aspect of your deity, a result of your unique connection to them, or something else?",
       "Divine Shield — Once per scene, when you take dmg, you may erase 1 Depth with your deity to ignore it, even if it is #piercing. Rebuke — Once per session, when you condemn someone for their evil ways, gain 1 Depth with your deity."
      ],
      "widgets": []
     },
     {
      "name": "Divine Intuition",
      "first": false,
      "body": [
       "When you encounter an enemy of your deity, you may ask the GM questions about it equal to your wis. You get adv on your first roll related to the answer(s)."
      ],
      "widgets": []
     },
     {
      "name": "Drink from the Cup of Wrath",
      "first": false,
      "body": [
       "When you condemn someone for their evil ways, instead of gaining 1 Depth with your deity, you may make the condemned an enemy of your deity (if they aren’t already).",
       "When you petition your deity to harm or curse a collective enemy (e.g. a faction, creature type, inhabitants of a location, etc.), treat it as Perform a Ritual, but after the GM tells you the requirements you may erase Depth with your deity, 1-for-1, to miraculously fulfill them."
      ],
      "widgets": []
     },
     {
      "name": "Not the End",
      "first": false,
      "body": [
       "When you Face Death, you can also choose the following option:",
       "◆ Divine Intervention. Your deity miraculously saves your life, banishes a danger, enemy or obstacle, then restores all your HP. You’re no longer helpless. You still lock a Condition after Facing Death."
      ],
      "widgets": []
     },
     {
      "name": "Spiritual Weapon",
      "first": false,
      "body": [
       "When you shout your deity’s name like a battle cry, their power fills any weapon you wield until the end of the scene. Choose one blessing below, or erase 1 Depth with your deity to choose two. ◆ Add +1 to all dmg it deals ◆ It #pierces the armor of your deity’s enemies ◆ It can hover and fight on its own as an extension of your will; treat it as a loyal NPC, when it takes dmg it loses this benefit unless you feed it your lifeforce to continue (lose 1 HP)."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "druid": {
  "title": "The Druid",
  "tagline": "A disciple of nature who communes with the spirits and transforms into animals",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. centaur, spiderkin, treefolk, etc. What physical feature persists throughout your transformations?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. obstinate industrialists, pack of wild animals, sacred protectors, etc. How do they see nature compared to you?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. brilliant artisan, devoted hermit, wealthy heir(ess), etc. Who wants you to return to your old, “civilized” life?"
   }
  ],
  "relationshipExamples": "I feel drawn to them, but we come from such different places ◆ The spirits gave me a warning about them ◆ They are blind to nature’s beauty; I’ll open their eyes ◆ They think my forms amusing; I don’t know how I feel about that ◆ They understand nature in a fascinatingly different way from mine ◆ They’ve defended nature before, and thus have my respect ◆ They’ve shown me an intriguing benefit of civilization",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Shapeshift",
   "body": [
    "When you transform into a beast you’ve encountered before, describe your new shape, choose an adaptation below, and roll+WIS. If you encountered the beast before the game began, the GM may ask for details.",
    "◆ fast & agile — 1d6 dmg #precise #hand #close",
    "◆ mobile & acclimated — 1d4 dmg #hand, can ☐ fly, ☐ swim, or ☐ burrow",
    "◆ small or camouflaged — 1 dmg #hand. You have adv to Sneak Past",
    "◆ tough & strong — Armor 2, 1d8 dmg #hand #close",
    "✴On a 10+, it works and you gain the adaptation’s benefits. ✴On a 7-9, it works, but the GM will say what compels your instincts; pursue it now or mark a Condition to resist it. ✴On a 6-, it works, but you lose control over it for now; mark 1 XP and the GM makes a Move.",
    "While shapeshifted you can’t communicate with anyone except other PCs. You can return to normal any time you’re in control, but must always do so when the scene ends."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose a weapon (or create a new one with the GM):",
    "rows": [
     [
      "flowering staff 1d4 dmg #close #two-handed OO uses. Mark instead of another item to produce a natural alternative"
     ],
     [
      "vine slingshot 1d6 dmg #near #ammo #two-handed"
     ],
     [
      "wooden club 1d6 dmg #close + shield O use. Mark to ignore all dmg from one attack"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "alchemical vials OOO uses. Mark to withdraw of any of the following types: acid, fire, or smoke"
     ],
     [
      "medicine OO uses. Mark to have someone double the HP they recover next or to cure a minor disease or poison"
     ],
     [
      "potion of healing O use. Mark to recover half your max HP or clear a locked Condition"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "earthy robes",
      "handmade leathers",
      "leaf-covered vestments"
     ],
     [
      "carved idol",
      "crown of antlers",
      "orphan seedling"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 8 and your wis is +2. Choose dex or cha to be +2, then assign 0, 0, and -1 to the others.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "druid",
  "paths": [
   {
    "name": "Animist",
    "tagline": "The natural world is alive in ways few mortals now understand",
    "moves": [
     {
      "name": "Anima Mundi",
      "first": true,
      "body": [
       "You have an especially close connection with the elemental spirits of the world—the roots, rocks, winds, waters, and more—and they see you as a guardian, caretaker, and ambassador. You can Cast a Spell by entreating natural spirits for aid. When you do so, your unique ✴7-9 option is:",
       "◆ The spirits demand a favor or sacrifice; the GM will say more after you choose this",
       "Each time you Cast a Spell this way, answer the questions below. Your Casting Stat for the spell starts at 0 and increases by 1 for each “Yes”.",
       "◆ Are you wielding and wearing no metal whatsoever?",
       "◆ Does this leverage a nearby natural feature or entity?",
       "◆ Will this restore harmony or advance a cycle of nature?"
      ],
      "widgets": []
     },
     {
      "name": "Back to Basics",
      "first": false,
      "body": [
       "When you reveal a new flaw or failure of civilization to one or more NPCs, clear a Condition, then roll+CHA. ✴On a 10+, choose two below. ✴On a 7-9, only one. ✴On a 6-, you draw an enemy’s attention; mark 1 XP and the GM makes a Move.",
       "◆ They account for the issue and start working to fix it",
       "◆ They attack or sabotage an enemy of nature",
       "◆ They protect you or nature from an imminent threat"
      ],
      "widgets": []
     },
     {
      "name": "Commune with Nature",
      "first": false,
      "body": [
       "When you spend time connecting with the natural spirits, ask one question below about the region you’re in, or ask all of them but mark a Condition after hearing the answers. The GM will answer honestly. ◆ Does anything here threaten the natural world? ◆ What danger or enemy here should we be aware of? ◆ What person or location here could be helpful to us?"
      ],
      "widgets": []
     },
     {
      "name": "Death & Regrowth",
      "first": false,
      "body": [
       "When you finish off a significant enemy, or when you suffer max dmg, gain 1 Lifeforce (max 2). You can spend Lifeforce as if it was a use of medicine."
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Lifeforce",
        "n": 2
       }
      ]
     },
     {
      "name": "Eye of the Storm",
      "first": false,
      "body": [
       "When you Cast a Spell by entreating natural spirits for aid, if all three questions are answered “Yes”, you can treat the mag as if it were 1 lower when comparing it to your Casting Stat."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Stargazer",
    "tagline": "As foretold above, so unfolds below",
    "moves": [
     {
      "name": "Eye in the Sky",
      "first": true,
      "body": [
       "You have a special connection to the sun(s), moon(s), and stars. You always know the time and date, and can never get lost while you can see the sky. While outside during the day, ignore dis from being Frightened and gain +1 Armor. While outside during the night, ignore dis from being Insecure and deal +1 dmg."
      ],
      "widgets": []
     },
     {
      "name": "Augury",
      "first": false,
      "body": [
       "When you read the future written in the stars, you can focus your reading on a specific place or person; roll+WIS, then the GM reveals an important event that will happen soon. ✴On a 10+, you may ask a follow-up question. ✴On a 7-9, the vision is disturbing; mark a Condition. ✴On a 6-, the event involves an ally’s terrible fate (PC or NPC); the GM will say how, but then you can twist the fate to fall upon you instead. Whoever suffers the terrible fate has dis on all rolls during the event."
      ],
      "widgets": []
     },
     {
      "name": "Doomsayer",
      "first": false,
      "body": [
       "When you proclaim an enemy’s imminent fate to them, roll+WIS. ✴On a 10+, choose two. ✴On a 7-9, only one. ✴On a 6-, you only see their success; mark 1 XP and gain dis against them until the end of the scene.",
       "◆ Pain — Increase dmg they take by 1 until the end of the scene",
       "◆ Regret — Gain adv the next time you or an ally Pulls Strings against them",
       "◆ Vulnerability — The GM will tell you a weakness they hide"
      ],
      "widgets": []
     },
     {
      "name": "Forecaster",
      "first": false,
      "body": [
       "After you successfully Make Camp, choose what the weather is like from the list below. It remains like this until someone changes it, you use this Move again, or you depart from the region. You and all companions gain the weather’s benefit.",
       "◆ clear skies — Clear a Condition when this is chosen",
       "◆ overcast — Ignore dis from being Exhausted",
       "◆ rain, fog, or snow — Gain adv to Sneak Past outside"
      ],
      "widgets": []
     },
     {
      "name": "Scion of Sunrise and Sunset",
      "first": false,
      "body": [
       "When outside during dawn or dusk, gain Eye in the Sky’s daytime and nighttime benefits. When you focus on your connection to the celestial bodies, you may mark a Condition to treat this scene as if it takes place outdoors during dawn or dusk."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Wildheart",
    "tagline": "Follower of the oldest path, wild & weary as the beasts",
    "moves": [
     {
      "name": "Primeval Whisperer",
      "first": true,
      "body": [
       "You can communicate freely with wild creatures. When you Sense the Motive of a wild creature, no matter the result you may ask them an extra question, even on a ✴6-. When you Pull the Strings of a wild creature, if your approach aligns with their desires or instincts, roll with adv."
      ],
      "widgets": []
     },
     {
      "name": "Call of the Wild",
      "first": false,
      "body": [
       "When you call out to the wilderness for aid, choose a suitable type of wild creature for your current environment and roll+CHA. ✴On a 7+, that wild creature arrives to help you for the scene as an allied NPC. ✴On a 10+, choose two. ✴On a 7-9, only one.",
       "◆ A pack or group of them arrive instead of just one",
       "◆ They accompany you for a period after this scene ends",
       "◆ They cause no collateral damage or turmoil while here",
       "◆ They intimidate or distract an enemy upon their arrival ✴On a 6-, you instead draw nature’s ire or hunger; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Raised by Wolves",
      "first": false,
      "body": [
       "Choose one type of wild creature (e.g. bears, eagles, wolves). By default, they treat you as a friend and your companions as allies by association. When you spend time with your chosen wild creature, choose one if alone or two if with another PC.",
       "◆ exchange gifts — Regain a spent use of an item",
       "◆ listen to their stories — Learn about a nearby danger or obstacle as if you rolled a ✴7-9 to Spout Lore",
       "◆ relax and recharge — Clear a Condition"
      ],
      "widgets": [
       {
        "type": "field",
        "label": "Creature"
       }
      ]
     },
     {
      "name": "Rumour From the Earth",
      "first": false,
      "body": [
       "When you Unearth Secrets or Sense Motive by questioning nearby wild creatures, you may roll+CHA."
      ],
      "widgets": []
     },
     {
      "name": "Together as One",
      "first": false,
      "body": [
       "When you mark a wild creature with blood, mud, or dirt, erase previous marks, then you can share in their senses as if they were yours (and vice versa), no matter what distance separates you."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "fighter": {
  "title": "The Fighter",
  "tagline": "An expert in arms and armor; a professional in the deadliest proving ground",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. dragonborn, human, nephilim, etc. What fighting lesson from your childhood still stays with you?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. peaceful farmers, self-sacrificing miners, tough sailors, etc. Did they appreciate fighting prowess? Why?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. feral child, respected miner, tireless healer, etc. What cause made you leave your former life of peace behind?"
   }
  ],
  "relationshipExamples": "They desperately need training ◆ We have a kill count competition going ◆ They saw me defeated and afraid ◆ I look to them for guidance ◆ They owe me their life ◆ They knew me from before ◆ They will get us all killed",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Signature Weapon",
   "body": [
    "You wield a unique, distinctive weapon. To start with, choose its base (or create a new one with the GM):",
    "☐ a small pair — 1d4 dmg #hand #precise #light adv on dmg rolls",
    "☐ medium-sized & versatile — 1d6 dmg #close",
    "☐ large-sized & powerful — 1d8 dmg #close #two-handed",
    "☐ Ranged — 1d6 dmg #near #ammo #reload #two-handed",
    "Then, choose two enhancements: ☐ adaptable (choose an extra range: #hand, #close, #near, #far) ☐ adamantine (it’s indestructible) ☐ alarming (glows in the presence of one creature type) ☐ grappling (after dealing dmg, you can pull a target closer to you) ☐ #piercing (ignores armor)",
    "☐ pinning (after damaging a creature your size or smaller, you can briefly immobilize them) ☐ #precise (can Trade Blows+DEX) ☐ sharp (increase dmg by 1.",
    "Finally, give your weapon a name. Examples include: Ataraxia, Cryptbreaker, Moonshadow, Sigil, Tempest, The Last Breath, The Rustbucket, Torrents of Blood"
   ],
   "widgets": [
    {
     "type": "field",
     "label": "Weapon Name"
    },
    {
     "type": "field",
     "label": "Appearance"
    }
   ]
  },
  "equipment": [
   {
    "title": "Choose an additional weapon (or create a new one with the GM):",
    "rows": [
     [
      "intimidating greataxe 1d8 dmg #hand #two-handed"
     ],
     [
      "twin shortswords 1d6 dmg #hand #light #precise, adv on dmg rolls"
     ],
     [
      "yew longbow 1d6 dmg #ammo #near #far #reload #two-handed"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "breastplate dmg reduction 2 (reduces dmg taken by 2, to a min of 1) req. STR+2, or"
     ],
     [
      "studded leather dmg reduction 1 (reduces dmg taken by 1, to a min of 1). req. STR+1"
     ],
     [
      "medicine OO uses. Mark to have someone double the HP they recover next or to cure a minor disease or poison"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ],
     [
      "shield O use. Mark to ignore all dmg from one attack"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "champion’s belt",
      "flowing cape",
      "tattered military badge"
     ],
     [
      "battered greaves",
      "iconic helmet",
      "intricately decorated vambraces"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 10. Choose str or dex to be +2 and the other to be +1, then assign +1, 0, and -1 to the others.",
  "maxHp": 10,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "fighter",
  "paths": [
   {
    "name": "Bulwark",
    "tagline": "Unstoppable force? Meet immovable object!",
    "moves": [
     {
      "name": "Stalwart Protector",
      "first": true,
      "body": [
       "Once per session, when you suffer dmg that isn’t #piercing, you may ignore it entirely. If the dmg came from an enemy, also choose one: ◆ They leave themselves open and exposed ◆ You learn a weakness or limitation of theirs ◆ You infuriate or terrify them (GM’s call)—and they act accordingly",
       "I Am Your Shield — When you interpose yourself between a #near ally and an attack or source of dmg, you suffer its effects instead of them."
      ],
      "widgets": []
     },
     {
      "name": "Armiger",
      "first": false,
      "body": [
       "You know how to customize your armor and bring the best out of it. Choose one enhancement now: ☐ #concealed (it looks and sounds like mundane clothing) ☐ reinforced (increase the dmg reduction by 1) ☐ spiked (when a foe deals dmg to you, they take 1 dmg #piercing in return) ☐ warded (choose a non-physical dmg type such as acid or fire; it’s never #piercing for you).",
       "When you successfully Make Camp, you may clear a use of a shield or change which enhancement your armor has."
      ],
      "widgets": []
     },
     {
      "name": "Second Wind",
      "first": false,
      "body": [
       "When you Face Death, you also have access to the following option:",
       "◆ Not as Bad As It Looks. Grit your teeth, force yourself through the pain, and get back up with 1 HP. You’re no longer Helpless and you don’t lock a Condition, but you can’t choose this option again until after you successfully Make Camp."
      ],
      "widgets": []
     },
     {
      "name": "Silent Protector",
      "first": false,
      "body": [
       "When a combat situation begins, choose an ally (PC or NPC) #near you and gain the following benefits until the battle ends:",
       "◆ Retaliate. When they get hurt for 2 or more dmg, gain adv on your next roll against the dmg source",
       "◆ Watchful Eye. You can always appear #near them in a pinch, no matter where you were before. If you were in a tough spot, the GM will say how it’s developed since you left"
      ],
      "widgets": []
     },
     {
      "name": "Taunting Shout",
      "first": false,
      "body": [
       "When you cry out a challenge to your enemies, name one among them. For now, they will ignore your allies and treat you as the most obvious threat."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Weaponmaster",
    "tagline": "An expertise as ancient as it is deadly",
    "moves": [
     {
      "name": "The Blade Reforged",
      "first": true,
      "body": [
       "Gain a Signature Weapon, following the Fighter’s Starting Move of the same name. If you already have a Signature Weapon, either give it two more enhancements or gain a second Signature Weapon. When you Enjoy Downtime, you may also do the following:",
       "◆ Enhance. Spend 1 Treasure and choose a magic item or Artifact. It becomes part of your Signature Weapon, which gains the item’s properties, Moves, and whichever #tags make sense. A Signature Weapon may only be grafted with one item at a time; a previously-grafted item can be split as part of this activity."
      ],
      "widgets": []
     },
     {
      "name": "Advanced Fighting Styles",
      "first": false,
      "body": [
       "You’ve mastered an especially difficult or obscure fighting style. Choose one below:",
       "▢ Might of Arms. You can comfortably wield #two-handed melee",
       "weapons in one hand, and even dual-wield them",
       "▢ Point Blank. All ranged weapons you wield gain #hand and",
       "#close. While using one up #close or closer, deal +1 dmg",
       "▢ Spellbreaker. When a #close NPC tries to create a magical effect,",
       "you may interrupt and stop it; mark a Condition from backlash"
      ],
      "widgets": []
     },
     {
      "name": "Boot Knife",
      "first": false,
      "body": [
       "Any weapon that isn’t #two-handed can be easily #concealed by you. Gain a set of adventuring gear (even if you already have one). You may mark a use of adventuring gear to withdraw a mundane weapon; mark an additional use if the weapon is #two-handed."
      ],
      "widgets": []
     },
     {
      "name": "Secret Weapon",
      "first": false,
      "body": [
       "The Hand That Wields — When you Trade Blows with an ordinary weapon, or no weapon at all, ✴on a 10+, you may instead choose to clear a Condition and, ✴on a 6-, mark 2 XP instead of 1. When you finally draw your Signature Weapon after trying to defeat a foe without it, until the fight ends, after you roll to Trade Blows you may mark a Condition to increase the result by one step (6- → 7-9 → 10+)."
      ],
      "widgets": []
     },
     {
      "name": "Snap the Blade",
      "first": false,
      "body": [
       "When you inflict dmg with a weapon, after the dmg roll you may temporarily break the weapon (if it isn’t indestructible) to instead deal max dmg. The weapon becomes nearly useless until repaired.",
       "When you Make Camp, you may repair one Signature Weapon or mundane weapon that has been broken in this or a similar way."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Tactician",
    "tagline": "Audacious & cunning in planning, firm & persevering in execution",
    "moves": [
     {
      "name": "Plans Within Plans",
      "first": true,
      "body": [
       "When you enter a combat situation, gain Prep equal to your int (min 1). When the combat situation ends, lose all Prep. During the combat situation, you can spend 1 Prep to execute one of the following stratagems:",
       "◆ Charge! — You and willing allies rush different foes; everyone charging and being charged gets adv to their next dmg roll",
       "◆ Coordinated Maneuver — Aid a PC without a cost or risk; what does it look like?",
       "◆ Hammer & Anvil — Draw a foe’s attention; suffer 1 dmg #piercing and grant an ally adv on their next Trade Blows against them",
       "◆ Survey — Ask the GM a question about a foe’s strengths, weaknesses, or intentions, and they will answer truthfully"
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Prep",
        "n": 3
       }
      ]
     },
     {
      "name": "Eye for Destruction",
      "first": false,
      "body": [
       "When you set your mind to destroying something (building, obstacle, magical artifact, etc.), treat it like Perform a Ritual. If this is during a combat situation, you can spend Prep, 1-for-1, to negate a requirement, except for the last one."
      ],
      "widgets": []
     },
     {
      "name": "Honed Instincts",
      "first": false,
      "body": [
       "When you get a bad feeling about an upcoming situation (your call), mark a Condition then ask the GM how to avoid or prepare for it. Whether or not your hunch is right, the GM will give you one piece of advice; clear a Condition if you follow it."
      ],
      "widgets": []
     },
     {
      "name": "Old Comrades & Former Foes",
      "first": false,
      "body": [
       "When you go looking for someone from a past battle, friend or foe, choose one from the following list—or two if you owe them or put them at risk (your call): ◆ They’re willing to assist you with a current conflict ◆ They offer guidance, advice, or safety for some time",
       "◆ They reveal a significant secret or opportunity"
      ],
      "widgets": []
     },
     {
      "name": "Veteran of a Hundred Battles",
      "first": false,
      "body": [
       "When you reach 0 Prep, you may mark a Condition to regain 1 Prep. What past situation does this remind you of? Additionally, add the following stratagems to your Plans Within Plans:",
       "◆ Demoralize — A Bloodied foe surrenders or flees (GM’s call)",
       "◆ First Strike — An ally acts now, even if they’re surprised",
       "◆ Rallying Cry — A #near ally clears a Condition"
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "paladin": {
  "title": "The Paladin",
  "tagline": "A wondering do-gooder empowered by oaths & steel",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. dhampir, elemental, mousekin, etc. What custom among your people marks a formal oath or promise?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "E.g. a heartbroken vampire, fellow prisoners, forest dryads, etc. Who do you look up to despite them not being a paladin themself?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. daring revolutionary, evil warlord, kind free spirit, etc. What tragedy made you swear your vows?"
   }
  ],
  "relationshipExamples": "Oaths or not, they are an inspiration to me ◆ They saved me from a terrible fate, and I swore my life to them ◆ They seem to be hiding something malevolent; I will find out what ◆ They think I’m a stick in the mud; I’ll show them! ◆ They used to be my enemy in the past. Have they really changed? ◆ They’re leading me to break my oaths, knowingly or not ◆ They’re lost now, but were once as righteous as me",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Oaths of Conviction",
   "body": [
    "You have sworn righteous oaths and service to a liege; name them now. Example lieges include: a visionary leader; an august institution; a subversive organization, etc.",
    "You start with all five of the following oaths marked. As long as you uphold an oath, you can use its benefit:",
    "☐ Bravery (Always be the first one in and the last one out). When you Defy Danger, treat any ✴6- as a ✴7-9",
    "☐ Mercy (Never take a life). OOOOOO use. Max uses equal to twice your WIS (min 1). Mark one to touch someone with a bare hand and restore 1 HP. Regain all uses when you finish Making Camp",
    "☐ Protection (Never let an innocent die in your presence). Your weapons deal #holy dmg and add +1 to your armor",
    "☐ Purity (Never trick or deceive). You’re immune to all diseases and you can mark a Condition to cure someone else’s disease",
    "☐ Retribution (Never let an evildoer go unpunished). You can mark a Condition to perceive creatures with evil intent up to #near you. When you declare someone to have evil intent, from now on they suffer 1d4 dmg #piercing whenever they inflict dmg on you or your #close allies",
    "When you break an oath (your call), clear that oath and lock a Condition. When you find a way to atone (also your call), clear a Condition and mark a cleared oath."
   ],
   "widgets": [
    {
     "type": "field",
     "label": "Liege"
    }
   ]
  },
  "equipment": [
   {
    "title": "Choose an additional weapon (or create a new one with the GM):",
    "rows": [
     [
      "bloodied warhammer 1d8 dmg #close #two-handed #forceful"
     ],
     [
      "crossbow with silver tipped bolts 1d8 dmg #ammo #near #far #reload #two-handed"
     ],
     [
      "liege’s longsword 1d6 dmg #close and gleaming shield O use. Mark to ignore all dmg from one attack"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "half plate dmg reduction 2 (reduces dmg taken by 2, to a min of 1) req. STR+2"
     ],
     [
      "javelins 1d4 dmg #ammo #near #thrown"
     ],
     [
      "potion of healing O use. Mark to recover half your max HP or clear a locked Condition"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "battered helm",
      "modest cloak",
      "rusted coif"
     ],
     [
      "forgotten banner",
      "noticeable scar",
      "recognizable blazon"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 10. Your CHA is +2. Choose STR or WIS to be +2 too, then assign 0, 0, -1 to the others.",
  "maxHp": 10,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "paladin",
  "paths": [
   {
    "name": "Inquisitor",
    "tagline": "Rotten apples must be purged before they spoil the rest",
    "moves": [
     {
      "name": "Beware My Power",
      "first": true,
      "body": [
       "If you don’t have it, gain the Oaths of Conviction Paladin Starting Move, but with only the oath below. If you already have that Move, add this oath as well:",
       "▢ Castigation (Never allow an evildoer to live). When you Trade",
       "Blows with a creature with evil intent (GM’s call), add +1d6 #holy dmg",
       "Smite Evil — When you Trade Blows with a creature with evil intent, ✴On a 10+, add the following to the list of options available:",
       "◆ If they’re an outsider to this world, you banish them for a while",
       "◆ You mark their appearance permanently; describe how",
       "◆ You weaken their resolve; the GM will say what happens"
      ],
      "widgets": []
     },
     {
      "name": "By the Power Invested in Me…",
      "first": false,
      "body": [
       "When you give an NPC an order based on your authority, roll+STR. ✴On a 10+, they follow your order and you get adv to your next Move rolled against them. ✴On a 7-9, they choose one:",
       "◆ Back away cautiously, then flee ◆ Consult with another authority",
       "◆ Do as you say, but tell someone about it afterwards. ✴On a 6-, they dismiss your authority; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Mystical Imprisonment",
      "first": false,
      "body": [
       "When you name an evildoer and order them to stop, magical chains appear and bind them; roll+STR. ✴On a 10+, choose two below. ✴On a 7-9, only one. ◆ It lasts longer than a few moments",
       "◆ They can’t move ◆ They can’t speak or cast spells. ✴On a 6-, the chains can’t hold them; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Nomosmancy",
      "first": false,
      "body": [
       "You can Cast a Spell+STR to impose Order and deny a supernatural effect. When you do so, your unique ✴7-9 option is:",
       "◆ You get a supernatural stain; you can’t use this Move until you Make Camp"
      ],
      "widgets": []
     },
     {
      "name": "Public Condemnation",
      "first": false,
      "body": [
       "When you proclaim someone to be an evildoer to the public, roll+STR. ✴On a 10+, choose two from the list below. ✴On a 7-9, only one: ◆ They will hunt the evildoer down for you as a group",
       "◆ They will protect you from the evildoer ◆ You impress someone powerful (GM’s call); roll with adv the next time you Pull Strings on them. ✴On 6-, an evildoer is hidden among the crowd; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Paragon",
    "tagline": "An inspiration to anyone who meets you",
    "moves": [
     {
      "name": "Safeguard the Helpless",
      "first": true,
      "body": [
       "If you don’t have it, gain the Oaths of Conviction Paladin Starting Move, but with only the Protection oath. If you already have that oath, its benefits also stop foes from #piercing your armor. Hold the Line — When a #near NPC attempts to harm or move towards an ally, you may interpose and roll+CHA. ✴On a 10+ they can’t get past you. ✴On a 7-9, they get past you, but their next dmg dealt is halved (rounded down) ✴On a 6-, they find an opening against you and your ally; mark 1 XP and the GM make a Move."
      ],
      "widgets": []
     },
     {
      "name": "A Shot at Redemption",
      "first": false,
      "body": [
       "When you offer a defeated foe an opportunity to change their ways, offer them proof of your sincerity and roll+CHA. ✴On a 10+, they’ll make their best attempt at it. ✴On a 7-9, they’re interested but will need constant monitoring and guidance. ✴On a 6-, they aren’t ready; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "“For the Honor of…”",
      "first": false,
      "body": [
       "Once per session, when you assume a heroic form related to your Origins, choose benefits from below up to your CHA, which last until you Face Death, Reach Your Limit, or the scene ends, whichever happens first. ◆ All allies who witness it clear a Condition",
       "◆ All foes who witness it ignore your allies for now and treat you as the biggest threat ◆ Reduce dmg taken by half (rounded down) from NPCs with evil intent ◆ Your STR is +3"
      ],
      "widgets": []
     },
     {
      "name": "Inspiring Presence",
      "first": false,
      "body": [
       "When you rally your allies with a show of commitment, roll+CHA. ✴On a 10+, they all clear a Condition. ✴On a 7-9, you can mark a Condition so up to your CHA of them clear a Condition. ✴On a 6-, your action is ignored; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "You Will Not Break Me",
      "first": false,
      "body": [
       "When you Reach Your Limit, you may also choose from the options below. If you do, you only clear up to CHA Conditions, but may mark 1 Depth with a PC who helped you:",
       "◆ Angry — Make a show of force or lash out at your foes",
       "◆ Distracted — Pursue a suspicion or side-quest",
       "◆ Exhausted — Sound the retreat or make a personal sacrifice",
       "◆ Frightened — Confront your fears or confide in another",
       "◆ Insecure — Seek guidance or submit to authority"
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Questing Knight",
    "tagline": "Absolute commitment can achieve the impossible",
    "moves": [
     {
      "name": "On a Mission",
      "first": true,
      "body": [
       "When you dedicate yourself to a quest for your liege, describe it. If you already have a quest, erase it and mark a Condition. Then mark blessings up to your WIS. They remain while you stay true to your quest, and can be changed when you Make Camp. When you End the Session, mark 1 XP if you’ve made significant progress on your quest. When you finish your quest, mark 2 XP, recover all HP, clear a locked Condition, and lose your blessings.",
       "▢ Ardent Dedication — You know the direction of your quest",
       "▢ Immaculate Body — You are immune to a specific type of harm",
       "(fire, falling, arrows, etc.)",
       "▢ Golden Tongue — You can communicate with any sapient being",
       "▢ Seventh Sense — You can sense the presence of a creature type",
       "▢ Superhuman State — You don’t need food, water, or sleep"
      ],
      "widgets": [
       {
        "type": "field",
        "label": "quest"
       }
      ]
     },
     {
      "name": "I Dub Thee…",
      "first": false,
      "body": [
       "When you Face Death, you may also choose the following:",
       "◆ Newly Knighted. Name a PC, say why you believe in them, then die. If they accept, they gain this Path beyond normal limits."
      ],
      "widgets": []
     },
     {
      "name": "The Great Uniter",
      "first": false,
      "body": [
       "When you try to join or ally with a faction, or request assistance from your liege, if they aren’t your direct foes they’ll tell you of a big problem or goal they’re grappling with. If you help them resolve it, you earn their loyalty, and they’re willing to work alongside anyone, even their enemies, as long as you lead the efforts."
      ],
      "widgets": []
     },
     {
      "name": "Throw Down the Gauntlet",
      "first": false,
      "body": [
       "When you demand a one-on-one duel in response to an insult, your opponent cannot decline, but they can use a substitute, propose provisions, or add complications (GM’s call). Additionally, whenever you begin the duel, clear Conditions up to your WIS."
      ],
      "widgets": []
     },
     {
      "name": "Trusted Squire",
      "first": false,
      "body": [
       "XP OOOOO You have a young NPC at your service who carries your belongings, tends to your needs, and is learning to fight (1d4 dmg). When they suffer harm, mark a Condition. Once per session, when you teach them a lesson, Defy Danger+WIS. ✴On a 7+, they mark 1 XP. When the squire marks their 5th XP, they’re ready. You Level Up when you sponsor them and they leave to become a paladin themselves. Lose access to this Move until you take on a new squire."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "ranger": {
  "title": "The Ranger",
  "tagline": "A seasoned hunter and traveler who works closely with a beast friend",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. goblin, grippli, mer-person, etc. What natural environment did you grow up in?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. remote villagers, retired heroes, wandering bounty hunters, etc. What skills did you learn from them directly?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. royal gameskeeper, wanted criminal, wilderness guide, etc. What coming danger prompted you to adventure?"
   }
  ],
  "relationshipExamples": "I helped them out of a bind once, and they never thanked me ◆ I know some subjects better than them, even if they can’t stand it ◆ I’ll keep a close eye on them, in case they find or bring trouble ◆ They seem to understand the wild better than I do…somehow ◆ They don’t understand the dangers of the wild…and refuse to learn ◆ They show potential in the wilderness; I will teach what I can ◆ We defeated a dangerous monster together. That makes us family",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Animal Companion",
   "body": [
    "You work closely with a reasonably-sized mundane natural beast. Examples include wolf, bear, fox, hawk, hound, etc. Give them a name, describe their appearance, and consider how you bonded.",
    "Then choose three Qualities they have: ☐aquatic ☐burrowing ☐cute",
    "☐fast ☐flying ☐large ☐night vision ☐scary ☐stealthy ☐strong ☐tracker And one Drawback: ☐coward ☐fragile ☐hungry ☐loud ☐ stubborn When your animal companion assists you, say how, then choose one for each relevant Quality (GM’s call):",
    "◆ They create an opportunity or overcome a small obstacle",
    "◆ They grant you adv on an associated Move roll",
    "◆ If fighting, they increase your armor by 1 and your dmg dealt by 1d4",
    "◆ Their Drawback doesn’t introduce a complication",
    "Usually, you control and portray your animal companion along with your own character. If they are separated from you or affected by their Drawback, the GM might control them for a time.",
    "Your animal companion doesn’t have HP. When they get hurt, mark a condition or say how they leave the scene."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose an additional weapon (or create a new one with the GM):",
    "rows": [
     [
      "composite bow 1d6 dmg #near #far #ammo #two-handed"
     ],
     [
      "dual scimitars 1d6 dmg #hand #light #precise, adv on dmg rolls"
     ],
     [
      "reliable staff 1d6 dmg #hand #close #two-handed and sling 1d4 dmg #near #ammo"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "light armor dmg reduction 1 (reduces dmg taken by 1, to a min of 1) req. STR+1"
     ],
     [
      "medicine OO uses. Mark to have someone double the HP they recover next or to cure a minor disease or poison"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ],
     [
      "trap kit OO uses. When you spend time setting up a trap, mark once to create a dangerous, impeding hazard for anyone in its range; it typically deals 1d4 dmg"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "hooded cloak",
      "sturdy leathers",
      "warm hides"
     ],
     [
      "monstrous trophy",
      "natural camouflage",
      "storied scars"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 10 and your dex is +2. Choose STR or INT to be +2 too, then assign 0, 0, and -1 to the others.",
  "maxHp": 10,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "ranger",
  "paths": [
   {
    "name": "Beastmaster",
    "tagline": "Two bodies, one soul",
    "moves": [
     {
      "name": "No Mere",
      "first": true,
      "body": [
       "Gain the Animal Companion Ranger Starting Move if you don’t already have it. If you already have it, instead choose two additional Qualities for your Companion. Either way, choose and mark one Special Training below. When you Make Camp, you can retrain them to change which is marked.",
       "▢ Magical Familiar — They count as an extension of yourself",
       "when you Cast a Spell",
       "▢ Sentinel — They will always alert you to sudden dangers or",
       "ambushes before it’s too late",
       "▢ Sniffer — When you Unearth Secrets, before you roll you",
       "may ask one question about the secret"
      ],
      "widgets": [
       {
        "type": "field",
        "label": "Creature"
       }
      ]
     },
     {
      "name": "In This Together",
      "first": false,
      "body": [
       "When you retrain your animal companion, you can also change their Drawback. After you help your animal companion work on their Drawback, gain 1 Loyalty (max 3). You may spend Loyalty to gain an unmarked Special Training until the end of the scene."
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Loyalty",
        "n": 3
       }
      ]
     },
     {
      "name": "Kindred Spirits",
      "first": false,
      "body": [
       "When you Make Camp, your animal companion clears one of your Conditions (your choice).",
       "Emotional Support — Choose a Condition now; ignore its penalties while your animal companion is with you. You may change the chosen Condition when you retrain them."
      ],
      "widgets": [
       {
        "type": "field",
        "label": "Condition"
       }
      ]
     },
     {
      "name": "Superior Companion",
      "first": false,
      "body": [
       "Your animal companion can have two Special Trainings (instead of one), and can also choose from the following:",
       "▢ Distraction — When you Sneak Past, after you roll you may",
       "send your companion away to draw attention, increasing the result by one level (✴6 → ✴7-9 → ✴10+)",
       "▢ Pack Leader — Others of their kind treat you and your",
       "companions as allies, if not friends",
       "▢ Rescuer — When you would Face Death, they save you but",
       "can’t help again until you Make Camp; regain 1 HP"
      ],
      "widgets": []
     },
     {
      "name": "Warbeast",
      "first": false,
      "body": [
       "When your animal companion helps you to fight, increase the added armor to 2, and the added dmg to 1d6. Once per scene, when they would get hurt, they’re actually fine."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Deadeye",
    "tagline": "One shot, one kill",
    "moves": [
     {
      "name": "Death from AfaR",
      "first": true,
      "body": [
       "When you enter a combat situation, gain Aim equal to your DEX (min 1). You can spend 1 Aim to do one of the maneuvers below. When the combat situation ends, lose all Aim.",
       "◆ Line It Up — Your next ranged attack gains #piercing and ignores cover and concealment",
       "◆ Rapid Shots — Your next ranged attack gains #area and either #hand, #close, #near, or #far",
       "◆ Suppressing Fire — Aid a PC without paying another cost; if they take dmg, reduce it by 1 (min 1)",
       "◆ Take Cover — After you Trade Blows at range, reduce dmg taken by your DEX (min 0)"
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Aim",
        "n": 4
       }
      ]
     },
     {
      "name": "Find Weakness",
      "first": false,
      "body": [
       "You may Sense Motive+DEX by observing them in a battle or physical contest. If you do so, no matter the roll you may also ask one question about their strengths and weaknesses."
      ],
      "widgets": []
     },
     {
      "name": "Sniper Nest",
      "first": false,
      "body": [
       "When you spend minutes or hours (GM’s call) finding or creating the perfect vantage point, you gain the following benefits while there: ◆ Once a combat situation begins, gain +1 Aim (max 4) ◆ The first time you attack with a ranged weapon from it, no one new learns your position ◆ Trap kits set up here deal 1d6 dmg instead of 1d4 and never impede or harm you or your allies. When you leave the nest, lose its benefits unless you spend time setting it up again. If you need to Defy Danger to leave it safely, roll with adv."
      ],
      "widgets": []
     },
     {
      "name": "Spotter",
      "first": false,
      "body": [
       "When you receive Aid while attacking with a ranged weapon, instead of gaining adv on a roll you may execute one maneuver without spending Aim."
      ],
      "widgets": []
     },
     {
      "name": "Trick Arrows",
      "first": false,
      "body": [
       "You may spend Aim or mark a use of the appropriate item to do any of the following maneuvers on your next ranged attack:",
       "◆ adventuring gear — #forceful or pulls you to them or vice-versa",
       "◆ alchemical vials — +1 dmg and spreads acid, fire, or smoke",
       "◆ poisoner’s kit — target takes +1 dmg until the end of the scene",
       "◆ trap kit — +1 dmg and briefly immobilizes your target"
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Scout",
    "tagline": "Intimately familiar with wilderness’ bounties and perils",
    "moves": [
     {
      "name": "Lay of the Land",
      "first": true,
      "body": [
       "When you survey an environment or landscape away from your companions, roll+INT, then skip ahead to when you return to your companions. ✴On a 10+, choose three benefits below. ✴On a 7-9, only two. ✴On a 6-, choose one, but something followed you back; mark 1 XP and the GM makes a Move. No matter the result, skip ahead to when you return to your companions. These benefits last until you leave the environment or use this move again.",
       "▢ Natural wildlife won’t prey on, or flee from, you or your allies",
       "▢ When you Sneak Past by blending in, treat a ✴7-9 as a ✴10+",
       "▢ When you Unearth Secrets, if the secret is related to the",
       "environment (e.g. corruption, feature, usual inhabitant, etc.), treat a ✴6- as a ✴7-9",
       "▢ When you Undertake a Perilous Journey as the leader,",
       "gain +1 to the roll and clear a Condition. If another PC is the leader, gain 1 Depth with them if they ask for your advice."
      ],
      "widgets": []
     },
     {
      "name": "Hunter’s Mark",
      "first": false,
      "body": [
       "Once per session, when you focus on hunting an individual, gain the following benefits when interacting with them until the end of that session: ◆ Gain adv on Moves rolled in direct pursuit of them",
       "◆ When you Spout Lore about them, gain +1 to the roll. ◆ The first time this session you deal dmg to them, it’s max ◆ When you capture or defeat them, clear a Condition"
      ],
      "widgets": [
       {
        "type": "field",
        "label": "Quarry"
       }
      ]
     },
     {
      "name": "Peerless Wayfarer",
      "first": false,
      "body": [
       "When you use Lay of the Land, if you spend excessive time exploring (days or weeks), make an extra choice. No matter the time spent, ✴on a 12+, you also bring back a lead on an ally, opportunity, or treasure. Say which, then the GM will tell you more. When you leave an environment you’ve surveyed with Lay of the Land, write down your benefits; you regain them if you ever return here."
      ],
      "widgets": []
     },
     {
      "name": "The Wild Provides",
      "first": false,
      "body": [
       "When you search a natural landscape for resources, Defy Danger+INT. ✴On a 7+, gain 2 Uses, split between adventuring gear, medicine, and provisions."
      ],
      "widgets": []
     },
     {
      "name": "Natural Historian",
      "first": false,
      "body": [
       "When you Spout Lore about flora or fauna from the wild, ✴on a 7+, ask an additional question. If it can fight, the GM will also tell you its HP and dmg."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "rogue": {
  "title": "The Rogue",
  "tagline": "The ultimate survivalist, every tool—legal or not—is at their disposal",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. catfolk, firbolg, oozeling, etc. Were your parents law-abiding people?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. denizens of the Underdark, a street gang, privileged pricks, etc. Did you experience a lot of crime firsthand?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. beloved teacher, faithful squire, heartless criminal, etc. Was it a slippery slope or a conscious decision to become who you are now?"
   }
  ],
  "relationshipExamples": "I once stole something important from them ◆ They know a secret about my life before crime ◆ They still owe me for the huge crime I committed for them ◆ They think I’m scum—and the feeling is mutual ◆ They’re my partner-in-crime ◆ We’re as close as family, for better and worse ◆ We’re the only survivors of my last plan",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Tricks of the Trade",
   "body": [
    "When you Defy Danger or Sneak Past by applying one of your Roguish Skills, you cheat; roll with 1d8+1d6 (instead of 2d6). You start with the following Roguish Skills: ◆ detect noises ◆ find/remove traps ◆ hide in shadows ◆ open locks ◆ pick pockets …plus any other Skills provided by your Paths."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose an additional weapon (or create a new one with the GM):",
    "rows": [
     [
      "collapsible shortbow 1d6 dmg #ammo #close #near #precise #two- handed"
     ],
     [
      "hidden daggers 1d4 dmg #ammo #concealed #hand #close #light #piercing #precise, adv on dmg rolls"
     ],
     [
      "reliable whip 1d4 dmg #close #near #precise. When you Trade Blows, ✴On a 10+, you can choose to have the target drop something they’re holding, or grab one of their extremities Choose two of the items below:"
     ],
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "alchemical vials OOO uses. Mark to withdraw of any of the following types: acid, fire, or smoke"
     ],
     [
      "leather armor dmg reduction 1 (reduces dmg taken by 1, to a min of 1) req. STR+1"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ],
     [
      "thieves’ tools OOO uses. When you Defy Danger with a Roguish Skill, ✴on a 7-9 you may mark a use instead of another option"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "dark cloak",
      "fashionable suit",
      "forgettable face and attire"
     ],
     [
      "list of vulnerable targets",
      "lucky charm",
      "sentimental jewelry"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 8 and your dex is +2. Choose int or cha to be +1, then assign +1, 0, and -1 to the others.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "rogue",
  "paths": [
   {
    "name": "Assassin",
    "tagline": "Silent as the grave, deadly as nightshade",
    "moves": [
     {
      "name": "Dirty Deeds",
      "first": true,
      "body": [
       "Add ◆ employ/cure poison and ◆ identify weakness to your Roguish Skills. If you don’t have the Tricks of the Trade Rogue Starting Move, you gain it, but only with these two Skills. If you already had any of these Roguish Skills, work with the GM to create a new one for each redundant Skill.",
       "Sneak Attack—When you Trade Blows+DEX, if your opponent is distracted or flanked (and you’re wearing light or no armor), ✴on a 10+, you can choose to deal max dmg for free. ✴On a 7-9, you suffer min dmg."
      ],
      "widgets": []
     },
     {
      "name": "Always a Way Out",
      "first": false,
      "body": [
       "When you’re in too deep and look for a way out, roll+DEX. ✴On a 10+, you and your allies are gone. ✴On a 7-9, you need to leave something behind; the GM will say what. ✴On a 6-, it was a trick or a trap; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Backstab",
      "first": false,
      "body": [
       "When you ambush a surprised or defenseless opponent with a #precise weapon, you may roll dmg as normal, or may instead roll+DEX. ✴On a 10+, choose two below. ✴On a 7-9, only one:",
       "◆ Reduce their armor dmg reduction by 1 until it’s repaired",
       "◆ Disable a weapon or other form of attack until they recover it",
       "◆ Inflict your dmg +1d6",
       "✴On a 6-, they were ready; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Poisoncraft",
      "first": false,
      "body": [
       "You get adv to Defy Danger against poison, and you get a poisoner’s kit OOO uses. Mark to produce a poison on the spot; state its effect, then choose two from the following: ◆ it can be delivered by touch (otherwise it’s ingestion) ◆ the GM doesn’t add an “and” or “but” to the effect (otherwise they do) ◆ it’s undetectable ◆ you clear a poisoner’s kit use"
      ],
      "widgets": []
     },
     {
      "name": "Stalker in Shadows",
      "first": false,
      "body": [
       "Add ◆ hide in shadows to your Roguish Skills. If you already have it, instead work with the GM to create a new Roguish Skill. When you Sneak Past with a Roguish Skill, roll with 1d10+1d6 (instead of 1d8+1d6).",
       "When you look for a hiding space, the GM will tell you where the best spot is, but it’s up to you to get there."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Burglar",
    "tagline": "Skill and guile—and a dash of good luck, of course",
    "moves": [
     {
      "name": "Expert Treasure-hunter",
      "first": true,
      "body": [
       "Add ◆ climb walls and ◆ fit into tight spaces to your Roguish Skills. If you don’t have the Tricks of the Trade Rogue Starting Move, you gain it, but only with these two Skills. If you already had any of these Roguish Skills, work with the GM to create a new one for each redundant Skill.",
       "Nose for Treasure—When you Unearth Secrets, no matter the outcome of the roll, you may also ask, Are there valuables here I don’t know about? If yes, gain adv on the next roll to pursue them."
      ],
      "widgets": []
     },
     {
      "name": "Better Lucky Than Good",
      "first": false,
      "body": [
       "When you take this Move you get Luck equal to your wis (min 1). Once per scene, you can spend 1 Luck to reroll any die rolled by you or that directly affects you (such as the dmg roll of an enemy attacking you). When you Enjoy Downtime, you can spend 1 Treasure helping an NPC to regain Luck equal to your wis (min 1)."
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Luck",
        "n": 3
       }
      ]
     },
     {
      "name": "Breaking & Entering",
      "first": false,
      "body": [
       "When​ ​you​ ​​ set your mind​ ​to​ ​steal​ ​something, name​ ​the​ ​thing​ ​and​ ​ ask​ ​the​ ​GM​ questions equal to your wis (min 1) and they will answer truthfully.​ When you acquire it, you and everyone who helped each clear a Condition. ◆ What’s its most powerful defence?",
       "◆ What’s the best way in or out? ◆ Who else wants it? ◆ What else am I missing regarding it?"
      ],
      "widgets": []
     },
     {
      "name": "Quick on the Draw",
      "first": false,
      "body": [
       "When the GM or another Player is about to make a Move, with their permission (out of character) you can mark a Condition to interrupt it and act immediately instead."
      ],
      "widgets": []
     },
     {
      "name": "Vanishing Act",
      "first": false,
      "body": [
       "When you are sure no one is paying attention directly to you, you can disappear from a Scene entirely, not rejoining the narrative until the Scene ends. If you’re in trouble or a bind, ask the GM what you must do to disappear and they will tell you up to (4 - wis) of the following requirements:",
       "◆ When you reappear, it will come with trouble",
       "◆ You first need to risk/trick/steal _____________",
       "◆ You must leave something significant behind",
       "◆ You must mark a Condition in the process"
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Spy",
    "tagline": "Obtaining and trading secrets is your trade",
    "moves": [
     {
      "name": "The One for the Job",
      "first": true,
      "body": [
       "Add ◆ forge documents and ◆ understand languages to your Roguish Skills. If you don’t have the Tricks of the Trade Rogue Starting Move, you gain it, but only with these two Skills. For each Skill that is redundant, work with the GM to create a new one.",
       "Smooth Operator—When you disguise yourself as someone else, gain Mask equal to your cha (min 1). You can spend Mask, 1-for- 1, to automatically overcome scrutiny. When you reach 0 Mask, roll+CHA. ✴On a 10+, they’re none the wiser; gain 1 Mask. ✴On a 7-9, someone suspects you; the GM will say who. ✴On a 6-, your cover is blown; mark 1 XP and the GM makes a Move."
      ],
      "widgets": [
       {
        "type": "circles",
        "label": "Mask",
        "n": 3
       }
      ]
     },
     {
      "name": "Hand Trick",
      "first": false,
      "body": [
       "When you leave a room or other location, you can name something small that you saw that no one else was using or paying particular attention to. You took it with you."
      ],
      "widgets": []
     },
     {
      "name": "Maven Saboteur",
      "first": false,
      "body": [
       "When you reveal that you’ve used a disguise to previously sabotage or nullify an obstacle or mechanism, right as it becomes relevant, roll+CHA. ✴On a 10+, it goes off with a bang, creating the perfect opportunity. ✴On a 7–9, the opportunity is fleeting—act now or it’ll be too late. ✴On a 6-, a tiny overlooked detail becomes a huge problem; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "Underworld Connections",
      "first": false,
      "body": [
       "When you put the word out that you’re looking for something, roll+CHA. No matter what, someone brings you a lead. ✴On a 10+, choose one complication below. ✴On a 7-9+, choose two:",
       "◆ It’s not quite right; the GM will say how after you choose this",
       "◆ Someone who doesn’t know or like you has it",
       "◆ You’ll owe someone a steep debt to get it. Until you repay them you get dis on this move and can’t choose this option again ✴On a 6-, the lead might be a fake, a trap, or already be claimed by an enemy; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     },
     {
      "name": "You Know My Name",
      "first": false,
      "body": [
       "When you first meet someone who’s heard of you (your call), roll+CHA. ✴On a 10+, tell the GM two things they’ve heard about you. ✴On a 7-9, tell the GM one thing, and the GM tells you the other. ✴On a 6-, they don’t like what they’ve heard; mark 1 XP and the GM makes a Move."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 },
 "wizard": {
  "title": "The Wizard",
  "tagline": "A lifetime of study & dedication in exchange for mastering reality",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "prefix": "I am a",
    "hint": "e.g. dwarf, elf, golem, etc. What event in your childhood drew you to the arcane?"
   },
   {
    "key": "Community",
    "prefix": "I was raised by",
    "hint": "e.g. amateur magicians, landed gentry, nomadic people, etc. Was magic valued among your people? Why? Why not?"
   },
   {
    "key": "Background",
    "prefix": "I used to be a",
    "hint": "e.g. cursed person, lonely scholar, street magician, etc. How much did you pay or sacrifice to learn the impossible?"
   }
  ],
  "relationshipExamples": "I hurt them with a spell ◆ They have a mind for magic, but lack the discipline ◆ They believe a bunch of superstitious nonsense ◆ They think I’m a power-hungry megalomaniac ◆ They’re keeping an arcane secret from me ◆ They’re my willing test subject ◆ We share a niche interest and endlessly chat about it",
  "treasure": {
   "track": "Broke ☐ ☐ ☐ ☐ Poor ☐ ☐ ☐ ☐ ☐ ☐ Modest ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Comfortable ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rich ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocratic"
  },
  "startingMove": {
   "name": "Weave the Arcane",
   "body": [
    "You start with 3 Schools of Magic Prepared; mark them now. When you finish Making Camp, you can change which Schools you have Prepared.",
    "☐ Abjuration (substance: magic itself; verbs: temporarily disable; protect from)",
    "☐ Conjuration (substance: objects or outsiders; verbs: briefly create; momentarily summon)",
    "☐ Divination (substance: past, present, and future visions; verbs: convey; discern)",
    "☐ Enchantment (substance: sapient beings; verbs: modify emotions; temporarily charm)",
    "☐ Evocation (substance: elemental energies; verbs: lesser sculpt; minor channel)",
    "☐ Illusion (substance: sight and/or sounds; verbs: cloak; disguise)",
    "☐ Necromancy (substance: unlife; verbs: briefly bestow; radiate)",
    "☐ Transmutation (substance: matter; verbs: momentarily alter; repair)",
    "You can Cast a Spell+INT by combining a verb and a substance from your Prepared Schools to create an effect, as long as you have your arcane focus, both hands otherwise free, and the ability to speak aloud. You can combine verbs and substances from different Prepared Schools. When you Cast a Spell this way, your unique ✴7-9 option is:",
    "◆ forget a Prepared School until you next Make Camp"
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Choose an arcane focus (or create a new one with the GM):",
    "rows": [
     [
      "bejeweled skull cap. add 1 to your armor"
     ],
     [
      "delicate grimoire. Once per session, you may reference or study it to Prepare a School instantly"
     ],
     [
      "unwieldy staff. 1d6 dmg #close #hand #two-handed"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Choose two of the items below:",
    "rows": [
     [
      "adventuring gear OOO uses. Mark to rummage through and find a useful mundane item"
     ],
     [
      "bag of books OOO uses. Mark to find a record of relevant information"
     ],
     [
      "dagger 1 d4 dmg #ammo #hand #close #piercing #precise"
     ],
     [
      "potion of healing O use. Mark to recover half your max HP (rounded down) or clear a locked Condition"
     ],
     [
      "provisions OOO uses. Mark once while you Comfort or Support to turn a “No” into a “Yes”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "For your appearance, choose one per row (or something else):",
    "rows": [
     [
      "astral robes",
      "inconspicuous cloak",
      "mystical spectacles"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "At Level 1 your max hp is 6 and your int is +2. Choose dex or cha to be +1, then assign +1, 0, and -1 to the others.",
  "maxHp": 6,
  "nameExamples": "",
  "advancements": [
   {
    "title": "When you Level Up, increase your hp by 1 (max +10) and choose one of the following:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Reveal a Struggle"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 0,
      "text": "Change your Class"
     }
    ]
   },
   {
    "title": "From Level 5 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +2)"
     },
     {
      "boxes": 1,
      "text": "Gain a Path from your Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain a magic item — choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   },
   {
    "title": "From Level 10 onwards, you can also choose from the following:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 to any Stat (max. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclass — Gain a Path from another Class (and its Starting Move)"
     },
     {
      "boxes": 1,
      "text": "Obtain an Artifact — Choose from those available or work with your GM to create one"
     },
     {
      "boxes": 4,
      "text": "Gain a Path Move"
     }
    ]
   }
  ],
  "id": "wizard",
  "paths": [
   {
    "name": "Evoker",
    "tagline": "There’s a simple beauty in utter destruction",
    "moves": [
     {
      "name": "Evocation Magic",
      "first": true,
      "body": [
       "Gain the Weave the Arcane Wizard Starting Move, though you only have access to Evocation (substance: elemental energies; verbs: lesser sculpt; minor channel). If you already have this Move, instead add the verbs detonate and magnify to the Evocation School’s repertoire, and when you Make Camp you can always mark Evocation in addition to your normal Prepared Schools. Mental Reserves — You can mark a Condition to instantly Prepare a School of Magic, up to your normal limit."
      ],
      "widgets": []
     },
     {
      "name": "Contingency",
      "first": false,
      "body": [
       "Mark 1-3 Conditions then choose a spell or a Move that you have access to that you could reasonably prepare in advance. Also, define a specific circumstance. When the circumstance occurs, roll+Conditions marked; use the result to resolve the spell or Move."
      ],
      "widgets": []
     },
     {
      "name": "Elemental Cloak",
      "first": false,
      "body": [
       "Mark 1-3 Conditions to evoke a cloak made of one of the following elements. Replace X with the amount of Conditions marked:",
       "◆ cascading flames — Up to X opponents who inflict dmg to you suffer Xd6 dmg",
       "◆ icy garments — Up to X opponents who inflict dmg to you have dis to their dmg rolls",
       "◆ rock protrusions — Add +X to your armor for X attacks",
       "◆ wild gale — You can mobilize unimpeded up to #near X times"
      ],
      "widgets": []
     },
     {
      "name": "Instant Fireball!",
      "first": false,
      "body": [
       "Mark 1-3 Conditions, then a #near target and everyone #close to them suffers Xd6 dmg #piercing, where X is the amount of Conditions marked."
      ],
      "widgets": []
     },
     {
      "name": "Power Weapon",
      "first": false,
      "body": [
       "When you shape an elemental energy in the form of a weapon, mark 1-3 Conditions and roll+Conditions marked. ✴On a 10+, choose two of the following tags. ✴On a 7-9, only one: #close #piercing. ✴On a 6-, the element breaks free; mark 1 XP and the GM makes a Move.",
       "By default the weapon inflicts 1d6 dmg, is #hand, and has OOO uses. When you Trade Blows with this weapon, roll+INT (instead of +STR or +DEX) and mark one use."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Illusionist",
    "tagline": "How do you define ‘real’?",
    "moves": [
     {
      "name": "Illusion Magic",
      "first": true,
      "body": [
       "Gain the Weave the Arcane Wizard Starting Move, though you only have access to Illusion (substance: sights and/or sounds; verbs: cloak; disguise). If you already have this Move, instead add the verbs make permanent and substantiate to the Illusion School’s repertoire, and when you Make Camp you can always mark Illusion in addition to your normal Prepared Schools.",
       "Trickster — Once per scene, when someone believes a lie because of one of your illusions, clear a Condition."
      ],
      "widgets": []
     },
     {
      "name": "Alter Perception",
      "first": false,
      "body": [
       "When you touch someone or something, you can alter one of their perceptible aspects without Casting a Spell; mark a Condition if they are unwilling. For example, you can change someone’s perceived ancestry, outfit, or accent, or you can make an item seem magical, brand new, or made of a different substance. This effect lasts until you dismiss it or until the end of the Scene."
      ],
      "widgets": []
     },
     {
      "name": "Mirror Image",
      "first": false,
      "body": [
       "When you would suffer damage, you may spend mark a Condition to reveal that you were an illusion; prevent all dmg; say where #near you actually are."
      ],
      "widgets": []
     },
     {
      "name": "The Mirror Stares Back",
      "first": false,
      "body": [
       "The first time each NPC falls for one of your illusions, you may ask them one question as if you Sensed Motive.",
       "When you Cast a Spell to make an illusory copy of a person, you can also mark a Condition to overcharge the spell. If you do, the illusory person perfectly imitates their original, lasts indefinitely, and starts loyal but slowly gains autonomy over time. You cannot dismiss an overcharged illusory person."
      ],
      "widgets": []
     },
     {
      "name": "Fool Me Once…",
      "first": false,
      "body": [
       "When you trick someone with an illusion, the next time you Pull Strings on them you have adv and may roll+INT (instead of +CHA), even if they learn it was an illusion. You can share these benefits with other PCs that were part of the illusion."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   },
   {
    "name": "Necromancer",
    "tagline": "The greatest taboo among magic practitioners—for a reason",
    "moves": [
     {
      "name": "Necromantic Magic",
      "first": true,
      "body": [
       "Gain the Weave the Arcane Wizard Starting Move, though you only have access to Necromancy (substance: unlife; verbs: briefly bestow; radiate). If you already have this Move, instead add the verbs corrupt and drain to the Necromancy School’s repertoire, and when you Make Camp you can always mark Necromancy in addition to your normal Prepared Schools.",
       "Rise and Serve — When you kill a living creature with a spell, you can create a ghoul, skeleton, or zombie from their corpse (2 HP, inflicts 1 dmg). Undead you create are loyal to you and follow your commands, though only #intelligent ones (which these are not) can understand complex tasks."
      ],
      "widgets": []
     },
     {
      "name": "A Ghost at the Feast",
      "first": false,
      "body": [
       "When you kill a living creature with a spell, instead of creating something from their corpse, you can create a ghost, shade, or shadow from their soul (1 HP, inflicts 2 dmg #piercing | #invisible #immaterial). If you mark a Condition, you can create two undead—one from body and one from soul."
      ],
      "widgets": []
     },
     {
      "name": "Lifeforce Is a Resource",
      "first": false,
      "body": [
       "When you Cast a Spell, ✴on a 7-9 you can instead choose this:",
       "◆ it drains your lifeforce; take 1 dmg #piercing",
       "When you attune yourself to the ethereal shackles that bind your undead to your will, you may mark a Condition, then redestribute HP between yourself and any of your #near undead as you see fit."
      ],
      "widgets": []
     },
     {
      "name": "Sanctum to Unlife",
      "first": false,
      "body": [
       "When you set your mind to imbue a location with unholy power, treat it as Perform a Ritual, but you can sacrifice one living person or two of your own undead to negate each requirement— except for the last one. After you succeed, for each requirement the GM originally gave you, choose one benefit: ◆ Any creature that dies here automatically rises as an #undead that serves you ◆ #holy power is weak here, dealing half dmg (rounded down) and lessening other effects ◆ It acts as a source of power for even darker rituals ◆ It will attract willing devotees and followers ◆ The change will last indefinitely (unless actively cleansed at its heart)"
      ],
      "widgets": []
     },
     {
      "name": "Shed this Mortal Coil",
      "first": false,
      "body": [
       "You’ve learned the secrets of lichdom. Gain a Phylactery (see Artifacts)."
      ],
      "widgets": []
     }
    ],
    "widgets": []
   }
  ]
 }
};
export const CLASSES_PT = {
 "barbarian": {
  "id": "barbarian",
  "title": "O Bárbaro",
  "tagline": "Um poderoso forasteiro vindo de uma terra ainda mais estranha",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. constructo, minotauro, nefilim, etc. O que torna sua terra natal tão diferente dos lugares daqui?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. guerreiros brutais, viajantes hospitaleiros, devotos isolados, etc. Como eles se adaptaram ao ambiente da sua terra natal?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. bandido perigoso, líder poderoso, gladiador renomado, etc. Que traição ou calamidade causou sua partida?"
   }
  ],
  "relationshipExamples": "Eu me deleito na companhia dele(a); quero passar mais tempo juntos ◆ Eu o(a) machuquei ou abandonei em um momento de fúria ou excesso ◆ Estou ensinando a ele(a) meus costumes, quer goste ou não ◆ Ele(a) é fraco(a) e patético(a); vou torná-lo(a) forte ◆ Ele(a) me mostrou um novo conforto destas terras; quero mais disso! ◆ É a única pessoa a quem eu confiaria minha vida ◆ Ele(a) viu minha terra natal mais recentemente do que eu",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Fúria!",
   "body": [
    "Quando você entrar em fúria, marque Irritado. Quando se acalmar, você pode marcar uma Condição diferente para limpar Irritado. Enquanto estiver Irritado, você recebe as seguintes penalidades e benefícios:",
    "◆ Quando causar dano máx, aumente o dano em for",
    "◆ Ignore penalidades de Condições quando Trocar Golpes+FOR ou Desafiar o Perigo+FOR",
    "◆ Sempre que fosse marcar uma Condição (inclusive ao se acalmar), você pode em vez disso sofrer 1d4 de dano #perfurante",
    "◆ Você não pode se beneficiar do uso de armadura (mas ainda pode usar um escudo)",
    "◆ Se você não agir de acordo com sua Fúria pelo menos uma vez por cena em que estiver (geralmente atacando alguém ou algo), marque uma Condição adicional no final dessa cena"
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha uma arma (ou crie uma nova com o MJ):",
    "rows": [
     [
      "espada longa ancestral 1d6 #curto + escudo O uso. Marque para ignorar todo o dano de um ataque"
     ],
     [
      "machado grande manchado de sangue 1d8 de dano #curto #duas-mãos #impactante"
     ],
     [
      "martelos duplos 1d6 de dano #curto #leve, vant nas rolagens de dano"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "banquete farto O uso. Marque para compartilhar com seus aliados; todos recuperam metade de seus PV máx (arredondado para baixo)"
     ],
     [
      "poção de cura O uso. Marque para recuperar metade de seus PV máx ou limpar uma Condição trancada"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ],
     [
      "kit de armadilhas OO usos. Quando passar um tempo montando uma armadilha, marque uma vez para criar um perigo impeditivo para qualquer um no alcance; geralmente causa 1d4 de dano"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "trajes culturais",
      "peles e couros",
      "tatuagens intrincadas"
     ],
     [
      "cicatriz impressionante",
      "estatura colossal",
      "troféu de crânio de monstro"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 12 e sua for é +2. Escolha sab ou car para ser +2 também, e então atribua 0, 0 e -1 aos outros.",
  "maxHp": 12,
  "nameExamples": "ex. Alareiks, Clovis, Boudica, Etzel, Gaisarix, Gorm, Haepha, Hariman, Otakar, Silas, Tiidrik",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Berserker",
    "tagline": "Você é o mais implacável de todos, com um toque do sobrenatural",
    "widgets": [],
    "moves": [
     {
      "name": "Fúria em Transe",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Fúria! do Bárbaro.",
       "Se você já tiver Fúria!, ganha os seguintes benefícios e penalidades adicionais:",
       "◆ Adicione sua for à sua armadura",
       "◆ Quando se acalmar, marque uma Condição adicional",
       "◆ Quando Trocar Golpes, você e seu inimigo têm vant nas rolagens de dano"
      ]
     },
     {
      "name": "Unhas Vermelhas",
      "first": false,
      "widgets": [],
      "body": [
       "Uma vez por sessão, quando você ficar Sangrando (seus PV chegarem à metade ou menos), limpe uma Condição.",
       "Enquanto estiver Sangrando, aumente todo o dano que você causa em 1.",
       "Quando causar dano a um inimigo Sangrando, esse dano é #perfurante"
      ]
     },
     {
      "name": "Semblante Arrepiante",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode Manipular+FOR subjugando fisicamente ou intimidando à força. Se fizer isso e a pessoa voltar atrás na palavra depois, ganhe vant no próximo Movimento que rolar contra ela."
      ]
     },
     {
      "name": "A Fera Interior",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você libertar a fera interior enquanto estiver Irritado, você se metamorfoseia em uma forma híbrida entre a sua e a de um dos seguintes animais:",
       "◆ Urso. Você Resiste a armas mundanas e fogo",
       "◆ Javali. Você Resiste a medo, terror e intimidação, mesmo de fontes sobrenaturais",
       "◆ Lobo. Aumente o tamanho do seu dado de dano em um passo",
       "Conter a fera de volta exige um grande esforço; marque uma Condição."
      ]
     },
     {
      "name": "Quando Eu Merecer",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Encarar a Morte enquanto estiver Irritado, também pode escolher a opção abaixo.",
       "◆ Cuspir na Cara da Morte. Recupere todos os PV e você não fica Indefeso. Também não tranque uma Condição.",
       "Quando fizer isso, perca o acesso a este Movimento até adquiri-lo novamente como um Avanço."
      ]
     }
    ]
   },
   {
    "name": "Hedonista",
    "tagline": "Você sabe o que há de melhor na vida e como tomá-lo para si",
    "widgets": [],
    "moves": [
     {
      "name": "Apetite Hercúleo",
      "first": true,
      "widgets": [
       {
        "type": "circles",
        "label": "Insatisfeito",
        "n": 1
       }
      ],
      "body": [
       "Você tem uma necessidade grandiosa e terrível que o impulsiona às maiores alturas e às profundezas mais sombrias. Diga qual é agora.",
       "Apetite: ____________________________________________ Exemplos incluem: fama e glória, prazeres mortais, poder sobre os outros, riquezas e propriedades, o orgulho dos meus ancestrais, a emoção do caos, destruição total.",
       "Você tem a Condição adicional Insatisfeito. Ela pode ser marcada, trancada e limpa como qualquer Condição, e Atingir o Limite só é acionado quando ela também estiver marcada.",
       "Enquanto Insatisfeito estiver marcado, você tem desv em todas as rolagens de Movimento que não busquem satisfazer seu apetite.",
       "Sempre que procurar satisfazer seu apetite, pergunte ao MJ como buscá-lo aqui e agora; ele dirá, geralmente com um risco ou custo. Quando saciá-lo, limpe Insatisfeito. Se estiver trancado, só é limpo se você se entregar a ele de forma exagerada, geralmente com custo e/ou risco extremo."
      ]
     },
     {
      "name": "Deleitar-se na Vitória",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você saciar um apetite ao extremo (destruir algo precioso, ganhar fama enorme, montanhas de riquezas, etc.), além de limpar Insatisfeito, escolha dois: ◆ Limpe uma Condição adicional ◆ Ganhe 1 de Profundidade com um PJ que ajudou a satisfazê-lo ◆ Marque 1 XP ◆ Reescreva um dos seus apetites"
      ]
     },
     {
      "name": "Fala Franca",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você atropelar a etiqueta social para chamar algo pelo que realmente é, role+ car. ✴Com 10+, nomeie alguém presente que concorda e está disposto a ajudar, e limpe uma Condição. ✴Com 7-9, você encontra um aliado ou limpa uma Condição (sua escolha). ✴Com 6-, você vai se arrepender da sua sinceridade; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Insaciável",
      "first": false,
      "widgets": [],
      "body": [
       "Você tem um segundo apetite. Qual é? Você sempre o teve? Enquanto estiver Insatisfeito, você só precisa perseguir um dos seus apetites para não sofrer a penalidade. Quando procurar satisfazer seu apetite, diga ao MJ qual deles antes que ele diga como.",
       "Apetite: ____________________________________________"
      ]
     },
     {
      "name": "Forte Como um Touro",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você se esforçar ao máximo para se libertar de uma restrição ou compulsão (física ou mental), pode marcar uma Condição para ter sucesso automaticamente."
      ]
     }
    ]
   },
   {
    "name": "Forasteiro",
    "tagline": "Não se pode tirar a terra natal de dentro do…",
    "widgets": [],
    "moves": [
     {
      "name": "De Onde Eu Venho…",
      "first": true,
      "widgets": [],
      "body": [
       "Quando você contar a alguém uma nova história da sua terra natal (ou sobre suas práticas, lendas, tradições, etc.), marque e responda a uma pergunta abaixo e limpe uma Condição. Quando todas as cinco estiverem marcadas, ganhe 1 XP e limpe todas as perguntas.",
       "▢ Que defeito ou fracasso da sua terra natal ainda incomoda você?",
       "▢ Que heróis ou monstros figuram nas histórias da sua terra natal?",
       "▢ Que maravilha ou perigo único é nativo da sua terra natal?",
       "▢ Que comida, arte ou evento é central no estilo de vida da sua terra natal?",
       "▢ Quem da sua terra natal você admira — ou despreza?"
      ]
     },
     {
      "name": "Leitor de Bando",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Sentir Motivação de um grupo de pessoas, pode fazer uma pergunta extra abaixo, não importa a rolagem. ◆Que evento recente ainda os preocupa ou entusiasma? ◆Quem eles expulsaram recentemente e onde posso encontrá-lo? ◆Quem está escondendo um segredo dos outros? ◆Quem realmente está no comando aqui?"
      ]
     },
     {
      "name": "Rito Sacrificial",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você sacrificar ritualmente algo significativo aos guardiões da sua terra natal (sejam ancestrais, divindades, espíritos, totens, etc.), role+SAB. ✴Com 10+, ganhe todos os três. ✴Com 7-9, escolha dois. ◆ Faça ao MJ uma pergunta sobre um inimigo; ele responderá honestamente ◆ Todos que participaram do ritual limpam uma Condição ◆ Ganhe uma bênção proporcional à oferenda feita; peça o que quiser e o MJ dirá o que você recebe. ✴Com 6-, escolha um, mas os guardiões não aceitarão seus sacrifícios novamente até que você cumpra uma exigência; marque XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Pisar nos Tronos Adornados",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Sentir Motivação de alguém mais poderoso que você (politicamente, fisicamente, economicamente, etc.), pode sempre perguntar também “Como posso melhor arruinar ou humilhar você?”. Quando realizar isso, marque 1 XP e limpe uma Condição."
      ]
     },
     {
      "name": "Intuição Infalível",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você chegar a um lugar que nunca visitou antes, role+SAB. ✴Com 10+, o MJ dirá o que há de terrivelmente errado aqui; faça uma pergunta complementar e ganhe vant no primeiro Movimento que rolar ao agir com base na resposta. ✴Com 7-9, como 10+, mas a resposta perturba ou inquieta você; marque uma Condição. ✴Com 6-, você recebe uma dica enigmática… e nada mais; marque 1 XP e o MJ faz um Movimento."
      ]
     }
    ]
   }
  ]
 },
 "bard": {
  "id": "bard",
  "title": "O Bardo",
  "tagline": "Um artista da cabeça aos pés, com ambições que vão muito além de apenas agradar ao público",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. gnomo, orc, meio-gigante, etc. O que torna sua arte diferente da do seu povo?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. eruditos sempre curiosos, gente podre de rica, artistas reclusos, etc. Como suas circunstâncias de vida ainda influenciam sua arte?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. bibliotecário sonhador, marinheiro fofoqueiro, curador prestigiado, etc. Por que você escolheu a arte e o perigo em vez de uma vida mais simples?"
   }
  ],
  "relationshipExamples": "Eu jamais o(a) trairia ou abandonaria… de novo ◆ Nós temos ou tivemos um caso. É complicado ◆ Ele(a) é fã da minha arte — e de mim, é claro! ◆ Ele(a) é minha Musa ◆ Ele(a) me ajuda a me apresentar; com ele(a), tudo fica melhor ◆ Ele(a) conhece um segredo da minha arte; preciso convencê-lo(a) a compartilhar comigo ◆ Ele(a) acha minha arte inútil; vou provar que está errado(a)",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Apresentar-se para um Público",
   "body": [
    "Você se expressa e afeta os outros com uma habilidade artística específica. É culinária, música, poesia ou outra coisa? Quando você apresentar sua arte para um público, role+CAR.",
    "✴Com 10+, escolha três abaixo. ✴Com 7-9, apenas dois. ✴Com 6-, você sente que a apresentação foi horrível; escolha um abaixo, mas marque uma Condição. Uma opção escolhida mais de uma vez deve se aplicar a um novo membro do público.",
    "◆ Afetar — Um membro do público limpa uma Condição marcada",
    "◆ Conectar — Um PJ na plateia marca 1 de Profundidade com você",
    "◆ Produzir — Recupere um uso de amostras artísticas (veja abaixo)",
    "◆ Deslumbrar — Um PdM na plateia lhe dá um presente ou tenta encontrar você em particular (à escolha dele)"
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha uma arma (ou crie uma nova com o MJ):",
    "rows": [
     [
      "besta de um nobre 1d8 de dano #munição #próximo #distante #precisa #perfurante #recarga #duas-mãos"
     ],
     [
      "bengala-espada afiadíssima 1d6 de dano #oculta #toque #precisa #duas-mãos"
     ],
     [
      "espada longa decorada 1d6 de dano #toque + broquel O uso. Marque para ignorar metade do dano (arredondado para baixo) de um ataque"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "amostras artísticas OO usos. Marque uma vez para compartilhar com um PdM enquanto Sentir Motivação para rolar com vant"
     ],
     [
      "bolsa de livros OOO usos. Marque para encontrar um registro de informação relevante"
     ],
     [
      "iguarias finas O uso. Marque enquanto Acampar para recuperar todos os pv. Você pode compartilhar com qualquer número de PJs. Todos que comerem recebem o benefício"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "traje colorido",
      "terno/vestido extravagante",
      "couros mascarados"
     ],
     [
      "alaúde resistente",
      "wok enorme",
      "inúmeros pincéis"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 8 e seu car é +2. Escolha des ou int para ser +1, e então atribua +1, 0 e -1 aos outros.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Diletante",
    "tagline": "Pau para toda obra, mestre de nada",
    "widgets": [],
    "moves": [
     {
      "name": "Conhecimento Bárdico",
      "first": true,
      "widgets": [],
      "body": [
       "Você estudou uma variedade de assuntos arcanos, incluindo:",
       "▢ Um Bestiário de Criaturas Mais Incomuns",
       "▢ Deuses e Seus Servos",
       "▢ Grandes Histórias do Mundo Conhecido",
       "▢ Lendas de Heróis do Passado",
       "▢ Feitiços e Magias",
       "▢ Os Mortos e os Mortos-Vivos",
       "▢ As Esferas Planares",
       "Marque um como ativo quando escolher este Movimento. Você pode fazer perguntas ao MJ sobre seu assunto ativo um número de vezes por sessão igual à sua int; o MJ responderá com a verdade. Quando Acampar, você pode passar algum tempo estudando e/ou relembrando seu treinamento para mudar seu assunto ativo."
      ]
     },
     {
      "name": "Um Tipo de Magia",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode Conjurar um Feitiço+INT combinando um verbo e uma substância das Escolas de Encantamento (substância: seres sencientes; verbos: modificar emoções; encantar temporariamente) ou Ilusão (substância: visão e/ou sons; verbos: encobrir; disfarçar) do Mago. Para Conjurar um Feitiço você precisa fazer uma apresentação, e sua opção única de ✴com 7-9 é:",
       "◆ Sua magia se esgota; esqueça uma das Escolas de Magia às quais tem acesso até a próxima vez que Acampar",
       "Se você já podia usar essas Escolas, trabalhe com o MJ para criar um novo verbo para cada Escola redundante."
      ]
     },
     {
      "name": "Um Patife, um Canalha",
      "first": false,
      "widgets": [],
      "body": [
       "Você ganha acesso às seguintes Habilidades Ladinas: ◆ escalar muros ◆ detectar ruídos ◆ bater carteiras ◆ compreender idiomas. Quando Desafiar o Perigo ou Esgueirar-se usando uma de suas Habilidades Ladinas, você pode rolar+INT (em vez de outro Atributo)."
      ]
     },
     {
      "name": "Aprendiz de Artesão",
      "first": false,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Apresentar-se para um Público da Classe Bardo. Se você já o tiver, ganha uma segunda habilidade artística. Quando você se Apresentar exibindo ambas as habilidades artísticas juntas, faça uma escolha adicional (não importa a rolagem)."
      ]
     },
     {
      "name": "Mente de Virtuoso",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode ter até dois assuntos de Conhecimento Bárdico ativos ao mesmo tempo. Quando fizer ao MJ uma pergunta sobre um assunto ativo, em vez de o MJ responder, você pode escolher Recordar Conhecimento com vant. ✴Com 12+, você mesmo pode responder (no lugar do MJ)."
      ]
     }
    ]
   },
   {
    "name": "Diplomata",
    "tagline": "O domínio sobre as pessoas é uma arte em si mesma",
    "widgets": [],
    "moves": [
     {
      "name": "O Jogo Mais Antigo",
      "first": true,
      "widgets": [],
      "body": [
       "Quando você realizar uma tarefa significativa para um PdM relevante (a critério do MJ), passa a deter uma Dívida sobre ele. Enquanto detiver uma Dívida sobre alguém: ◆ Trate qualquer 6- ao Manipular essa pessoa como um 7-9 ◆ Você pode sempre perguntar “O que você realmente precisa agora?” ao Sentir Motivação, independentemente da rolagem ◆ Ela lhe fará pequenos favores (aos olhos dela), tais como: pequenos recursos, apresentações, empréstimo de itens, etc.",
       "Quando cobrar sua Dívida, escolha um: ◆ Nomeie algo que a pessoa tenha; ela dará a você ◆ Aponte-a contra um inimigo ou obstáculo; ela agirá contra ele ◆ Diga que você está em apuros; ela protegerá você."
      ]
     },
     {
      "name": "Cartas na Mesa",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você revelar suas verdadeiras intenções a um inimigo ou desconhecido, pode fazer a ele um número de perguntas da lista abaixo, até o seu car (mín 1). Ele responderá honestamente, mas fará uma pergunta da lista de volta a cada vez. No final da cena, se você mentiu em suas próprias respostas, tranque uma Condição.",
       "Como eu poderia convencê-lo a _____? ◆ O que você mais quer que eu faça? ◆ Que influência ou vantagem você tem? ◆ Que obrigação ou vulnerabilidade está limitando você? ◆ A quem ou a quê você serve?"
      ]
     },
     {
      "name": "Contra-Encanto",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você tentar impedir um efeito de influência mental, role+CAR. ✴Com 10+, ele não afeta você nem seus aliados. ✴Com 7-9, você ou seus aliados não são afetados (sua escolha). ✴Com 6-, está além da sua compreensão; marque 1 XP e o MJ faz um Movimento.",
       "Uma vez por cena, quando você ou um aliado fosse marcar uma Condição devido a influência externa, você (ou ele) não marca."
      ]
     },
     {
      "name": "Amigos Influentes",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você buscar a ajuda de um PdM relevante, role+CAR. Se você dever um favor a ele (sua escolha) ou detiver uma Dívida sobre ele, role com vant. ✴Com 10+, ele está livre e apto a ajudar. ✴Com 7-9, ele está em apuros e não pode ajudar até que isso seja resolvido. ✴Com 6-, você encontra apenas traição ou tragédia; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Parlamentar",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você pedir uma trégua ou cessar-fogo, role+CAR. Se souber o que todas as partes querem (ou detiver uma Dívida sobre elas), role com vant. ✴Com 10+, as hostilidades pausam e você ganha uma chance de negociar; você também pode fazer uma pergunta como se estivesse usando Sentir Motivação. ✴Com 7-9, você apenas ganha a chance de negociar. ✴Com 6-, eles interpretam mal ou exploram sua intenção; marque 1 XP e o MJ faz um Movimento."
      ]
     }
    ]
   },
   {
    "name": "Espadachim",
    "tagline": "Há beleza em todas as coisas, até mesmo na luta!",
    "widgets": [],
    "moves": [
     {
      "name": "Estilo é Tudo",
      "first": true,
      "widgets": [
       {
        "type": "circles",
        "label": "Audácia",
        "n": 3
       }
      ],
      "body": [
       "Uma vez por Cena, quando você fizer algo de maneira desnecessariamente dramática, pode marcar uma Condição para redefinir sua Audácia (Panache) igual ao seu car.",
       "Enquanto tiver Audácia, quando Trocar Golpes usando uma arma #precisa, você pode rolar+CAR (em vez de +DES), e pode gastar 1 de Audácia para ganhar vant na rolagem."
      ]
     },
     {
      "name": "Voar na Cara do Perigo",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Desafiar o Perigo tentando algo que nunca tentou antes, após a rolagem você pode gastar 1 de Audácia para tratar um 6- como se fosse 7-9, ou um 7-9 como se fosse 10+."
      ]
     },
     {
      "name": "Eu Não Sou Canhoto!",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Trocar Golpes, após rolar você pode gastar 1 de Audácia para fazer um dos seguintes:",
       "◆ Desarmar — ✴Com 10+, você pode fazer seu oponente largar algo que esteja segurando (em vez das outras escolhas)",
       "◆ Fintar — #perfura a armadura do seu oponente, ignorando-a neste golpe",
       "◆ Aparar — Reduza o dano recebido pelo seu car, até o mínimo de 0"
      ]
     },
     {
      "name": "Passado Muito Intrincado",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode ter duas Provações (Struggles) ativas ao mesmo tempo. Agora ou na próxima vez que Acampar, limpe uma Condição trancada (se possível) ou Suba de Nível e Revele uma Provação."
      ]
     },
     {
      "name": "Veja-me Brilhar",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você atrair atenção fazendo algo desnecessariamente dramático, pode gastar 1 de Audácia para rolar+DES. ✴Com 10+, escolha dois. ✴Com 7-9, apenas um:",
       "◆ Acalmar ou intensificar uma situação (sua escolha)",
       "◆ Seus aliados são ignorados; eles ganham uma oportunidade",
       "◆ Seu drama não é interrompido, nem por palavras nem por violência ✴Com 6-, a atenção é seguida de ação violenta; marque 1 XP e o MJ faz um Movimento."
      ]
     }
    ]
   }
  ]
 },
 "cleric": {
  "id": "cleric",
  "title": "O Clérigo",
  "tagline": "Não um mero sacerdote, mas um emissário divino armado com aço e poderes do alto",
  "relationshipSlots": 4,
  "deity": true,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. pequenino, povo-coruja, tiefling, etc. Qual é a visão do seu povo sobre a sua fé?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. um bando de marginais, pessoas devotas, agentes da lei, etc. Que tradições você ainda honra separadamente da sua divindade?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. xerife desiludido, órfão desamparado, aprendiz de mago cético, etc. Que “intervenção divina” fez você largar tudo e se tornar um clérigo?"
   }
  ],
  "relationshipExamples": "Frequentemente preciso mediar em favor dele(a) ◆ Minha divindade me mostrou o destino dele(a) ◆ Compartilhamos crenças muito semelhantes ◆ Ele(a) segue um poder que se opõe à minha divindade ◆ Ele(a) tem um histórico com um inimigo jurado da minha divindade ◆ Ele(a) perdeu o rumo; preciso ajudá-lo(a) ◆ Ele(a) me conheceu antes de eu encontrar minha fé",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "spellEffects": [
   "Ofício: montar ou criar objetos, desmontar objetos manufaturados, saber quem criou algo. Lei: comandar alguém, detectar mentiras, invocar executores da lei. Luz: iluminar um aposento, conjurar ilusões baseadas em luz, fazer descer luz lancinante do alto. Natureza: fazer vegetação crescer rapidamente, invocar animais em seu auxílio, mudar o clima. Viagem: encontrar ou criar abrigo, abrir caminho através de um perigo ou obstáculo, teletransportar-se para algum lugar."
  ],
  "startingMove": {
   "name": "Invocar o Divino",
   "body": [
    "Você tem uma conexão próxima com uma divindade que lhe concede poder para espalhar os ideais dela. Dê a ela um nome e pronomes, e depois escolha um por linha abaixo (ou escreva o seu próprio):",
    "◆ Domínio: ☐ Ofício ☐ Lei ☐ Luz ☐ Natureza ☐ Viagem",
    "◆ Fiéis: ☐ artistas ☐ exploradores ☐ fazendeiros ☐ mercadores",
    "☐ nobres",
    "◆ Inimigos: ☐ bandidos ☐ industriais ☐ monstros noturnos ☐ rebeldes",
    "☐ mortos-vivos",
    "Você pode Conjurar um Feitiço+SAB com qualquer efeito sob o(s) Domínio(s) da sua divindade. Para Conjurar um Feitiço você precisa invocar o nome da sua divindade em voz alta. Anote um Relacionamento de Profundidade 2 com ela. Quando Conjurar um Feitiço desta forma, sua opção única de ✴com 7-9 é:",
    "◆ sua divindade desaprova; apague 1 de Profundidade com ela",
    "Você pode ganhar Profundidade com sua divindade protegendo seus fiéis, espalhando sua fé e derrotando seus inimigos (a critério do MJ)."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha uma arma contundente (ou crie uma nova com o MJ):",
    "rows": [
     [
      "maça consagrada 1d6 de dano #toque + escudo O uso. Marque para ignorar todo o dano de um ataque"
     ],
     [
      "bordão simples 1d6 de dano #curto #toque #duas-mãos"
     ],
     [
      "rede reforçada 0 de dano #curto #toque O uso. Marque para prender uma criatura média ou algumas pequenas sob ela"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "frascos de água benta #sagrado #curto OOO usos. Marque para ignorar todas as Resistências de um inimigo da sua divindade até o final da Cena"
     ],
     [
      "armadura de couro redução de dano 1 (reduz todo dano recebido em 1, até o mín de 1). Mín FOR+1 para usar adequadamente"
     ],
     [
      "medicamentos OO usos. Marque para fazer alguém dobrar os PV que recuperar a seguir ou para curar uma doença ou veneno menor"
     ],
     [
      "suprimentos piedosos OOO usos. Marque para vasculhar e encontrar um item usado no culto da sua divindade, como velas, turíbulo, incenso ou vestes sagradas"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "uniforme antigo",
      "casaco de pele estimado",
      "vestes simples"
     ],
     [
      "tatuagem animada",
      "amuleto abençoado",
      "relicário roubado"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 8 e sua sab é +2. Escolha for ou car para ser +1, e então atribua +1, 0 e -1 aos outros.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Cuidador",
    "tagline": "De que serve uma fé que não restaura o mundo?",
    "widgets": [],
    "moves": [
     {
      "name": "O Maior Milagre",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Invocar o Divino do Clérigo se ainda não o tiver, exceto que o domínio da sua divindade é Vida. Escolha os fiéis e inimigos da sua divindade como detalhado no Movimento. Se você já tiver Invocar o Divino, adicione Vida aos domínios da sua divindade. Isso é um novo aspecto da sua divindade, resultado da sua conexão única com ela, ou outra coisa?",
       "Médico de Combate — Uma vez por sessão, quando você se colocar em perigo para proteger ou curar alguém, ganhe 1 de Profundidade com sua divindade. Curar Ferimentos — Sempre que Conjurar um Feitiço para curar alguém (ex. restaurar PV, curar doença, etc.), trate a mag como se fosse 1 menor ao compará-la com seu Atributo de Conjuração."
      ]
     },
     {
      "name": "Desperte! A Sombra Passou",
      "first": false,
      "widgets": [],
      "body": [
       "Quando outra pessoa Encarar a Morte na sua presença, você pode parlamentar com a Morte e conceder ao outro PJ acesso à seguinte opção:",
       "◆ Revivificado — Você não está mais Indefeso e recupera metade dos seus PV máx. Você ainda tranca uma Condição após Encarar a Morte.",
       "Se ele escolher isso, você não poderá usar este Movimento novamente até acertar seu trato com a Morte."
      ]
     },
     {
      "name": "Eu Carrego Isso por Você",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você tocar outra pessoa e se oferecer como sacrifício, apague 1 de Profundidade com sua divindade e faça um ou ambos:",
       "◆ Escolha quaisquer Condições que ela tenha; ela limpa essas Condições e você as marca",
       "◆ Escolha qualquer quantidade de PV que estejam faltando a ela; ela os restaura e você os perde"
      ]
     },
     {
      "name": "Rosto de Anjo",
      "first": false,
      "widgets": [],
      "body": [
       "Ninguém atacará você diretamente sem provocação, a menos que já o tenham visto lutar ou tenham contas a acertar. Quando Manipular, você ganha acesso à seguinte abordagem:",
       "◆ Se você implorar para que abandonem a violência, eles podem ir embora agora ou mudar de ideia mais tarde."
      ]
     },
     {
      "name": "Curar Ferimentos em Massa",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você proclamar sua fé, apague 1 de Profundidade com sua divindade para restaurar metade dos PV máximos seus e dos seus aliados #curto (arredondado para baixo)."
      ]
     }
    ]
   },
   {
    "name": "Oráculo",
    "tagline": "Coisas que foram, que são e que ainda podem ser",
    "widgets": [],
    "moves": [
     {
      "name": "Visões do Alto",
      "first": true,
      "widgets": [
       {
        "type": "field",
        "label": "Dado do Destino"
       }
      ],
      "body": [
       "Ganhe o Movimento Inicial Invocar o Divino do Clérigo se ainda não o tiver, exceto que o domínio da sua divindade é Conhecimento. Escolha os fiéis e inimigos da sua divindade como detalhado no Movimento. Se você já tiver Invocar o Divino, adicione Conhecimento aos domínios da sua divindade. Isso é um novo aspecto da sua divindade, resultado da sua conexão única com ela, ou outra coisa?",
       "Orientação — Agora e no início de cada sessão, role 1d6 como seu Dado do Destino e guarde o resultado. Uma vez por cena, depois que alguém rolar para um Movimento (não para dano ou similar), você pode trocar um dos dados rolados pelo seu Dado do Destino. O dado substituído torna-se o seu novo Dado do Destino."
      ]
     },
     {
      "name": "Mariposa para a Chama Sagrada",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você se expuser voluntariamente ao ataque de um inimigo, role+ car; se estiver vulnerável ao fazer isso, role com vant. ✴Com 10+, ele se gaba e tagarela diante de você, e você pode fazer quaisquer duas perguntas sobre ele ou seus superiores. ✴Com 7-9, você pode fazer uma pergunta, mas depois de responder ele partirá para a violência. ✴Com 6-, ele é muito mais astuto ou poderoso do que aparenta (a critério do MJ); marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Haruspicina",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você sacrificar ritualmente algo importante, faça à sua divindade uma pergunta sobre o sacrifício ou algo associado a ele",
       "(donos, entes queridos, história, etc.) e role+SAB. ✴Com 10+, sua divindade lhe mostra uma visão vívida que responde totalmente à sua pergunta. ✴Com 7-9, a visão é enigmática e precisará ser decifrada. ✴Com 6-, sua visão inclui um presságio de ruína; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Verdade Sagrada",
      "first": false,
      "widgets": [],
      "body": [
       "Uma vez por sessão, quando você revelar publicamente a verdade sobre um segredo ou mistério, ganhe 1 de Profundidade com sua divindade. Se alguém presente não quiser que isso seja conhecido, você também ganha vant no próximo Movimento rolado contra essa pessoa."
      ]
     },
     {
      "name": "Verdadeiras Cores",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Sentir Motivação, também pode fazer uma das seguintes perguntas, mesmo com 6-. ◆ Quais são seus verdadeiros sentimentos sobre mim? ◆ O que você não quer admitir (para mim, para outro, para si mesmo, etc.)? ◆ Com quem ou com o que você mais se importa acima de tudo?"
      ]
     }
    ]
   },
   {
    "name": "Sacerdote de Guerra",
    "tagline": "O mal não pode ser tolerado",
    "widgets": [],
    "moves": [
     {
      "name": "Punição Divina",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Invocar o Divino do Clérigo se ainda não o tiver, exceto que o domínio da sua divindade é Guerra. Escolha os fiéis e inimigos da sua divindade como detalhado no Movimento. Se você já tiver Invocar o Divino, adicione Guerra aos domínios da sua divindade. Isso é um novo aspecto da sua divindade, resultado da sua conexão única com ela, ou outra coisa?",
       "Escudo Divino — Uma vez por cena, quando você sofrer dano, pode apagar 1 de Profundidade com sua divindade para ignorá-lo, mesmo que seja #perfurante. Repreensão — Uma vez por sessão, quando você condenar alguém por seus caminhos malignos, ganhe 1 de Profundidade com sua divindade."
      ]
     },
     {
      "name": "Intuição Divina",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você encontrar um inimigo da sua divindade, pode fazer ao MJ perguntas sobre ele igual à sua sab. Você ganha vant na sua primeira rolagem relacionada à(s) resposta(s)."
      ]
     },
     {
      "name": "Beber do Cálice da Ira",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você condenar alguém por seus caminhos malignos, em vez de ganhar 1 de Profundidade com sua divindade, pode tornar o condenado um inimigo da sua divindade (se ainda não for).",
       "Quando suplicar à sua divindade para ferir ou amaldiçoar um inimigo coletivo (ex. uma facção, tipo de criatura, habitantes de um local, etc.), trate isso como Realizar um Ritual, mas depois que o MJ disser os requisitos você pode apagar Profundidade com sua divindade, 1 para 1, para cumpri-los milagrosamente."
      ]
     },
     {
      "name": "Não é o Fim",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Encarar a Morte, também pode escolher a seguinte opção:",
       "◆ Intervenção Divina. Sua divindade salva milagrosamente sua vida, bane um perigo, inimigo ou obstáculo e então restaura todos os seus PV. Você não está mais Indefeso. Você ainda tranca uma Condição após Encarar a Morte."
      ]
     },
     {
      "name": "Arma Espiritual",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você gritar o nome da sua divindade como um grito de guerra, o poder dela preenche qualquer arma que você empunhe até o final da cena. Escolha uma bênção abaixo, ou apague 1 de Profundidade com sua divindade para escolher duas. ◆ Adicione +1 a todo o dano que ela causar ◆ Ela #perfura a armadura dos inimigos da sua divindade ◆ Ela pode flutuar e lutar sozinha como uma extensão da sua vontade; trate-a como um PdM leal e, quando ela sofrer dano, perde este benefício a menos que você a alimente com sua força vital para continuar (perca 1 PV)."
      ]
     }
    ]
   }
  ]
 },
 "druid": {
  "id": "druid",
  "title": "O Druida",
  "tagline": "Um discípulo da natureza que comunga com os espíritos e se transforma em animais",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. centauro, povo-aranha, ente, etc. Que característica física persiste em todas as suas transformações?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. industriais obstinados, alcateia de animais selvagens, protetores sagrados, etc. Como eles veem a natureza em comparação a você?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. artesão brilhante, eremita devoto, herdeiro(a) abastado(a), etc. Quem quer que você retorne à sua antiga vida “civilizada”?"
   }
  ],
  "relationshipExamples": "Sinto-me atraído(a) por ele(a), mas viemos de lugares tão diferentes ◆ Os espíritos me deram um aviso sobre ele(a) ◆ Ele(a) é cego(a) para a beleza da natureza; vou abrir seus olhos ◆ Ele(a) acha minhas formas divertidas; não sei como me sinto sobre isso ◆ Ele(a) compreende a natureza de um jeito fascinantemente diferente do meu ◆ Ele(a) já defendeu a natureza antes e, por isso, tem meu respeito ◆ Ele(a) me mostrou um benefício intrigante da civilização",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Metamorfose",
   "body": [
    "Quando você se transformar em uma fera que já encontrou antes, descreva sua nova forma, escolha uma adaptação abaixo e role+SAB. Se você encontrou a fera antes do jogo começar, o MJ pode pedir detalhes.",
    "◆ veloz e ágil — 1d6 de dano #precisa #toque #curto",
    "◆ móvel e aclimatada — 1d4 de dano #toque, pode ☐ voar, ☐ nadar ou ☐ escavar",
    "◆ pequena ou camuflada — 1 de dano #toque. Você tem vant para Esgueirar-se",
    "◆ resistente e forte — Armadura 2, 1d8 de dano #toque #curto",
    "✴Com 10+, funciona e você ganha os benefícios da adaptação. ✴Com 7-9, funciona, mas o MJ dirá o que impele seus instintos; siga esse impulso agora ou marque uma Condição para resistir. ✴Com 6-, funciona, mas você perde o controle sobre a forma por enquanto; marque 1 XP e o MJ faz um Movimento.",
    "Enquanto estiver metamorfoseado, você não pode se comunicar com ninguém, exceto outros PJs. Você pode voltar ao normal a qualquer momento em que estiver no controle, mas deve sempre fazê-lo quando a cena terminar."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha uma arma (ou crie uma nova com o MJ):",
    "rows": [
     [
      "cajado florido 1d4 de dano #curto #duas-mãos OO usos. Marque no lugar de outro item para produzir uma alternativa natural"
     ],
     [
      "estilingue de vinhas 1d6 de dano #próximo #munição #duas-mãos"
     ],
     [
      "clava de madeira 1d6 de dano #curto + escudo O uso. Marque para ignorar todo o dano de um ataque"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "frascos alquímicos OOO usos. Marque para sacar qualquer um dos seguintes tipos: ácido, fogo ou fumaça"
     ],
     [
      "medicamentos OO usos. Marque para fazer alguém dobrar os PV que recuperar a seguir ou para curar uma doença ou veneno menor"
     ],
     [
      "poção de cura O uso. Marque para recuperar metade dos seus PV máx ou limpar uma Condição trancada"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "vestes terrosas",
      "couros feitos à mão",
      "trajes cobertos de folhas"
     ],
     [
      "ídolo esculpido",
      "coroa de galhadas",
      "muda órfã"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 8 e sua sab é +2. Escolha des ou car para ser +2, e então atribua 0, 0 e -1 aos outros.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Animista",
    "tagline": "O mundo natural está vivo de maneiras que poucos mortais hoje compreendem",
    "widgets": [],
    "moves": [
     {
      "name": "Anima Mundi",
      "first": true,
      "widgets": [],
      "body": [
       "Você tem uma conexão especialmente próxima com os espíritos elementais do mundo — as raízes, rochas, ventos, águas e mais — e eles o veem como guardião, zelador e embaixador. Você pode Conjurar um Feitiço suplicando auxílio aos espíritos naturais. Quando fizer isso, sua opção única de ✴com 7-9 é:",
       "◆ Os espíritos exigem um favor ou sacrifício; o MJ dirá mais depois que você escolher isso",
       "Cada vez que Conjurar um Feitiço desta forma, responda às perguntas abaixo. Seu Atributo de Conjuração para o feitiço começa em 0 e aumenta em 1 para cada “Sim”.",
       "◆ Você não está empunhando nem vestindo absolutamente nenhum metal?",
       "◆ Isso aproveita uma característica ou entidade natural próxima?",
       "◆ Isso restaurará a harmonia ou avançará um ciclo da natureza?"
      ]
     },
     {
      "name": "De Volta ao Básico",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você revelar uma nova falha ou fracasso da civilização para um ou mais PdMs, limpe uma Condição e então role+CAR. ✴Com 10+, escolha dois abaixo. ✴Com 7-9, apenas um. ✴Com 6-, você atrai a atenção de um inimigo; marque 1 XP e o MJ faz um Movimento.",
       "◆ Eles reconhecem o problema e começam a trabalhar para corrigi-lo",
       "◆ Eles atacam ou sabotam um inimigo da natureza",
       "◆ Eles protegem você ou a natureza de uma ameaça iminente"
      ]
     },
     {
      "name": "Comungar com a Natureza",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você passar um tempo se conectando com os espíritos naturais, faça uma pergunta abaixo sobre a região em que está, ou faça todas elas mas marque uma Condição após ouvir as respostas. O MJ responderá honestamente. ◆ Há algo aqui que ameace o mundo natural? ◆ De que perigo ou inimigo aqui devemos estar cientes? ◆ Que pessoa ou local aqui poderia ser útil para nós?"
      ]
     },
     {
      "name": "Morte & Renascimento",
      "first": false,
      "widgets": [
       {
        "type": "circles",
        "label": "Força Vital",
        "n": 2
       }
      ],
      "body": [
       "Quando você abater um inimigo significativo, ou quando sofrer dano máx, ganhe 1 de Força Vital (máx 2). Você pode gastar Força Vital como se fosse um uso de medicamentos."
      ]
     },
     {
      "name": "Olho da Tempestade",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Conjurar um Feitiço suplicando auxílio aos espíritos naturais, se todas as três perguntas forem respondidas com “Sim”, você pode tratar a mag como se fosse 1 menor ao compará-la com seu Atributo de Conjuração."
      ]
     }
    ]
   },
   {
    "name": "Observador das Estrelas",
    "tagline": "Assim como foi predito no alto, desenrola-se cá embaixo",
    "widgets": [],
    "moves": [
     {
      "name": "Olho no Céu",
      "first": true,
      "widgets": [],
      "body": [
       "Você tem uma conexão especial com o(s) sol(is), lua(s) e estrelas. Você sempre sabe a hora e a data, e nunca se perde enquanto puder ver o céu. Enquanto estiver ao ar livre durante o dia, ignore desv por estar Assustado e ganhe +1 de Armadura. Enquanto estiver ao ar livre durante a noite, ignore desv por estar Inseguro e cause +1 de dano."
      ]
     },
     {
      "name": "Augúrio",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você ler o futuro escrito nas estrelas, pode focar sua leitura em um lugar ou pessoa específica; role+SAB, e o MJ revela um evento importante que acontecerá em breve. ✴Com 10+, você pode fazer uma pergunta complementar. ✴Com 7-9, a visão é perturbadora; marque uma Condição. ✴Com 6-, o evento envolve o destino terrível de um aliado (PJ ou PdM); o MJ dirá como, mas você pode distorcer o destino para que recaia sobre você. Quem sofrer o destino terrível tem desv em todas as rolagens durante o evento."
      ]
     },
     {
      "name": "Profeta da Ruína",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você proclamar o destino iminente de um inimigo para ele, role+SAB. ✴Com 10+, escolha dois. ✴Com 7-9, apenas um. ✴Com 6-, você só vê o sucesso dele; marque 1 XP e tenha desv contra ele até o final da cena.",
       "◆ Dor — Aumente o dano que ele sofre em 1 até o final da cena",
       "◆ Arrependimento — Ganhe vant na próxima vez que você ou um aliado Manipular contra ele",
       "◆ Vulnerabilidade — O MJ dirá uma fraqueza que ele esconde"
      ]
     },
     {
      "name": "Previsor do Tempo",
      "first": false,
      "widgets": [],
      "body": [
       "Depois que você Acampar com sucesso, escolha como estará o clima na lista abaixo. Ele permanece assim até que alguém o mude, você use este Movimento novamente ou parta da região. Você e todos os companheiros ganham o benefício do clima.",
       "◆ céu limpo — Limpe uma Condição quando isto for escolhido",
       "◆ nublado — Ignore desv por estar Exausto",
       "◆ chuva, neblina ou neve — Ganhe vant para Esgueirar-se ao ar livre"
      ]
     },
     {
      "name": "Herdeiro do Aurora e do Crepúsculo",
      "first": false,
      "widgets": [],
      "body": [
       "Quando estiver ao ar livre durante o amanhecer ou anoitecer, ganhe os benefícios diurnos e noturnos de Olho no Céu. Quando se concentrar na sua conexão com os corpos celestes, você pode marcar uma Condição para tratar esta cena como se ocorresse ao ar livre durante o amanhecer ou anoitecer."
      ]
     }
    ]
   },
   {
    "name": "Coração Selvagem",
    "tagline": "Seguidor do caminho mais antigo, selvagem e calejado como as feras",
    "widgets": [],
    "moves": [
     {
      "name": "Sussurrador Primevo",
      "first": true,
      "widgets": [],
      "body": [
       "Você pode se comunicar livremente com criaturas selvagens. Quando Sentir Motivação de uma criatura selvagem, não importa o resultado, você pode fazer uma pergunta extra, mesmo ✴com 6-. Quando Manipular uma criatura selvagem, se sua abordagem estiver alinhada aos desejos ou instintos dela, role com vant."
      ]
     },
     {
      "name": "Chamado da Selva",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você clamar à natureza selvagem por auxílio, escolha um tipo adequado de criatura selvagem para o seu ambiente atual e role+CAR. ✴Com 7+, essa criatura selvagem chega para ajudar você durante a cena como um PdM aliado. ✴Com 10+, escolha dois. ✴Com 7-9, apenas um.",
       "◆ Um bando ou grupo delas chega em vez de apenas uma",
       "◆ Elas acompanham você por um período após o término desta cena",
       "◆ Elas não causam danos colaterais ou tumulto enquanto estiverem aqui",
       "◆ Elas intimidam ou distraem um inimigo ao chegar ✴Com 6-, você atrai a ira ou a fome da natureza; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Criado por Lobos",
      "first": false,
      "widgets": [
       {
        "type": "field",
        "label": "Criatura"
       }
      ],
      "body": [
       "Escolha um tipo de criatura selvagem (ex. ursos, águias, lobos). Por padrão, elas tratam você como amigo e seus companheiros como aliados por associação. Quando passar um tempo com sua criatura selvagem escolhida, escolha um se estiver sozinho ou dois se estiver com outro PJ.",
       "◆ trocar presentes — Recupere um uso gasto de um item",
       "◆ ouvir suas histórias — Descubra sobre um perigo ou obstáculo próximo como se tivesse rolado ✴com 7-9 em Recordar Conhecimento",
       "◆ relaxar e recarregar — Limpe uma Condição"
      ]
     },
     {
      "name": "Rumor da Terra",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Desvendar Segredos ou Sentir Motivação interrogando criaturas selvagens próximas, pode rolar+CAR."
      ]
     },
     {
      "name": "Juntos Como Um",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você marcar uma criatura selvagem com sangue, lama ou terra, apague marcas anteriores e então poderá compartilhar os sentidos dela como se fossem seus (e vice-versa), não importa a distância que os separe."
      ]
     }
    ]
   }
  ]
 },
 "fighter": {
  "id": "fighter",
  "title": "O Guerreiro",
  "tagline": "Um especialista em armas e armaduras; um profissional no campo de provas mais mortal",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. draconato, humano, nefilim, etc. Que lição de luta da sua infância ainda permanece com você?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. fazendeiros pacíficos, mineradores abnegados, marinheiros durões, etc. Eles valorizavam a destreza marcial? Por quê?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. criança selvagem, minerador respeitado, curandeiro incansável, etc. Que causa fez você deixar sua antiga vida de paz para trás?"
   }
  ],
  "relationshipExamples": "Ele(a) precisa desesperadamente de treinamento ◆ Temos uma competição de contagem de abates ◆ Ele(a) me viu derrotado e com medo ◆ Busco orientação nele(a) ◆ Ele(a) me deve a vida ◆ Ele(a) me conheceu antes ◆ Ele(a) vai acabar matando todos nós",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Arma Assinatura",
   "body": [
    "Você empunha uma arma única e distinta. Para começar, escolha sua base (ou crie uma nova com o MJ):",
    "☐ um par pequeno — 1d4 de dano #toque #precisa #leve vant nas rolagens de dano",
    "☐ tamanho médio e versátil — 1d6 de dano #curto",
    "☐ tamanho grande e poderosa — 1d8 de dano #curto #duas-mãos",
    "☐ À distância — 1d6 de dano #próximo #munição #recarga #duas-mãos",
    "Depois, escolha dois aprimoramentos: ☐ adaptável (escolha um alcance extra: #toque, #curto, #próximo, #distante) ☐ adamantina (é indestrutível) ☐ alarmante (brilha na presença de um tipo de criatura) ☐ agarradora (após causar dano, você pode puxar um alvo para mais perto) ☐ #perfurante (ignora armadura)",
    "☐ imobilizadora (após causar dano a uma criatura do seu tamanho ou menor, você pode imobilizá-la brevemente) ☐ #precisa (pode Trocar Golpes+DES) ☐ afiada (aumenta o dano em 1).",
    "Por fim, dê um nome à sua arma. Exemplos incluem: Ataraxia, Quebra-Criptas, Sombra Lunar, Sigilo, Tempestade, O Último Suspiro, A Lata-Velha, Torrentes de Sangue"
   ],
   "widgets": [
    {
     "type": "field",
     "label": "Nome da Arma"
    },
    {
     "type": "field",
     "label": "Aparência"
    }
   ]
  },
  "equipment": [
   {
    "title": "Escolha uma arma adicional (ou crie uma nova com o MJ):",
    "rows": [
     [
      "machado grande intimidador 1d8 de dano #toque #duas-mãos"
     ],
     [
      "espadas curtas gêmeas 1d6 de dano #toque #leve #precisa, vant nas rolagens de dano"
     ],
     [
      "arco longo de teixo 1d6 de dano #munição #próximo #distante #recarga #duas-mãos"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "peitoral de aço redução de dano 2 (reduz o dano sofrido em 2, até o mín de 1) req. FOR+2, ou"
     ],
     [
      "couro batido redução de dano 1 (reduz o dano sofrido em 1, até o mín de 1) req. FOR+1"
     ],
     [
      "medicamentos OO usos. Marque para fazer alguém dobrar os PV que recuperar a seguir ou para curar uma doença ou veneno menor"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ],
     [
      "escudo O uso. Marque para ignorar todo o dano de um ataque"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "cinturão de campeão",
      "capa esvoaçante",
      "insígnia militar surrada"
     ],
     [
      "grevas amassadas",
      "elmo icônico",
      "braçadeiras intrincadamente decoradas"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 10. Escolha for ou des para ser +2 e o outro para ser +1, e então atribua +1, 0 e -1 aos outros.",
  "maxHp": 10,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Baluarte",
    "tagline": "Força imparável? Conheça o objeto imóvel!",
    "widgets": [],
    "moves": [
     {
      "name": "Protetor Inabalável",
      "first": true,
      "widgets": [],
      "body": [
       "Uma vez por sessão, quando você sofrer dano que não seja #perfurante, pode ignorá-lo completamente. Se o dano veio de um inimigo, escolha também um: ◆ Ele fica aberto e exposto ◆ Você descobre uma fraqueza ou limitação dele ◆ Você o enfurece ou aterroriza (a critério do MJ) — e ele age de acordo",
       "Eu Sou Seu Escudo — Quando você se interpuser entre um aliado #próximo e um ataque ou fonte de dano, você sofre os efeitos no lugar dele."
      ]
     },
     {
      "name": "Armeiro",
      "first": false,
      "widgets": [],
      "body": [
       "Você sabe como personalizar sua armadura e extrair o melhor dela. Escolha um aprimoramento agora: ☐ #oculta (parece e soa como roupa mundana) ☐ reforçada (aumenta a redução de dano em 1) ☐ com espinhos (quando um inimigo causa dano a você, ele sofre 1 de dano #perfurante em troca) ☐ protegida (escolha um tipo de dano não físico, como ácido ou fogo; ele nunca é #perfurante contra você).",
       "Quando Acampar com sucesso, você pode limpar o uso de um escudo ou mudar qual aprimoramento sua armadura possui."
      ]
     },
     {
      "name": "Segundo Fôlego",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Encarar a Morte, também tem acesso à seguinte opção:",
       "◆ Não é Tão Ruim Quanto Parece. Cerre os dentes, supere a dor à força e levante-se com 1 PV. Você não está mais Indefeso e não tranca uma Condição, mas não pode escolher esta opção novamente até Acampar com sucesso."
      ]
     },
     {
      "name": "Protetor Silencioso",
      "first": false,
      "widgets": [],
      "body": [
       "Quando uma situação de combate começar, escolha um aliado (PJ ou PdM) #próximo a você e ganhe os seguintes benefícios até a batalha terminar:",
       "◆ Retaliar. Quando ele for ferido em 2 ou mais de dano, ganhe vant na sua próxima rolagem contra a fonte do dano",
       "◆ Olhar Vigilante. Você pode sempre aparecer #próximo a ele em um aperto, não importa onde estivesse antes. Se você estava em uma situação difícil, o MJ dirá como ela se desenrolou desde que você saiu"
      ]
     },
     {
      "name": "Grito Provocador",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você bradar um desafio aos seus inimigos, nomeie um entre eles. Por ora, ele ignorará seus aliados e tratará você como a ameaça mais óbvia."
      ]
     }
    ]
   },
   {
    "name": "Mestre de Armas",
    "tagline": "Uma perícia tão antiga quanto mortal",
    "widgets": [],
    "moves": [
     {
      "name": "A Lâmina Reforjada",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe uma Arma Assinatura, seguindo o Movimento Inicial do Guerreiro de mesmo nome. Se você já tiver uma Arma Assinatura, dê a ela mais dois aprimoramentos ou ganhe uma segunda Arma Assinatura. Quando Curtir uma Folga, você também pode fazer o seguinte:",
       "◆ Aprimorar. Gaste 1 Tesouro e escolha um item mágico ou Artefato. Ele se torna parte da sua Arma Assinatura, que ganha as propriedades, Movimentos e quaisquer #tags que façam sentido do item. Uma Arma Assinatura só pode ter um item enxertado por vez; um item enxertado anteriormente pode ser separado como parte desta atividade."
      ]
     },
     {
      "name": "Estilos de Luta Avançados",
      "first": false,
      "widgets": [],
      "body": [
       "Você dominou um estilo de luta especialmente difícil ou obscuro. Escolha um abaixo:",
       "▢ Poder das Armas. Você pode empunhar confortavelmente armas corpo a corpo de #duas-mãos",
       "em uma mão, e até empunhar duas delas ao mesmo tempo",
       "▢ Queima-Roupa. Todas as armas à distância que você empunha ganham #toque e",
       "#curto. Enquanto usar uma a alcance #curto ou mais perto, cause +1 de dano",
       "▢ Quebra-Feitiços. Quando um PdM #curto tentar criar um efeito mágico,",
       "você pode interrompê-lo e impedi-lo; marque uma Condição pelo contragolpe"
      ]
     },
     {
      "name": "Faca na Bota",
      "first": false,
      "widgets": [],
      "body": [
       "Qualquer arma que não seja de #duas-mãos pode ser facilmente #oculta por você. Ganhe um conjunto de equipamento de aventura (mesmo se já tiver um). Você pode marcar um uso de equipamento de aventura para sacar uma arma mundana; marque um uso adicional se a arma for de #duas-mãos."
      ]
     },
     {
      "name": "Arma Secreta",
      "first": false,
      "widgets": [],
      "body": [
       "A Mão que Empunha — Quando você Trocar Golpes com uma arma comum, ou sem nenhuma arma, ✴com 10+, você pode em vez disso escolher limpar uma Condição e, ✴com 6-, marcar 2 XP em vez de 1. Quando finalmente sacar sua Arma Assinatura após tentar derrotar um inimigo sem ela, até o fim da luta, após rolar para Trocar Golpes você pode marcar uma Condição para aumentar o resultado em um passo (6- → 7-9 → 10+)."
      ]
     },
     {
      "name": "Quebrar a Lâmina",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você causar dano com uma arma, após a rolagem de dano você pode quebrar temporariamente a arma (se ela não for indestrutível) para causar dano máx. A arma torna-se quase inútil até ser consertada.",
       "Quando Acampar, você pode consertar uma Arma Assinatura ou arma mundana que tenha sido quebrada desta forma ou de modo semelhante."
      ]
     }
    ]
   },
   {
    "name": "Tático",
    "tagline": "Audacioso e astuto no planejamento, firme e perseverante na execução",
    "widgets": [],
    "moves": [
     {
      "name": "Planos Dentro de Planos",
      "first": true,
      "widgets": [
       {
        "type": "circles",
        "label": "Preparo",
        "n": 3
       }
      ],
      "body": [
       "Quando você entrar em uma situação de combate, ganhe Preparo igual à sua int (mín 1). Quando a situação de combate terminar, perca todo o Preparo. Durante a situação de combate, você pode gastar 1 de Preparo para executar um dos seguintes estratagemas:",
       "◆ Carga! — Você e aliados voluntários avançam contra inimigos diferentes; todos que avançam e que recebem a carga ganham vant na próxima rolagem de dano",
       "◆ Manobra Coordenada — Ajude um PJ sem custo ou risco; como isso se parece?",
       "◆ Bigorna e Martelo — Atraia a atenção de um inimigo; sofra 1 de dano #perfurante e conceda a um aliado vant no próximo Trocar Golpes dele contra esse inimigo",
       "◆ Sondar — Faça ao MJ uma pergunta sobre os pontos fortes, fraquezas ou intenções de um inimigo, e o MJ responderá com a verdade"
      ]
     },
     {
      "name": "Olho para Destruição",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você decidir destruir algo (edifício, obstáculo, artefato mágico, etc.), trate isso como Realizar um Ritual. Se for durante uma situação de combate, você pode gastar Preparo, 1 para 1, para anular um requisito, exceto o último."
      ]
     },
     {
      "name": "Instintos Aguçados",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você tiver um mau pressentimento sobre uma situação iminente (sua escolha), marque uma Condição e pergunte ao MJ como evitá-la ou se preparar para ela. Quer seu palpite esteja certo ou não, o MJ dará um conselho; limpe uma Condição se você segui-lo."
      ]
     },
     {
      "name": "Velhos Camaradas & Antigos Inimigos",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você procurar alguém de uma batalha passada, amigo ou inimigo, escolha um da lista a seguir — ou dois se ficar devendo a ele ou o colocar em risco (sua escolha): ◆ Ele está disposto a ajudá-lo em um conflito atual ◆ Ele oferece orientação, conselho ou segurança por algum tempo",
       "◆ Ele revela um segredo ou oportunidade significativa"
      ]
     },
     {
      "name": "Veterano de Cem Batalhas",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você chegar a 0 de Preparo, pode marcar uma Condição para recuperar 1 de Preparo. De qual situação passada isso lembra você? Além disso, adicione os seguintes estratagemas ao seu Planos Dentro de Planos:",
       "◆ Desmoralizar — Um inimigo Sangrando se rende ou foge (a critério do MJ)",
       "◆ Primeiro Ataque — Um aliado age agora, mesmo que esteja surpreso",
       "◆ Grito de Reagrupamento — Um aliado #próximo limpa uma Condição"
      ]
     }
    ]
   }
  ]
 },
 "paladin": {
  "id": "paladin",
  "title": "O Paladino",
  "tagline": "Um benfeitor errante fortalecido por juramentos e aço",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. dhampir, elemental, povo-rato, etc. Que costume entre o seu povo marca um juramento ou promessa formal?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. um vampiro de coração partido, companheiros de prisão, dríades da floresta, etc. Quem você admira apesar de não ser um paladino?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. revolucionário audacioso, senhor da guerra maligno, espírito livre bondoso, etc. Que tragédia fez você jurar seus votos?"
   }
  ],
  "relationshipExamples": "Com juramentos ou não, ele(a) é uma inspiração para mim ◆ Ele(a) me salvou de um destino terrível, e jurei minha vida a ele(a) ◆ Ele(a) parece estar escondendo algo malévolo; vou descobrir o quê ◆ Ele(a) acha que sou certinho(a) demais; vou mostrar a ele(a)! ◆ Ele(a) costumava ser meu inimigo no passado. Será que realmente mudou? ◆ Ele(a) está me levando a quebrar meus juramentos, sabendo disso ou não ◆ Ele(a) está perdido(a) agora, mas já foi tão justo(a) quanto eu",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Juramentos de Convicção",
   "body": [
    "Você jurou votos justos e serviço a um suserano; dê um nome a ele agora. Exemplos de suseranos incluem: um líder visionário; uma instituição augusta; uma organização subversiva, etc.",
    "Você começa com todos os cinco juramentos a seguir marcados. Enquanto mantiver um juramento, você pode usar seu benefício:",
    "☐ Bravura (Ser sempre o primeiro a entrar e o último a sair). Quando você Desafiar o Perigo, trate qualquer ✴com 6- como um ✴com 7-9",
    "☐ Misericórdia (Nunca tirar uma vida). OOOOOO usos. Máximo de usos igual ao dobro da sua SAB (mín 1). Marque um para tocar alguém com a mão nua e restaurar 1 PV. Recupere todos os usos quando terminar de Acampar",
    "☐ Proteção (Nunca deixar um inocente morrer na sua presença). Suas armas causam dano #sagrado e adicionam +1 à sua armadura",
    "☐ Pureza (Nunca enganar ou trapacear). Você é imune a todas as doenças e pode marcar uma Condição para curar a doença de outra pessoa",
    "☐ Retribuição (Nunca deixar um malfeitor impune). Você pode marcar uma Condição para perceber criaturas com intenção maligna até alcance #próximo de você. Quando declarar que alguém tem intenção maligna, a partir de então ele sofre 1d4 de dano #perfurante sempre que causar dano a você ou aos seus aliados #curto",
    "Quando você quebrar um juramento (sua escolha), desmarque esse juramento e tranque uma Condição. Quando encontrar uma maneira de se redimir (também sua escolha), limpe uma Condição e marque um juramento desmarcado."
   ],
   "widgets": [
    {
     "type": "field",
     "label": "Suserano"
    }
   ]
  },
  "equipment": [
   {
    "title": "Escolha uma arma adicional (ou crie uma nova com o MJ):",
    "rows": [
     [
      "martelo de guerra ensanguentado 1d8 de dano #curto #duas-mãos #impactante"
     ],
     [
      "besta com virotes de ponta de prata 1d8 de dano #munição #próximo #distante #recarga #duas-mãos"
     ],
     [
      "espada longa do suserano 1d6 de dano #curto e escudo reluzente O uso. Marque para ignorar todo o dano de um ataque"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "meia-armadura redução de dano 2 (reduz o dano sofrido em 2, até o mín de 1) req. FOR+2"
     ],
     [
      "azagaias 1d4 de dano #munição #próximo #arremesso"
     ],
     [
      "poção de cura O uso. Marque para recuperar metade dos seus PV máx ou limpar uma Condição trancada"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "elmo amassado",
      "manto modesto",
      "coifa enferrujada"
     ],
     [
      "estandarte esquecido",
      "cicatriz notável",
      "brasão reconhecível"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 10. Seu CAR é +2. Escolha FOR ou SAB para ser +2 também, e então atribua 0, 0 e -1 aos outros.",
  "maxHp": 10,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Inquisidor",
    "tagline": "Maçãs podres devem ser expurgadas antes que estraguem o resto",
    "widgets": [],
    "moves": [
     {
      "name": "Temam o Meu Poder",
      "first": true,
      "widgets": [],
      "body": [
       "Se não o tiver, ganhe o Movimento Inicial Juramentos de Convicção do Paladino, mas apenas com o juramento abaixo. Se você já tiver esse Movimento, adicione este juramento também:",
       "▢ Castigo (Nunca permitir que um malfeitor viva). Quando você Trocar",
       "Golpes com uma criatura com intenção maligna (a critério do MJ), adicione +1d6 de dano #sagrado",
       "Destruir o Mal — Quando você Trocar Golpes com uma criatura com intenção maligna, ✴Com 10+, adicione o seguinte à lista de opções disponíveis:",
       "◆ Se ela for de fora deste mundo, você a bane por um tempo",
       "◆ Você marca a aparência dela permanentemente; descreva como",
       "◆ Você enfraquece a determinação dela; o MJ dirá o que acontece"
      ]
     },
     {
      "name": "Pelo Poder Investido em Mim…",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você der uma ordem a um PdM com base na sua autoridade, role+FOR. ✴Com 10+, ele segue sua ordem e você ganha vant no próximo Movimento rolado contra ele. ✴Com 7-9, ele escolhe um:",
       "◆ Recuar cautelosamente e então fugir ◆ Consultar outra autoridade",
       "◆ Fazer o que você diz, mas contar a alguém sobre isso depois. ✴Com 6-, ele desdenha da sua autoridade; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Prisão Mística",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você nomear um malfeitor e ordenar que ele pare, correntes mágicas aparecem e o prendem; role+FOR. ✴Com 10+, escolha dois abaixo. ✴Com 7-9, apenas um. ◆ Dura mais do que alguns instantes",
       "◆ Ele não pode se mover ◆ Ele não pode falar nem conjurar feitiços. ✴Com 6-, as correntes não conseguem segurá-lo; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Nomosmancia",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode Conjurar um Feitiço+FOR para impor a Ordem e negar um efeito sobrenatural. Quando fizer isso, sua opção única de ✴com 7-9 é:",
       "◆ Você recebe uma mácula sobrenatural; não pode usar este Movimento até Acampar"
      ]
     },
     {
      "name": "Condenação Pública",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você proclamar alguém como malfeitor perante o público, role+FOR. ✴Com 10+, escolha dois da lista abaixo. ✴Com 7-9, apenas um: ◆ Eles caçarão o malfeitor para você como um grupo",
       "◆ Eles protegerão você do malfeitor ◆ Você impressiona alguém poderoso (a critério do MJ); role com vant na próxima vez que Manipular essa pessoa. ✴Com 6-, um malfeitor está escondido na multidão; marque 1 XP e o MJ faz um Movimento."
      ]
     }
    ]
   },
   {
    "name": "Paragão",
    "tagline": "Uma inspiração para qualquer um que o conheça",
    "widgets": [],
    "moves": [
     {
      "name": "Proteger os Indefesos",
      "first": true,
      "widgets": [],
      "body": [
       "Se não o tiver, ganhe o Movimento Inicial Juramentos de Convicção do Paladino, mas apenas com o juramento de Proteção. Se você já tiver esse juramento, seus benefícios também impedem que inimigos usem #perfurante contra sua armadura. Manter a Linha — Quando um PdM #próximo tentar ferir ou se mover em direção a um aliado, você pode se interpor e rolar+CAR. ✴Com 10+ ele não consegue passar por você. ✴Com 7-9, ele passa por você, mas o próximo dano que causar é reduzido pela metade (arredondado para baixo) ✴Com 6-, ele encontra uma brecha contra você e seu aliado; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Uma Chance de Redenção",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você oferecer a um inimigo derrotado uma oportunidade de mudar de vida, ofereça uma prova da sua sinceridade e role+CAR. ✴Com 10+, ele fará a melhor tentativa possível. ✴Com 7-9, ele fica interessado, mas precisará de monitoramento e orientação constantes. ✴Com 6-, ele não está pronto; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "“Pela Honra de…”",
      "first": false,
      "widgets": [],
      "body": [
       "Uma vez por sessão, quando você assumir uma forma heroica relacionada às suas Origens, escolha benefícios abaixo até o seu CAR, que duram até você Encarar a Morte, Atingir o Limite ou a cena terminar, o que acontecer primeiro. ◆ Todos os aliados que testemunharem isso limpam uma Condição",
       "◆ Todos os inimigos que testemunharem isso ignoram seus aliados por enquanto e tratam você como a maior ameaça ◆ Reduza pela metade (arredondado para baixo) o dano sofrido de PdMs com intenção maligna ◆ Sua FOR é +3"
      ]
     },
     {
      "name": "Presença Inspiradora",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você reagrupar seus aliados com uma demonstração de comprometimento, role+CAR. ✴Com 10+, todos eles limpam uma Condição. ✴Com 7-9, você pode marcar uma Condição para que até um número deles igual ao seu CAR limpe uma Condição. ✴Com 6-, sua ação é ignorada; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Vocês Não Vão Me Quebrar",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Atingir o Limite, também pode escolher dentre as opções abaixo. Se fizer isso, você só limpa até CAR Condições, mas pode marcar 1 de Profundidade com um PJ que o tenha ajudado:",
       "◆ Irritado — Faça uma demonstração de força ou ataque seus inimigos",
       "◆ Distraído — Persiga uma suspeita ou missão secundária",
       "◆ Exausto — Toque a retirada ou faça um sacrifício pessoal",
       "◆ Assustado — Enfrente seus medos ou desabafe com outro",
       "◆ Inseguro — Busque orientação ou submeta-se à autoridade"
      ]
     }
    ]
   },
   {
    "name": "Cavaleiro Andante",
    "tagline": "O comprometimento absoluto pode alcançar o impossível",
    "widgets": [],
    "moves": [
     {
      "name": "Em Missão",
      "first": true,
      "widgets": [
       {
        "type": "field",
        "label": "missão"
       }
      ],
      "body": [
       "Quando você se dedicar a uma missão para o seu suserano, descreva-a. Se já tiver uma missão, apague-a e marque uma Condição. Depois, marque bênçãos até a sua SAB. Elas permanecem enquanto você se mantiver fiel à sua missão e podem ser alteradas quando Acampar. Quando Encerrar a Sessão, marque 1 XP se tiver feito progresso significativo na sua missão. Quando concluir sua missão, marque 2 XP, recupere todos os PV, limpe uma Condição trancada e perca suas bênçãos.",
       "▢ Dedicação Ardente — Você sabe a direção da sua missão",
       "▢ Corpo Imaculado — Você é imune a um tipo específico de dano",
       "(fogo, queda, flechas, etc.)",
       "▢ Língua de Ouro — Você pode se comunicar com qualquer ser senciente",
       "▢ Sétimo Sentido — Você pode sentir a presença de um tipo de criatura",
       "▢ Estado Sobre-Humano — Você não precisa de comida, água ou sono"
      ]
     },
     {
      "name": "Eu Te Consagro…",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Encarar a Morte, também pode escolher o seguinte:",
       "◆ Recém-Armado Cavaleiro. Nomeie um PJ, diga por que acredita nele e então morra. Se ele aceitar, ganha esta Trilha além dos limites normais."
      ]
     },
     {
      "name": "O Grande Unificador",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você tentar se juntar ou se aliar a uma facção, ou pedir assistência ao seu suserano, se eles não forem seus inimigos diretos, contarão sobre um grande problema ou objetivo com o qual estão lidando. Se você os ajudar a resolvê-lo, ganha a lealdade deles, e eles estarão dispostos a trabalhar ao lado de qualquer um, até mesmo de seus inimigos, contanto que você lidere os esforços."
      ]
     },
     {
      "name": "Lançar a Manopla",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você exigir um duelo individual em resposta a um insulto, seu oponente não pode recusar, mas pode usar um substituto, propor condições ou adicionar complicações (a critério do MJ). Além disso, sempre que iniciar o duelo, limpe Condições até a sua SAB."
      ]
     },
     {
      "name": "Escudeiro Fiel",
      "first": false,
      "widgets": [],
      "body": [
       "XP OOOOO Você tem um jovem PdM a seu serviço que carrega seus pertences, cuida das suas necessidades e está aprendendo a lutar (1d4 de dano). Quando ele sofrer dano, marque uma Condição. Uma vez por sessão, quando ensinar uma lição a ele, Desafie o Perigo+SAB. ✴Com 7+, ele marca 1 XP. Quando o escudeiro marcar seu 5º XP, ele está pronto. Você Sobe de Nível quando o apadrinha e ele parte para se tornar um paladino. Perca o acesso a este Movimento até acolher um novo escudeiro."
      ]
     }
    ]
   }
  ]
 },
 "ranger": {
  "id": "ranger",
  "title": "O Patrulheiro",
  "tagline": "Um caçador e viajante experiente que trabalha lado a lado com um amigo fera",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. goblin, grippli, tritão, etc. Em que ambiente natural você cresceu?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. aldeões remotos, heróis aposentados, caçadores de recompensas errantes, etc. Que habilidades você aprendeu diretamente com eles?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. guarda-caça real, criminoso procurado, guia da selva, etc. Que perigo iminente levou você a se aventurar?"
   }
  ],
  "relationshipExamples": "Eu o(a) tirei de uma enrascada uma vez, e ele(a) nunca me agradeceu ◆ Conheço alguns assuntos melhor do que ele(a), mesmo que ele(a) não suporte isso ◆ Vou ficar de olho nele(a), caso encontre ou traga problemas ◆ Ele(a) parece entender a natureza melhor do que eu… de alguma forma ◆ Ele(a) não entende os perigos da selva… e se recusa a aprender ◆ Ele(a) mostra potencial nas terras selvagens; vou ensinar o que puder ◆ Derrotamos um monstro perigoso juntos. Isso nos torna família",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Companheiro Animal",
   "body": [
    "Você trabalha em estreita parceria com uma fera natural mundana de tamanho razoável. Exemplos incluem lobo, urso, raposa, falcão, cão de caça, etc. Dê um nome a ele, descreva sua aparência e pense em como vocês criaram esse laço.",
    "Depois escolha três Qualidades que ele possui: ☐aquático ☐escavador ☐fofo",
    "☐veloz ☐voador ☐grande ☐visão noturna ☐assustador ☐furtivo ☐forte ☐rastreador E um Defeito: ☐covarde ☐frágil ☐faminto ☐barulhento ☐teimoso Quando seu companheiro animal ajudar você, diga como e escolha um para cada Qualidade relevante (a critério do MJ):",
    "◆ Ele cria uma oportunidade ou supera um pequeno obstáculo",
    "◆ Ele concede vant em uma rolagem de Movimento associada",
    "◆ Se estiver lutando, ele aumenta sua armadura em 1 e o dano causado por você em 1d4",
    "◆ O Defeito dele não introduz uma complicação",
    "Geralmente, você controla e interpreta seu companheiro animal junto com seu próprio personagem. Se ele for separado de você ou afetado pelo Defeito dele, o MJ pode controlá-lo por um tempo.",
    "Seu companheiro animal não tem PV. Quando ele se machucar, marque uma Condição ou diga como ele sai da cena."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha uma arma adicional (ou crie uma nova com o MJ):",
    "rows": [
     [
      "arco composto 1d6 de dano #próximo #distante #munição #duas-mãos"
     ],
     [
      "cimitarras duplas 1d6 de dano #toque #leve #precisa, vant nas rolagens de dano"
     ],
     [
      "cajado confiável 1d6 de dano #toque #curto #duas-mãos e funda 1d4 de dano #próximo #munição"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "armadura leve redução de dano 1 (reduz o dano sofrido em 1, até o mín de 1) req. FOR+1"
     ],
     [
      "medicamentos OO usos. Marque para fazer alguém dobrar os PV que recuperar a seguir ou para curar uma doença ou veneno menor"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ],
     [
      "kit de armadilhas OO usos. Quando passar um tempo montando uma armadilha, marque uma vez para criar um perigo impeditivo para qualquer um no alcance; geralmente causa 1d4 de dano"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "capa com capuz",
      "couros resistentes",
      "peles quentes"
     ],
     [
      "troféu monstruoso",
      "camuflagem natural",
      "cicatrizes cheias de história"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 10 e sua des é +2. Escolha FOR ou INT para ser +2 também, e então atribua 0, 0 e -1 aos outros.",
  "maxHp": 10,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Mestre das Feras",
    "tagline": "Dois corpos, uma só alma",
    "widgets": [],
    "moves": [
     {
      "name": "Não um Mero",
      "first": true,
      "widgets": [
       {
        "type": "field",
        "label": "Criatura"
       }
      ],
      "body": [
       "Ganhe o Movimento Inicial Companheiro Animal do Patrulheiro se ainda não o tiver. Se você já o tiver, escolha duas Qualidades adicionais para o seu Companheiro. De qualquer forma, escolha e marque um Treinamento Especial abaixo. Quando Acampar, você pode retreiná-lo para mudar qual está marcado.",
       "▢ Familiar Mágico — Ele conta como uma extensão de você mesmo",
       "quando você Conjurar um Feitiço",
       "▢ Sentinela — Ele sempre alertará você sobre perigos repentinos ou",
       "emboscadas antes que seja tarde demais",
       "▢ Farejador — Quando você Desvendar Segredos, antes de rolar você",
       "pode fazer uma pergunta sobre o segredo"
      ]
     },
     {
      "name": "Nessa Juntos",
      "first": false,
      "widgets": [
       {
        "type": "circles",
        "label": "Lealdade",
        "n": 3
       }
      ],
      "body": [
       "Quando você retreinar seu companheiro animal, também pode mudar o Defeito dele. Depois de ajudar seu companheiro animal a trabalhar no Defeito dele, ganhe 1 de Lealdade (máx 3). Você pode gastar Lealdade para ganhar um Treinamento Especial não marcado até o final da cena."
      ]
     },
     {
      "name": "Almas Gêmeas",
      "first": false,
      "widgets": [
       {
        "type": "field",
        "label": "Condição"
       }
      ],
      "body": [
       "Quando você Acampar, seu companheiro animal limpa uma das suas Condições (sua escolha).",
       "Apoio Emocional — Escolha uma Condição agora; ignore suas penalidades enquanto seu companheiro animal estiver com você. Você pode mudar a Condição escolhida quando retreiná-lo."
      ]
     },
     {
      "name": "Companheiro Superior",
      "first": false,
      "widgets": [],
      "body": [
       "Seu companheiro animal pode ter dois Treinamentos Especiais (em vez de um), e também pode escolher dentre os seguintes:",
       "▢ Distração — Quando você Esgueirar-se, após rolar você pode",
       "enviar seu companheiro para longe para atrair atenção, aumentando o resultado em um nível (✴com 6- → ✴com 7-9 → ✴com 10+)",
       "▢ Líder da Alcateia — Outros da espécie dele tratam você e seus",
       "companheiros como aliados, se não amigos",
       "▢ Socorrista — Quando você fosse Encarar a Morte, ele o salva mas",
       "não pode ajudar novamente até você Acampar; recupere 1 PV"
      ]
     },
     {
      "name": "Fera de Guerra",
      "first": false,
      "widgets": [],
      "body": [
       "Quando seu companheiro animal ajudar você a lutar, aumente a armadura adicionada para 2 e o dano adicionado para 1d6. Uma vez por cena, quando ele fosse se machucar, na verdade ele fica bem."
      ]
     }
    ]
   },
   {
    "name": "Olho de Águia",
    "tagline": "Um tiro, uma morte",
    "widgets": [],
    "moves": [
     {
      "name": "Morte à Distância",
      "first": true,
      "widgets": [
       {
        "type": "circles",
        "label": "Mira",
        "n": 4
       }
      ],
      "body": [
       "Quando você entrar em uma situação de combate, ganhe Mira igual à sua DES (mín 1). Você pode gastar 1 de Mira para fazer uma das manobras abaixo. Quando a situação de combate terminar, perca toda a Mira.",
       "◆ Alinhar o Tiro — Seu próximo ataque à distância ganha #perfurante e ignora cobertura e ocultação",
       "◆ Disparos Rápidos — Seu próximo ataque à distância ganha #área e um entre #toque, #curto, #próximo ou #distante",
       "◆ Fogo de Supressão — Ajude um PJ sem pagar outro custo; se ele sofrer dano, reduza-o em 1 (mín 1)",
       "◆ Pegar Cobertura — Depois de Trocar Golpes à distância, reduza o dano sofrido pela sua DES (mín 0)"
      ]
     },
     {
      "name": "Encontrar Fraqueza",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode Sentir Motivação+DES observando alguém em uma batalha ou disputa física. Se fizer isso, não importa a rolagem, você também pode fazer uma pergunta sobre os pontos fortes e fracos dele."
      ]
     },
     {
      "name": "Ninho de Atirador",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você passar minutos ou horas (a critério do MJ) encontrando ou criando o ponto de vantagem perfeito, ganha os seguintes benefícios enquanto estiver lá: ◆ Assim que uma situação de combate começar, ganhe +1 de Mira (máx 4) ◆ Na primeira vez que atacar com uma arma à distância a partir dali, ninguém novo descobre sua posição ◆ Kits de armadilhas montados aqui causam 1d6 de dano em vez de 1d4 e nunca impedem ou ferem você ou seus aliados. Quando sair do ninho, perca seus benefícios a menos que passe tempo preparando-o novamente. Se precisar Desafiar o Perigo para sair de lá em segurança, role com vant."
      ]
     },
     {
      "name": "Observador",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você receber Ajuda enquanto ataca com uma arma à distância, em vez de ganhar vant em uma rolagem você pode executar uma manobra sem gastar Mira."
      ]
     },
     {
      "name": "Flechas de Truque",
      "first": false,
      "widgets": [],
      "body": [
       "Você pode gastar Mira ou marcar um uso do item apropriado para fazer qualquer uma das seguintes manobras no seu próximo ataque à distância:",
       "◆ equipamento de aventura — #impactante ou puxa você até o alvo ou vice-versa",
       "◆ frascos alquímicos — +1 de dano e espalha ácido, fogo ou fumaça",
       "◆ kit de envenenador — o alvo sofre +1 de dano até o final da cena",
       "◆ kit de armadilhas — +1 de dano e imobiliza brevemente seu alvo"
      ]
     }
    ]
   },
   {
    "name": "Batedor",
    "tagline": "Intimamente familiarizado com as dádivas e perigos da natureza selvagem",
    "widgets": [],
    "moves": [
     {
      "name": "Conhecer o Terreno",
      "first": true,
      "widgets": [],
      "body": [
       "Quando você inspecionar um ambiente ou paisagem longe dos seus companheiros, role+INT e depois avance para o momento em que retorna aos seus companheiros. ✴Com 10+, escolha três benefícios abaixo. ✴Com 7-9, apenas dois. ✴Com 6-, escolha um, mas algo seguiu você de volta; marque 1 XP e o MJ faz um Movimento. Não importa o resultado, avance para quando você retorna aos seus companheiros. Esses benefícios duram até você deixar o ambiente ou usar este movimento novamente.",
       "▢ A fauna natural não caçará nem fugirá de você ou de seus aliados",
       "▢ Quando você Esgueirar-se camuflando-se no ambiente, trate um ✴com 7-9 como ✴com 10+",
       "▢ Quando você Desvendar Segredos, se o segredo estiver relacionado ao",
       "ambiente (ex. corrupção, característica, habitante comum, etc.), trate um ✴com 6- como ✴com 7-9",
       "▢ Quando você Empreender uma Jornada Perigosa como líder,",
       "ganhe +1 na rolagem e limpe uma Condição. Se outro PJ for o líder, ganhe 1 de Profundidade com ele se ele pedir seu conselho."
      ]
     },
     {
      "name": "Marca do Caçador",
      "first": false,
      "widgets": [
       {
        "type": "field",
        "label": "Presa"
       }
      ],
      "body": [
       "Uma vez por sessão, quando você focar na caça a um indivíduo, ganhe os seguintes benefícios ao interagir com ele até o final dessa sessão: ◆ Ganhe vant em Movimentos rolados na perseguição direta a ele",
       "◆ Quando Recordar Conhecimento sobre ele, ganhe +1 na rolagem. ◆ Na primeira vez nesta sessão que você causar dano a ele, o dano é máx ◆ Quando capturá-lo ou derrotá-lo, limpe uma Condição"
      ]
     },
     {
      "name": "Andarilho Inigualável",
      "first": false,
      "widgets": [],
      "body": [
       "Quando usar Conhecer o Terreno, se passar um tempo excessivo explorando (dias ou semanas), faça uma escolha extra. Não importa o tempo gasto, ✴com 12+, você também traz de volta uma pista sobre um aliado, oportunidade ou tesouro. Diga qual, e o MJ dirá mais. Quando deixar um ambiente que inspecionou com Conhecer o Terreno, anote seus benefícios; você os recupera se retornar aqui algum dia."
      ]
     },
     {
      "name": "A Selva Provê",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você vasculhar uma paisagem natural em busca de recursos, Desafie o Perigo+INT. ✴Com 7+, ganhe 2 Usos, divididos entre equipamento de aventura, medicamentos e provisões."
      ]
     },
     {
      "name": "Historiador Natural",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Recordar Conhecimento sobre flora ou fauna selvagem, ✴com 7+, faça uma pergunta adicional. Se ela puder lutar, o MJ também dirá seus PV e dano."
      ]
     }
    ]
   }
  ]
 },
 "rogue": {
  "id": "rogue",
  "title": "O Ladino",
  "tagline": "O sobrevivente definitivo; toda ferramenta — legal ou não — está à sua disposição",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. povo-gato, firbolg, limoso, etc. Seus pais eram pessoas cumpridoras da lei?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. habitantes do Subterrâneo, uma gangue de rua, ricaços privilegiados, etc. Você vivenciou muito crime em primeira mão?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. professor amado, escudeiro fiel, criminoso impiedoso, etc. Foi uma ladeira escorregadia ou uma decisão consciente tornar-se quem você é agora?"
   }
  ],
  "relationshipExamples": "Já roubei algo importante dele(a) uma vez ◆ Ele(a) conhece um segredo sobre minha vida antes do crime ◆ Ele(a) ainda me deve pelo grande crime que cometi por ele(a) ◆ Ele(a) acha que sou escória — e o sentimento é mútuo ◆ Ele(a) é meu(minha) parceiro(a) de crime ◆ Somos próximos como família, para o bem e para o mal ◆ Somos os únicos sobreviventes do meu último plano",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Truques do Ofício",
   "body": [
    "Quando você Desafiar o Perigo ou Esgueirar-se aplicando uma de suas Habilidades Ladinas, você trapaceia; role com 1d8+1d6 (em vez de 2d6). Você começa com as seguintes Habilidades Ladinas: ◆ detectar ruídos ◆ encontrar/desarmar armadilhas ◆ esconder-se nas sombras ◆ abrir fechaduras ◆ bater carteiras …além de quaisquer outras Habilidades fornecidas pelas suas Trilhas."
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha uma arma adicional (ou crie uma nova com o MJ):",
    "rows": [
     [
      "arco curto dobrável 1d6 de dano #munição #curto #próximo #precisa #duas-mãos"
     ],
     [
      "adagas ocultas 1d4 de dano #munição #oculta #toque #curto #leve #perfurante #precisa, vant nas rolagens de dano"
     ],
     [
      "chicote confiável 1d4 de dano #curto #próximo #precisa. Quando você Trocar Golpes, ✴Com 10+, pode escolher fazer o alvo largar algo que esteja segurando ou agarrar uma de suas extremidades Escolha dois dos itens abaixo:"
     ],
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "frascos alquímicos OOO usos. Marque para sacar qualquer um dos seguintes tipos: ácido, fogo ou fumaça"
     ],
     [
      "armadura de couro redução de dano 1 (reduz o dano sofrido em 1, até o mín de 1) req. FOR+1"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ],
     [
      "ferramentas de ladrão OOO usos. Quando Desafiar o Perigo com uma Habilidade Ladina, ✴com 7-9 você pode marcar um uso em vez de outra opção"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "manto escuro",
      "traje elegante",
      "rosto e roupas esquecíveis"
     ],
     [
      "lista de alvos vulneráveis",
      "amuleto da sorte",
      "joia sentimental"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 8 e sua des é +2. Escolha int ou car para ser +1, e então atribua +1, 0 e -1 aos outros.",
  "maxHp": 8,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Assassino",
    "tagline": "Silencioso como o túmulo, mortal como a beladona",
    "widgets": [],
    "moves": [
     {
      "name": "Trabalho Sujo",
      "first": true,
      "widgets": [],
      "body": [
       "Adicione ◆ empregar/curar veneno e ◆ identificar fraqueza às suas Habilidades Ladinas. Se não tiver o Movimento Inicial Truques do Ofício do Ladino, você o ganha, mas apenas com essas duas Habilidades. Se já tinha alguma dessas Habilidades Ladinas, trabalhe com o MJ para criar uma nova para cada Habilidade redundante.",
       "Ataque Furtivo — Quando você Trocar Golpes+DES, se o seu oponente estiver distraído ou flanqueado (e você estiver usando armadura leve ou nenhuma), ✴com 10+, você pode escolher causar dano máx gratuitamente. ✴com 7-9, você sofre dano mín."
      ]
     },
     {
      "name": "Sempre Há uma Saída",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você estiver atolado até o pescoço e procurar uma saída, role+DES. ✴Com 10+, você e seus aliados escapam. ✴Com 7-9, você precisa deixar algo para trás; o MJ dirá o quê. ✴Com 6-, era um truque ou uma armadilha; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Apunhalar pelas Costas",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você emboscar um oponente surpreso ou indefeso com uma arma #precisa, pode rolar o dano normalmente ou rolar+DES. ✴Com 10+, escolha dois abaixo. ✴Com 7-9, apenas um:",
       "◆ Reduza a redução de dano da armadura dele em 1 até que seja consertada",
       "◆ Desative uma arma ou outra forma de ataque até que ele a recupere",
       "◆ Cause seu dano +1d6",
       "✴Com 6-, ele estava preparado; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Arte dos Venenos",
      "first": false,
      "widgets": [],
      "body": [
       "Você tem vant para Desafiar o Perigo contra venenos e recebe um kit de envenenador OOO usos. Marque para produzir um veneno na hora; declare seu efeito e escolha dois a seguir: ◆ pode ser aplicado por contato (caso contrário, é por ingestão) ◆ o MJ não adiciona um “e” ou “mas” ao efeito (caso contrário, adiciona) ◆ é indetectável ◆ você limpa um uso do kit de envenenador"
      ]
     },
     {
      "name": "Espreitador nas Sombras",
      "first": false,
      "widgets": [],
      "body": [
       "Adicione ◆ esconder-se nas sombras às suas Habilidades Ladinas. Se já a tiver, trabalhe com o MJ para criar uma nova Habilidade Ladina. Quando Esgueirar-se com uma Habilidade Ladina, role com 1d10+1d6 (em vez de 1d8+1d6).",
       "Quando procurar um esconderijo, o MJ dirá onde fica o melhor ponto, mas cabe a você chegar lá."
      ]
     }
    ]
   },
   {
    "name": "Assaltante",
    "tagline": "Habilidade e astúcia — e uma pitada de boa sorte, é claro",
    "widgets": [],
    "moves": [
     {
      "name": "Caçador de Tesouros Especialista",
      "first": true,
      "widgets": [],
      "body": [
       "Adicione ◆ escalar muros e ◆ esgueirar-se em espaços apertados às suas Habilidades Ladinas. Se não tiver o Movimento Inicial Truques do Ofício do Ladino, você o ganha, mas apenas com essas duas Habilidades. Se já tinha alguma dessas Habilidades Ladinas, trabalhe com o MJ para criar uma nova para cada Habilidade redundante.",
       "Faro para Tesouros — Quando você Desvendar Segredos, não importa o resultado da rolagem, pode perguntar também: Há objetos de valor aqui que eu não conheço? Se sim, ganhe vant na próxima rolagem para buscá-los."
      ]
     },
     {
      "name": "Melhor Ter Sorte do que Juízo",
      "first": false,
      "widgets": [
       {
        "type": "circles",
        "label": "Sorte",
        "n": 3
       }
      ],
      "body": [
       "Quando você escolher este Movimento, ganha Sorte igual à sua sab (mín 1). Uma vez por cena, pode gastar 1 de Sorte para rerrolar qualquer dado rolado por você ou que afete você diretamente (como a rolagem de dano de um inimigo atacando você). Quando Curtir uma Folga, você pode gastar 1 Tesouro ajudando um PdM para recuperar Sorte igual à sua sab (mín 1)."
      ]
     },
     {
      "name": "Arrombamento & Invasão",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você decidir roubar algo, nomeie o objeto e faça ao MJ perguntas igual à sua sab (mín 1), e ele responderá com a verdade. Quando você o adquirir, você e todos que ajudaram limpam cada um uma Condição. ◆ Qual é a defesa mais poderosa dele?",
       "◆ Qual é a melhor maneira de entrar ou sair? ◆ Quem mais o quer? ◆ O que mais está me escapando a respeito dele?"
      ]
     },
     {
      "name": "Rápido no Gatilho",
      "first": false,
      "widgets": [],
      "body": [
       "Quando o MJ ou outro Jogador estiver prestes a fazer um Movimento, com a permissão dele (fora do personagem) você pode marcar uma Condição para interrompê-lo e agir imediatamente no lugar."
      ]
     },
     {
      "name": "Número de Desaparecimento",
      "first": false,
      "widgets": [],
      "body": [
       "Quando tiver certeza de que ninguém está prestando atenção diretamente em você, pode desaparecer completamente de uma Cena, não retornando à narrativa até que a Cena termine. Se estiver em apuros ou encurralado, pergunte ao MJ o que precisa fazer para desaparecer e ele dirá até (4 - sab) dos seguintes requisitos:",
       "◆ Quando você reaparecer, virá acompanhado de problemas",
       "◆ Primeiro você precisa arriscar/enganar/roubar _____________",
       "◆ Você deve deixar algo significativo para trás",
       "◆ Você deve marcar uma Condição no processo"
      ]
     }
    ]
   },
   {
    "name": "Espião",
    "tagline": "Obter e negociar segredos é o seu ofício",
    "widgets": [],
    "moves": [
     {
      "name": "A Pessoa Certa para o Serviço",
      "first": true,
      "widgets": [
       {
        "type": "circles",
        "label": "Máscara",
        "n": 3
       }
      ],
      "body": [
       "Adicione ◆ falsificar documentos e ◆ compreender idiomas às suas Habilidades Ladinas. Se não tiver o Movimento Inicial Truques do Ofício do Ladino, você o ganha, mas apenas com essas duas Habilidades. Para cada Habilidade redundante, trabalhe com o MJ para criar uma nova.",
       "Agente Impecável — Quando você se disfarçar de outra pessoa, ganhe Máscara igual ao seu car (mín 1). Você pode gastar Máscara, 1 para 1, para superar escrutínio automaticamente. Quando chegar a 0 de Máscara, role+CAR. ✴Com 10+, ninguém desconfia de nada; ganhe 1 de Máscara. ✴Com 7-9, alguém suspeita de você; o MJ dirá quem. ✴Com 6-, seu disfarce cai por terra; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Prestidigitação",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você sair de uma sala ou outro local, pode nomear algo pequeno que viu e que mais ninguém estava usando ou prestando atenção especial. Você o levou consigo."
      ]
     },
     {
      "name": "Sabotador Mestre",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você revelar que usou um disfarce anteriormente para sabotar ou anular um obstáculo ou mecanismo, exatamente quando isso se tornar relevante, role+CAR. ✴Com 10+, funciona perfeitamente, criando a oportunidade ideal. ✴Com 7-9, a oportunidade é fugaz — aja agora ou será tarde demais. ✴Com 6-, um pequeno detalhe esquecido torna-se um problema enorme; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Conexões no Submundo",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você espalhar a notícia de que está procurando por algo, role+CAR. Aconteça o que acontecer, alguém traz uma pista. ✴Com 10+, escolha uma complicação abaixo. ✴Com 7-9, escolha duas:",
       "◆ Não é exatamente o que parecia; o MJ dirá como depois que você escolher isso",
       "◆ Alguém que não conhece ou não gosta de você está com aquilo",
       "◆ Você ficará devendo um favor pesado a alguém para conseguir. Até pagar a dívida, você tem desv neste movimento e não pode escolher esta opção novamente ✴Com 6-, a pista pode ser falsa, uma armadilha ou já ter sido reivindicada por um inimigo; marque 1 XP e o MJ faz um Movimento."
      ]
     },
     {
      "name": "Você Conhece o Meu Nome",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você encontrar pela primeira vez alguém que já ouviu falar de você (sua escolha), role+CAR. ✴Com 10+, diga ao MJ duas coisas que a pessoa ouviu sobre você. ✴Com 7-9, diga ao MJ uma coisa, e o MJ diz a outra. ✴Com 6-, ela não gosta do que ouviu; marque 1 XP e o MJ faz um Movimento."
      ]
     }
    ]
   }
  ]
 },
 "wizard": {
  "id": "wizard",
  "title": "O Mago",
  "tagline": "Uma vida inteira de estudo e dedicação em troca do domínio sobre a realidade",
  "relationshipSlots": 5,
  "deity": false,
  "origins": [
   {
    "key": "Ancestry",
    "label": "Ancestralidade",
    "prefix": "Eu sou um(a)",
    "hint": "ex. anão, elfo, golem, etc. Que evento na sua infância atraiu você para o arcano?"
   },
   {
    "key": "Community",
    "label": "Comunidade",
    "prefix": "Fui criado(a) por",
    "hint": "ex. mágicos amadores, pequena nobreza rural, povo nômade, etc. A magia era valorizada entre o seu povo? Por quê? Por que não?"
   },
   {
    "key": "Background",
    "label": "Antecedente",
    "prefix": "Eu costumava ser um(a)",
    "hint": "ex. pessoa amaldiçoada, erudito solitário, mágico de rua, etc. Quanto você pagou ou sacrificou para aprender o impossível?"
   }
  ],
  "relationshipExamples": "Eu o(a) machuquei com um feitiço ◆ Ele(a) tem mente para a magia, mas lhe falta disciplina ◆ Ele(a) acredita em um monte de bobagens supersticiosas ◆ Ele(a) acha que sou um megalomaníaco sedento por poder ◆ Ele(a) está escondendo um segredo arcano de mim ◆ Ele(a) é minha cobaia voluntária ◆ Compartilhamos um interesse específico e conversamos sem parar sobre isso",
  "treasure": {
   "track": "Falido ☐ ☐ ☐ ☐ Pobre ☐ ☐ ☐ ☐ ☐ ☐ Modesto ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Confortável ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ Rico ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐ ☐",
   "note": "☐ ☐ Aristocrático"
  },
  "startingMove": {
   "name": "Tecer o Arcano",
   "body": [
    "Você começa com 3 Escolas de Magia Preparadas; marque-as agora. Quando terminar de Acampar, você pode mudar quais Escolas estão Preparadas.",
    "☐ Abjuração (substância: a própria magia; verbos: desativar temporariamente; proteger contra)",
    "☐ Conjuração (substância: objetos ou seres extraplanares; verbos: criar brevemente; invocar momentaneamente)",
    "☐ Adivinhação (substância: visões do passado, presente e futuro; verbos: transmitir; discernir)",
    "☐ Encantamento (substância: seres sencientes; verbos: modificar emoções; encantar temporariamente)",
    "☐ Evocação (substância: energias elementais; verbos: esculpir menor; canalizar menor)",
    "☐ Ilusão (substância: visão e/ou sons; verbos: encobrir; disfarçar)",
    "☐ Necromancia (substância: morte-vida; verbos: conceder brevemente; irradiar)",
    "☐ Transmutação (substância: matéria; verbos: alterar momentaneamente; reparar)",
    "Você pode Conjurar um Feitiço+INT combinando um verbo e uma substância de suas Escolas Preparadas para criar um efeito, contanto que tenha seu foco arcano, ambas as mãos livres e a capacidade de falar em voz alta. Você pode combinar verbos e substâncias de diferentes Escolas Preparadas. Quando Conjurar um Feitiço desta forma, sua opção única de ✴com 7-9 é:",
    "◆ esquecer uma Escola Preparada até a próxima vez que Acampar"
   ],
   "widgets": []
  },
  "equipment": [
   {
    "title": "Escolha um foco arcano (ou crie um novo com o MJ):",
    "rows": [
     [
      "solidéu cravejado de joias. adicione 1 à sua armadura"
     ],
     [
      "grimório delicado. Uma vez por sessão, você pode consultá-lo ou estudá-lo para Preparar uma Escola instantaneamente"
     ],
     [
      "cajado desajeitado. 1d6 de dano #curto #toque #duas-mãos"
     ]
    ],
    "exclusive": true
   },
   {
    "title": "Escolha dois dos itens abaixo:",
    "rows": [
     [
      "equipamento de aventura OOO usos. Marque para vasculhar e encontrar um item mundano útil"
     ],
     [
      "bolsa de livros OOO usos. Marque para encontrar um registro de informação relevante"
     ],
     [
      "adaga 1d4 de dano #munição #toque #curto #perfurante #precisa"
     ],
     [
      "poção de cura O uso. Marque para recuperar metade dos seus PV máx (arredondado para baixo) ou limpar uma Condição trancada"
     ],
     [
      "provisões OOO usos. Marque uma vez enquanto Confortar ou Apoiar para transformar um “Não” em um “Sim”"
     ]
    ],
    "exclusive": false
   },
   {
    "title": "Para sua aparência, escolha um por linha (ou outra coisa):",
    "rows": [
     [
      "vestes astrais",
      "manto discreto",
      "óculos místicos"
     ]
    ],
    "exclusive": true
   }
  ],
  "statRule": "No Nível 1 seus pv máx são 6 e sua int é +2. Escolha des ou car para ser +1, e então atribua +1, 0 e -1 aos outros.",
  "maxHp": 6,
  "nameExamples": "",
  "advancements": [
   {
    "title": "Quando você Subir de Nível, aumente seus pv em 1 (máx +10) e escolha um dos seguintes:",
    "options": [
     {
      "boxes": 2,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Revele uma Provação (Struggle)"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 0,
      "text": "Mude de Classe"
     }
    ]
   },
   {
    "title": "A partir do Nível 5, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +2)"
     },
     {
      "boxes": 1,
      "text": "Ganhe uma Trilha da sua Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um item mágico — escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   },
   {
    "title": "A partir do Nível 10, você também pode escolher dentre os seguintes:",
    "options": [
     {
      "boxes": 1,
      "text": "+1 em qualquer Atributo (máx. +3)"
     },
     {
      "boxes": 1,
      "text": "Multiclasse — Ganhe uma Trilha de outra Classe (e seu Movimento Inicial)"
     },
     {
      "boxes": 1,
      "text": "Obtenha um Artefato — Escolha dentre os disponíveis ou trabalhe com o MJ para criar um"
     },
     {
      "boxes": 4,
      "text": "Ganhe um Movimento de Trilha"
     }
    ]
   }
  ],
  "paths": [
   {
    "name": "Evocador",
    "tagline": "Há uma beleza simples na destruição absoluta",
    "widgets": [],
    "moves": [
     {
      "name": "Magia de Evocação",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Tecer o Arcano do Mago, embora você só tenha acesso a Evocação (substância: energias elementais; verbos: esculpir menor; canalizar menor). Se você já tiver esse Movimento, adicione os verbos detonar e magnificar ao repertório da Escola de Evocação, e quando Acampar você sempre pode marcar Evocação além das suas Escolas Preparadas normais. Reservas Mentais — Você pode marcar uma Condição para Preparar instantaneamente uma Escola de Magia, até o seu limite normal."
      ]
     },
     {
      "name": "Contingência",
      "first": false,
      "widgets": [],
      "body": [
       "Marque 1-3 Condições e escolha um feitiço ou Movimento ao qual tenha acesso e que você poderia razoavelmente preparar com antecedência. Além disso, defina uma circunstância específica. Quando a circunstância ocorrer, role+Condições marcadas; use o resultado para resolver o feitiço ou Movimento."
      ]
     },
     {
      "name": "Manto Elemental",
      "first": false,
      "widgets": [],
      "body": [
       "Marque 1-3 Condições para evocar um manto feito de um dos seguintes elementos. Substitua X pela quantidade de Condições marcadas:",
       "◆ chamas em cascata — Até X oponentes que causarem dano a você sofrem Xd6 de dano",
       "◆ vestes gélidas — Até X oponentes que causarem dano a você têm desv nas rolagens de dano deles",
       "◆ protuberâncias rochosas — Adicione +X à sua armadura por X ataques",
       "◆ vendaval selvagem — Você pode se mover sem impedimentos até alcance #próximo X vezes"
      ]
     },
     {
      "name": "Bola de Fogo Instantânea!",
      "first": false,
      "widgets": [],
      "body": [
       "Marque 1-3 Condições; então um alvo #próximo e todos a alcance #curto dele sofrem Xd6 de dano #perfurante, onde X é a quantidade de Condições marcadas."
      ]
     },
     {
      "name": "Arma de Poder",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você moldar uma energia elemental na forma de uma arma, marque 1-3 Condições e role+Condições marcadas. ✴Com 10+, escolha duas das seguintes tags. ✴Com 7-9, apenas uma: #curto #perfurante. ✴Com 6-, o elemento se liberta; marque 1 XP e o MJ faz um Movimento.",
       "Por padrão, a arma causa 1d6 de dano, é #toque e tem OOO usos. Quando Trocar Golpes com esta arma, role+INT (em vez de +FOR ou +DES) e marque um uso."
      ]
     }
    ]
   },
   {
    "name": "Ilusionista",
    "tagline": "Como você define ‘real’?",
    "widgets": [],
    "moves": [
     {
      "name": "Magia de Ilusão",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Tecer o Arcano do Mago, embora você só tenha acesso a Ilusão (substância: imagens e/ou sons; verbos: encobrir; disfarçar). Se você já tiver esse Movimento, adicione os verbos tornar permanente e substanciar ao repertório da Escola de Ilusão, e quando Acampar você sempre pode marcar Ilusão além das suas Escolas Preparadas normais.",
       "Trapaceiro — Uma vez por cena, quando alguém acreditar em uma mentira por causa de uma de suas ilusões, limpe uma Condição."
      ]
     },
     {
      "name": "Alterar Percepção",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você tocar alguém ou algo, pode alterar um de seus aspectos perceptíveis sem Conjurar um Feitiço; marque uma Condição se o alvo não for voluntário. Por exemplo, você pode mudar a ancestralidade, roupa ou sotaque percebido de alguém, ou fazer um item parecer mágico, novinho em folha ou feito de outra substância. Esse efeito dura até você dissipá-lo ou até o final da Cena."
      ]
     },
     {
      "name": "Imagem Espelhada",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você fosse sofrer dano, pode marcar uma Condição para revelar que era uma ilusão; evite todo o dano e diga onde a alcance #próximo você realmente está."
      ]
     },
     {
      "name": "O Espelho Olha de Volta",
      "first": false,
      "widgets": [],
      "body": [
       "Na primeira vez que cada PdM cair em uma de suas ilusões, você pode fazer a ele uma pergunta como se tivesse usado Sentir Motivação.",
       "Quando Conjurar um Feitiço para criar uma cópia ilusória de uma pessoa, você também pode marcar uma Condição para sobrecarregar o feitiço. Se fizer isso, a pessoa ilusória imita perfeitamente o original, dura indefinidamente e começa leal, mas ganha autonomia lentamente com o tempo. Você não pode dissipar uma pessoa ilusória sobrecarregada."
      ]
     },
     {
      "name": "Engane-me Uma Vez…",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você enganar alguém com uma ilusão, na próxima vez que Manipular essa pessoa você tem vant e pode rolar+INT (em vez de +CAR), mesmo que ela descubra que era uma ilusão. Você pode compartilhar esses benefícios com outros PJs que fizeram parte da ilusão."
      ]
     }
    ]
   },
   {
    "name": "Necromante",
    "tagline": "O maior tabu entre os praticantes de magia — por um bom motivo",
    "widgets": [],
    "moves": [
     {
      "name": "Magia Necromântica",
      "first": true,
      "widgets": [],
      "body": [
       "Ganhe o Movimento Inicial Tecer o Arcano do Mago, embora você só tenha acesso a Necromancia (substância: morte-vida; verbos: conceder brevemente; irradiar). Se você já tiver esse Movimento, adicione os verbos corromper e drenar ao repertório da Escola de Necromancia, e quando Acampar você sempre pode marcar Necromancia além das suas Escolas Preparadas normais.",
       "Ergam-se e Sirvam — Quando você matar uma criatura viva com um feitiço, pode criar um carniçal, esqueleto ou zumbi a partir do cadáver dela (2 PV, causa 1 de dano). Mortos-vivos que você cria são leais a você e seguem seus comandos, embora apenas os #inteligentes (o que estes não são) consigam entender tarefas complexas."
      ]
     },
     {
      "name": "Um Fantasma no Banquete",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você matar uma criatura viva com um feitiço, em vez de criar algo a partir do cadáver dela, pode criar um fantasma, espectro ou sombra a partir da alma dela (1 PV, causa 2 de dano #perfurante | #invisível #imaterial). Se marcar uma Condição, você pode criar dois mortos-vivos — um do corpo e outro da alma."
      ]
     },
     {
      "name": "Força Vital é um Recurso",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você Conjurar um Feitiço, ✴com 7-9 você pode em vez disso escolher isto:",
       "◆ drena sua força vital; sofra 1 de dano #perfurante",
       "Quando você se sintonizar com os grilhões etéreos que prendem seus mortos-vivos à sua vontade, pode marcar uma Condição e então redistribuir PV entre você e quaisquer mortos-vivos seus a alcance #próximo como achar melhor."
      ]
     },
     {
      "name": "Santuário da Morte-Vida",
      "first": false,
      "widgets": [],
      "body": [
       "Quando você decidir imbuir um local com poder profano, trate isso como Realizar um Ritual, mas você pode sacrificar uma pessoa viva ou dois de seus próprios mortos-vivos para anular cada requisito — exceto o último. Depois de ter sucesso, para cada requisito que o MJ deu originalmente, escolha um benefício: ◆ Qualquer criatura que morrer aqui ergue-se automaticamente como um #morto-vivo que serve a você ◆ Poder #sagrado é fraco aqui, causando metade do dano (arredondado para baixo) e reduzindo outros efeitos ◆ Atua como uma fonte de poder para rituais ainda mais sombrios ◆ Atrairá devotos e seguidores voluntários ◆ A mudança durará indefinidamente (a menos que seja ativamente purificada em seu coração)"
      ]
     },
     {
      "name": "Despir Este Invólucro Mortal",
      "first": false,
      "widgets": [],
      "body": [
       "Você aprendeu os segredos de se tornar um lich. Ganhe uma Filactéria (veja Artefatos)."
      ]
     }
    ]
   }
  ]
 }
};
export const CLASSES = CLASSES_PT;
