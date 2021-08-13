import { IAnnouncementGateway } from '@domain/interfaces';
import { Announcement, AnnouncementFactory } from '@domain/announcements';
import { MongoSchemas } from '@db/interfaces';
import { IAnnouncementModel } from '@db/AnnouncementSchema';

class AnnouncementGateway implements IAnnouncementGateway {
  private announcementModel: IAnnouncementModel;
  constructor(dbSchemas: MongoSchemas) {
    this.announcementModel = dbSchemas.announcementModel();
  }

  async createAnnouncement(announcement: Announcement): Promise<Announcement> {
    try {
      const savedAnnouncement = await new this.announcementModel({
        subject: announcement.subject,
        body: announcement.body,
        date: announcement.date,
        author: announcement.author,
      }).save();

      return AnnouncementFactory.createAnnouncement(
        savedAnnouncement.subject,
        savedAnnouncement.body,
        savedAnnouncement.date,
        savedAnnouncement.author,
      );
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAllAnnouncements(): Promise<Announcement[]> {
    try {
      const response = await this.announcementModel.find();

      /* eslint-disable */
      return response.map((announcement) =>
        AnnouncementFactory.createAnnouncement(
          announcement.subject,
          announcement.body,
          announcement.date,
          announcement.author,
        )
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default AnnouncementGateway;