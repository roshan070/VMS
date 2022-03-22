import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import axios from "axios"
import Todolist from "./Todolist"

const Homepage = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/todos/all").then(res => {
      setTodoList(res.data)
    })
  }, [])
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      {todoList.map((list, index) => {
        return (
          
            <Todolist
            id={list.id}
            setTodoList={setTodoList}
             vname={list.vname}
             vnumber={list.vnumber}
                ky={list.id} />
        
        )
      })}
    </Box>
  )
}

export default Homepage
