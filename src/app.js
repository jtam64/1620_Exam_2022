// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here
document.addEventListener("DOMContentLoaded", pageLoaded)

function pageLoaded() {
  renderIndex(contactsList)
  mainView = document.getElementById('display_all_contacts');
  mainView.addEventListener("click", onClick)

  function renderIndex(contactsList) {
    for(let i = 0; i < contactsList.length; i++) {
        addItemToMain(contactsList[i]["name"])
    }
  };
  
  function addItemToMain(contactName) {
    mainView = document.getElementById('display_all_contacts');
    let imageName = `${contactName}.png`
    let contactCard = `<div class="individual_contact"><img src=img/${imageName} class="display_all_contacts"><p>${contactName}</p></div>`;
    mainView.insertAdjacentHTML('beforeend', contactCard);
  };

  function onClick() {
    mainView.removeEventListener()
    const singleContact = document.querySelectorAll("#display_all_contacts")
    console.log(singleContact)
    singleContact.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault;
        var contact = {};
        for (let i = 0; i < contactsList.length; i++) {
          if (contactsList[i]["name"] == e.target.textContent) {
            contact = contactsList[i]
          }
        }
        return `<div id="individual_contact"><p>${contact["name"]}</p></div>`
      })
    })
  }
}