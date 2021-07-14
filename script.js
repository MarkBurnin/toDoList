let addItem = document.getElementById('addItem');
let items = document.querySelector('.items');
let button = document.getElementById('add');

button.addEventListener('click', function() {
    let item = document.createElement('li');
    item.classList.add('item');
    item.textContent = addItem.value;
/*
    let cross = document.createElement('button');
    cross.type = button;
    cross.classList.add('cross');
    cross.addEventListener('click', function() {
        item.remove();
    });
*/
    items.appendChild(item);
    addItem.value = "";
});