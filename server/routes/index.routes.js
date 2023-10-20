import {Router} from 'express';
import {pool} from '../db_pool.js';


const router = Router();

router.get('/ping', async (req, res)=>{
  const [rows] = await pool.execute('SELECT 1+1 as result');
  console.log(rows)
  res.json(rows)
});

export default router;