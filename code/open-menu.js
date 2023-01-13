let btn = document.querySelector('.hamburger_menu_btn');
let close_btn = document.querySelector('.close__menu');

//Function for open and close hamburger menu
const openMenu = () => {
   document.querySelector('.hamburger__menu').classList.add('active');
   document.querySelector('body').style.overflow = 'hidden';
}
const closeMenu = () => {
   document.querySelector('.hamburger__menu').classList.remove('active');
   document.querySelector('body').style.overflow = 'auto';
}

btn.addEventListener('click', openMenu);
close_btn.addEventListener('click', closeMenu);
