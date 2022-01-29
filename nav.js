const mainMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navAbout = document.querySelector('.navAbout');
const navServices = document.querySelector('.navServices');
const navProjects = document.querySelector('.navProjects');
const navContact = document.querySelector('.navContact');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navAbout.addEventListener('click', close);
navServices.addEventListener('click', close);
navProjects.addEventListener('click', close);
navContact.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-110%';
}