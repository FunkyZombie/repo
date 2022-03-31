const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');

burger?.addEventListener('click', () => {
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
});
