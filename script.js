import Popup from "./Popup/Popup.js";

const comment = document.getElementById("comment");
const button = document.getElementById("button");
const message = document.getElementById('message');
const myPhone = document.getElementById('phone');

comment.addEventListener("mousemove", (ev) => {
    Popup.show(`Комментарий`, ev.clientX, ev.clientY);
});

myPhone.addEventListener("click", () => {
    myPhone.value = "+375"
    console.log(myPhone.value);
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (comment.value == '') {
        comment.innerHTML = "helga.880102@gmail.com"
    }

    myPhone.validity.valid && myPhone.value !== "" ? message.innerHTML = 'Номер верный!' : message.innerHTML = 'Номер не верный!'
    console.log(myPhone.value);
})

