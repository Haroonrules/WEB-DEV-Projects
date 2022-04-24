if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  let checkBox = document.querySelector("#toggle");
      let darkMode = document.querySelector("html");
      const toggleDarkMode = function () {
        checkBox.checked ? darkMode.classList.add("dark") : darkMode.classList.remove("dark")
      }
      toggleDarkMode()
      checkBox.addEventListener("click" , toggleDarkMode)



let password1 = document.getElementById("password1")
let password2 = document.querySelector("#password2");
let password3 = document.getElementById("password3")
let password4 = document.getElementById("password4")

function passwords() {
  password1 = passwordGenerator();
}



let password = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "[", "@", "#", "$", "!", "^",
    "&", "*", "_"];
function randomPassword () {
  let randomNumber = Math.floor(Math.random() * password.length)
  let index = password[randomNumber]
  return index
}


function passwordGenerator () {
  reset()
  let limit = 7;
  for (let i = 0; i < limit; i++) {
    password1.innerText += randomPassword()
    password2.innerText += randomPassword()
    password3.innerText += randomPassword()
    password4.innerText += randomPassword()
  }
}
function reset() {
  password1.innerText = "";
  password2.innerText = "";
  password3.innerText = "";
  password4.innerText = "";
}