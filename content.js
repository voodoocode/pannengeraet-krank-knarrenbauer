var substitutionsFirst = [
    'Ammenschreck',
    'Allesweg',
    'Akazienfleck',
    'Allesgeht',
    'Astverdreht',
    'Assizeh',
    'Atemgerät',
    'Armeegebet',
    'Ananasbeet',
    'Aufgedreht',
    'Abgeweht',
    'Alter Met',
    'Altgewebt',
    'Ausgelebt',
    'Apfeltee',
    'Affenzeh',
    'Arbeitsamt',
    'Arschgeweih',
    'Ammoniak',
    'Aknecreme',
    'Angelgrät',
    'Ankerbett',
    'Annegate',
    'Annegret',
    'Annektiert',
    'Annregret',
    'Angedreht',
    'Armgedreht',
    'Angerät',
    'Ampelgrät',
    'Aalgerät',
    'Abendbrot',
    'Angriffskrieg',
    'Angedreht',
    'Ampferbeet',
    'Apfelmet',
    'Abfluggate',
    'Abhörgerät',
    'Alleskleb',
    'Algensee',
    'Ballergret',
    'Bannegret',
    'Pansensalat',
    'Panzergret',
    'Pannengerät',
    'Stoßgebet',
    'Windgedreht',
    'Windverweht',
    'Undefined',
    'Un-Fair Trade',
];

var substitutionsMiddle = [
    'Ganz',
    'Hanf',
    'Harz',
    'Kampf',
    'Kann',
    'Klein',
    'Klump',
    'Klotz',
    'Kotz',
    'Katz',
    'Kramp',
    'Krampf',
    'Krank',
    'Kein',
    'Krebs',
    'Kommt',
    'Kennt',
    'Krupp',
    'Kranz',
    'Krabbe',
    'Klang',
    'Klamm',
    'Kran',
    'Lanz',
    'Mampf',
    'Trump',
    'Trumpf',
    'Tand',
    'Sand',
    'Schrank',
    'Land',
    'Pfand',
    'Kant',
    'Band',
    'Wand',
    'Punk'
];

var substitutionsLast = [
    'Akkuschrauber',
    'Flaschenknauser',
    'Gartenlaube',
    'Gassenhauer',
    'Harkenklauber',
    'Haubentaucher',
    'Kackebauer',
    'Katzenjammer',
    'Kackenkarrer',
    'Klammerkauer',
    'Karrenklauer',
    'Kalterschauer',
    'Kampfhubschrauber',
    'Karrenbauer',
    'Karpfenkauer',
    'Krakenkrauler',
    'Keilerhauer',
    'Knarrenbauer',
    'Koksanbauer',
    'Karottenbauer',
    'Kolabrauer',
    'Kamelraucher',
    'Kranbauer',
    'Klosteinmauer',
    'Karatehauer',
    'Klausverhauer',
    'Krimkalauer',
    'Krillverdauer',
    'Katerflauer',
    'Katzenmiauer',
    'Katzenkrauler',
    'Knotentauer',
    'Koreamauer',
    'Kamillenbrauer',
    'Kastratenkrauler',
    'Kardinalvertrauer',
    'Kroatenlauer',
    'Kapillarenkalker',
    'Kloakenrauer',
    'Kreisbegatter',
    'Kolibriklabauter',
    'Klimperpower',
    'Kliniktrauer',
    'Konradadenauer',
    'Nervenklauer',
    'Neunmalschlauer',
    'Nasenklauer',
    'Pfaffenhauer',
    'Schinkenklauber',
    'Schnakenfauna',
    'Winterpflaume',
    'Wackelbauchtier',
    'Wannentaucher'
];

var nicknames = [
    'AKK-47',
    'Büchsengretl',
    'CDUzi',
    'Granaten-Gretel',
    'Knarren-Greta'
];

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var replacementFullname = substitutionsFirst[Math.floor(Math.random() * substitutionsFirst.length)] +
                " " + substitutionsMiddle[Math.floor(Math.random() * substitutionsMiddle.length)] +
                "-" + substitutionsLast[Math.floor(Math.random() * substitutionsLast.length)];
            var replacementNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

            var text = node.nodeValue;
            var replacedText = text.replace(/Annegret Kramp-Karrenbauer|Kramp-Karrenbauer/gi, replacementFullname).replace(/\bAKK\b(?![ -]47)/gi, replacementNickname);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}