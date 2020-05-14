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
// let info = document.querySelector("p.info");
let indexClass = 0;
let arrayElementSearch = [];

input.addEventListener('input', autoAdd);


function autoAdd() {


    let defaultListLi = "list__li-";

    if (input.value === '') {
        list.classList.remove('visible');
        list.innerHTML = '';
        arrayElementSearch.length = 0;
        indexClass = 0;

        return
    }

    for (let index = 0; index < data.length; index++) {
        element = data[index];
        let listResults = document.querySelectorAll(".list>li");
        let elementToRemove;

        if (listResults.length == 6) {
            break
        }


        //Удаляем ненужный элемент
        if (!element.name.includes(input.value) && arrayElementSearch.includes(element.name)) {
            let elementClassToRemove = '.' + defaultListLi + arrayElementSearch.indexOf(element.name);
            elementToRemove = document.querySelector(elementClassToRemove);
            elementToRemove.parentNode.removeChild(elementToRemove);
        }


        //Создаем элемент списка автодополнения
        if (element.name.includes(input.value) && !arrayElementSearch.includes(element.name)) {
            makeListItem(element.name, defaultListLi + indexClass);
            list.classList.add('visible');
            arrayElementSearch.push(element.name);
            indexClass++;
        }

    }
}

function makeListItem(text, classElement) {
    let li = document.createElement('li');
    li.classList.add(classElement);
    li.textContent = text;
    list.appendChild(li);
}