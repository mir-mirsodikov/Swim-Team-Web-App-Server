import { IAnnouncementDocument, IAnnouncementModel } from './AnnouncementSchema';

export interface MongoSchemas {
  announcementModel(): IAnnouncementModel;
}