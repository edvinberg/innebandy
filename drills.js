// Alla övningar. Redigeras av Claude, se README.md.
// levels: vilka nivåer övningen hör till, "gron" och/eller "bla".
window.DRILLS = [
  {
    "name": "Pass runt sarg",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Två och två med en fristående sargbit mellan sig. Den ena rör sig åt ena sidan och passar förbi sargbiten. Kompisen flyttar med och tar emot. Sedan till andra sidan, eller finta och gå tillbaka till samma sida. Passen går på sidorna om sargbiten och ska aldrig träffa sargen. Var följsamma."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "Sargbit",
        "at": [
          11,
          13.6
        ]
      },
      {
        "text": "A",
        "at": [
          6.6,
          10
        ]
      },
      {
        "text": "B",
        "at": [
          15.4,
          10
        ]
      }
    ],
    "steps": [
      {
        "text": "A driver åt ena sidan. B flyttar med.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              8,
              6.6
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              14,
              6.6
            ]
          }
        ]
      },
      {
        "text": "A passar förbi sargbiten till B.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "B driver till andra sidan. A flyttar med.",
        "actions": [
          {
            "type": "dribble",
            "who": "B",
            "to": [
              14,
              13.4
            ]
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              8,
              13.4
            ]
          }
        ]
      },
      {
        "text": "B passar förbi sargbiten till A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      },
      {
        "text": "A fintar mot andra sidan och går tillbaka. B följer med.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              8,
              9.5
            ],
            "to": [
              8,
              13.6
            ]
          },
          {
            "type": "run",
            "who": "B",
            "via": [
              14,
              9.5
            ],
            "to": [
              14,
              13.6
            ]
          }
        ]
      },
      {
        "text": "A passar förbi sargbiten till B. Var följsamma.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      }
    ],
    "lines": [
      {
        "from": [
          11,
          8
        ],
        "to": [
          11,
          12
        ]
      }
    ]
  },
  {
    "name": "Anfall 2 mot 1",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      22
    ],
    "info": [
      [
        "Vad?",
        "Anfall 2 mot 1."
      ],
      [
        "Organisation",
        "Tre led från kortsidan. Två koner en bit upp på planen, en på varje sida. Målvakt i mål."
      ],
      [
        "Anvisningar",
        "En spelare från varje ytterled springer upp och rundar konan. De får pass från spelaren i mittenledet, som sedan agerar försvar. De två anfaller tillsammans 2 mot 1."
      ]
    ],
    "entities": {
      "X1": {
        "type": "cone",
        "x": 16,
        "y": 4.5
      },
      "X2": {
        "type": "cone",
        "x": 16,
        "y": 15.5
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 1.4,
        "y": 2.6
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 1.4,
        "y": 17.4
      },
      "c": {
        "type": "player",
        "team": "away",
        "x": 1,
        "y": 14.6
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 3.2,
        "y": 3
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 3.2,
        "y": 17
      },
      "C": {
        "type": "player",
        "team": "away",
        "x": 1.5,
        "y": 12.2
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "holder": "C"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          4.6,
          1.6
        ]
      },
      {
        "text": "B",
        "at": [
          4.6,
          18.4
        ]
      },
      {
        "text": "C",
        "at": [
          0.9,
          13.4
        ]
      }
    ],
    "balls": [
      [
        0.7,
        3.7
      ],
      [
        1.2,
        4.1
      ],
      [
        0.6,
        4.4
      ],
      [
        0.7,
        16.3
      ],
      [
        1.2,
        15.9
      ],
      [
        0.6,
        15.6
      ],
      [
        0.6,
        11
      ],
      [
        1,
        11.3
      ]
    ],
    "steps": [
      {
        "text": "A och B springer upp längs sargen mot konerna.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              14.5,
              3
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              14.5,
              17
            ]
          }
        ]
      },
      {
        "text": "A och B rundar konerna och vänder in mot mål.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "via": [
              19.5,
              3.2
            ],
            "to": [
              14,
              7
            ]
          },
          {
            "type": "run",
            "who": "B",
            "via": [
              19.5,
              16.8
            ],
            "to": [
              14,
              13
            ]
          }
        ]
      },
      {
        "text": "C passar A i farten.",
        "actions": [
          {
            "type": "pass",
            "from": "C",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              12,
              7.5
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              12,
              12.5
            ]
          }
        ]
      },
      {
        "text": "C går runt målet och ut som försvarare. A driver bollen mot C.",
        "actions": [
          {
            "type": "run",
            "who": "C",
            "via": [
              3.2,
              14.5
            ],
            "to": [
              7.4,
              10.4
            ]
          },
          {
            "type": "dribble",
            "who": "A",
            "to": [
              9.5,
              8
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              10,
              13
            ]
          }
        ]
      },
      {
        "text": "A drar på sig C och passar till B.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          },
          {
            "type": "run",
            "who": "C",
            "to": [
              7.6,
              9.2
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              8,
              12.6
            ]
          },
          {
            "type": "run",
            "who": "G",
            "to": [
              4.2,
              10.8
            ]
          }
        ]
      },
      {
        "text": "B avslutar.",
        "actions": [
          {
            "type": "shot",
            "who": "B"
          }
        ]
      }
    ]
  },
  {
    "name": "Utfall med pass",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Vad?",
        "Utfall med pass."
      ],
      [
        "Hur?",
        "I par mitt emot varandra. Passa samtidigt som du gör utfall."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          11,
          8.6
        ]
      },
      {
        "text": "B",
        "at": [
          15,
          8.6
        ]
      }
    ],
    "steps": [
      {
        "text": "A gör utfall framåt och passar B samtidigt.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              11.8,
              10
            ]
          },
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "A går tillbaka. B gör utfall och passar A samtidigt.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              11,
              10
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              14.2,
              10
            ]
          },
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      },
      {
        "text": "B går tillbaka. A gör utfall och passar B samtidigt.",
        "actions": [
          {
            "type": "run",
            "who": "B",
            "to": [
              15,
              10
            ]
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              11.8,
              10
            ]
          },
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "Fortsätt växelvis.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              11,
              10
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              14.2,
              10
            ]
          },
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Teknikbana",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Teknikbana som uppvärmning. Dribbla slalom mellan konerna, runda sista konan och dribbla tillbaka sist i ledet. Variera banan: dribbla koner, hoppa skridskohopp, passa mot sarg, dribbla tränare, balansera på bänk. Hitta på!"
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 15,
        "y": 5
      },
      "K2": {
        "type": "cone",
        "x": 12,
        "y": 5
      },
      "K3": {
        "type": "cone",
        "x": 9,
        "y": 5
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 17.6,
        "y": 5
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 18.9,
        "y": 5
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          17.6,
          6.4
        ]
      }
    ],
    "balls": [
      [
        19.28,
        5.45
      ]
    ],
    "steps": [
      {
        "text": "A dribblar förbi första konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              15,
              6.4
            ]
          }
        ]
      },
      {
        "text": "A dribblar slalom förbi andra konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              12,
              3.6
            ]
          }
        ]
      },
      {
        "text": "A dribblar slalom förbi tredje konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              9,
              6.4
            ]
          }
        ]
      },
      {
        "text": "A rundar sista konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              6.6,
              5
            ],
            "to": [
              9.6,
              3.6
            ]
          }
        ]
      },
      {
        "text": "A dribblar tillbaka och ställer sig sist i ledet.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              18.9,
              3.4
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Svansleken (med västar)",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Alla mot alla, rycka svans."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 3.5
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 6.5
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 8.5,
        "y": 16
      },
      "D": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 13.5
      },
      "E": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 10
      },
      "F": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 3
      },
      "G": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 16.5
      },
      "K": {
        "type": "player",
        "team": "home",
        "x": 13.5,
        "y": 1.8
      }
    },
    "steps": [
      {
        "text": "Alla mot alla, rycka svans.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Färg-reaktion",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Jogga, tränaren ropar färg -> nudda färgen snabbt."
      ]
    ],
    "entities": {
      "R": {
        "type": "cone",
        "x": 8,
        "y": 2.5
      },
      "Bl": {
        "type": "cone",
        "x": 8,
        "y": 17.5
      },
      "Gu": {
        "type": "cone",
        "x": 18,
        "y": 2.5
      },
      "Gr": {
        "type": "cone",
        "x": 18,
        "y": 17.5
      },
      "T": {
        "type": "player",
        "team": "third",
        "x": 13.5,
        "y": 19.2
      },
      "a": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 7
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 11
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 14.5,
        "y": 8
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 13
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 11.5,
        "y": 14.5
      }
    },
    "labels": [
      {
        "text": "Röd",
        "at": [
          8,
          4.3
        ]
      },
      {
        "text": "Blå",
        "at": [
          8,
          15.7
        ]
      },
      {
        "text": "Gul",
        "at": [
          18,
          4.3
        ]
      },
      {
        "text": "Grön",
        "at": [
          18,
          15.5
        ]
      },
      {
        "text": "Tränare",
        "at": [
          15.1,
          18.2
        ]
      }
    ],
    "steps": [
      {
        "text": "Alla joggar runt i mitten.",
        "actions": [
          {
            "type": "run",
            "who": "a",
            "via": [
              10.5,
              5.5
            ],
            "to": [
              12.5,
              5.5
            ]
          },
          {
            "type": "run",
            "who": "c",
            "via": [
              16,
              8.5
            ],
            "to": [
              15.5,
              10.5
            ]
          },
          {
            "type": "run",
            "who": "e",
            "via": [
              12,
              16.5
            ],
            "to": [
              13,
              15.5
            ]
          }
        ]
      },
      {
        "text": "Tränaren ropar ”blå”. Alla springer och nuddar den blå konen.",
        "actions": [
          {
            "type": "run",
            "who": "a",
            "to": [
              9.6,
              19
            ]
          },
          {
            "type": "run",
            "who": "b",
            "to": [
              9.7,
              16.6
            ]
          },
          {
            "type": "run",
            "who": "c",
            "to": [
              11.2,
              17.8
            ]
          },
          {
            "type": "run",
            "who": "d",
            "to": [
              11.3,
              16.1
            ]
          },
          {
            "type": "run",
            "who": "e",
            "to": [
              7.6,
              19.1
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Myrstacken",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Dribbla utan krock. Kommandon: \"Byt boll\", \"Sitt\", \"Vänd\"."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 8.5,
        "y": 4
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 8
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 15.5
      },
      "D": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 14
      },
      "E": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 4.5
      },
      "F": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 11
      },
      "G": {
        "type": "player",
        "team": "home",
        "x": 12.5,
        "y": 18
      }
    },
    "ball": {
      "holder": "A"
    },
    "balls": [
      [
        12.8,
        8.8
      ],
      [
        9.8,
        16.3
      ],
      [
        14.8,
        14.8
      ],
      [
        16.8,
        5.3
      ],
      [
        18.3,
        11.8
      ],
      [
        13.3,
        18.8
      ]
    ],
    "steps": [
      {
        "text": "Dribbla utan krock. Kommandon: \"Byt boll\", \"Sitt\", \"Vänd\".",
        "actions": []
      }
    ]
  },
  {
    "name": "Jägare",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Barnen springer med boll över planen utan att jägarna tar bollen. Blir man av med bollen blir man också jägare."
      ]
    ],
    "entities": {
      "r0": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 2
      },
      "r1": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 5.2
      },
      "r2": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 8.4
      },
      "r3": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 11.6
      },
      "r4": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 14.8
      },
      "r5": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 18
      },
      "J1": {
        "type": "player",
        "team": "away",
        "x": 20,
        "y": 6.5
      },
      "J2": {
        "type": "player",
        "team": "away",
        "x": 20,
        "y": 13.5
      }
    },
    "labels": [
      {
        "text": "Jägare",
        "at": [
          18.5,
          9.8
        ]
      }
    ],
    "steps": [
      {
        "text": "Barnen springer med boll över planen utan att jägarna tar bollen. Blir man av med bollen blir man också jägare.",
        "actions": []
      }
    ],
    "balls": [
      [
        8.7,
        2.6
      ],
      [
        8.7,
        5.8
      ],
      [
        8.7,
        9
      ],
      [
        8.7,
        12.2
      ],
      [
        8.7,
        15.4
      ],
      [
        8.7,
        18.6
      ]
    ]
  },
  {
    "name": "Stafett (med/utan boll)",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Använd färger från stationer, springtävling, baklänges etc."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 4
      },
      "a2": {
        "type": "player",
        "team": "queue",
        "x": 6.8,
        "y": 4
      },
      "a3": {
        "type": "player",
        "team": "queue",
        "x": 5.6,
        "y": 4
      },
      "a4": {
        "type": "player",
        "team": "queue",
        "x": 4.4,
        "y": 4
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 16
      },
      "b2": {
        "type": "player",
        "team": "queue",
        "x": 6.8,
        "y": 16
      },
      "b3": {
        "type": "player",
        "team": "queue",
        "x": 5.6,
        "y": 16
      },
      "b4": {
        "type": "player",
        "team": "queue",
        "x": 4.4,
        "y": 16
      },
      "K1": {
        "type": "cone",
        "x": 17,
        "y": 4
      },
      "K2": {
        "type": "cone",
        "x": 17,
        "y": 16
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "Med boll",
        "at": [
          2.4,
          4.6
        ]
      },
      {
        "text": "Utan boll",
        "at": [
          2.4,
          15.4
        ]
      }
    ],
    "balls": [
      [
        6.8,
        5.4
      ],
      [
        5.6,
        5.4
      ],
      [
        4.4,
        5.4
      ]
    ],
    "steps": [
      {
        "text": "De första i leden startar. Vänster led driver boll, höger led springer utan boll.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              15.6,
              4
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              15.6,
              16
            ]
          }
        ]
      },
      {
        "text": "De rundar konen och tar sig tillbaka till ledet.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              19,
              4
            ],
            "to": [
              8.4,
              6
            ]
          },
          {
            "type": "run",
            "who": "B",
            "via": [
              19,
              16
            ],
            "to": [
              8.4,
              14
            ]
          }
        ]
      },
      {
        "text": "Nästa i ledet tar över och startar.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "a2"
          },
          {
            "type": "run",
            "who": "b2",
            "to": [
              15.6,
              16
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Snöbollskrig",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "skjut över alla bollar till andra sidan."
      ]
    ],
    "entities": {
      "a": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 4
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 10,
        "y": 15.5
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 9.5
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 4.5
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 16.5,
        "y": 16
      },
      "o1": {
        "type": "player",
        "team": "away",
        "x": 31,
        "y": 4
      },
      "o2": {
        "type": "player",
        "team": "away",
        "x": 30,
        "y": 15.5
      },
      "o3": {
        "type": "player",
        "team": "away",
        "x": 26,
        "y": 10.5
      },
      "o4": {
        "type": "player",
        "team": "away",
        "x": 23,
        "y": 4.5
      },
      "o5": {
        "type": "player",
        "team": "away",
        "x": 23.5,
        "y": 16
      }
    },
    "ball": {
      "holder": "c"
    },
    "balls": [
      [
        12,
        6.6
      ],
      [
        8.5,
        11.8
      ],
      [
        13,
        13.6
      ],
      [
        18,
        8
      ],
      [
        12.5,
        18.4
      ],
      [
        8,
        1.6
      ],
      [
        28,
        6.5
      ],
      [
        32,
        13.2
      ],
      [
        27.5,
        14
      ],
      [
        22.2,
        11.5
      ],
      [
        28,
        18.4
      ],
      [
        33,
        1.8
      ]
    ],
    "steps": [
      {
        "text": "Båda lagen skjuter bollarna över mittlinjen till andra sidan.",
        "actions": [
          {
            "type": "shot",
            "who": "c",
            "to": [
              25.2,
              9.6
            ]
          },
          {
            "type": "run",
            "who": "a",
            "to": [
              11.3,
              5.8
            ]
          },
          {
            "type": "run",
            "who": "o1",
            "to": [
              28.6,
              5.6
            ]
          }
        ]
      },
      {
        "text": "Bollen hamnar på andra sidan. Laget där tar den.",
        "actions": [
          {
            "type": "dribble",
            "who": "o3",
            "to": [
              24.6,
              9.8
            ]
          }
        ]
      },
      {
        "text": "De skjuter tillbaka den över mittlinjen.",
        "actions": [
          {
            "type": "shot",
            "who": "o3",
            "to": [
              14.5,
              15
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Banankull",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "En kull-lek."
      ]
    ],
    "entities": {
      "a": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 4
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 15.5
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 7
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 14
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 4.5
      },
      "f": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 17
      },
      "g": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 11.5
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 13,
        "y": 11
      }
    },
    "labels": [
      {
        "text": "Tagare",
        "at": [
          13,
          13.4
        ]
      }
    ],
    "steps": [
      {
        "text": "En kull-lek.",
        "actions": []
      }
    ]
  },
  {
    "name": "Korv med bröd-kull",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Gör fri genom att 1 spelare lägger sig på varsin sida om den tagna."
      ]
    ],
    "entities": {
      "a": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 4
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 15.5
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 7
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 14
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 4.5
      },
      "f": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 17
      },
      "g": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 11.5
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 13,
        "y": 11
      }
    },
    "labels": [
      {
        "text": "Tagare",
        "at": [
          13,
          13.4
        ]
      }
    ],
    "steps": [
      {
        "text": "Gör fri genom att 1 spelare lägger sig på varsin sida om den tagna.",
        "actions": []
      }
    ]
  },
  {
    "name": "Passningslek två och två",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spring runt, passa bollen mellan er, undvik andra par."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 8.5
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 12
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 10,
        "y": 2.5
      },
      "D": {
        "type": "player",
        "team": "home",
        "x": 12.5,
        "y": 4.5
      },
      "E": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 16.5
      },
      "F": {
        "type": "player",
        "team": "home",
        "x": 13.5,
        "y": 18
      },
      "G": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 3.5
      },
      "K": {
        "type": "player",
        "team": "home",
        "x": 18,
        "y": 6
      },
      "M": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 15
      },
      "N": {
        "type": "player",
        "team": "home",
        "x": 18.5,
        "y": 12.5
      }
    },
    "ball": {
      "holder": "A"
    },
    "balls": [
      [
        10.8,
        3.3
      ],
      [
        11.8,
        17.3
      ],
      [
        16.8,
        4.3
      ],
      [
        17.8,
        15.8
      ]
    ],
    "steps": [
      {
        "text": "Paren springer runt. Ett par passar till varandra medan de springer.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              11.5,
              8.3
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              12.5,
              11.8
            ]
          }
        ]
      },
      {
        "text": "Paret passar tillbaka och springer vidare mellan de andra paren.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              15,
              9
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              15,
              12.2
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Dribblingskull",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "En tagare utan boll försöker ta bollen från någon."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 6
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 15
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 13.5,
        "y": 13.5
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 9.5
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 17
      },
      "f": {
        "type": "player",
        "team": "home",
        "x": 8.5,
        "y": 3.5
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 10.5,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "Tagare",
        "at": [
          10.5,
          12.6
        ]
      }
    ],
    "balls": [
      [
        9.8,
        15.8
      ],
      [
        14.3,
        14.3
      ],
      [
        18.3,
        10.3
      ],
      [
        17.8,
        17.8
      ],
      [
        9.3,
        4.3
      ]
    ],
    "steps": [
      {
        "text": "En tagare utan boll försöker ta bollen från någon.",
        "actions": []
      }
    ]
  },
  {
    "name": "Tunnelkull",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Krypa mellan benen för att befria."
      ]
    ],
    "entities": {
      "a": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 4
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 15.5
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 7
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 14
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 4.5
      },
      "f": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 17
      },
      "g": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 11.5
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 13,
        "y": 11
      }
    },
    "labels": [
      {
        "text": "Tagare",
        "at": [
          13,
          13.4
        ]
      }
    ],
    "steps": [
      {
        "text": "Krypa mellan benen för att befria.",
        "actions": []
      }
    ]
  },
  {
    "name": "Spegelkull",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Släpp fri genom att härma den som har blivit tagen."
      ]
    ],
    "entities": {
      "a": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 4
      },
      "b": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 15.5
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 7
      },
      "d": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 14
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 4.5
      },
      "f": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 17
      },
      "g": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 11.5
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 13,
        "y": 11
      }
    },
    "labels": [
      {
        "text": "Tagare",
        "at": [
          13,
          13.4
        ]
      }
    ],
    "steps": [
      {
        "text": "Släpp fri genom att härma den som har blivit tagen.",
        "actions": []
      }
    ]
  },
  {
    "name": "Ägg i bo / Skattkista",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Tränarna är tagare. Barnen tar en boll på ena sidan och springer till andra sidan utan att bli tagna. Blir man tagen kastar man tillbaka bollen och börjar om. Målet är att samla alla bollar på andra sidan."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 33.5,
        "y": 6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 33.5,
        "y": 13
      },
      "c": {
        "type": "player",
        "team": "home",
        "x": 35,
        "y": 8.5
      },
      "e": {
        "type": "player",
        "team": "home",
        "x": 35,
        "y": 11.5
      },
      "T1": {
        "type": "player",
        "team": "third",
        "x": 20,
        "y": 6
      },
      "T2": {
        "type": "player",
        "team": "third",
        "x": 20,
        "y": 14
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "Hämta",
        "at": [
          37.4,
          14
        ]
      },
      {
        "text": "Lämna",
        "at": [
          3.6,
          14
        ]
      },
      {
        "text": "Tränare",
        "at": [
          21.4,
          6
        ]
      },
      {
        "text": "Tränare",
        "at": [
          21.4,
          14
        ]
      },
      {
        "text": "A",
        "at": [
          33.5,
          4.6
        ]
      },
      {
        "text": "B",
        "at": [
          33.5,
          14.4
        ]
      }
    ],
    "balls": [
      [
        36.2,
        15.6
      ],
      [
        36.8,
        16.2
      ],
      [
        36,
        16.6
      ],
      [
        36.8,
        17.1
      ],
      [
        4.4,
        15.8
      ],
      [
        5,
        16.4
      ]
    ],
    "steps": [
      {
        "text": "Barnen tar en boll var och springer mot andra sidan. Tränarna försöker ta dem.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "via": [
              20,
              2.2
            ],
            "to": [
              7,
              4
            ]
          },
          {
            "type": "run",
            "who": "T1",
            "to": [
              13,
              4.6
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              22.5,
              13
            ]
          },
          {
            "type": "run",
            "who": "T2",
            "to": [
              21.6,
              13.6
            ]
          }
        ]
      },
      {
        "text": "A kommer fram och lämnar bollen. B blev tagen, kastar tillbaka bollen och börjar om.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              6,
              14.8
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              33.5,
              13
            ]
          }
        ]
      },
      {
        "text": "Fortsätt tills alla bollar är samlade på andra sidan.",
        "actions": []
      }
    ],
    "lines": [
      {
        "from": [
          31.5,
          0.5
        ],
        "to": [
          31.5,
          19.5
        ]
      },
      {
        "from": [
          8,
          0.5
        ],
        "to": [
          8,
          19.5
        ]
      }
    ]
  },
  {
    "name": "Bläckfisken",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Som \"Under hökens vingar\" men tagarna sitter fast."
      ]
    ],
    "entities": {
      "r0": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 2
      },
      "r1": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 5.2
      },
      "r2": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 8.4
      },
      "r3": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 11.6
      },
      "r4": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 14.8
      },
      "r5": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 18
      },
      "B1": {
        "type": "player",
        "team": "away",
        "x": 16,
        "y": 13.5
      },
      "B2": {
        "type": "player",
        "team": "away",
        "x": 20,
        "y": 6.5
      },
      "B3": {
        "type": "player",
        "team": "away",
        "x": 24,
        "y": 13
      }
    },
    "steps": [
      {
        "text": "Spelarna springer över planen förbi bläckfiskarna. Bläckfiskarna sitter fast.",
        "actions": [
          {
            "type": "run",
            "who": "r0",
            "to": [
              32,
              2
            ]
          },
          {
            "type": "run",
            "who": "r1",
            "via": [
              20,
              3.6
            ],
            "to": [
              32,
              5.4
            ]
          },
          {
            "type": "run",
            "who": "r2",
            "via": [
              20,
              9
            ],
            "to": [
              32,
              8.4
            ]
          },
          {
            "type": "run",
            "who": "r3",
            "via": [
              18,
              10.6
            ],
            "to": [
              32,
              11.4
            ]
          },
          {
            "type": "run",
            "who": "r4",
            "via": [
              20,
              16.4
            ],
            "to": [
              32,
              15.2
            ]
          },
          {
            "type": "run",
            "who": "r5",
            "to": [
              32,
              18
            ]
          }
        ]
      },
      {
        "text": "Spelarna springer tillbaka förbi bläckfiskarna.",
        "actions": [
          {
            "type": "run",
            "who": "r0",
            "to": [
              8,
              2
            ]
          },
          {
            "type": "run",
            "who": "r1",
            "via": [
              20,
              3.6
            ],
            "to": [
              8,
              5.2
            ]
          },
          {
            "type": "run",
            "who": "r2",
            "via": [
              20,
              9
            ],
            "to": [
              8,
              8.4
            ]
          },
          {
            "type": "run",
            "who": "r3",
            "via": [
              18,
              10.6
            ],
            "to": [
              8,
              11.6
            ]
          },
          {
            "type": "run",
            "who": "r4",
            "via": [
              20,
              16.4
            ],
            "to": [
              8,
              14.8
            ]
          },
          {
            "type": "run",
            "who": "r5",
            "to": [
              8,
              18
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Hajen",
    "category": "Lekar/slutövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spring runt boet, undvik hajen vid signal."
      ]
    ],
    "entities": {
      "N1": {
        "type": "cone",
        "x": 10.5,
        "y": 8.5
      },
      "N2": {
        "type": "cone",
        "x": 10.5,
        "y": 11.5
      },
      "N3": {
        "type": "cone",
        "x": 13.5,
        "y": 8.5
      },
      "N4": {
        "type": "cone",
        "x": 13.5,
        "y": 11.5
      },
      "Hj": {
        "type": "player",
        "team": "away",
        "x": 12,
        "y": 10
      },
      "p0": {
        "type": "player",
        "team": "home",
        "x": 4.2,
        "y": 2.6
      },
      "p1": {
        "type": "player",
        "team": "home",
        "x": 5.4,
        "y": 3.6
      },
      "p2": {
        "type": "player",
        "team": "home",
        "x": 4.2,
        "y": 17.4
      },
      "p3": {
        "type": "player",
        "team": "home",
        "x": 5.4,
        "y": 16.4
      },
      "p4": {
        "type": "player",
        "team": "home",
        "x": 17.4,
        "y": 2.6
      },
      "p5": {
        "type": "player",
        "team": "home",
        "x": 16.2,
        "y": 3.6
      },
      "p6": {
        "type": "player",
        "team": "home",
        "x": 17.4,
        "y": 17.4
      },
      "p7": {
        "type": "player",
        "team": "home",
        "x": 16.2,
        "y": 16.4
      }
    },
    "labels": [
      {
        "text": "Bo",
        "at": [
          7,
          2
        ]
      },
      {
        "text": "Bo",
        "at": [
          7,
          18
        ]
      },
      {
        "text": "Bo",
        "at": [
          14.6,
          2
        ]
      },
      {
        "text": "Bo",
        "at": [
          14.6,
          18
        ]
      },
      {
        "text": "Hajen",
        "at": [
          12,
          7
        ]
      }
    ],
    "steps": [
      {
        "text": "Spelarna springer ut från sina bon i hörnen mot hajens bo i mitten.",
        "actions": [
          {
            "type": "run",
            "who": "p0",
            "to": [
              8.8,
              8
            ]
          },
          {
            "type": "run",
            "who": "p6",
            "to": [
              15.4,
              12.4
            ]
          }
        ]
      },
      {
        "text": "De springer runt hajens bo.",
        "actions": [
          {
            "type": "run",
            "who": "p0",
            "via": [
              8,
              13.8
            ],
            "to": [
              12.6,
              14.4
            ]
          },
          {
            "type": "run",
            "who": "p6",
            "via": [
              16,
              6.2
            ],
            "to": [
              11.4,
              5.8
            ]
          }
        ]
      },
      {
        "text": "Vid signal kommer hajen ut. Spelarna springer tillbaka till sina bon och undviker hajen.",
        "actions": [
          {
            "type": "run",
            "who": "Hj",
            "to": [
              15,
              13.8
            ]
          },
          {
            "type": "run",
            "who": "p0",
            "via": [
              7.6,
              12.6
            ],
            "to": [
              5.6,
              4.6
            ]
          },
          {
            "type": "run",
            "who": "p6",
            "via": [
              16.4,
              7.2
            ],
            "to": [
              16.2,
              15
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Sargduell",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Tränaren rullar boll mot sarghörnet. Två spelare tävlar om att vinna bollen. Vinnaren blir anfallare, tvåan försvarare. Om försvaren bryter: poäng genom att driva över mittlinjen."
      ]
    ],
    "entities": {
      "T": {
        "type": "player",
        "team": "third",
        "x": 17,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 7.5
      },
      "B": {
        "type": "player",
        "team": "away",
        "x": 15,
        "y": 12.5
      }
    },
    "ball": {
      "at": [
        16.3,
        10.6
      ]
    },
    "labels": [
      {
        "text": "Tränare",
        "at": [
          18.3,
          10
        ]
      },
      {
        "text": "A",
        "at": [
          15,
          6.2
        ]
      },
      {
        "text": "B",
        "at": [
          15,
          13.8
        ]
      }
    ],
    "balls": [
      [
        17.6,
        11.4
      ],
      [
        18,
        11.9
      ],
      [
        17.4,
        12.1
      ]
    ],
    "steps": [
      {
        "text": "Tränaren rullar bollen mot sarghörnet. A och B springer efter bollen.",
        "actions": [
          {
            "type": "pass",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              3,
              2.8
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              4.3,
              4.5
            ]
          }
        ]
      },
      {
        "text": "A vinner bollen och blir anfallare. B blir försvarare.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              6.5,
              3
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              6.5,
              6.2
            ]
          }
        ]
      },
      {
        "text": "A anfaller mot mål. B försvarar.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              9.5,
              5.5
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              8.5,
              7.5
            ]
          }
        ]
      },
      {
        "text": "B bryter och tar bollen från A.",
        "actions": [
          {
            "type": "run",
            "who": "B",
            "to": [
              9.3,
              6.2
            ]
          }
        ]
      },
      {
        "text": "B driver bollen över mittlinjen.",
        "actions": [
          {
            "type": "dribble",
            "who": "B",
            "to": [
              23,
              8
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "1 mot 1",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Tränaren passar boll mellan två konor. Spelarna springer runt konen, försöker ta bollen och göra mål. Spelarna startar nere i hörnen. Konerna står i en båge från varje hörn, så att spelarna konas in mot varandra."
      ]
    ],
    "entities": {
      "L1": {
        "type": "cone",
        "x": 5.5,
        "y": 3.6
      },
      "L2": {
        "type": "cone",
        "x": 8.5,
        "y": 5
      },
      "L3": {
        "type": "cone",
        "x": 11,
        "y": 7
      },
      "R1": {
        "type": "cone",
        "x": 5.5,
        "y": 16.4
      },
      "R2": {
        "type": "cone",
        "x": 8.5,
        "y": 15
      },
      "R3": {
        "type": "cone",
        "x": 11,
        "y": 13
      },
      "T": {
        "type": "player",
        "team": "third",
        "x": 17,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 2.8,
        "y": 2.2
      },
      "B": {
        "type": "player",
        "team": "away",
        "x": 2.8,
        "y": 17.8
      }
    },
    "ball": {
      "at": [
        16.2,
        10.4
      ]
    },
    "labels": [
      {
        "text": "Tränare",
        "at": [
          18.3,
          10
        ]
      },
      {
        "text": "A",
        "at": [
          2.8,
          3.6
        ]
      },
      {
        "text": "B",
        "at": [
          2.8,
          16.4
        ]
      }
    ],
    "balls": [
      [
        17.6,
        12
      ],
      [
        18,
        12.5
      ],
      [
        17.4,
        12.7
      ]
    ],
    "steps": [
      {
        "text": "A och B springer från varsitt hörn längs konbågen, in mot varandra.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "via": [
              8,
              3.2
            ],
            "to": [
              12.6,
              6
            ]
          },
          {
            "type": "run",
            "who": "B",
            "via": [
              8,
              16.8
            ],
            "to": [
              12.6,
              14
            ]
          }
        ]
      },
      {
        "text": "Tränaren passar bollen mellan de två sista konorna. A och B tävlar om bollen.",
        "actions": [
          {
            "type": "pass",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              12.4,
              9.4
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              12.8,
              11.2
            ]
          }
        ]
      },
      {
        "text": "A vinner bollen och driver mot mål. B försöker ta bollen.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              8,
              9
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              8.6,
              11
            ]
          }
        ]
      },
      {
        "text": "A skjuter.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Uppspel",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Lång pass ner i hörn -> spelare 2 springer och hämtar -> passar in i slottet -> skott."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 14
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 19,
        "y": 14.6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 3
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 15.5,
        "y": 2.4
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          17.5,
          12.7
        ]
      },
      {
        "text": "B",
        "at": [
          14,
          4.3
        ]
      }
    ],
    "balls": [
      [
        18.6,
        16
      ],
      [
        19.2,
        16.3
      ],
      [
        18.5,
        16.6
      ]
    ],
    "steps": [
      {
        "text": "A slår en lång passning ner i hörnet. B springer och hämtar.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              2.8,
              2.6
            ]
          }
        ]
      },
      {
        "text": "B driver ut från hörnet. A springer mot slottet.",
        "actions": [
          {
            "type": "dribble",
            "who": "B",
            "to": [
              5,
              3.6
            ]
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              11,
              11.5
            ]
          }
        ]
      },
      {
        "text": "B passar in i slottet till A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              9.5,
              10.2
            ]
          }
        ]
      },
      {
        "text": "A skjuter.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Uppspel runt mål",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "spelare 1 springer utan boll ner i hörn längs sarg -> Lång pass ner i samma hörn -> spelare 2 springer och hämtar -> rundar mål -> passar in i slottet -> skott."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 2.5
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 18.5,
        "y": 1.6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 17,
        "y": 10
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 18.5,
        "y": 10.8
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "holder": "B"
    },
    "labels": [
      {
        "text": "1",
        "at": [
          17,
          4
        ]
      },
      {
        "text": "2",
        "at": [
          17,
          8.5
        ]
      }
    ],
    "balls": [
      [
        18.4,
        9.3
      ],
      [
        18.8,
        9.6
      ]
    ],
    "steps": [
      {
        "text": "Spelare 1 springer utan boll längs sargen ner i hörnet.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              3.4,
              2.4
            ]
          }
        ]
      },
      {
        "text": "Spelare 2 slår en lång passning ner i samma hörn. Spelare 1 hämtar bollen.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      },
      {
        "text": "Spelare 1 rundar målet. Spelare 2 springer in i slottet.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              0.4,
              10
            ],
            "to": [
              4,
              15
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              9,
              11
            ]
          }
        ]
      },
      {
        "text": "Spelare 1 passar in i slottet till spelare 2.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "Spelare 2 skjuter.",
        "actions": [
          {
            "type": "shot",
            "who": "B"
          }
        ]
      }
    ]
  },
  {
    "name": "2 mot tränare",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Tränare sätter press på bollhållare, tvingar fram passning till spelare 2 som avslutar."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 14
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 8,
        "y": 9.5
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          13,
          4.7
        ]
      },
      {
        "text": "B",
        "at": [
          13,
          15.3
        ]
      },
      {
        "text": "Tränare",
        "at": [
          6.8,
          9.5
        ]
      }
    ],
    "steps": [
      {
        "text": "A driver mot mål. Tränaren sätter press på A.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              10.5,
              7
            ]
          },
          {
            "type": "run",
            "who": "T",
            "to": [
              9.3,
              8.2
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              10.5,
              13
            ]
          }
        ]
      },
      {
        "text": "A passar till B.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              8.8,
              12.2
            ]
          }
        ]
      },
      {
        "text": "B avslutar.",
        "actions": [
          {
            "type": "shot",
            "who": "B"
          }
        ]
      }
    ]
  },
  {
    "name": "Strömmen / Snedda",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Stå i led i hörn. Spring upp runt kona, skjut på målvakt. När alla skjutit, byt hörn."
      ]
    ],
    "entities": {
      "X1": {
        "type": "cone",
        "x": 11,
        "y": 4
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 3.2,
        "y": 3
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 1.4,
        "y": 2.6
      },
      "a2": {
        "type": "player",
        "team": "queue",
        "x": 1.4,
        "y": 4.6
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          4.6,
          1.6
        ]
      }
    ],
    "balls": [
      [
        0.7,
        5.6
      ],
      [
        1.2,
        6
      ],
      [
        0.6,
        6.3
      ]
    ],
    "steps": [
      {
        "text": "A driver upp längs sargen mot konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              9,
              2.5
            ]
          }
        ]
      },
      {
        "text": "A rundar konan och sneddar in mot mål.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              16,
              2.75
            ],
            "to": [
              9,
              8
            ]
          }
        ]
      },
      {
        "text": "A skjuter på målvakten.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Kontring (hemjobb)",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Spring över planen utan boll. Hämta en boll, spring tillbaka i hög fart och skjut på mål."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 3.2,
        "y": 3
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 1.4,
        "y": 2.6
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "at": [
        34,
        4.4
      ]
    },
    "labels": [
      {
        "text": "A",
        "at": [
          4.6,
          1.6
        ]
      }
    ],
    "balls": [
      [
        34.8,
        3.4
      ],
      [
        35.2,
        4
      ],
      [
        34.7,
        4.6
      ]
    ],
    "steps": [
      {
        "text": "A springer över planen utan boll.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              33,
              3
            ]
          }
        ]
      },
      {
        "text": "A hämtar en boll och driver tillbaka i hög fart.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              24,
              9
            ],
            "to": [
              10,
              8
            ]
          }
        ]
      },
      {
        "text": "A skjuter på mål.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Passa & Skjut",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Två led på varsin sida av mål. Spring upp runt kona, få pass från andra ledet, skjut. Byt håll."
      ]
    ],
    "entities": {
      "X1": {
        "type": "cone",
        "x": 11.5,
        "y": 4
      },
      "X2": {
        "type": "cone",
        "x": 11.5,
        "y": 16
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 5,
        "y": 3
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 3.5,
        "y": 2.4
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 5,
        "y": 17
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 3.5,
        "y": 17.6
      },
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      }
    },
    "ball": {
      "holder": "B"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          6.4,
          1.6
        ]
      },
      {
        "text": "B",
        "at": [
          6.4,
          18.4
        ]
      }
    ],
    "balls": [
      [
        2.2,
        3.6
      ],
      [
        1.8,
        4.1
      ],
      [
        2.4,
        4.4
      ],
      [
        2.2,
        16.4
      ],
      [
        1.8,
        15.9
      ],
      [
        2.4,
        15.6
      ]
    ],
    "steps": [
      {
        "text": "A springer upp mot konan.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              10,
              2.8
            ]
          }
        ]
      },
      {
        "text": "A rundar konan och vänder in mot mål.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "via": [
              16.5,
              3.5
            ],
            "to": [
              11,
              6.5
            ]
          }
        ]
      },
      {
        "text": "B passar A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              9.5,
              7.8
            ]
          }
        ]
      },
      {
        "text": "A skjuter.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Kvadraten",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "En spelare i mitten och en spelare på varje sida. Spela runt jagaren."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 8,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 14
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 10
      },
      "Dd": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 6
      },
      "J": {
        "type": "player",
        "team": "away",
        "x": 12,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "Jagare",
        "at": [
          10.7,
          10
        ]
      }
    ],
    "lines": [
      {
        "from": [
          8,
          6
        ],
        "to": [
          8,
          14
        ]
      },
      {
        "from": [
          16,
          6
        ],
        "to": [
          16,
          14
        ]
      },
      {
        "from": [
          8,
          6
        ],
        "to": [
          16,
          6
        ]
      },
      {
        "from": [
          8,
          14
        ],
        "to": [
          16,
          14
        ]
      }
    ],
    "steps": [
      {
        "text": "Bollen spelas runt jagaren. Jagaren går mot bollen.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          },
          {
            "type": "run",
            "who": "J",
            "to": [
              11.5,
              11.2
            ]
          }
        ]
      },
      {
        "text": "Nästa passning runt jagaren.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "C"
          },
          {
            "type": "run",
            "who": "J",
            "to": [
              13,
              11.2
            ]
          }
        ]
      },
      {
        "text": "Bollen spelas vidare runt.",
        "actions": [
          {
            "type": "pass",
            "from": "C",
            "to": "Dd"
          },
          {
            "type": "run",
            "who": "J",
            "to": [
              13,
              9
            ]
          }
        ]
      },
      {
        "text": "Och tillbaka till start.",
        "actions": [
          {
            "type": "pass",
            "from": "Dd",
            "to": "A"
          },
          {
            "type": "run",
            "who": "J",
            "to": [
              11,
              9
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "2 mot 2",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spel på liten yta. Fokus på att hålla boll eller väggspel."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 13.5
      },
      "c": {
        "type": "player",
        "team": "away",
        "x": 14.3,
        "y": 6.8
      },
      "d": {
        "type": "player",
        "team": "away",
        "x": 11,
        "y": 12.5
      }
    },
    "ball": {
      "holder": "A"
    },
    "lines": [
      {
        "from": [
          8,
          3
        ],
        "to": [
          8,
          17
        ]
      },
      {
        "from": [
          18,
          3
        ],
        "to": [
          18,
          17
        ]
      },
      {
        "from": [
          8,
          3
        ],
        "to": [
          18,
          3
        ]
      },
      {
        "from": [
          8,
          17
        ],
        "to": [
          18,
          17
        ]
      }
    ],
    "steps": [
      {
        "text": "2 mot 2 på liten yta.",
        "actions": []
      }
    ]
  },
  {
    "name": "3 mot 3",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Spel utan mål. fem passningar inom lag räknas som mål"
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 7,
        "y": 5
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 9
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 15
      },
      "d": {
        "type": "player",
        "team": "away",
        "x": 11,
        "y": 4
      },
      "e": {
        "type": "player",
        "team": "away",
        "x": 6,
        "y": 11
      },
      "f": {
        "type": "player",
        "team": "away",
        "x": 14,
        "y": 14
      },
      "G": {
        "type": "player",
        "team": "home",
        "x": 26,
        "y": 5
      },
      "H": {
        "type": "player",
        "team": "home",
        "x": 32,
        "y": 10
      },
      "I": {
        "type": "player",
        "team": "home",
        "x": 28,
        "y": 15
      },
      "j": {
        "type": "player",
        "team": "away",
        "x": 30,
        "y": 4.5
      },
      "k": {
        "type": "player",
        "team": "away",
        "x": 25,
        "y": 11
      },
      "l": {
        "type": "player",
        "team": "away",
        "x": 33,
        "y": 15
      }
    },
    "ball": {
      "holder": "A"
    },
    "lines": [
      {
        "from": [
          20,
          0
        ],
        "to": [
          20,
          20
        ]
      }
    ],
    "steps": [
      {
        "text": "Två små planer på bredden. 3 mot 3 på varje.",
        "actions": []
      }
    ],
    "balls": [
      [
        26.8,
        5.6
      ]
    ],
    "labels": [
      {
        "text": "Plan 1",
        "at": [
          18.6,
          3
        ]
      },
      {
        "text": "Plan 2",
        "at": [
          21.4,
          3
        ]
      }
    ]
  },
  {
    "name": "Match 3 mot 3 med målvakt",
    "category": "Station",
    "levels": [
      "gron"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Match 3 mot 3 med målvakt."
      ]
    ],
    "entities": {
      "G1": {
        "type": "goalie",
        "team": "away",
        "x": 4.2,
        "y": 10
      },
      "G2": {
        "type": "goalie",
        "team": "away",
        "x": 35.8,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 24,
        "y": 4
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 22,
        "y": 15
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 27,
        "y": 10
      },
      "d": {
        "type": "player",
        "team": "away",
        "x": 18,
        "y": 6
      },
      "e": {
        "type": "player",
        "team": "away",
        "x": 16,
        "y": 13
      },
      "f": {
        "type": "player",
        "team": "away",
        "x": 11,
        "y": 9
      }
    },
    "ball": {
      "holder": "C"
    },
    "steps": [
      {
        "text": "Match 3 mot 3 med målvakt.",
        "actions": []
      }
    ]
  },
  {
    "name": "Växla (Redo-position)",
    "category": "Småövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spelare dribblar stillastående. Tränaren visar fingrar -> spelarna ropar siffran (blicken upp)."
      ]
    ],
    "entities": {
      "T": {
        "type": "player",
        "team": "third",
        "x": 8.5,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 4
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 8
      },
      "Cc": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 12
      },
      "Dd": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 16
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "Tränare",
        "at": [
          8.5,
          12.4
        ]
      }
    ],
    "balls": [
      [
        14.5,
        8.6
      ],
      [
        14.5,
        12.6
      ],
      [
        14.5,
        16.6
      ]
    ],
    "steps": [
      {
        "text": "Spelarna dribblar stillastående. Tränaren visar fingrar och spelarna ropar siffran med blicken upp.",
        "actions": []
      }
    ]
  },
  {
    "name": "Skott (över bänk)",
    "category": "Småövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "gör konbana, avsluta med dragskott över bänk. fokus dragskott"
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 16,
        "y": 10
      },
      "K2": {
        "type": "cone",
        "x": 14,
        "y": 10
      },
      "K3": {
        "type": "cone",
        "x": 12,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 18,
        "y": 10
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19.4,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          18,
          8.6
        ]
      },
      {
        "text": "Bänk",
        "at": [
          8.5,
          14.2
        ]
      }
    ],
    "balls": [
      [
        19.4,
        11.6
      ],
      [
        19,
        12
      ]
    ],
    "lines": [
      {
        "from": [
          8.5,
          7.5
        ],
        "to": [
          8.5,
          12.5
        ]
      }
    ],
    "steps": [
      {
        "text": "A dribblar genom konbanan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              16,
              7.4
            ],
            "to": [
              15,
              10
            ]
          }
        ]
      },
      {
        "text": "A fortsätter slalom mellan konerna.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              14,
              12.6
            ],
            "to": [
              13,
              10
            ]
          }
        ]
      },
      {
        "text": "A rundar sista konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              12,
              7.4
            ],
            "to": [
              10.5,
              10
            ]
          }
        ]
      },
      {
        "text": "A avslutar med dragskott över bänken.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Bågen",
    "category": "Småövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Driv på utsidan av koner, täck boll, skjut dragskott i steget."
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 14.5,
        "y": 6
      },
      "K2": {
        "type": "cone",
        "x": 12,
        "y": 6.6
      },
      "K3": {
        "type": "cone",
        "x": 10,
        "y": 8
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 17.4,
        "y": 4.5
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19,
        "y": 4.5
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          17.4,
          6
        ]
      }
    ],
    "balls": [
      [
        19.2,
        2.9
      ],
      [
        18.7,
        2.6
      ]
    ],
    "steps": [
      {
        "text": "A driver bollen på utsidan av konerna.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              13,
              4
            ],
            "to": [
              11,
              5.2
            ]
          }
        ]
      },
      {
        "text": "A följer bågen och täcker bollen.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              9,
              6
            ],
            "to": [
              8.8,
              8.2
            ]
          }
        ]
      },
      {
        "text": "A skjuter dragskott i steget.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Fyrkanten",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Passa runt i fyrkant. Ta emot, titta upp, passa. \nom tid finns -> passa i nummerordning (dela ut siffror)"
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 7.5,
        "y": 6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 7.5,
        "y": 14
      },
      "Cc": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 14
      },
      "Dd": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 6
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          6.3,
          4.8
        ]
      },
      {
        "text": "B",
        "at": [
          6.3,
          15.2
        ]
      },
      {
        "text": "C",
        "at": [
          16.7,
          15.2
        ]
      },
      {
        "text": "D",
        "at": [
          16.7,
          4.8
        ]
      }
    ],
    "steps": [
      {
        "text": "A passar B.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "B tar emot, tittar upp och passar C.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "Cc"
          }
        ]
      },
      {
        "text": "C tar emot, tittar upp och passar D.",
        "actions": [
          {
            "type": "pass",
            "from": "Cc",
            "to": "Dd"
          }
        ]
      },
      {
        "text": "D tar emot, tittar upp och passar A.",
        "actions": [
          {
            "type": "pass",
            "from": "Dd",
            "to": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Teknik – Svep passningar",
    "category": "Småövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Två och två sveppass med mottagning stillastående."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          11,
          8.6
        ]
      },
      {
        "text": "B",
        "at": [
          15,
          8.6
        ]
      }
    ],
    "steps": [
      {
        "text": "A sveppassar till B.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "B tar emot stillastående och sveppassar tillbaka till A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Snabba avslut",
    "category": "Småövning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spelare står med ryggen mot mål. Får pass, vänder snabbt och skjuter."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 10,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 10
      }
    },
    "ball": {
      "holder": "B"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          10,
          8.6
        ]
      },
      {
        "text": "B",
        "at": [
          16,
          8.6
        ]
      }
    ],
    "balls": [
      [
        16.9,
        11.4
      ],
      [
        17.3,
        11
      ]
    ],
    "steps": [
      {
        "text": "A står med ryggen mot mål. B passar A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      },
      {
        "text": "A vänder snabbt och skjuter.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Direktskott",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Ta emot pass och skjut direkt."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 10.5,
        "y": 8
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12.5,
        "y": 15.5
      }
    },
    "ball": {
      "holder": "B"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          10.5,
          6.6
        ]
      },
      {
        "text": "B",
        "at": [
          12.5,
          16.9
        ]
      }
    ],
    "balls": [
      [
        13.6,
        16.6
      ],
      [
        14,
        16.2
      ]
    ],
    "steps": [
      {
        "text": "B passar A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      },
      {
        "text": "A skjuter direkt.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Skydda målet / Boxen",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "2 försvarare mot 4 anfallare. Försvararna ska hålla sig mellan boll och mål."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 5
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 15
      },
      "Cc": {
        "type": "player",
        "team": "home",
        "x": 7.5,
        "y": 3.5
      },
      "Dd": {
        "type": "player",
        "team": "home",
        "x": 7.5,
        "y": 16.5
      },
      "E": {
        "type": "player",
        "team": "away",
        "x": 9.5,
        "y": 7.2
      },
      "F": {
        "type": "player",
        "team": "away",
        "x": 10,
        "y": 10.8
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          14.4,
          4
        ]
      },
      {
        "text": "B",
        "at": [
          14.4,
          16
        ]
      },
      {
        "text": "C",
        "at": [
          6.3,
          2.4
        ]
      },
      {
        "text": "D",
        "at": [
          6.3,
          17.6
        ]
      }
    ],
    "steps": [
      {
        "text": "A passar B. Försvararna flyttar sig mellan boll och mål.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          },
          {
            "type": "run",
            "who": "E",
            "to": [
              10,
              9
            ]
          },
          {
            "type": "run",
            "who": "F",
            "to": [
              9.5,
              12.4
            ]
          }
        ]
      },
      {
        "text": "B passar D. Försvararna flyttar med.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "Dd"
          },
          {
            "type": "run",
            "who": "E",
            "to": [
              8.5,
              10.2
            ]
          },
          {
            "type": "run",
            "who": "F",
            "to": [
              7,
              13.6
            ]
          }
        ]
      },
      {
        "text": "D passar tillbaka till B. Försvararna flyttar med.",
        "actions": [
          {
            "type": "pass",
            "from": "Dd",
            "to": "B"
          },
          {
            "type": "run",
            "who": "E",
            "to": [
              10,
              9
            ]
          },
          {
            "type": "run",
            "who": "F",
            "to": [
              9.5,
              12.4
            ]
          }
        ]
      },
      {
        "text": "B passar A. Försvararna flyttar tillbaka.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          },
          {
            "type": "run",
            "who": "E",
            "to": [
              9.5,
              7.2
            ]
          },
          {
            "type": "run",
            "who": "F",
            "to": [
              10,
              10.8
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Hinderbana",
    "category": "Uppvärmning",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Blandade moment (hoppa, krypa, dribbla)."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 18.6,
        "y": 4
      },
      "K1": {
        "type": "cone",
        "x": 10,
        "y": 4
      },
      "K2": {
        "type": "cone",
        "x": 8,
        "y": 4
      },
      "K3": {
        "type": "cone",
        "x": 6,
        "y": 4
      }
    },
    "ball": {
      "at": [
        11.9,
        4.6
      ]
    },
    "labels": [
      {
        "text": "A",
        "at": [
          18.6,
          5.4
        ]
      },
      {
        "text": "Hoppa",
        "at": [
          16.6,
          6.6
        ]
      },
      {
        "text": "Krypa",
        "at": [
          13.8,
          6.6
        ]
      },
      {
        "text": "Dribbla",
        "at": [
          8,
          7.4
        ]
      }
    ],
    "lines": [
      {
        "from": [
          16.6,
          3
        ],
        "to": [
          16.6,
          5
        ]
      },
      {
        "from": [
          13.8,
          3
        ],
        "to": [
          13.8,
          5
        ]
      }
    ],
    "steps": [
      {
        "text": "A hoppar över hindret.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              15,
              4
            ]
          }
        ]
      },
      {
        "text": "A kryper under hindret.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              12.2,
              4
            ]
          }
        ]
      },
      {
        "text": "A tar bollen och dribblar runt första konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              10,
              1.4
            ],
            "to": [
              9,
              4
            ]
          }
        ]
      },
      {
        "text": "A dribblar runt andra konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              8,
              6.6
            ],
            "to": [
              7,
              4
            ]
          }
        ]
      },
      {
        "text": "A dribblar runt sista konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              6,
              1.4
            ],
            "to": [
              4.8,
              4
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Dribbling med avslut",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Dribbla genom konbana och avsluta på mål."
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 16,
        "y": 5
      },
      "K2": {
        "type": "cone",
        "x": 14,
        "y": 5
      },
      "K3": {
        "type": "cone",
        "x": 12,
        "y": 5
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 18,
        "y": 5
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19.4,
        "y": 5
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          18,
          3.6
        ]
      }
    ],
    "balls": [
      [
        19.4,
        6.6
      ],
      [
        19,
        7
      ]
    ],
    "steps": [
      {
        "text": "A dribblar genom konbanan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              16,
              2.4
            ],
            "to": [
              15,
              5
            ]
          }
        ]
      },
      {
        "text": "A fortsätter slalom mellan konerna.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              14,
              7.6
            ],
            "to": [
              13,
              5
            ]
          }
        ]
      },
      {
        "text": "A rundar sista konan och driver mot mål.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              11.6,
              3
            ],
            "to": [
              10,
              7.5
            ]
          }
        ]
      },
      {
        "text": "A avslutar på mål.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Runda kona och passa",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Driv bollen upp runt konan, runda och passa till kompisen först i kön."
      ]
    ],
    "entities": {
      "K": {
        "type": "cone",
        "x": 9,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 10
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          16,
          8.6
        ]
      },
      {
        "text": "B",
        "at": [
          17.5,
          11.4
        ]
      }
    ],
    "balls": [
      [
        19.2,
        8.4
      ],
      [
        18.8,
        8
      ]
    ],
    "steps": [
      {
        "text": "A driver bollen upp mot konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              10.6,
              10.8
            ]
          }
        ]
      },
      {
        "text": "A rundar konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              5.8,
              10
            ],
            "to": [
              10.6,
              9.2
            ]
          }
        ]
      },
      {
        "text": "A passar B, som är först i kön.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Teknikbana med pass",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Dribbla bana, passa kompisen på andra sidan, spring över."
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 12,
        "y": 5.5
      },
      "K2": {
        "type": "cone",
        "x": 12,
        "y": 8
      },
      "K3": {
        "type": "cone",
        "x": 12,
        "y": 10.5
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 2.4
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 12,
        "y": 1
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 17.6
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 12,
        "y": 19
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          13.4,
          2.4
        ]
      },
      {
        "text": "B",
        "at": [
          10.6,
          17.6
        ]
      }
    ],
    "balls": [
      [
        13.3,
        0.8
      ],
      [
        13.7,
        1.2
      ]
    ],
    "steps": [
      {
        "text": "A dribblar banan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              9.4,
              5.5
            ],
            "to": [
              12,
              6.8
            ]
          }
        ]
      },
      {
        "text": "A fortsätter slalom.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              14.6,
              8
            ],
            "to": [
              12,
              9.3
            ]
          }
        ]
      },
      {
        "text": "A rundar sista konan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              9.4,
              10.5
            ],
            "to": [
              12,
              11.8
            ]
          }
        ]
      },
      {
        "text": "A passar B på andra sidan.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "A springer över till andra sidan.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              14.4,
              18.6
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Sifferboll",
    "category": "Station",
    "levels": [
      "gron",
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "Tränaren ropar siffra (t.ex. \"två\") -> så många hoppar in och spelar match."
      ]
    ],
    "entities": {
      "H1": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 1.4
      },
      "H2": {
        "type": "player",
        "team": "home",
        "x": 18,
        "y": 1.4
      },
      "h3": {
        "type": "player",
        "team": "home",
        "x": 20,
        "y": 1.4
      },
      "h4": {
        "type": "player",
        "team": "home",
        "x": 22,
        "y": 1.4
      },
      "h5": {
        "type": "player",
        "team": "home",
        "x": 24,
        "y": 1.4
      },
      "R1": {
        "type": "player",
        "team": "away",
        "x": 16,
        "y": 18.6
      },
      "R2": {
        "type": "player",
        "team": "away",
        "x": 18,
        "y": 18.6
      },
      "r3": {
        "type": "player",
        "team": "away",
        "x": 20,
        "y": 18.6
      },
      "r4": {
        "type": "player",
        "team": "away",
        "x": 22,
        "y": 18.6
      },
      "r5": {
        "type": "player",
        "team": "away",
        "x": 24,
        "y": 18.6
      }
    },
    "ball": {
      "at": [
        20,
        10
      ]
    },
    "labels": [
      {
        "text": "Bänk",
        "at": [
          11.8,
          1.4
        ]
      },
      {
        "text": "Bänk",
        "at": [
          11.8,
          18.6
        ]
      }
    ],
    "lines": [
      {
        "from": [
          14,
          0.4
        ],
        "to": [
          26,
          0.4
        ]
      },
      {
        "from": [
          14,
          19.6
        ],
        "to": [
          26,
          19.6
        ]
      }
    ],
    "steps": [
      {
        "text": "Tränaren ropar en siffra. Så många från varje lag springer in och spelar.",
        "actions": []
      }
    ]
  },
  {
    "name": "Dansstopp med boll",
    "category": "Uppvärmning",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Dansstopp med boll. Alla dribblar fritt till musiken. När musiken stoppar: dribbla på stället, få upp bollen på bladet eller gör skridskohopp."
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "S0": {
        "type": "player",
        "team": "home",
        "x": 6,
        "y": 4
      },
      "S1": {
        "type": "player",
        "team": "home",
        "x": 7,
        "y": 13
      },
      "S2": {
        "type": "player",
        "team": "home",
        "x": 9.5,
        "y": 8.5
      },
      "S3": {
        "type": "player",
        "team": "home",
        "x": 11,
        "y": 16.5
      },
      "S4": {
        "type": "player",
        "team": "home",
        "x": 12.5,
        "y": 3
      },
      "S5": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 11
      },
      "S6": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 6.5
      },
      "S7": {
        "type": "player",
        "team": "home",
        "x": 16.5,
        "y": 15
      },
      "S8": {
        "type": "player",
        "team": "home",
        "x": 18,
        "y": 10
      }
    },
    "ball": {
      "holder": "S0"
    },
    "balls": [
      [
        7.38,
        13.45
      ],
      [
        9.88,
        8.95
      ],
      [
        11.38,
        16.95
      ],
      [
        12.88,
        3.45
      ],
      [
        14.38,
        11.45
      ],
      [
        16.38,
        6.95
      ],
      [
        16.88,
        15.45
      ],
      [
        18.38,
        10.45
      ]
    ],
    "steps": [
      {
        "text": "Alla dribblar fritt till musiken. Vid stopp: dribbla på stället, få upp bollen eller skridskohopp.",
        "actions": []
      }
    ]
  },
  {
    "name": "Fyskull",
    "category": "Uppvärmning",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Kull där den som blir tagen gör ett fysmoment: utfall, jämfotahopp eller situps. Sedan är man med igen."
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "S0": {
        "type": "player",
        "team": "home",
        "x": 6,
        "y": 4
      },
      "S1": {
        "type": "player",
        "team": "home",
        "x": 7,
        "y": 15
      },
      "S2": {
        "type": "player",
        "team": "home",
        "x": 9.5,
        "y": 9
      },
      "S3": {
        "type": "player",
        "team": "home",
        "x": 11.5,
        "y": 2.5
      },
      "S4": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 17
      },
      "S5": {
        "type": "player",
        "team": "home",
        "x": 15.5,
        "y": 6
      },
      "S6": {
        "type": "player",
        "team": "home",
        "x": 16.5,
        "y": 13.5
      },
      "S7": {
        "type": "player",
        "team": "home",
        "x": 18,
        "y": 9
      },
      "T": {
        "type": "player",
        "team": "away",
        "x": 12,
        "y": 10
      }
    },
    "labels": [
      {
        "text": "Tagare",
        "at": [
          13.4,
          10
        ]
      }
    ],
    "steps": [
      {
        "text": "Tagaren jagar. Den som blir tagen gör utfall, jämfotahopp eller situps och är sedan med igen.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Fys följa John",
    "category": "Uppvärmning",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Följa John med fysmoment. Ledaren springer och gör fysmoment, resten följer efter och gör likadant."
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "J": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 3
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 17.4,
        "y": 3
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 18.8,
        "y": 3
      }
    },
    "labels": [
      {
        "text": "Ledare",
        "at": [
          16,
          5
        ]
      },
      {
        "text": "B",
        "at": [
          17.4,
          1.6
        ]
      },
      {
        "text": "C",
        "at": [
          18.8,
          1.6
        ]
      }
    ],
    "steps": [
      {
        "text": "Ledaren springer upp längs sargen. B och C följer efter.",
        "actions": [
          {
            "type": "run",
            "who": "J",
            "to": [
              10,
              3
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              11.4,
              3
            ]
          },
          {
            "type": "run",
            "who": "C",
            "to": [
              12.8,
              3
            ]
          }
        ]
      },
      {
        "text": "Ledaren svänger över planen och gör ett fysmoment. Alla gör likadant.",
        "actions": [
          {
            "type": "run",
            "who": "J",
            "to": [
              10,
              15
            ]
          },
          {
            "type": "run",
            "who": "B",
            "via": [
              10,
              3
            ],
            "to": [
              10,
              13.6
            ]
          },
          {
            "type": "run",
            "who": "C",
            "via": [
              10,
              3
            ],
            "to": [
              10,
              12.2
            ]
          }
        ]
      },
      {
        "text": "Ledaren springer tillbaka. Byt ledare då och då.",
        "actions": [
          {
            "type": "run",
            "who": "J",
            "to": [
              16,
              15
            ]
          },
          {
            "type": "run",
            "who": "B",
            "via": [
              10,
              15
            ],
            "to": [
              14.6,
              15
            ]
          },
          {
            "type": "run",
            "who": "C",
            "via": [
              10,
              15
            ],
            "to": [
              13.2,
              15
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Reaktion på signal",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Ligg ned med klubba och boll. Vid signal: upp och dribbla till andra sidan.\nVariant: ligg utan boll och klubba."
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 8.5,
        "y": 2
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 11.5,
        "y": 2
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 14.5,
        "y": 2
      },
      "Dd": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 2
      }
    },
    "ball": {
      "holder": "A"
    },
    "balls": [
      [
        11.88,
        2.45
      ],
      [
        14.88,
        2.45
      ],
      [
        17.88,
        2.45
      ]
    ],
    "labels": [
      {
        "text": "A",
        "at": [
          7.3,
          2
        ]
      },
      {
        "text": "B",
        "at": [
          10.3,
          2
        ]
      },
      {
        "text": "C",
        "at": [
          13.3,
          2
        ]
      },
      {
        "text": "D",
        "at": [
          16.3,
          2
        ]
      }
    ],
    "steps": [
      {
        "text": "A, B, C och D ligger ned med klubba och boll längs sargen.",
        "actions": []
      },
      {
        "text": "Vid signal: alla reser sig och dribblar till andra sidan (här visas A).",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              8.5,
              18
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Kvadrat",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Alla driver boll i en fyrkant. Försök slå bort de andras bollar och håll samtidigt kontroll på din egen."
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 7,
        "y": 5
      },
      "K2": {
        "type": "cone",
        "x": 7,
        "y": 15
      },
      "K3": {
        "type": "cone",
        "x": 17,
        "y": 5
      },
      "K4": {
        "type": "cone",
        "x": 17,
        "y": 15
      },
      "S0": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 7
      },
      "S1": {
        "type": "player",
        "team": "home",
        "x": 9.5,
        "y": 12.5
      },
      "S2": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 9.5
      },
      "S3": {
        "type": "player",
        "team": "home",
        "x": 14.5,
        "y": 6.5
      },
      "S4": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 12.5
      },
      "S5": {
        "type": "player",
        "team": "home",
        "x": 11.5,
        "y": 14
      }
    },
    "ball": {
      "holder": "S0"
    },
    "balls": [
      [
        9.88,
        12.95
      ],
      [
        12.38,
        9.95
      ],
      [
        14.88,
        6.95
      ],
      [
        15.38,
        12.95
      ],
      [
        11.88,
        14.45
      ]
    ],
    "lines": [
      {
        "from": [
          7,
          5
        ],
        "to": [
          7,
          15
        ]
      },
      {
        "from": [
          17,
          5
        ],
        "to": [
          17,
          15
        ]
      },
      {
        "from": [
          7,
          5
        ],
        "to": [
          17,
          5
        ]
      },
      {
        "from": [
          7,
          15
        ],
        "to": [
          17,
          15
        ]
      }
    ],
    "steps": [
      {
        "text": "Alla driver boll i fyrkanten, slår bort de andras bollar och skyddar sin egen.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Passa via sarg 2 och 2",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Två och två. Passa till varandra via sargen."
      ]
    ],
    "view": [
      0,
      20
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 7,
        "y": 4
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 4
      },
      "S": {
        "type": "cone",
        "x": 10,
        "y": 0.5
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 16
      },
      "Dd": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 16
      }
    },
    "ball": {
      "holder": "A"
    },
    "balls": [
      [
        9.38,
        16.45
      ]
    ],
    "labels": [
      {
        "text": "A",
        "at": [
          7,
          5.4
        ]
      },
      {
        "text": "B",
        "at": [
          13,
          5.4
        ]
      },
      {
        "text": "C",
        "at": [
          9,
          14.6
        ]
      },
      {
        "text": "D",
        "at": [
          15,
          14.6
        ]
      }
    ],
    "steps": [
      {
        "text": "A spelar bollen i sargen vid konan.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "S"
          }
        ]
      },
      {
        "text": "Bollen studsar ut till B.",
        "actions": [
          {
            "type": "pass",
            "from": "S",
            "to": "B"
          }
        ]
      },
      {
        "text": "B spelar tillbaka mot sargen.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "S"
          }
        ]
      },
      {
        "text": "Bollen studsar till A. C och D gör samma sak på andra sidan.",
        "actions": [
          {
            "type": "pass",
            "from": "S",
            "to": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Skjut och vänd hem",
    "category": "Småövning",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Ett led på mitten. Första spelaren springer med boll och skjuter, rushar sedan hem och ställer sig sist i ledet."
      ]
    ],
    "view": [
      0,
      24
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 18.4,
        "y": 10
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 19.6,
        "y": 10
      },
      "a2": {
        "type": "player",
        "team": "queue",
        "x": 20.8,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          18.4,
          8.6
        ]
      }
    ],
    "balls": [
      [
        19.98,
        10.45
      ],
      [
        21.18,
        10.45
      ]
    ],
    "steps": [
      {
        "text": "A driver bollen mot mål.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              9,
              10
            ]
          }
        ]
      },
      {
        "text": "A skjuter.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      },
      {
        "text": "A rushar hem och ställer sig sist i ledet.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "via": [
              12,
              15
            ],
            "to": [
              22,
              10
            ]
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Uppspelsövning",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Målvakten rullar ut bollen till backen vid målgården. Backen passar via sargen till anfallaren, som springer och skjuter. Sedan byter de köer. Spegelvänt på båda halvorna."
      ]
    ],
    "view": [
      0,
      40
    ],
    "entities": {
      "G": {
        "type": "goalie",
        "team": "away",
        "x": 3.9,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 7.4,
        "y": 5.6
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 8.4,
        "y": 4.6
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 1.6
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 11.8,
        "y": 1.2
      },
      "S": {
        "type": "cone",
        "x": 16,
        "y": 0.5
      },
      "G2": {
        "type": "goalie",
        "team": "away",
        "x": 36.1,
        "y": 10
      },
      "B2": {
        "type": "player",
        "team": "home",
        "x": 32.6,
        "y": 14.4
      },
      "b2": {
        "type": "player",
        "team": "queue",
        "x": 31.6,
        "y": 15.4
      },
      "A2": {
        "type": "player",
        "team": "home",
        "x": 27,
        "y": 18.4
      },
      "a3": {
        "type": "player",
        "team": "queue",
        "x": 28.2,
        "y": 18.8
      },
      "S2": {
        "type": "cone",
        "x": 24,
        "y": 19.5
      }
    },
    "ball": {
      "holder": "G"
    },
    "balls": [
      [
        1.5,
        8.6
      ],
      [
        1.2,
        9.2
      ],
      [
        38.5,
        11.4
      ],
      [
        38.8,
        10.8
      ]
    ],
    "labels": [
      {
        "text": "B",
        "at": [
          7.4,
          7
        ]
      },
      {
        "text": "A",
        "at": [
          13,
          3
        ]
      },
      {
        "text": "B",
        "at": [
          32.6,
          13
        ]
      },
      {
        "text": "A",
        "at": [
          27,
          17
        ]
      },
      {
        "text": "Spegelvänt",
        "at": [
          24,
          15.5
        ]
      }
    ],
    "steps": [
      {
        "text": "MV rullar ut bollen till B vid målgården.",
        "actions": [
          {
            "type": "pass",
            "from": "G",
            "to": "B"
          }
        ]
      },
      {
        "text": "A springer upp längs sargen. B spelar bollen i sargen.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              21,
              2.5
            ]
          },
          {
            "type": "pass",
            "from": "B",
            "to": "S"
          }
        ]
      },
      {
        "text": "Bollen studsar fram till A.",
        "actions": [
          {
            "type": "pass",
            "from": "S",
            "to": "A"
          },
          {
            "type": "run",
            "who": "A",
            "to": [
              24,
              3.5
            ]
          }
        ]
      },
      {
        "text": "A driver mot mål.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              30,
              7.5
            ]
          }
        ]
      },
      {
        "text": "A skjuter. Sedan byter A och B köer. Andra halvan gör samma sak spegelvänt.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Jakt",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "info": [
      [
        "Anvisningar",
        "Två led i ett hörn. Första spelaren startar med boll mot bortre målet, strax efter startar jagaren. Spegelvänt på båda halvorna."
      ]
    ],
    "view": [
      0,
      40
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 5,
        "y": 1.6
      },
      "a": {
        "type": "player",
        "team": "queue",
        "x": 3.8,
        "y": 1.2
      },
      "B": {
        "type": "player",
        "team": "away",
        "x": 5,
        "y": 4.2
      },
      "b": {
        "type": "player",
        "team": "queue",
        "x": 3.8,
        "y": 4.6
      },
      "A2": {
        "type": "player",
        "team": "home",
        "x": 35,
        "y": 18.4
      },
      "a2": {
        "type": "player",
        "team": "queue",
        "x": 36.2,
        "y": 18.8
      },
      "B2": {
        "type": "player",
        "team": "away",
        "x": 35,
        "y": 15.8
      },
      "b2": {
        "type": "player",
        "team": "queue",
        "x": 36.2,
        "y": 15.4
      }
    },
    "ball": {
      "holder": "A"
    },
    "balls": [
      [
        4.18,
        1.65
      ],
      [
        1.6,
        1.8
      ],
      [
        35.4,
        18.2
      ]
    ],
    "labels": [
      {
        "text": "A",
        "at": [
          6.4,
          1.2
        ]
      },
      {
        "text": "B",
        "at": [
          6.4,
          4.6
        ]
      },
      {
        "text": "A",
        "at": [
          33.6,
          18.8
        ]
      },
      {
        "text": "B",
        "at": [
          33.6,
          15.4
        ]
      },
      {
        "text": "Spegelvänt",
        "at": [
          31,
          17
        ]
      }
    ],
    "steps": [
      {
        "text": "A startar med boll mot bortre målet.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              14,
              3.5
            ]
          }
        ]
      },
      {
        "text": "Strax efter startar B och jagar A.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              29,
              8
            ]
          },
          {
            "type": "run",
            "who": "B",
            "to": [
              26,
              7
            ]
          }
        ]
      },
      {
        "text": "A skjuter innan B hinner ikapp. Andra hörnet gör samma sak spegelvänt.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Rygg mot rygg",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Stående eller sittande rygg mot rygg. Flytta en klubba från ena sidan till andra med överlämning."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 9.3
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10.7
      }
    },
    "steps": [
      {
        "text": "Stående eller sittande rygg mot rygg. Flytta en klubba från ena sidan till andra med överlämning.",
        "actions": []
      }
    ]
  },
  {
    "name": "Stepup mot bänk",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Kliv upp på bänken och ner igen, växla ben."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 11.8
      }
    },
    "lines": [
      {
        "from": [
          10,
          13.5
        ],
        "to": [
          14,
          13.5
        ]
      }
    ],
    "labels": [
      {
        "text": "Bänk",
        "at": [
          12,
          15
        ]
      }
    ],
    "steps": [
      {
        "text": "Kliv upp på bänken och ner igen, växla ben.",
        "actions": []
      }
    ]
  },
  {
    "name": "Knäböj",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Knäböj."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Knäböj.",
        "actions": []
      }
    ]
  },
  {
    "name": "Knäböj med bandyklubba",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Knäböj med bandyklubba."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Knäböj med bandyklubba.",
        "actions": []
      }
    ]
  },
  {
    "name": "Armhävningar mot bänk",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Armhävningar med händerna mot bänken."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 11.8
      }
    },
    "lines": [
      {
        "from": [
          10,
          13.5
        ],
        "to": [
          14,
          13.5
        ]
      }
    ],
    "labels": [
      {
        "text": "Bänk",
        "at": [
          12,
          15
        ]
      }
    ],
    "steps": [
      {
        "text": "Armhävningar med händerna mot bänken.",
        "actions": []
      }
    ]
  },
  {
    "name": "Planka",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Planka."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Planka.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Planka med Makarena",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Planka med Makarena."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Planka med Makarena.",
        "actions": []
      }
    ]
  },
  {
    "name": "Planka med rotationer",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Planka och rotera upp till sidoplanka åt varannat håll."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Planka och rotera upp till sidoplanka åt varannat håll.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Skridskohopp",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Hoppa från sida till sida som en skridskoåkare."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Hoppa från sida till sida som en skridskoåkare.",
        "actions": []
      }
    ]
  },
  {
    "name": "Jägarvila",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Sitt mot sargen med 90 grader i knäna."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 0.9
      }
    },
    "steps": [
      {
        "text": "Sitt mot sargen med 90 grader i knäna.",
        "actions": []
      }
    ]
  },
  {
    "name": "Draken",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Draken."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Draken.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Stå på ett ben och kör tumbrottning",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "I par: stå på ett ben och kör tumbrottning."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 8
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 12
      }
    },
    "steps": [
      {
        "text": "I par: stå på ett ben och kör tumbrottning.",
        "actions": []
      }
    ]
  },
  {
    "name": "Stå på ett ben och blunda",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Stå på ett ben och blunda."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Stå på ett ben och blunda.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Situps mot varandra",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Situps mot varandra, high-five i mitten."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 8
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 12
      }
    },
    "steps": [
      {
        "text": "Situps mot varandra, high-five i mitten.",
        "actions": []
      }
    ]
  },
  {
    "name": "Skidhopp med Valle",
    "category": "Fys",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Skidhopp med Valle."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 10
      }
    },
    "steps": [
      {
        "text": "Skidhopp med Valle.",
        "actions": []
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Dribbla runt koner",
    "category": "Uppvärmning",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Dribbla runt koner."
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 15,
        "y": 10
      },
      "K2": {
        "type": "cone",
        "x": 12.5,
        "y": 10
      },
      "K3": {
        "type": "cone",
        "x": 10,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 10
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          17.5,
          8.6
        ]
      }
    ],
    "balls": [
      [
        19.2,
        11.6
      ],
      [
        18.8,
        12
      ]
    ],
    "steps": [
      {
        "text": "A dribblar runt första konen.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              15,
              7.4
            ],
            "to": [
              13.75,
              10
            ]
          }
        ]
      },
      {
        "text": "A dribblar runt andra konen på andra sidan.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              12.5,
              12.6
            ],
            "to": [
              11.25,
              10
            ]
          }
        ]
      },
      {
        "text": "A rundar sista konen.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              10,
              7.4
            ],
            "to": [
              8.5,
              10
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Handledsskott och dragskott",
    "category": "Småövning",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Träna handledsskott och dragskott på mål."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 14,
        "y": 6
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 15.5,
        "y": 5.4
      },
      "q2": {
        "type": "player",
        "team": "queue",
        "x": 16.9,
        "y": 4.8
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          14,
          4.6
        ]
      }
    ],
    "balls": [
      [
        15.3,
        7
      ],
      [
        15.7,
        7.4
      ],
      [
        16.1,
        7
      ]
    ],
    "steps": [
      {
        "text": "A tar några steg med bollen mot mål.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              10.5,
              7.5
            ]
          }
        ]
      },
      {
        "text": "A skjuter handledsskott. Nästa varv dragskott.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Teknikbana fyrkant",
    "category": "Småövning",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Framåt, sidled, baklänges, sida, vända/spelvändning → framåt avslut. Snabba fötter och spelvändning."
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 17,
        "y": 6.5
      },
      "K2": {
        "type": "cone",
        "x": 12.5,
        "y": 6.5
      },
      "K3": {
        "type": "cone",
        "x": 12.5,
        "y": 13.5
      },
      "K4": {
        "type": "cone",
        "x": 17,
        "y": 13.5
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 18.4,
        "y": 7.6
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19.7,
        "y": 7.6
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          18.4,
          6.2
        ]
      }
    ],
    "balls": [
      [
        19.5,
        9.2
      ],
      [
        19.9,
        9.6
      ]
    ],
    "steps": [
      {
        "text": "A driver framåt till konen.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              12.5,
              7.6
            ]
          }
        ]
      },
      {
        "text": "A rör sig i sidled.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              12.5,
              12.4
            ]
          }
        ]
      },
      {
        "text": "A går baklänges.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              17,
              12.4
            ]
          }
        ]
      },
      {
        "text": "A går i sidled, gör en spelvändning och driver framåt.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "via": [
              17,
              5.5
            ],
            "to": [
              9,
              8.5
            ]
          }
        ]
      },
      {
        "text": "A avslutar på mål.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Teknikbana sicksack",
    "category": "Uppvärmning",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Sida till sida, skarpa vändningar."
      ]
    ],
    "entities": {
      "K1": {
        "type": "cone",
        "x": 16,
        "y": 6
      },
      "K2": {
        "type": "cone",
        "x": 13.5,
        "y": 14
      },
      "K3": {
        "type": "cone",
        "x": 11,
        "y": 6
      },
      "K4": {
        "type": "cone",
        "x": 8.5,
        "y": 14
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 18.5,
        "y": 10
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19.6,
        "y": 10.8
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          18.5,
          8.6
        ]
      }
    ],
    "balls": [
      [
        19.5,
        12.4
      ],
      [
        19.1,
        12.8
      ]
    ],
    "steps": [
      {
        "text": "A driver till första konen och vänder skarpt.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              16,
              7
            ]
          }
        ]
      },
      {
        "text": "A driver över till andra sidan och vänder.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              13.5,
              13
            ]
          }
        ]
      },
      {
        "text": "A vänder skarpt tillbaka.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              11,
              7
            ]
          }
        ]
      },
      {
        "text": "A driver till sista konen.",
        "actions": [
          {
            "type": "dribble",
            "who": "A",
            "to": [
              8.5,
              13
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Bredbent med rygg mot tränaren",
    "category": "Småövning",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spelaren står bredbent med ryggen mot tränaren. Tränaren passar mellan benen, spelaren reagerar fort och skjuter direkt."
      ]
    ],
    "entities": {
      "T": {
        "type": "player",
        "team": "third",
        "x": 16,
        "y": 10
      },
      "A": {
        "type": "player",
        "team": "home",
        "x": 11.5,
        "y": 10
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 12.5,
        "y": 14
      },
      "q2": {
        "type": "player",
        "team": "queue",
        "x": 13.8,
        "y": 14
      }
    },
    "ball": {
      "holder": "T"
    },
    "labels": [
      {
        "text": "Tränare",
        "at": [
          17.4,
          10
        ]
      },
      {
        "text": "A",
        "at": [
          11.5,
          8.6
        ]
      }
    ],
    "balls": [
      [
        16.6,
        8.2
      ],
      [
        17,
        7.8
      ]
    ],
    "steps": [
      {
        "text": "A står bredbent med ryggen mot tränaren. Tränaren passar mellan A:s ben.",
        "actions": [
          {
            "type": "pass",
            "from": "T",
            "to": "A"
          }
        ]
      },
      {
        "text": "A reagerar fort och skjuter direkt.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Flip över bänk",
    "category": "Småövning",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Flip (lyft bollen) över bänk åt varannat håll."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 10
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 15,
        "y": 10
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          9,
          8.6
        ]
      },
      {
        "text": "B",
        "at": [
          15,
          8.6
        ]
      },
      {
        "text": "Bänk",
        "at": [
          12,
          13.6
        ]
      }
    ],
    "lines": [
      {
        "from": [
          12,
          7.5
        ],
        "to": [
          12,
          12.5
        ]
      }
    ],
    "steps": [
      {
        "text": "A flippar bollen över bänken till B.",
        "actions": [
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "B flippar tillbaka över bänken till A.",
        "actions": [
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      }
    ]
  },
  {
    "name": "Direktskott i fart",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      20
    ],
    "info": [
      [
        "Anvisningar",
        "Spelaren kommer i fart, får pass och skjuter direkt."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 17.5,
        "y": 4
      },
      "q": {
        "type": "player",
        "team": "queue",
        "x": 19,
        "y": 3.6
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 12,
        "y": 15.5
      }
    },
    "ball": {
      "holder": "B"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          17.5,
          2.6
        ]
      },
      {
        "text": "B",
        "at": [
          12,
          16.9
        ]
      }
    ],
    "balls": [
      [
        13.2,
        16.6
      ],
      [
        13.6,
        16.2
      ]
    ],
    "steps": [
      {
        "text": "A kommer i fart mot mål. B passar dit A är på väg.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              10.5,
              7.5
            ]
          },
          {
            "type": "pass",
            "from": "B",
            "to": "A"
          }
        ]
      },
      {
        "text": "A skjuter direkt.",
        "actions": [
          {
            "type": "shot",
            "who": "A"
          }
        ]
      }
    ],
    "ovrigt": true
  },
  {
    "name": "Trekanten",
    "category": "Station",
    "levels": [
      "bla"
    ],
    "view": [
      0,
      40
    ],
    "info": [
      [
        "Anvisningar",
        "3 och 3 passar med varandra i rörelse i en triangel. Utspridda över plan. Försvåra genom att minska och öka storleken på trekanten."
      ]
    ],
    "entities": {
      "A": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 5
      },
      "B": {
        "type": "player",
        "team": "home",
        "x": 16,
        "y": 11
      },
      "C": {
        "type": "player",
        "team": "home",
        "x": 20,
        "y": 8
      },
      "a1": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 13
      },
      "a2": {
        "type": "player",
        "team": "home",
        "x": 9,
        "y": 18
      },
      "a3": {
        "type": "player",
        "team": "home",
        "x": 13,
        "y": 15.5
      },
      "b1": {
        "type": "player",
        "team": "home",
        "x": 28,
        "y": 3
      },
      "b2": {
        "type": "player",
        "team": "home",
        "x": 28,
        "y": 8
      },
      "b3": {
        "type": "player",
        "team": "home",
        "x": 32,
        "y": 5.5
      },
      "c1": {
        "type": "player",
        "team": "home",
        "x": 27,
        "y": 13
      },
      "c2": {
        "type": "player",
        "team": "home",
        "x": 27,
        "y": 18
      },
      "c3": {
        "type": "player",
        "team": "home",
        "x": 31,
        "y": 15.5
      }
    },
    "ball": {
      "holder": "A"
    },
    "labels": [
      {
        "text": "A",
        "at": [
          14.6,
          5
        ]
      },
      {
        "text": "B",
        "at": [
          14.6,
          11
        ]
      },
      {
        "text": "C",
        "at": [
          20,
          9.4
        ]
      }
    ],
    "balls": [
      [
        13,
        14.4
      ],
      [
        28.9,
        6.6
      ],
      [
        31,
        14.4
      ]
    ],
    "steps": [
      {
        "text": "B rör sig framåt. A passar B.",
        "actions": [
          {
            "type": "run",
            "who": "B",
            "to": [
              20,
              13
            ]
          },
          {
            "type": "pass",
            "from": "A",
            "to": "B"
          }
        ]
      },
      {
        "text": "C rör sig framåt. B passar C.",
        "actions": [
          {
            "type": "run",
            "who": "C",
            "to": [
              24,
              8
            ]
          },
          {
            "type": "pass",
            "from": "B",
            "to": "C"
          }
        ]
      },
      {
        "text": "A rör sig framåt. C passar A.",
        "actions": [
          {
            "type": "run",
            "who": "A",
            "to": [
              21,
              4
            ]
          },
          {
            "type": "pass",
            "from": "C",
            "to": "A"
          }
        ]
      }
    ]
  }
];
