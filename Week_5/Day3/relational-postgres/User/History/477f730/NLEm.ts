import { Pool } from 'pg'
import { Request, Response } from 'express'
 
 
console.log(`Create pool with defaults: server='MyExpress Server'`)
const pool = new Pool({
  host: '172.17.0.2',
  database: 'mydb',
  user: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})
 
 
export const getEmployees = async (Request: Request, response: Response) => {
    console.log('getEmployees')
    try {
          const employees = await pool.query(
              "select * from employee;"
          );
          console.log("Employees = ",employees.rows);
          response.json(employees.rows);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in getEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const insertEmployees = async (Request: Request, response: Response) => {
    console.log('insertEmployees')
    try {
          const employees = await pool.query(
              "insert into employee values(1252,'Awantika Maurya',27,15345.66);"
          );
          console.log("Employees = ",employees);
          response.json(employees);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in getEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const updateEmployees = async (Request: Request, response: Response) => {
    console.log('updateEmployees')
    try {
          const employees = await pool.query(
              "UPDATE employee SET salary = 205476 WHERE empno = 1252;"
          );
          console.log("Employees = ",employees);
          response.json(employees);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in getEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const deletemployees = async (Request: Request, response: Response) => {
    console.log('delete Employees')
    let empno = 1235;
    try {
          const empl = await pool.query(
              `delete from employee where empno= ${empno} returning empno;`
          );
          console.log("Employees = ",empl);
          response.json(`${empl} Employee Deleted`);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in deleted Employees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

