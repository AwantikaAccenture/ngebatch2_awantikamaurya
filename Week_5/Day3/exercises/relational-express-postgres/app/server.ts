// Express app
import express from 'express'
import * as dbHelper from './database-helper'
const app = express()
const port = 3000

// Have a title on the process to help us stop it - see package.json
process.title = 'MyExpressApp'

// This lets us handle JSON directly
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Hello-world type root url
app.get('/', (req_, res) => {
  res.json({ info: 'Postgres and Express sample' })
})

// API urls code here
//http://localhost:3000/
app.get('/insertteachers', dbHelper.insertTeachers)
app.get('/insertteachers', dbHelper.insertTeachers)
app.get('/teachers/:id', dbHelper.getTeacherById)
app.get('/createteachers', dbHelper.createTeacher)
app.get('/teachers/:id', dbHelper.updateTeacher)
app.delete('/teachers/:id', dbHelper.deleteTeacher)

// Activate!
app.listen(port, () => {
  console.log(`App running on port ${port} as process ${process.title}`)
})
