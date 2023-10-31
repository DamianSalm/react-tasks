import {Router} from 'express';
import {pool} from '../db_pool.js';


const router = Router();

router.get('/ping', async (req, res)=>{
  const pong = "pong"
  console.log(pong)
  res.json(pong)
});

export default router;