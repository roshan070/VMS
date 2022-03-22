import React, { useEffect } from "react"
import { Box, Paper, TextField, Grid, Button, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

const Update = () => {
  const { todoId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.state)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      vname: location.state.vname,
      vnumber: location.state.vnumber,
    },
  })

  const onSubmit = data => {
    console.log(data)

    axios
      .post(`http://localhost:5000/updateTodo/${todoId}`, {
        vname: data.vname,
        vnumber: data.vnumber,
      })
      .then(res => {
        // console.log("sa")
        navigate("/")
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    for (const [key, value] of Object.entries(location.state)) {
      setValue(key, value)
    }
  }, [setValue, location])
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Paper
        elevation={2}
        sx={{
          width: "500px",
          height: "280px",
          margin: "auto",
          padding: 3,
          display: "flex",
          justifyContent: "center",
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography align='center' variant='h5' gutterBottom>
            Update Note
          </Typography>

          <Grid container spacing={3} mb={2}>
            <Grid item xs={12}>
              <TextField
                label='vname'
                name='vname'
                {...register("vname", { required: true })}
                fullWidth
              />
              {errors.vname?.type === "required" && "vname is required"}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='vnumber'
                name='vnumber'
                label='vnumber'
                {...register("vnumber", { required: true })}
                fullWidth
              />
            </Grid>

            <Grid item sx={{ margin: "auto" }}>
              <Button variant='contained' sx={{ width: "300px" }} type='submit'>
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  )
}

export default Update
