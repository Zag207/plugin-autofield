let cities = [
    { name: 'Воронеж' },
    { name: 'Москва' },
    { name: 'Петербург' },
    { name: 'Петроград' },
    { name: 'Мухосранск' },
    { name: 'Волгоград' },
    { name: 'Челябинск' },
    { name: 'Узбекистан' },
    { name: 'Таджикистан' },
    { name: 'Сергеев' },
    { name: 'Сызрань' }
];

let list = document.querySelector(".list");
let input = document.querySelector("input");
let infoText = document.querySelector('p.info');

input.addEventListener('input', autoAdd);

function autoAdd() {

    if (input.value === '') {
        list.classList.remove('visible');
        list.innerHTML = '';
        infoText.textContent = "''";

        return
    }

    for (let index = 0; index < cities.length; index++) {
        element = cities[index];
        let listResults = document.querySelectorAll(".list>li");

        if (listResults.length == 6) {
            break
        }

        if (element.name.includes(input.value)) {
            makeListItem(element.name);
            list.classList.add('visible');
            infoText.textContent = input.value;
        }
    }
}

function makeListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
}