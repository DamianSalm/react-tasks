import {createPool} from 'mysql2/promise';
import {DB_PASS} from './config.js'

export const pool = new createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: DB_PASS,
  database: 'tasksdb'
})

