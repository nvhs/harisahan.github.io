/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const wordsToType = ["Master's Student", "Software Engineer", "NLP Researcher"];
const textElement = document.getElementById('dynamic-text');
const cursorElement = document.getElementById('cursor');
let currentWordIndex = 0;
let currentIndex = 0;
let isTyping = true;

function typeAndEraseText() {
  if (currentWordIndex < wordsToType.length) {
    const currentWord = wordsToType[currentWordIndex];

    if (isTyping) {
      if (currentIndex < currentWord.length) {
        textElement.textContent += currentWord.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeAndEraseText, 100); // Typing speed (adjust as needed)
      } else {
        isTyping = false;
        setTimeout(typeAndEraseText, 1000); // Pause after typing (adjust as needed)
      }
    } else {
      if (currentIndex > 0) {
        textElement.textContent = currentWord.substring(0, currentIndex - 1);
        currentIndex--;
        setTimeout(typeAndEraseText, 50); // Erasing speed (adjust as needed)
      } else {
        isTyping = true;
        currentWordIndex++;
        setTimeout(typeAndEraseText, 500); // Pause after erasing (adjust as needed)
      }
    }
  } else {
    // Reset animation and start over
    currentWordIndex = 0;
    currentIndex = 0;
    isTyping = true;
    textElement.textContent = '';
    cursorElement.style.display = 'inline';
    setTimeout(typeAndEraseText, 1000); // Delay before restarting (adjust as needed)
  }
}

typeAndEraseText();