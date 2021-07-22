import express from 'express';
import announcements from '@routes/announcements';
import auth from '@routes/auth';

const router: express.Router = express.Router();

router.use('/announcements', announcements);
router.use('/auth', auth);

export default router;
