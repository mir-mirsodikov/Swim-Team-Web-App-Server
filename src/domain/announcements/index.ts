import {
  MissingAttributeError,
  InvalidAttributeError
} from '@domain/Errors';

export class MissingAttributesForAnnouncements extends MissingAttributeError {}
export class InvalidAttributesForAnnouncements extends MissingAttributeError {}

export interface IAnnouncement {
  subject: string,
  body: string,
  date: string,
  author: string, 
}

export class Announcement implements IAnnouncement {
  constructor(
    public readonly subject: string,
    public readonly body: string,    
    public readonly date: string,
    public readonly author: string,
  ) {}
}

export class AnnouncementFactory {
  static createAnnouncement(
    subject: string,
    body: string,
    date: string,
    author: string,
  ): Announcement {
    return new Announcement(
      subject,
      body,
      date,
      author,
    );
  }
}