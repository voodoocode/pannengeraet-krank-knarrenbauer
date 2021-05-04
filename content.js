const people = [
  {
    regexName: /(?:Annegret )?Kramp[ -]Karrenbauer/gi,
    regexAbbrev: /\bAKK\b(?![ -]47)/gi,
    substitutionsFirst: [
      "Aalgerät",
      "Abendbrot",
      "Abfluggate",
      "Abgeweht",
      "Abhörgerät",
      "Affenzeh",
      "Aggressiv",
      "Akazienfleck",
      "Aknecreme",
      "Algensee",
      "Allesgeht",
      "Alleskleb",
      "Allesweg",
      "Alter Met",
      "Altgewebt",
      "Ammenschreck",
      "Ammoniak",
      "Ampelgrät",
      "Ampferbeet",
      "Ananasbeet",
      "Angedreht",
      "Angedreht",
      "Angelgrät",
      "Angerät",
      "Angriffskrieg",
      "Ankerbett",
      "Annegate",
      "Annegret",
      "Annektiert",
      "Annregret",
      "Apfelmet",
      "Apfeltee",
      "Arbeitsamt",
      "Armeegebet",
      "Armgedreht",
      "Arschgeweih",
      "Assizeh",
      "Astverdreht",
      "Atemgerät",
      "Aufgedreht",
      "Ausgelebt",
      "Ballergret",
      "Bannegret",
      "Pannengerät",
      "Pansensalat",
      "Panzergret",
      "Stoßgebet",
      "Un-Fair Trade",
      "Undefined",
      "Windgedreht",
      "Windverweht",
    ],
    substitutionsMiddle: [
      "Band",
      "Ganz",
      "Hanf",
      "Harz",
      "Kampf",
      "Kann",
      "Kant",
      "Katz",
      "Kein",
      "Kennt",
      "Klamm",
      "Klang",
      "Klein",
      "Klotz",
      "Klump",
      "Kommt",
      "Kotz",
      "Krabbe",
      "Kramp",
      "Krampf",
      "Kran",
      "Krank",
      "Kranz",
      "Krebs",
      "Krupp",
      "Land",
      "Lanz",
      "Mampf",
      "Pfand",
      "Pflanz",
      "Punk",
      "Rang",
      "Sand",
      "Schrank",
      "Tand",
      "Tank",
      "Trump",
      "Trumpf",
      "Wand",
    ],
    substitutionsLast: [
      //combined lastnames now need a dash upfront
      "-Akkuschrauber",
      "-Flaschenknauser",
      "-Gartenlaube",
      "-Gassenhauer",
      "-Harkenklauber",
      "-Haubentaucher",
      "-Kackebauer",
      "-Kackenkarrer",
      "-Kalterschauer",
      "-Kamelraucher",
      "-Kamillenbrauer",
      "-Kampfhubschrauber",
      "-Kapillarenkalker",
      "-Karatehauer",
      "-Kardinalvertrauer",
      "-Karottenbauer",
      "-Karpfenkauer",
      "-Karrenbauer",
      "-Karrenklauer",
      "-Kastratenkrauler",
      "-Katerflauer",
      "-Katzenjammer",
      "-Katzenkrauler",
      "-Katzenmiauer",
      "-Keilerhauer",
      "-Klammerkauer",
      "-Klausverhauer",
      "-Klimperpower",
      "-Kliniktrauer",
      "-Kloakenrauer",
      "-Klosteinmauer",
      "-Knarrenbauer",
      "-Knotentauer",
      "-Koksanbauer",
      "-Kolabrauer",
      "-Kolibriklabauter",
      "-Konradadenauer",
      "-Koreamauer",
      "-Krakenkrauler",
      "-Kranbauer",
      "-Kreisbegatter",
      "-Krillverdauer",
      "-Krimkalauer",
      "-Kroatenlauer",
      "-Nasenklauer",
      "-Nervenklauer",
      "-Neunmalschlauer",
      "-Pfaffenhauer",
      "-Pfarrerklauer",
      "-Schinkenklauber",
      "-Schnakenfauna",
      "-Wackelbauchtier",
      "-Wannentaucher",
      "-Winterpflaume",
    ],
    substitutionsComplete: [
      "AKK-47",
      "Büchsengretl",
      "CDUzi",
      "Granaten-Gretel",
      "Knarren-Greta",
    ],
  },
  {
    regexName: /(?:Olaf )?Scholz/gi,
    regexAbbrev: null,
    substitutionsFirst: ["Olaf"],
    substitutionsMiddle: [" "],
    substitutionsLast: ["Scholz"],
    substitutionsComplete: ["Giro Olaf", "Wumms-Olaf"],
  },
  {
    regexName: /(?:Andreas |Andi |Andy )?[S]{1}cheuer\s{1}/g,
    regexAbbrev: null,
    substitutionsFirst: ["Andi"],
    substitutionsMiddle: [" "],
    substitutionsLast: ["Bescheuert", "B. Scheuert"],
    substitutionsComplete: ["Roller-Andi"],
  },
  {
    regexName: /(?:Julia )?Klöckner/gi,
    regexAbbrev: null,
    substitutionsFirst: ["Julia"],
    substitutionsMiddle: [" "],
    substitutionsLast: [" von Nestlé"],
    substitutionsComplete: ["Die Weinkönigin"],
  },
  {
    regexName: /(?:Armin )?Laschet/gi,
    regexAbbrev: null,
    substitutionsFirst: [],
    substitutionsMiddle: [" "],
    substitutionsLast: [""],
    substitutionsComplete: ["Würfel-Armin"],
  },
  {
    regexName: /(?:Annalena )?Baerbock/gi,
    regexAbbrev: null,
    substitutionsFirst: ["Annalena"],
    substitutionsMiddle: [" "],
    substitutionsLast: ["Bärbaum"],
    substitutionsComplete: ["ACAB"],
  },
  {
    regexName: /(?:Angela )?Merkel/gi,
    regexAbbrev: null,
    substitutionsFirst: ["Angola"],
    substitutionsMiddle: [" "],
    substitutionsLast: ["Merkel"],
    substitutionsComplete: ["Mutti"],
  },
];

const getRandomEntry = (entries) =>
  entries[Math.floor(Math.random() * entries.length)];

const pageHtml = document.getElementsByTagName("html")[0].innerHTML;

for (const person of people) {
  if (
    (person.regexName !== null && pageHtml.match(person.regexName)) ||
    (person.regexAbbrev !== null && pageHtml.match(person.regexAbbrev))
  ) {
    const elements = document.getElementsByTagName("*");

    for (const element of elements) {
      for (const node of element.childNodes) {
        if (node.nodeType === 3) {
          const replacementComplete = getRandomEntry(
            person.substitutionsComplete
          ) + " ";

          //default is complete names
          let usedReplacement = replacementComplete;

          //if first and last names exist, by chance a combined name may used
          if (
            person.substitutionsFirst.length &&
            person.substitutionsLast.length
          ) {
            const replacementCombiName =
              getRandomEntry(person.substitutionsFirst) +
              " " +
              getRandomEntry(person.substitutionsMiddle) + //middle is optional
              "" +
              getRandomEntry(person.substitutionsLast) + " ";

            usedReplacement =
              Math.random() > 0.5 ? replacementCombiName : replacementComplete;
          }

          const text = node.nodeValue;
          const replacedText = text
            .replace(person.regexName, usedReplacement)
            .replace(person.regexAbbrev, usedReplacement);

          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  }
}
