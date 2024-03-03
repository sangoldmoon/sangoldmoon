const loginForm = document.querySelector("#login-form");
const loginput = document.querySelector("#login-form input");
const greeting = document.querySelector('h1');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME)
   const username = loginput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

function paintGreetings (username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedName = localStorage.getItem(USERNAME_KEY);
if (savedName===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onSubmit);
} else {
    paintGreetings (savedName);
}