let inpName = document.querySelector("#inputName");
let inpMail = document.querySelector("#inputEmail");
let inpContact = document.querySelector("#inputContact");
let btn = document.querySelector(".head-but");
let list = document.querySelector(".ul-name");
console.log(inpMail);
// inpName = localStorage.setItem("name", JSON.stringify(inpName));
// inpMail = localStorage.setItem("name", JSON.stringify(inpMail));
// inpContact = localStorage.setItem("name", JSON.stringify(inpContact));
console.log(inpName.value);
btn.addEventListener("click", () => {
  if (
    !inpName.value.trim() &&
    !inpMail.value.trim() &&
    !inpContact.value.trim()
  ) {
    alert("Заполните поле");
    return;
  }
  let obj = {
    name: inpName.value,
    mail: inpMail.value,
    contact: inpContact.value,
  };
  setItemToStorage(obj);
});

function setItemToStorage(newContact) {
  let data = JSON.parse(localStorage.getItem("contacts"));
  data.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(data));
  readElement();
}

function readElement() {
  if (!localStorage.getItem("contacts")) {
    localStorage.setItem("contacts", JSON.stringify([]));
  }
  let newData = JSON.parse(localStorage.getItem("contacts"));
  list.innerHTML = "";
  newData.forEach((elem, index) => {
    console.log(elem);
    let li = document.createElement("p");
    let li1 = document.createElement("p");
    let li2 = document.createElement("p");

    li.innerText = elem.name;
    li1.innerText = elem.mail;
    li2.innerText = elem.contact;
    list.append(li);
    list.append(li1);
    list.append(li2);
  });
}
readElement();
