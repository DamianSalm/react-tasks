import {pool} from '../db_pool.js'


export const getTasks = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM tasks ORDER BY created_at ASC')
  res.json(result)
}

export const getTask = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id])
  if (result.length == 0)
    return res.status(404).json({message: "Task not found."});
  res.json(result[0])
}

export const createTasks = async (req, res) => {
  const { title, description } = req.body
  const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [title, description])
  res.json({
    id: result.insertId, 
    title, 
    description, 
  })
}

export const updateTasks = async (req, res) => {
  console.log("updating tareas")
  const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id])
  res.json({
    result
  })
}

export const deleteTasks = async (req, res) => {
  const  [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id])
  if (result.affectedRows == 0)
    return res.status(404).json({message : "Task not found."})
  return res.sendStatus(204)
}