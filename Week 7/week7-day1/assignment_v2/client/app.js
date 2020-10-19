const url = "http://localhost:8888/todos"

const inputTitle = document.getElementById("inputTitle")
const inputPriority = document.getElementById("inputPriority")
const inputDateCreated = document.getElementById("inputDateCreated")
const addTodoBtn = document.getElementById("addTodoBtn")
const todoList = document.getElementById("todoList")

let counter = 1
displayListItems()

addTodoBtn.addEventListener('click', function() {
    let title = inputTitle.value
    let priority = inputPriority.value
    let dateCreated = inputDateCreated.value
    let todoItem = createTodoItem(title, priority, dateCreated)
    
    // send post request to add to-do to API
    sendTodoItem(todoItem)
    
    // make get request and display items
    displayListItems()
})

//FUNCTIONS
function createTodoItem(title, priority, dateCreated) {
    
    let todoItem = {
        title: title,
        priority: priority,
        dateCreated: dateCreated,
        id: counter
    }

    counter++
    return todoItem
}

function sendTodoItem(todoItem) {
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(todoItem)
    })
        .then(response => response.json())
        .then(result => console.log(result))
}

function displayListItems() {
    todoList.innerHTML = ''
    
    fetch(url)
        .then(response => response.json())
        .then(todosArray => {
            let todoItems = todosArray.map(todo => {
                return `
                <li class="todoItem">
                    <span class="todoTitle>${todo.title}</span>
                    <span class="todoPriority>${todo.priority}</span>
                    <span class="todoDateCreated>${todo.dateCreated}</span>
                </li>
                `
            })

            todoList.insertAdjacentHTML('beforeend', todoItems.join(''))
        })
}