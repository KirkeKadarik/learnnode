import './style.scss';

let input = document.querySelector('input#new-item');
let button = document.querySelector('#add-btn');
let list = document.querySelector('#shopping-list');
button.addEventListener('click', () => {
    let newItem = input.value;
    list.innerHTML += `<li>${newItem};</li>`;
input.value = '';
});

let title = document.querySelector('#title');
input.addEventListener('input', () => {
    title.innerHTML = input.value;
});