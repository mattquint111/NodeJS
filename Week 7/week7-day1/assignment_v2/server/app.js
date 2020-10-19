const express = require("express")
const cors = require("cors")
const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(cors())

let todos= [
    {
        title: "TEST TITLE",
        priority: "TEST PRIORITY",
        dateCreated: "TEST DATE",
        id: 0
    }
]

// start server listening
app.listen(8888, () => {
    console.log("Running on PORT: 8888")
})



app.get('/todos', (req, res) => {
    res.json(todos)
})

app.post('/todos', (req, res) => {
    let title = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    let id = req.body.id

    let todo = {
        "title": title,
        "priority": priority,
        "dateCreated": dateCreated,
        "id": id
    }

    todos.push(todo)
    res.json(todos)
})