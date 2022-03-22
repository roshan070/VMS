const express = require("express")
const router = express.Router()

const db = require("../config/db")

router.post("/createTodo", (req, res) => {
  const vname = req.body.vname
  const vnumber = req.body.vnumber

  db.query(
    "INSERT INTO todos (vname,vnumber) VALUES (?,?)",
    [vname, vnumber],
    (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
    }
  )
})

router.get("/all", (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

router.post("/:todoId", (req, res) => {
  const vname = req.body.vname
  const vnumber = req.body.vnumber

  let updateTodos = {
    vname,
    vnumber,
  }
  let update_todos = `UPDATE todos SET ? WHERE id= '${req.params.todoId}'`

  db.query(update_todos, updateTodos, (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

module.exports = router
