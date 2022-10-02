const display = document.getElementById('display');

const list = document.getElementById('items');

const input = document.getElementById('item');

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const item = input.value;
    if (checkItem(item)){
        createMorse(item);
        input.value = "";
    } else {
        alert('Entry is empty or contains a space')
    }
})

submit.addEventListener('mouseleave', () => {
    submit.style.backgroundColor = "white"
})

submit.addEventListener('mouseover', () => {
    if (checkItem(input.value)){
        submit.style.backgroundColor = "#DDDDDD"
    }
})

const checkItem = (item) => {
    return item.length !== 0 && !(item.includes(" "))
}

function createMorse(item){
    // const api_url = `https://api.funtranslations.com/translate/morse.json?text=${item}`
    // fetch(api_url)
    //     .then(res => res.json())
    //     .then(data => addItem(item, data.contents.translated))
    addItem(item, "");
}

const addItem = (item, morse) => {
    let li = document.createElement('li');
    li.innerText = `${item} ${morse}`;
    list.appendChild(li);
}