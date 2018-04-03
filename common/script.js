const btn = document.querySelector('.js-btn');
const nav = document.querySelector('.js-nav');

btn.addEventListener('click', () => nav.classList.toggle('is-opened'));