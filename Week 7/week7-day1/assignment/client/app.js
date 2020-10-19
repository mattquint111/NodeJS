const url = "http://localhost:3000/todos"


const inputTitle = document.getElementById("inputTitle")
const inputPriority = document.getElementById("inputPriority")
const inputDateCreated = document.getElementById("inputDateCreated")
const addTodoBtn = document.getElementById("addTodoBtn")
const todosList = document.getElementById("todosList")

addTodoBtn.addEventListener('click', function() {
    let title = inputTitle.value
    let priority = inputPriority.value
    let dateCreated = inputDateCreated.value

    let todo = {
        "title": title,
        "priority": priority,
        "dateCreated": dateCreated
    }

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(todo)
    })
        .then(response => response.json())
        .then(result => {
            displayTodos()
        })

})

function displayTodos() {
    todosList.innerHTML = ''

    fetch(url)
        .then(response => response.json())
        .then(todos => {
            let todoItems = todos.map( todo => {
                return `
                <div class="todoItemContainer">
                    <input type="checkbox" class="todoCheckbox">
                    <li class="todoItem priority-${todo.priority}">
                        <span id="todoItemTitle"><b>Title</b>: ${todo.title}</span>
                        <span id="todoItemPriority"><b>Priority</b>: ${todo.priority}</span>
                        <span id="todoItemDateCreated"><b>Date</b>: ${todo.dateCreated}</span>
                    </li>
                    <i class="fas fa-trash deleteTodoItem"></i>
                </div>`
            })

            todosList.insertAdjacentHTML('beforeend', todoItems.join(''))
        })
}

displayTodos()

