const hamburger = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');
const mobileMenu = document.querySelector('.mobileMenu')

hamburger.addEventListener('click',()=>{
    mobileMenu.classList.remove('hide')
    hamburger.classList.add('hide')
    cancel.classList.remove('hide')
});
cancel.addEventListener('click',()=>{
    mobileMenu.classList.add('hide')
    cancel.classList.add('hide')
    hamburger.classList.remove('hide')
});

