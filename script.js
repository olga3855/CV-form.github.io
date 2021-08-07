import Popup from "./Popup/Popup.js";

const text = document.getElementById("text");
const color = document.getElementById("color");
const weight = document.getElementById("weight");
const btnCreate = document.getElementById("create");
const btnChange = document.getElementById("change");
const btnDelete = document.getElementById("delete");
const list = document.getElementById("list");

const isTextFilled = (input) => {
  return !!input.value;
};

const isElementSelected = () => {
  return !!document.querySelector(".active");
};

const clearInputs = () => {
  text.value = "";
  color.value = "";
  weight[0].selected = true;
};

const setInputs = (elem) => {
  text.value = elem.textContent;
  color.value = elem.style.color || "black";
  Array.from(weight.options).forEach((option) => {
    option.selected = elem.style.fontWeight === option.value;
  });
};

const fillElem = (elem) => {
  elem.textContent = text.value;
  elem.style.color = color.value;
  elem.style.fontWeight = weight.value;
};

btnCreate.addEventListener("click", (ev) => {
  if (isTextFilled(text)) {
    const elem = document.createElement("li");
    elem.classList.add("list-group-item");
    fillElem(elem);
    list.append(elem);
    clearInputs();
  } else {
    Popup.show(`Fill text input`, ev.clientX, ev.clientY);
  }
});

list.addEventListener("click", ({ target }) => {
  if (target.classList.contains("active")) {
    target.classList.remove("active");
    clearInputs();
  } else {
    const oldActiveElem = document.querySelector(".active");
    oldActiveElem && oldActiveElem.classList.remove("active");
    target.classList.add("active");
    setInputs(target);
  }
});

btnChange.addEventListener("click", ({clientX, clientY}) => {

  if (!isElementSelected()) {
    Popup.show(`Select an element`, clientX, clientY);
  } else if (!isTextFilled(text)) {
    Popup.show(`Fill text field`, clientX, clientY);
  } else {
    fillElem(document.querySelector(".active"));
  }
});

btnDelete.addEventListener("click", ({clientX, clientY}) => {

  if (!isElementSelected()) {
    Popup.show(`Select an element`, clientX,clientY);
  } else {
    document.querySelector(".active").remove();
    clearInputs();
  }
});

text.addEventListener('change', () => {
  const existingPopup = document.querySelector('.show');
  console.log(existingPopup);
  if (existingPopup) {
    Popup.hide();
  }
})

