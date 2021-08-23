import { Announcement } from '@domain/AnnouncementModel';
import AnnouncementModel, { IAnnouncementModel } from './AnnouncementSchema';
import { MongoSchemas } from './interfaces';

export class MongoModels implements MongoSchemas {
  announcementModel(): IAnnouncementModel  {
    return AnnouncementModel;
  }
}