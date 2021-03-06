import { Schema, Model, Document, model } from 'mongoose';
import { IAnnouncement } from '@domain/AnnouncementModel';
import { DateTime } from 'luxon';

const AnnouncementSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: DateTime.now().toFormat('yyyy-MM-dd'),
  },
  author: {
    type: String,
    required: true,
  },
}, {
  collection: 'announcements',
});

export interface IAnnouncementDocument extends IAnnouncement, Document {}

export interface IAnnouncementModel extends Model<IAnnouncementDocument> {}

const AnnouncementModel = model<IAnnouncementDocument>('Announcement', AnnouncementSchema);

export default AnnouncementModel;