const signUpBtn = document.querySelector("#sign-up-btn");




/*const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to ('.text', {y:"0%", duration: 1, stagger: 0.25 });
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1" );*/



// navbar 

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})


// sign up section 

signUpBtn.addEventListener('click', () => {
  document.getElementById('sign-in_sign-up_container').style.display = "none";
  document.getElementById('sign-in-btn').style.display = "none";
  document.getElementById('brand-title-mobile').style.display = "none";
  document.getElementById('back-btn').style.display = "block";
  document.getElementById('form-container-mobile').style.display = "block";
  
  
  const styles = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box',
    boxShadow: '0 5px 10px rgba(0,0,0,2)',
    width: '100%',
    height: '60vh',
    borderTopRightRadius: '50px',
    padding: '50px 30px'
  }
  Object.assign(signUpBtn.style, styles);
})

