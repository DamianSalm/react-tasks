import express from 'express';
import {PORT} from './config.js'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'


const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

app.listen(PORT)
console.log(`server en ejecucion en puerto ${PORT}`)
