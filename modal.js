const modal = document.querySelector('.modal');
const modal_open_btn = document.querySelector('.problems__button');
const modal_close_btn = document.querySelector('.modal__close-btn');

modal_open_btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('active');
});

modal_close_btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('active');
});