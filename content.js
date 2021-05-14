const getRandomEntry = (entries) =>
  entries[Math.floor(Math.random() * entries.length)];

const pageHtml = document.getElementsByTagName("html")[0].innerHTML;

let getting = browser.storage.sync.get("settings");
getting.then(doReplacements);

function doReplacements(storage) {
  let settings_persons;

  if (storage.settings) {
    settings_persons = JSON.parse(storage.settings);
  } else {
    settings_persons = {
      "person-0": "on",
    };

    var json = JSON.stringify(settings_persons);
    browser.storage.sync.set({
      settings: json,
    });
  }

  for (const person of people) {
    if ([person.id] in settings_persons) {
      if (
        (person.regexName !== null && pageHtml.match(person.regexName)) ||
        (person.regexAbbrev !== null && pageHtml.match(person.regexAbbrev))
      ) {
        const elements = document.getElementsByTagName("*");

        for (const element of elements) {
          const tagName = element.tagName.toLowerCase();
          if (tagName === "textarea") continue;
          if (tagName === "input") continue;
          if (element.hasAttribute("contentEditable")) continue;

          for (const node of element.childNodes) {
            if (node.nodeType === 3) {
              const replacementComplete =
                getRandomEntry(person.substitutionsComplete) + " ";

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
                  getRandomEntry(person.substitutionsLast) +
                  " ";

                usedReplacement =
                  Math.random() > 0.5
                    ? replacementCombiName
                    : replacementComplete;
              }

              const text = node.nodeValue;
              const replacedText = text
                .replace(person.regexName, usedReplacement)
                .replace(person.regexAbbrev, usedReplacement);

              if (replacedText !== text) {
                element.replaceChild(
                  document.createTextNode(replacedText),
                  node
                );
              }
            }
          }
        }
      }
    }
  }
}
