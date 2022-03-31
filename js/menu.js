const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const slider = document?.querySelector('[slider-box]');

burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
});
