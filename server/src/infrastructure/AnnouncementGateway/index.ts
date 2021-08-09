import { IAnnouncementGateway } from '@domain/interfaces';
import { IAnnouncement, Announcement } from '@domain/announcements';
import { MemoryDB } from 'infrastructure/MemoryDB';

class AnnouncementGateway extends MemoryDB<IAnnouncement> implements IAnnouncementGateway {
  setup(): void {
    throw new Error('Method not implemented.');
  }
  
  async createAnnouncement(announcement: Announcement): Promise<Announcement> {
    throw new Error('Method not implemented.');
  }

  async getAllAnnouncements(): Promise<Announcement[]> {
    throw new Error('Method not implemented.');
  }
}

export default AnnouncementGateway;