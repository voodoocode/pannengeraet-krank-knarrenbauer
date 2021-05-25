function saveOptions(e) {
  e.preventDefault();

  var formData = new FormData(document.querySelector("form"));
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  chrome.storage.sync.set({
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
      chrome.storage.sync.set({
        settings: json,
      });
    }

    document.querySelectorAll(".checkbox").checked = false;

    for (const key in persons) {
      document.querySelector(`[name="${key}"]`).checked = true;
    }
  }

  let getting = chrome.storage.sync.get("settings", (res)=> {
    setCurrentChoice(res);
  });
}

function loadPeople() {
  for ([index, person] of people.entries()) {
    {
      var input = document.createElement("input");
      input.type = "checkbox";
      input.className = "checkbox";
      input.id = `check-${index}`;
      input.name = `person-${index}`;

      var label = document.createElement("label");
      label.for = `check-${index}`;
      label.innerText = person.regexName + "";

      var div = document.createElement("div");
      div.appendChild(input);
      div.appendChild(label);

      document.querySelector("#settings").appendChild(div);
    }
  }

  restoreOptions();

  document.querySelector("form").addEventListener("submit", saveOptions);
}

document.addEventListener("DOMContentLoaded", loadPeople);
