import { ICreateAnnouncementRequest } from '@application/interfaces/announcement';
import { AnnouncementFactory, IAnnouncement } from '@domain/AnnouncementModel';
import { IAnnouncementGateway } from '@domain/interfaces';
import { DateTime } from 'luxon';

export class MockAnnouncementGateway implements IAnnouncementGateway {
  async createAnnouncement(request: ICreateAnnouncementRequest): Promise<IAnnouncement> {
    return AnnouncementFactory.createAnnouncement(
      request.subject,
      request.body,
      request.date,
      request.author,
    );
  }

  async getAllAnnouncements(): Promise<IAnnouncement[]> {
    const announcements = [
      {
        subject: 'Subject 1',
        body: 'Body 1',
        date: DateTime.now().toFormat('yyyy-MM-dd'),
        author: 'Shakira',
      },
      {
        subject: 'Subject 2',
        body: 'Body 2',
        date: DateTime.now().toFormat('yyyy-MM-dd'),
        author: 'Nacho',
      }
    ];

    return announcements;
  }
}