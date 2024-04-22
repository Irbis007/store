const menu = document.querySelector(".menu");
const menuHamburger = document.querySelector(".menu__hamburger");

menuHamburger.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
  menuHamburger.classList.toggle("menu_active");
});

const questions = document.querySelectorAll(".table__question");
const answers = document.querySelectorAll(".table__answer");

questions.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    answers[i].classList.add("table__answer_active");
  });
  item.addEventListener("mouseout", () => {
    answers[i].classList.remove("table__answer_active");
  });
});

const tableShow = document.querySelector(".table__show");
const table = document.querySelector(".products__table");

tableShow.addEventListener("click", () => {
  tableShow.classList.toggle("table_active");
  table.classList.toggle("table_active");
});

let inputPhone = document.getElementById("username");
inputPhone.oninput = () => phoneMask(inputPhone);
function phoneMask(inputEl) {
  let patStringArr = "+7(___)___-__-__".split("");
  let arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
  let val = inputEl.value;
  let arr = val.replace(/\D+/g, "").split("").splice(1);
  let n;
  let ni;
  arr.forEach((s, i) => {
    n = arrPush[i];
    patStringArr[n] = s;
    ni = i;
  });
  inputEl.value = patStringArr.join("");
  n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17);
}

const firstNameInput = document.querySelector("#first-name");
const emailInput = document.querySelector("#username");

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close__button");

const toastifyContainer = document.querySelector(".toastify__container");

const submitButton = document.querySelector(".form__button");

const openButtons = document.querySelectorAll(".open__button");

openButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });
});

modal.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.closest(".modal__wrapper")) {
    modal.classList.remove("active");
  }
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("active");
});

const hideToastifyContainer = () => {
  toastifyContainer.classList.remove("active");
};

const onSubmit = async (firstNameInput, emailInput, e) => {
  await fetch("https://ssttoorree.ru/_receive_question_", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstNameInput.value,
      username: emailInput.value,
      form: "store_engineering",
    }),
  }).then(() => {
    toastifyContainer.classList.add("active");
    setTimeout(hideToastifyContainer, 3000);
  });
};

submitButton.addEventListener('click', (e) =>{
  e.preventDefault()
  onSubmit(firstNameInput, emailInput, e)
})

const inputPhones = document.querySelector('.input__phone')
const inputName = document.querySelector('.input__name')
const btnSend = document.querySelector('.button__send')

btnSend.addEventListener('click', (e) =>{
  e.preventDefault()
  onSubmit(inputName, inputPhones, e)
})

