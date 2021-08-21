import express from 'express';
import announcement from '@routes/announcement';

const router = express.Router();

router.use('/announcement', announcement);

export default router;