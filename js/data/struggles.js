// Dados de Struggles (EN-US e PT-BR)
export const STRUGGLES_EN = [
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
export const STRUGGLES_INTRO_EN = [
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
export const STRUGGLES_PT = [
 {
  "name": "Traído",
  "id": "betrayed",
  "widgets": [],
  "tagline": "Alguém muito amado apunhalou você pelas costas, e você nunca mais conseguiu confiar novamente",
  "body": [
   "Perguntas: Quem era o traidor para você? Como ele traiu você? Como você pode curar essa ferida?",
   "Obstinado(+) Você pode sofrer 1d4 de dano #perfurante para ignorar todas as penalidades de Condição na sua próxima rolagem.",
   "Ferido(+) Quando você Confortar ou Apoiar (ou receber isso), você também pode perguntar: “Eu contei a ele sobre o meu traidor?”. Se “Sim”, quem foi confortado ganha uma opção extra.",
   "Desconfiado(-) Quando você ganhar Profundidade com outro PJ, marque uma Condição."
  ]
 },
 {
  "name": "Desiludido",
  "id": "disillusioned",
  "widgets": [],
  "tagline": "Você já foi um verdadeiro crente, um campeão, um modelo de virtude. Não mais Perguntas: Qual era a causa? Que derrota ou revelação mostrou a você a falta de sentido de tudo isso? Há alguma maneira de fazer você acreditar novamente?",
  "body": [
   "Cínico (+) Você pode sempre fazer uma pergunta extra quando Sentir Motivação, mesmo com 6-. Você também ganha vant para Desafiar o Perigo quando tentar superar enganações de qualquer tipo.",
   "Pessimista (-) Quem é confortado ganha uma opção a menos quando você o Confortar ou Apoiar."
  ]
 },
 {
  "name": "Amnésia",
  "id": "amnesia",
  "widgets": [
   {
    "type": "circles",
    "label": "Memórias",
    "n": 5
   }
  ],
  "tagline": "Você não tem memória do seu passado. Mas sabe de uma coisa: talvez não queira se lembrar dele.",
  "body": [
   "Perguntas: Onde você acordou sem memória? Que lugares, comportamentos ou pessoas parecem familiares? Que nova identidade você está construindo para si?",
   "Estilhaços (+)(-) Uma vez por sessão, quando você fosse marcar sua última Condição (Atingindo o Limite), você pode em vez disso marcar Memórias e Ter um Flashback. Quando fizer isso, você descobre uma parte importante do seu passado; marque 1 XP e o MJ avança uma Ameaça.",
   "Quando você alcançar 5 Memórias, o quadro do seu passado está completo; esta Provação é resolvida (veja Revelar uma Provação para detalhes)."
  ]
 },
 {
  "name": "Covarde",
  "id": "coward",
  "widgets": [],
  "tagline": "A maioria dos aventureiros está acostumada a perigos frequentes e experiências de quase morte. Você não é um deles.",
  "body": [
   "Perguntas: Quem você abandonou no passado? Como você tenta combater seus medos? Como você os (super)compensa?",
   "Arisco (+) Enquanto estiver Assustado, você tem vant em rolagens feitas para fugir ou se esconder do perigo, e marca 1 XP quando faz uma rolagem dessas.",
   "Cara de Coragem (+) Você pode limpar Assustado ao desferir o golpe final em um inimigo, ou ao assumir o crédito por tal golpe.",
   "Aterrorizado (-) Quando você marcar Assustado, e quando marcar uma Condição enquanto já estiver Assustado (exceto por este Movimento), marque uma Condição adicional."
  ]
 },
 {
  "name": "Cuidador",
  "id": "caretaker",
  "widgets": [],
  "tagline": "Você viaja com um PdM que depende de você para auxílio ou orientação Perguntas: Por que essa pessoa depende tanto de você? Ela sabe o quanto você faz por ela? Como ela testa a sua paciência? Maior Fã (+) Quando você der ou receber Confortar ou Apoiar junto do seu dependente, trate um “Não” como se fosse um “Sim”. Guardião (+) Quando você se preocupar com seu dependente, pode marcar uma Condição para fazer ao MJ uma pergunta sobre a localização, atividades ou bem-estar dele, e o MJ responderá com a verdade. Quando Encerrar a Sessão, se sentir que seu dependente fez na maior parte o que você queria, ganhe 1 XP.",
  "body": [
   "Problemático (-) Quando você o machucar ou falhar em protegê-lo (a critério do MJ), marque uma Condição."
  ]
 },
 {
  "name": "Sussurro Sombrio",
  "id": "dark-whisperer",
  "widgets": [
   {
    "type": "circles",
    "label": "Sussurros",
    "n": 5
   }
  ],
  "tagline": "Uma voz lhe diz verdades que você não poderia saber, e mentiras que você não consegue discernir Perguntas: Como a voz se comunica com você? Sobre qual outro PJ ela o alertou? Como ela ajudou você quando mais ninguém podia?",
  "body": [
   "Diabinho no Ombro (+) Seu Sussurro Sombrio é um PdM que mais ninguém consegue perceber e contra o qual você não pode Sentir Motivação. Quando você fizer uma pergunta ao seu Sussurro Sombrio, ele geralmente dirá a verdade ou o que quer que você faça a seguir. Se aceitar as palavras dele, ganhe vant na sua próxima rolagem, mas marque um Sussurro (máx 5). Marionete das Sombras (-) Quando tentar rejeitar as palavras do seu Sussurro Sombrio, role+Sussurros e então apague seus Sussurros. ✴Com 6- você o cala; marque 1 XP. ✴Com 7-9 as palavras dele ecoam na sua mente; marque duas Condições. ✴Com 10+ você obedece a ele, talvez sem perceber; marque XP e o MJ faz um Movimento."
  ]
 },
 {
  "name": "Herança Perdida",
  "id": "lost-heritage",
  "widgets": [],
  "tagline": "Você procura pelo seu povo (ou pelo que restou dele), perdido há muito tempo para conquistas ou catástrofes",
  "body": [
   "Perguntas: Quem ou o que levou seu povo embora? Como você conseguiu escapar e/ou sobreviver? Quem ou o que está impedindo você de descobrir mais?",
   "Buscador (+) Quando você Desvendar Segredos ou Esgueirar-se em busca de algo ou alguém relacionado ao seu povo, role com vant. Uma vez por sessão, quando encontrar e estudar uma relíquia do seu povo, conte ao grupo o que aprendeu e marque 1 XP. Ferida Aberta (-) Quando encontrar uma parte incompleta e perdida da cultura do seu povo, ou uma relíquia roubada, marque uma Condição."
  ]
 },
 {
  "name": "Herói do Povo",
  "id": "folk-hero",
  "widgets": [],
  "tagline": "Você salvou uma comunidade humilde sozinho no passado, e alguns agora o veem como um símbolo de esperança",
  "body": [
   "Perguntas: Que feito heroico você realizou em sua comunidade? O que você perdeu? Que profecia sobre seu futuro heroico você ouviu?",
   "Presença Inspiradora (+) Qualquer pessoa que não seja um nobre ou alguém com poder tratará você como família, oferecendo abrigo e quaisquer recursos que tiver. Quando você Trocar Golpes para defender pessoas comuns, ✴Com 10+, você pode fazer outro PJ limpar uma Condição (em vez das outras opções).",
   "Sobrecarregado (-) Quando você recusar uma chance de ajudar o povo comum, marque uma Condição."
  ]
 },
 {
  "name": "Condenado",
  "id": "doomed",
  "widgets": [
   {
    "type": "circles",
    "label": "Ruína",
    "n": 5
   }
  ],
  "tagline": "Uma aflição terrível ceifará sua vida (ou pior), a menos que você encontre uma cura",
  "body": [
   "Perguntas: Como você foi afligido? Quais são os sintomas até agora? Que pista duvidosa você tem sobre uma possível cura?",
   "Dias Bons (+) Quando Encerrar a Sessão, pergunte ao grupo: “Eu descobri mais sobre minha aflição ou fiz progresso notável rumo a uma cura?” Se “Sim”, marque 1 XP, limpe uma Condição e limpe 1 de Ruína. Dias Ruins (-) Se a resposta para a pergunta acima for “Não”, marque 1 de Ruína e uma Condição. A Ruína começa em 0 e representa o avanço da sua aflição. Com 5 de Ruína, é tarde demais para uma cura; sua aflição o ceifará na próxima sessão.",
   "Assim Não(+) Quando você fosse Encarar a Morte, pode em vez disso Invocar Sua Ruína — diga como sua aflição (ou como os outros a veem) ajuda você a sobreviver, então marque 1 de Ruína e recupere 1 PV."
  ]
 },
 {
  "name": "Sonhos Agourentos",
  "id": "ominous-dreams",
  "widgets": [
   {
    "type": "circles",
    "label": "Presságio",
    "n": 3
   }
  ],
  "tagline": "Você começou a ter visões confusas de um perigo iminente ou evento catastrófico",
  "body": [
   "Perguntas: Qual aspecto dos seus sonhos proféticos é consistentemente claro? Você sabe quem envia essas visões? Quem próximo a você elas retratam em perigo?",
   "Eu Já Sabia (+) Quando você terminar de Acampar com sucesso, ganhe Presságio igual à sua SAB. Quando algo terrível acontecer com outro PJ (sua escolha), você pode gastar 1 ou 2 de Presságio para permitir que o jogador dele rerrole esse número de dados após fazer uma rolagem e ver as consequências. O novo resultado é o que realmente acontece. Sem Descanso para Quem Tudo Vê (-) Quando terminar de Acampar com sucesso, você recupera apenas metade da quantidade de PV que normalmente recuperaria (arredondado para baixo)."
  ]
 },
 {
  "name": "Romance Proibido",
  "id": "forbidden-romance",
  "widgets": [],
  "tagline": "Você e um PdM estão profundamente apaixonados, mas precisam permanecer separados Perguntas: Quem é a pessoa amada? Que obstáculo impossível está no caminho de vocês? Que solução improvável poderia uni-los? O Poder do Amor (+) Uma vez por sessão, quando você compartilhar uma lembrança da pessoa amada com outro PJ, limpe Condições igual à sua Profundidade com ele (mín. 1).",
  "body": [
   "Ponto Fraco (-) Quando você receber notícias de que a pessoa amada está em perigo, marque uma Condição, mais outra se não largar tudo imediatamente para ir tentar salvá-la."
  ]
 },
 {
  "name": "Inocente",
  "id": "innocent",
  "widgets": [],
  "tagline": "Você é novo nessa vida e ainda está descobrindo a si mesmo e ao mundo Perguntas: Qual outro PJ acolheu você primeiro? O que você aceita sem questionar? O que você questiona sem parar?",
  "body": [
   "Olhos Brilhantes (+) Uma vez por sessão, quando outro PJ receber Confortar ou Apoiar perto de você, você também pode receber o mesmo número de benefícios (embora possa fazer escolhas diferentes). Impressionável (-) Uma vez por cena, quando você rejeitar as palavras de um PJ ou PdM, marque uma Condição."
  ]
 },
 {
  "name": "Solitário",
  "id": "loner",
  "widgets": [],
  "tagline": "Você é um renegado incompreendido que não precisa de amigos… certo?",
  "body": [
   "Perguntas: Qual é a sua história de fundo (presumivelmente trágica)? Como a última pessoa que se aproximou de você sofreu ou o traiu?",
   "Fechado (+) Quando você usar ou receber Confortar ou Apoiar, também pode responder “Eu mostrei que realmente me importo?” Se “Sim”, quem foi confortado ganha um benefício como nas outras perguntas. Se “Não”, você marca 1 XP.",
   "Distante (-) Forjar um Vínculo exige 1 de Profundidade adicional tanto de você quanto do outro PJ."
  ]
 },
 {
  "name": "Caçado",
  "id": "hunted",
  "widgets": [
   {
    "type": "circles",
    "label": "Alerta",
    "n": 3
   }
  ],
  "tagline": "Um indivíduo ou organização poderosa está caçando você ativamente Perguntas: Quem lidera a caçada contra você? Como eles quase o capturaram uma vez? O que você sacrificou para escapar deles?",
  "body": [
   "Pegue-me Se Puder (+) Quando você fosse marcar uma Condição, pode em vez disso marcar Alerta. Como você deixa evidências da sua presença para trás? Quando Curtir uma Folga, você pode gastar 1 Tesouro para apagar seu Alerta.",
   "Acerto de Contas (-) Quando você alcançar 3 de Alerta, ou Acampar com 1 ou mais de Alerta, role+Alerta e então apague seu Alerta. ✴Com 10+, caçadores chegam em peso aqui e agora. ✴Com 7-9 caçadores chegam, mas você tem uma chance de agir antes que o avistem. ✴Com 6- caçadores chegam assustadoramente perto de encontrá-lo, mas você escapa; marque 1 XP."
  ]
 },
 {
  "name": "Endividado",
  "id": "indebted",
  "widgets": [
   {
    "type": "circles",
    "label": "Dívida",
    "n": 5
   }
  ],
  "tagline": "Você tem uma dívida pesada com pessoas muito perigosas.",
  "body": [
   "Perguntas: A quem você deve? O que os torna tão perigosos? Quem ou o que eles tomaram como garantia?",
   "Cavando Mais Fundo (+) Quando você fosse gastar Tesouro, pode em vez disso marcar uma quantidade igual de Dívida, o que representa cobranças adicionais além do que você devia inicialmente. Você também pode comprar itens acima do seu nível de Riqueza atual marcando 1 de Dívida por nível de diferença. Quando você der ao seu credor algo que ele realmente queira (a critério do MJ), redefina a Dívida para 0.",
   "Cobradores (-) Depois que você Curtir uma Folga, agentes do seu credor se aproximam; role+Dívida. ✴Com 6- eles só querem lembrá-lo do que deve; marque XP. ✴Com 7-9 eles querem um pequeno favor ou item; marque uma Condição se recusar. ✴Com 10+ eles querem algo grande e estão prontos para forçar sua mão."
  ]
 },
 {
  "name": "Redimido",
  "id": "reformed",
  "widgets": [
   {
    "type": "circles",
    "label": "Culpa",
    "n": 3
   }
  ],
  "tagline": "Você fez coisas terríveis no passado e agora busca expiação Perguntas: Qual PJ costumava ser seu inimigo? Quem não acha que você mudou? Do que você mais se arrepende?",
  "body": [
   "Assombrado (+)(-) Você começa com 2 de Culpa; marque agora. Quando agir de forma egoísta, você pode marcar Culpa para ganhar vant em uma rolagem. Sempre que tiver menos Condições marcadas+trancadas do que sua Culpa, inclusive quando ganhar esta Provação pela primeira vez, marque imediatamente Condições até que se igualem.",
   "Reparações (+) Uma vez por sessão, quando ajudar significativamente um PdM (a critério do MJ), limpe 1 de Culpa e uma Condição.",
   "Retribuição (-) Quando Trocar Golpes com alguém do seu passado sombrio, adicione sua Culpa a todo dano causado a ele."
  ]
 },
 {
  "name": "Renomado",
  "id": "renowned",
  "widgets": [],
  "tagline": "Histórias de suas façanhas se espalharam por toda parte. Algumas são verdadeiras, outras são descaradamente falsas",
  "body": [
   "Perguntas: Como as histórias retratam você? Qual é a parte mais difícil de fazer jus à fama? Qual outro PJ é um coadjuvante frequente? Rumores & Lendas (+)(-) Sua Fama começa em 1. No início de cada sessão, conte ao grupo uma história que alguém ouviu sobre você. Se sua Fama for 2 ou mais, o MJ pode adicionar uma reviravolta ou complicação que outra pessoa ouviu. Quando Encerrar a Sessão, se você fez jus à história (palavra final do MJ), ganhe 1 de Fama (máx 3). Caso contrário, perca 1 de Fama (mín -1) e marque uma Condição.",
   "Maior que a Vida (-) Quando interagir com o público ou tentar fazer jus à história desta sessão, você pode rolar+Fama em vez de outro atributo. Se fizer isso, ✴com 9 ou menos, você também reduz a Fama em 1."
  ]
 },
 {
  "name": "Traumatizado",
  "id": "traumatized",
  "widgets": [],
  "tagline": "Seu passado foi sombrio, violento e ainda assombra você. Você foi vítima ou agressor?",
  "body": [
   "Perguntas: Qual outro PJ foi afetado pelo seu passado sombrio? Como você se acalma ou lida com o estresse? Que mistério do seu passado nunca foi respondido?",
   "Não Me Provoque (+) Você tem vant em rolagens destinadas a prevenir ou desescalar diretamente a violência.",
   "Instintos (-) Uma vez por cena, quando você se machucar ou testemunhar violência inesperada, escolha um instinto abaixo. Até que a violência acabe ou a cena termine, quando você agir de uma forma que não siga esse instinto, marque uma Condição.",
   "◆ Congelar: parar, encarar, seguir ordens, segurar firme",
   "◆ Fugir: esconder-se, escapar, correr, fortificar",
   "◆ Lutar: avançar, atacar, arremessar, destruir"
  ]
 },
 {
  "name": "Identidade Secreta",
  "id": "secret-identity",
  "widgets": [],
  "tagline": "Você manteve sua verdadeira identidade em segredo esse tempo todo, e as pessoas erradas estão procurando por você",
  "body": [
   "Perguntas: Qual é o seu verdadeiro nome e aparência? Quem são “as pessoas erradas”? Para qual esquema nefasto elas querem você? Herdeiro (+) Uma vez por sessão, você pode marcar um dos seguintes para ter acesso temporário a: ☐conhecimento antigo ☐recursos abundantes",
   "☐tesouro icônico ☐aliados poderosos ☐fonte mágica única. Quando você assumir sua identidade verdadeira, limpe uma das caixas.",
   "Desmascarado (-) Quando sua verdadeira identidade for revelada a alguém novo, o MJ pode fazer as pessoas erradas receberem notícias suas ou avançar uma Ameaça (a critério do MJ)."
  ]
 },
 {
  "name": "Vingativo",
  "id": "vengeful",
  "widgets": [],
  "tagline": "Não há justiça neste mundo além daquela que você exercerá contra seu arqui-inimigo",
  "body": [
   "Perguntas: Quem é seu arqui-inimigo? O que ele tirou de você? O que está entre você e a satisfação?",
   "Inabalável (+) Quando você Trocar Golpes com seu arqui-inimigo (ou qualquer pessoa associada a ele), role o dano com vant. Uma vez por sessão, enquanto persegue seu arqui-inimigo, quando você fosse Encarar a Morte, você permanece com 1 PV.",
   "Consumido (-) Quando você tomar um curso de ação que o afaste da vingança contra seu arqui-inimigo, marque uma Condição."
  ]
 },
 {
  "name": "Pária",
  "id": "pariah",
  "widgets": [],
  "tagline": "Você é repudiado pela sociedade educada, e a maioria dos que descobrem quem você realmente é o rejeita",
  "body": [
   "Perguntas: Que aspecto seu é repudiado? Você esconde esse aspecto ou se deleita nele? Se pudesse, você se livraria dele? Monstro (+) Quando você revelar pela primeira vez seu aspecto repudiado a um PdM, ele fica surpreso por um momento e agora está #amedrontado por você (a critério do MJ). Você ganha vant para Desafiar o Perigo, Manipular ou Trocar Golpes contra qualquer PdM que esteja #amedrontado por você.",
   "Desgraçado (-) Você tem desv para Desafiar o Perigo, Manipular ou Trocar Golpes contra qualquer PdM que não esteja #amedrontado por você."
  ]
 },
 {
  "name": "Obsessão por Tesouro",
  "id": "treasure-obsession",
  "widgets": [
   {
    "type": "circles",
    "label": "Pistas",
    "n": 5
   }
  ],
  "tagline": "Você é consumido pela busca de um lendário tesouro perdido, para triunfar onde tantos falharam e morreram",
  "body": [
   "Perguntas: Qual é o tesouro e o que as lendas dizem sobre ele? Por que ele é tão importante para você? Quem é um competidor perigoso e mortal por ele?",
   "No Rastro (+) Uma vez por sessão, depois que você Recordar Conhecimento ou Desvendar Segredos, marque uma Pista para fazer ao MJ uma pergunta sobre o seu tesouro, como: quem o guarda, quem poderia abusar dele ou que maldição ele supostamente coloca em quem o encontra, para citar alguns exemplos. Quando marcar sua 5ª Pista, você pode perguntar ao MJ: onde exatamente posso encontrar meu tesouro?",
   "Doença do Dragão (-) Você só pode Confortar ou Apoiar (ou receber isso) de outros PJs que prometeram ajudá-lo a obter seu tesouro."
  ]
 }
];
export const STRUGGLES_INTRO_PT = [
 "As Provações (Struggles) são poderosos aspectos narrativos de um personagem com os quais ele lida ao longo do jogo. Todas as Provações são, em sua essência, uma questão sobre quem é o PJ, o que importa para ele e que escolhas está disposto a fazer.",
 "Por padrão, cada PJ só pode ter uma Provação por vez. Se quiser revelar uma segunda Provação, você deve primeiro resolver a atual. Quando uma Provação for revelada, faça cada um dos seguintes:",
 "◆ Leia as perguntas da Provação e decida quais responder agora e quais explorar durante o jogo.",
 "◆ Responda a cada pergunta de “agora” e depois colabore com o resto do grupo para encaixar sua resposta na ficção compartilhada. O MJ tem a palavra final sobre o mundo em si, mas deve fazer acomodações razoáveis para cada jogador.",
 "◆ Ganhe os benefícios (+) e desvantagens (-) da Provação até que ela seja resolvida.",
 "◆ Limpe uma Condição trancada, se tiver uma.",
 "Enquanto tiver uma Provação, tente:",
 "◆ Envolver-se dramaticamente tanto com seus benefícios quanto com suas desvantagens",
 "◆ Lidar com as escolhas difíceis ou circunstâncias em que ela o coloca",
 "◆ Explorar novos detalhes ou emoções sobre ela quando apropriado, especialmente quando alguém Confortar ou Apoiar você",
 "◆ Ponderar uma verdade terrível sobre ela, que pode ser revelada no futuro",
 "◆ Resolvê-la apenas quando for narrativamente satisfatório",
 "Quando outro PJ tiver uma Provação, os outros Jogadores devem tentar:",
 "◆ Fazer seu PJ perguntar e expressar opiniões sobre ela",
 "◆ Adaptar seu Relacionamento e/ou Vínculo com ele à Provação dele e a como ela afeta a narrativa",
 "◆ Confortar, apoiar e às vezes desafiá-lo a respeito dela",
 "◆ Arfar de choque quando uma verdade terrível for confessada",
 "O MJ deve refletir a Provação de um PJ no mundo ao:",
 "◆ Torná-la o foco de um obstáculo, perigo ou escolha difícil",
 "◆ Retratar os benefícios e desvantagens dela sem se conter",
 "◆ Apresentar oportunidades para resolvê-la quando o momento parecer certo",
 "Quando sua Provação revelada for resolvida, Suba de Nível (sem apagar XP), apague a Provação e perca seus benefícios (+) e desvantagens (-). Apague a caixa de Avanço Revelar uma Provação se estiver marcada; você poderá escolher uma nova Provação no futuro.",
 "Veja Revelar Sua Provação em Movimentos de Campanha no Guia Rápido de DW2 Beta."
];
export const STRUGGLES = STRUGGLES_PT;
export const STRUGGLES_INTRO = STRUGGLES_INTRO_PT;
