const btn = document.querySelector('.searchIcon');

const inputField = document.querySelector('.inputField');

const input = document.querySelector('input');

btn.addEventListener('click', () => {
    inputField.classList.toggle('active');
    input.focus();
});