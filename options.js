function saveOptions(e) {
  e.preventDefault();

  var formData = new FormData(document.querySelector("form"));
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  browser.storage.sync.set({
    settings: json,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    let persons;

    if (result.settings) {
      persons = JSON.parse(result.settings);
    } else {
      //default: start with 0 enabled
      persons = {
        "person-0": "on",
      };

      var json = JSON.stringify(persons);
      browser.storage.sync.set({
        settings: json,
      });
    }

    document.querySelectorAll(".checkbox").checked = false;

    for (const key in persons) {
      document.querySelector(`[name="${key}"]`).checked = true;
    }
  }

  let getting = browser.storage.sync.get("settings");
  getting.then(setCurrentChoice);
}

function loadPeople() {
  for ([index, person] of people.entries()) {
    {
      const div = htmlToElements(`
      <div>
        <input type="checkbox" class="checkbox" id="check-${index}" name="person-${index}" />
        <label for="check-${index}">${person.regexName}</label>
      </div>
      `);
      document.querySelector("#settings").append(...div);
    }
  }

  restoreOptions();

  document.querySelector("form").addEventListener("submit", saveOptions);
}

function htmlToElements(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

document.addEventListener("DOMContentLoaded", loadPeople);
