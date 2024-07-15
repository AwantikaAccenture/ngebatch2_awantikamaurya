import { Pool } from 'pg'
import { Request, Response } from 'express'

//const dbServer = process.env.POSTGRES_DB
//const dbPassword = process.env.POSTGRES_PASSWORD

console.log(`Create pool with defaults: server='172.17.0.2`)
const pool = new Pool({
  host: '172.17.0.2',
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})

export const getTeachers = async (_: Request, response: Response) => {
  console.log('getTeachers')

  try {
    // todo
    const teachers = await pool.query(
      "select * from teacher ;"
  );
  console.log("Teachers = ",teachers.rows);
  response.json(teachers.rows);
   // response.status(404).json({ message: 'TODO: getTeachers' })
  } catch (error) {
    console.log('Error thrown in getTeachers: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const getTeacherById = async (request: Request, response: Response) => {
  console.log('getTeacherById')

  try {
    // todo
    const teachers = await pool.query(
      "select * from teacher where teacher_id =1;"
  );
  console.log("Employees = ",teachers.rows);
  response.json(teachers.rows);
    //response.status(404).json({ message: 'TODO: getTeacherById' })
  } catch (error) {
    console.log('Error thrown in getTeacherById: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const createTeacher = async (request: Request, response: Response) => {
  console.log('createTeacher: body=', request.body)

  try {
    // todo
    const Createteachers = await pool.query(
      "create table teacher (teacher_id integer,first_name varchar(255),surname varchar(255));"
   );
   console.log("teachers = ",Createteachers);
   response.json(Createteachers);
   // response.status(404).json({ message: 'TODO: createTeacher' })
  } catch (error) {
    console.log('Error thrown in createTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}
export const insertTeachers = async (Request: Request, response: Response) => {
  console.log('insertTeachers')
  try {
        const teachers = await pool.query(
            "INSERT INTO teacher(teacher_id,first_name, surname) VALUES ('1','Wiggins', 'Pickering');"
        );
        console.log("teachers=" ,teachers.rowCount);
        response.json(teachers.rowCount);
    //response.status(404).json({ message: 'TODO: getEmployees' })
  } catch (error) {
    console.log('Error thrown in getTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}


export const updateTeacher = async (request: Request, response: Response) => {
  console.log('updateTeacher: body=', request.body)

  try {
    // todo
    const teachers = await pool.query(
      "UPDATE teacher SET surname= Thomas WHERE teacher_id = 1;"
  );
  console.log("teacher = ",teachers);
  response.json(teachers);
    //response.status(404).json({ message: 'TODO: updateTeacher' })
  } catch (error) {
    console.log('Error thrown in updateTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const deleteTeacher = async (_: Request, response: Response) => {
  console.log('deleteTeacher')

 
    // todo
    
    try {
      let teacher_id = 1;
          const teachers = await pool.query(
              `delete from teacher where teacher_id= ${teacher_id} returning teacher_id;`
          );
          console.log("teachers = ",teachers);
          response.json(`${teachers} teachers Deleted`);
    //response.status(404).json({ message: 'TODO: deleteTeacher' })
  } catch (error) {
    console.log('Error thrown in deleteTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
  }

