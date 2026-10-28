// GERADO por tools/extract.py a partir dos PDFs oficiais. Não edite à mão.
export const CLASSES = {
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
