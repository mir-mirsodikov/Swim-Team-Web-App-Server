import express from 'express';
import * as Controller from '@controllers/Announcement';

const router: express.Router = express.Router();

router.post('/', Controller.Create);

router.get('/', (req, res) => {
  res.send('Hello there');
});

export default router;