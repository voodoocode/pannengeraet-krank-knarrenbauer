const substitutionsFirst = [
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

const substitutionsMiddle = [
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

const substitutionsLast = [
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

const nicknames = [
    'AKK-47',
    'Büchsengretl',
    'CDUzi',
    'Granaten-Gretel',
    'Knarren-Greta'
];

const elements = document.getElementsByTagName('*');

const getRandomEntry = entries => entries[Math.floor(Math.random() * entries.length)]

for (const element of elements) {
    for (const node of element.childNodes) {
        if (node.nodeType === 3) {
            const replacementFullname = getRandomEntry(substitutionsFirst) +
                " " + getRandomEntry(substitutionsMiddle) +
                "-" + getRandomEntry(substitutionsLast);
            const replacementNickname = getRandomEntry(nicknames);

            const text = node.nodeValue;
            const replacedText = text.replace(/(?:Annegret )?Kramp-Karrenbauer/gi, replacementFullname).replace(/\bAKK\b(?![ -]47)/gi, replacementNickname);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
