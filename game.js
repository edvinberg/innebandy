// Vårt spel per nivå ("gron", "bla"). Varje del har text och en skiss i samma format som övningarna.
// Vi anfaller uppåt. Eget mål är nere. Motståndarna står 2 bak och 2 fram.
window.GAME = {
  "gron": [
    {
      "title": "1 fram, 2 bak",
      "text": "Vi spelar med tre utespelare och en målvakt: en spelare fram och två bak.",
      "diagram": {
        "view": [
          0,
          40
        ],
        "entities": {
          "F": {
            "type": "player",
            "team": "home",
            "x": 20,
            "y": 10
          },
          "BV": {
            "type": "player",
            "team": "home",
            "x": 29,
            "y": 5.5
          },
          "BH": {
            "type": "player",
            "team": "home",
            "x": 29,
            "y": 14.5
          },
          "MV": {
            "type": "goalie",
            "team": "home",
            "x": 35.8,
            "y": 10
          }
        },
        "ball": {
          "holder": "BV"
        },
        "labels": [
          {
            "text": "Fram",
            "at": [
              21.4,
              10
            ]
          },
          {
            "text": "Bak",
            "at": [
              30.4,
              5.5
            ]
          },
          {
            "text": "Bak",
            "at": [
              30.4,
              14.5
            ]
          }
        ],
        "steps": [
          {
            "text": "Grunduppställning: 1 fram, 2 bak.",
            "actions": []
          }
        ]
      }
    }
  ],
  "bla": [
    {
      "title": "Diamanten",
      "text": "Vi spelar i diamant med fyra utespelare och en målvakt. Med en pointer längst bak tror vi att det blir enklare att bygga spel.\nPointern står längst bak, en kant på varje sida och centern högst upp.",
      "diagram": {
        "view": [
          0,
          40
        ],
        "entities": {
          "P": {
            "type": "player",
            "team": "home",
            "x": 31,
            "y": 10
          },
          "KV": {
            "type": "player",
            "team": "home",
            "x": 28,
            "y": 3.5
          },
          "KH": {
            "type": "player",
            "team": "home",
            "x": 28,
            "y": 16.5
          },
          "C": {
            "type": "player",
            "team": "home",
            "x": 20,
            "y": 10
          },
          "MV": {
            "type": "goalie",
            "team": "home",
            "x": 35.8,
            "y": 10
          }
        },
        "ball": {
          "holder": "P"
        },
        "labels": [
          {
            "text": "Pointer",
            "at": [
              31,
              13.4
            ]
          },
          {
            "text": "Kant",
            "at": [
              29.4,
              3.5
            ]
          },
          {
            "text": "Kant",
            "at": [
              29.4,
              16.5
            ]
          },
          {
            "text": "Center",
            "at": [
              21.4,
              10
            ]
          }
        ],
        "steps": [
          {
            "text": "Grunduppställning i diamant.",
            "actions": []
          }
        ]
      }
    },
    {
      "title": "Uppspel",
      "text": "Vårt uppspel är i första hand en passning från pointern till kanten.\nKanten passar tillbaka till pointern eller tar sig upp längs sidan till anfallszonen.",
      "diagram": {
        "view": [
          0,
          40
        ],
        "entities": {
          "P": {
            "type": "player",
            "team": "home",
            "x": 31,
            "y": 10
          },
          "KV": {
            "type": "player",
            "team": "home",
            "x": 28,
            "y": 3.5
          },
          "KH": {
            "type": "player",
            "team": "home",
            "x": 28,
            "y": 16.5
          },
          "C": {
            "type": "player",
            "team": "home",
            "x": 20,
            "y": 10
          },
          "MV": {
            "type": "goalie",
            "team": "home",
            "x": 35.8,
            "y": 10
          },
          "O1": {
            "type": "player",
            "team": "away",
            "x": 27,
            "y": 7
          },
          "O2": {
            "type": "player",
            "team": "away",
            "x": 27,
            "y": 13
          },
          "O3": {
            "type": "player",
            "team": "away",
            "x": 15,
            "y": 6.5
          },
          "O4": {
            "type": "player",
            "team": "away",
            "x": 15,
            "y": 13.5
          }
        },
        "ball": {
          "holder": "P"
        },
        "steps": [
          {
            "text": "Pointern passar till kanten.",
            "actions": [
              {
                "type": "pass",
                "from": "P",
                "to": "KV"
              },
              {
                "type": "run",
                "who": "O1",
                "to": [
                  26.5,
                  5
                ]
              },
              {
                "type": "run",
                "who": "O3",
                "to": [
                  15.5,
                  4.5
                ]
              }
            ]
          },
          {
            "text": "Kanten tar sig upp längs sidan mot anfallszonen. Är vägen stängd passar kanten tillbaka till pointern.",
            "actions": [
              {
                "type": "dribble",
                "who": "KV",
                "to": [
                  17,
                  2.5
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "title": "Tomrummet i mitten",
      "text": "När passningen från pointern till kanten drar isär motståndarna uppstår ett tomrum i mitten.\nDen ytan vill vi att pointern avancerar i, genom att driva upp med bollen.",
      "diagram": {
        "view": [
          0,
          40
        ],
        "entities": {
          "P": {
            "type": "player",
            "team": "home",
            "x": 31,
            "y": 10
          },
          "KV": {
            "type": "player",
            "team": "home",
            "x": 28,
            "y": 3.5
          },
          "KH": {
            "type": "player",
            "team": "home",
            "x": 28,
            "y": 16.5
          },
          "C": {
            "type": "player",
            "team": "home",
            "x": 20,
            "y": 10
          },
          "MV": {
            "type": "goalie",
            "team": "home",
            "x": 35.8,
            "y": 10
          },
          "O1": {
            "type": "player",
            "team": "away",
            "x": 27,
            "y": 7
          },
          "O2": {
            "type": "player",
            "team": "away",
            "x": 27,
            "y": 13
          },
          "O3": {
            "type": "player",
            "team": "away",
            "x": 15,
            "y": 6.5
          },
          "O4": {
            "type": "player",
            "team": "away",
            "x": 15,
            "y": 13.5
          }
        },
        "ball": {
          "holder": "P"
        },
        "steps": [
          {
            "text": "Pointern passar till kanten. Motståndarna förflyttar sig mot bollen och dras isär.",
            "actions": [
              {
                "type": "pass",
                "from": "P",
                "to": "KV"
              },
              {
                "type": "run",
                "who": "O1",
                "to": [
                  26.5,
                  5
                ]
              },
              {
                "type": "run",
                "who": "O2",
                "to": [
                  27.5,
                  15
                ]
              },
              {
                "type": "run",
                "who": "O3",
                "to": [
                  15.5,
                  4.5
                ]
              },
              {
                "type": "run",
                "who": "O4",
                "to": [
                  15.5,
                  14.5
                ]
              }
            ]
          },
          {
            "text": "Kanten passar tillbaka till pointern. Motståndarna står kvar isärdragna.",
            "actions": [
              {
                "type": "pass",
                "from": "KV",
                "to": "P"
              }
            ]
          },
          {
            "text": "Pointern driver upp med bollen i tomrummet i mitten.",
            "actions": [
              {
                "type": "dribble",
                "who": "P",
                "to": [
                  23,
                  9.5
                ]
              }
            ]
          }
        ]
      }
    }
  ]
};

// Principer per nivå, visas som numrerad lista på Vårt spel.
window.PRINCIPLES = {
  gron: [
    "Lek, passa, dribbla och ha kul.",
    "Var en bra kompis mot medspelare och motspelare.",
  ],
  bla: [
    "Spelglädje och mod. Vi spelar med risk och vårdar bollen – vi rensar inte och jagar inte kortsiktiga resultat. Vi tittar upp och väljer att passa, dribbla eller skjuta. När vi tappar bollen jobbar vi direkt för att vinna tillbaka den.",
    "Vi spelar för varandra. Alla gör sig spelbara och laget rör sig tillsammans, både i anfall och försvar. Vi hjälper alltid en lagkamrat.",
    "Alla får lika mycket. Alla spelar på alla positioner och lika mycket; målvakt är frivilligt. Alla som vill får spela match, och de som är på plats spelar. Lagen blandas varje helg och vi tar inte emot önskemål – vi är ett lag. Vi utvecklas olika, men alla har samma rätt att vara med och att få träna på det de behöver.",
    "Utveckling före resultat. Vi spelar kreativt och konstruktivt. Vi förlorar hellre en match där vi följer vår modell än vinner en där vi gör avsteg från våra principer.",
  ],
};
