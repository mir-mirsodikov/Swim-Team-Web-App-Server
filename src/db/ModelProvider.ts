import { Announcement } from '@domain/announcements';
import AnnouncementModel, { IAnnouncementModel } from './AnnouncementSchema';
import { MongoSchemas } from './interfaces';

export class MongoModels implements MongoSchemas {
  announcementModel(): IAnnouncementModel  {
    return AnnouncementModel;
  }
}