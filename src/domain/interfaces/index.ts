import { Announcement } from '@domain/AnnouncementModel';

export interface IAnnouncementGateway { 
  createAnnouncement(
    announcement: Announcement
  ): Promise<Announcement>;

  getAllAnnouncements(): Promise<Announcement[]>;
}