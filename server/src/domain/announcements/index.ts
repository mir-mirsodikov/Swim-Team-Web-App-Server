// import {
//   MissingAttributeError,
//   InvalidAttributeError,
// } from '@domain/Errors';

export interface IAnnouncement {
  id?: string,
  subject: string,
  body: string,
  date: Date,
  author: string, 
}

export class Announcement implements IAnnouncement {
  constructor(
    public readonly subject: string,
    public readonly body: string,    
    public readonly date: Date,
    public readonly author: string,
    public readonly id?: string,
  ) {}
}

export class AnnouncementFactory {
  static createAnnouncement(
    subject: string,
    body: string,
    date: Date,
    author: string,
    id?: string,
  ): Announcement {
    return new Announcement(
      subject,
      body,
      date,
      author,
      id,
    );
  }
}