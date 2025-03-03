const btnBackToTop = document.querySelector('#btn-back-to-top');
const header = document.getElementsByTagName('header')[0];
const apresentation = document.querySelector('#apresentation');

function verifyScroll() {
    const scrollOfY = window.scrollY;
    const headerHeight = header.getBoundingClientRect().height;
    const apresentationHeight = apresentation.getBoundingClientRect().height;
    if (scrollY > (headerHeight + apresentationHeight)) {
        btnBackToTop.setAttribute('class', 'not-in-top');
    } else {
        btnBackToTop.removeAttribute('class');
    }
}
