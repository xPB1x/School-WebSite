const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile_menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

