const express = require("express")
const cors = require("cors")
const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(cors())

let todos = [
    {
        title: "wash car",
        priority: "low",
        dateCreated: "10/19",
        id: 0
    }
]

idCounter = 1;

app.listen(3000, () => {
    console.log("Running on PORT 3000")
})

app.get("/todos", (req, res) => {
    res.send(todos)
})

app.post("/todos", (req, res) => {

    let title = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated


    let todo = {title: title, priority: priority, dateCreated: dateCreated, id: idCounter}
    idCounter += 1

    todos.push(todo)
    res.json(todos)

})





