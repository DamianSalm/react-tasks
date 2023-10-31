import {createPool} from 'mysql2/promise';
import {DB_PASS, DB_PORT} from './config.js'

export const pool = new createPool({
  host: 'localhost',
  port: DB_PORT,
  user: 'root',
  password: DB_PASS,
  database: 'tasksdb'
})

