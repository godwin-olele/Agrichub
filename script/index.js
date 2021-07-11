const signupBtn = document.querySelector("#signup-Btn");
const signupWebBtn = document.querySelector("#signUp");
const introSelector = document.querySelector("#intro");
const buttonsMobile = document.querySelector("#buttons-mobile");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");

signupBtn.addEventListener("click", function(){
    introSelector.style = "display: none";
    buttonsMobile.style = "display: none";
    console.log("Hello world");
})

signupWebBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(nameField.value === "" || null || nameField.length === 0 ){
       nameError.innerHTML = "Please enter a name!";
    }
    if(emailField.value === "" || null || emailField.length === 0 ){
       emailError.innerHTML = "Please enter a email!";
    }
    if(passwordField.value === "" || null || passwordField.length === 0 ){
       passwordError.innerHTML = "Please enter a password!";
    }
})

nameField.addEventListener('input', () => {
    if(nameField.value !== "" || null || nameField.length !== 0 ){
        nameError.innerHTML = "";
    }
})
emailField.addEventListener('input', () => {
    if(emailField.value !== "" || null || emailField.length !== 0 ){
        emailError.innerHTML = "";
    }
})
passwordField.addEventListener('input', () => {
    if(passwordField.value !== "" || null || passwordField.length !== 0 ){
        passwordError.innerHTML = "";
    }
})


