const dataTask = document.querySelector('.data__task')
const dataData = document.querySelector('.data__data')
const buttonIcon = document.querySelector('.button__icon')
const cardTodo = document.querySelector('.card__todo')
const buttonInput = document.querySelector('.button__input')
const body = document.querySelector('body')
const todoCompIcon = document.querySelector('.todo__completed-icon')
const todoComp = document.querySelector('.todo__completed')

let todoArr = []

let buttonIconToogle = false;

dataTask.innerHTML = todoArr.length + ' task'

setInterval(() => {
    dataData.innerHTML = new Date().getDate() + ', ' + new Date().getMonth() + ', ' + new Date().getFullYear() + ', ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
}, 1000)

function createTodo(text) {
    let toogle = false;

    let newTodo = document.createElement('div')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let todoComp = document.createElement('div')

    newTodo.className = 'new__todo'
    p.innerText = text;
    p.className = 'todo__task'
    img.src = './icon/check.png'
    img.className = 'todo__completed-icon'
    todoComp.className = 'todo__completed'

    todoComp.append(img)
    newTodo.append(p)
    newTodo.append(todoComp)
    cardTodo.append(newTodo)

    todoComp.addEventListener('click', () => {
        toogle = !toogle;

        if (toogle) {
            todoComp.style = `
            border: 1px solid green;
            `
            img.style = `
                opacity: 1;
            `
            p.style = `
                text-decoration: line-through;
                color: gray;
            `
        }else{
            todoComp.style = `
            border: 1px solid gray;
            `
            img.style = `
                opacity: 0;
            `
            p.style = `
                text-decoration: none;
                color: color: rgb(70, 70, 70);;
            `
        }
    })

    dataTask.innerHTML = todoArr.length + ' task'
    if (todoArr.length > 1) {
        dataTask.innerHTML = todoArr.length + ' tasks'
    }
}


buttonIcon.addEventListener('click', () => {
    buttonIconToogle = !buttonIconToogle;
    console.log(buttonIconToogle)

    if (buttonIconToogle) {
        buttonInput.style = `
            transform: translate(0);
            opacity: 1;
        `

        buttonIcon.style = `
            transform: rotate(360deg)
        `
    }else{
        buttonInput.style = `
            transform: translate(-120%);
            opacity: 0;
        `

        buttonIcon.style = `
            transform: rotate(0)
        `
    }
})

buttonInput.addEventListener('keyup', (event) => {
    if (event.keyCode == 13 && buttonInput.value != '') {
        todoArr.push(buttonInput.value)
        createTodo(todoArr[todoArr.length - 1])
        buttonInput.value = ''
    }
})

