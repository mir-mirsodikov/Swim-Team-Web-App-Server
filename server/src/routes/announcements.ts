import express from 'express';
import Announcement from '@model/Announcement';

const router: express.Router = express.Router();

/// Fetch announcements from MongoDB
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const data = await Announcement.find();
        res.send(data);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

/// Post an announcement sent from the request to MongoDB
router.post('/', async (req: express.Request, res: express.Response) => {
    try {
        const savedAnnouncement = await new Announcement({
            subject: req.body.subject,
            body: req.body.body
        }).save();
        res.send(savedAnnouncement);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

/// Delete an announcement given its ID from MongoDB
router.delete('/', async (req: express.Request, res: express.Response) => {
    try {
        const deletedAnnouncement = await Announcement.deleteOne({ id: req.body.id });
        res.send(deletedAnnouncement);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

export default router;