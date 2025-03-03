const menuBtn = document.querySelector('#menu-btn');
const nav = document.getElementsByTagName('nav')[0];

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
})

function clickMenuLinks() {
    nav.classList.toggle('active');
}