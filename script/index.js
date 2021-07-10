const signupBtn = document.querySelector("#signup-Btn");
const introSelector = document.querySelector("#intro");
const buttonsMobile = document.querySelector("#buttons-mobile");

signupBtn.addEventListener("click", function(){
    introSelector.style = "display: none";
    buttonsMobile.style = "display: none";
    console.log("Hello world");
})


