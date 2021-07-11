const signupBtn = document.querySelector("#signup-Btn");
const introSelector = document.querySelector("#intro");
const buttonsMobile = document.querySelector("#buttons-mobile");
const signUpZone = document.querySelector("#sign-up-container");


signupBtn.addEventListener("click", function(){
    introSelector.style = "display: none";
    buttonsMobile.style = "display: none";
    document.getElementById("sign-up-container").style.display = "block";
  

    const styles = {
        position: 'absolute',
        bottom: '0',
        boxSizing: 'border-box',
        width: '100%',
        height: '70vh',
        padding: '50px 30px',
        backgroundColor: '#fff',
        borderRadius: '70px 0 70px 0'
      }
      
      Object.assign(signUpZone.style, styles);

})


