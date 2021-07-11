const signUpBtn = document.querySelector("#sign-up-btn");



const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to ('.text', {y:"0%", duration: 1, stagger: 0.25 });
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: "-100%", duration: 1 }, "-=1" );



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
  document.getElementById('sign-up-btn').style.display = "block";
  document.getElementById('already-have-an-acc').style.display = "block";
  
  const styles = {
    position: 'absolute',
    boxSizing: 'border-box',
    boxShadow: '0 5px 10px rgba(0,0,0,2)',
    width: '100%',
    height: '90vh',
    padding: '50px 30px',
    backgroundColor: '#fff'
  }
  
  Object.assign(signUpBtn.style, styles);
  
})

