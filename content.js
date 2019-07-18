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
    'Ballergret',
    'Bannegret',
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
    'Kampf',
    'Kann',
    'Klein',
    'Klump',
    'Klotz',
    'Kotz',
    'Katz',
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
    'Land',
    'Pfand',
    'Kant',
    'Band',
    'Wand',
];

var substitutionsLast = [
    'Akkuschrauber',
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

        var replacementFullname = substitutionsFirst[Math.floor(Math.random() * substitutionsFirst.length)] +
            " " + substitutionsMiddle[Math.floor(Math.random() * substitutionsMiddle.length)] +
            "-" + substitutionsLast[Math.floor(Math.random() * substitutionsLast.length)];
        var replacementNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Annegret Kramp-Karrenbauer|Kramp-Karrenbauer/gi, replacementFullname).replace(/\bAKK\b(?![ -]47)/gi, replacementNickname);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
