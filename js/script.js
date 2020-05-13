let data = [
    {
        "name": "Воронеж"
    },
    {
        "name": "Москва"
    },
    {
        "name": "Петербург"
    },
    {
        "name": "Петроград"
    },
    {
        "name": "Мухосранск"
    },
    {
        "name": "Волгоград"
    },
    {
        "name": "Челябинск"
    },
    {
        "name": "Узбекистан"
    },
    {
        "name": "Таджикистан"
    },
    {
        "name": "Сергеев"
    },
    {
        "name": "Сызрань"
    },
    {
        "name": "Кешенев"
    }
];

let list = document.querySelector(".list");
let input = document.querySelector("input");
let arrayElementSer = [];

input.addEventListener('input', autoAdd);

function autoAdd() {

    if (input.value === '') {
        list.classList.remove('visible');
        list.innerHTML = '';
        arrayElementSer.length = 0;

        return
    }

    for (let index = 0; index < data.length; index++) {
        element = data[index];
        let listResults = document.querySelectorAll(".list>li");

        if (listResults.length == 6) {
            break
        }

        if (element.name.includes(input.value) && !arrayElementSer.includes(element.name)) {
            makeListItem(element.name);
            list.classList.add('visible');
            arrayElementSer.push(element.name);
        }
    }
}

function makeListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
}