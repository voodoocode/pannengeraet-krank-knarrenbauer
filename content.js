var substitutionsFirst = [
    'Ammenschreck',
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

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        var replacement = substitutionsFirst[Math.floor(Math.random() * substitutionsFirst.length)] +
            " " + substitutionsMiddle[Math.floor(Math.random() * substitutionsMiddle.length)] +
            "-" + substitutionsLast[Math.floor(Math.random() * substitutionsLast.length)]

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Annegret Kramp-Karrenbauer|Kramp-Karrenbauer/gi, replacement);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
