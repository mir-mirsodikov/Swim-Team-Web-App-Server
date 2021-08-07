/// @Test
import 'mocha';
import chai from 'chai';
import faker from 'faker';

const expect = chai.expect;

import { AnnouncementFactory } from '@domain/announcements';

describe('Announcement Model Testing', () => {
  const subject = 'Test subject';
  const body = 'Test body';
  const date = new Date();
  const author = faker.name.findName();
  const id = faker.datatype.uuid();

  describe('Valid model creation', () => {
    it('Was a valid model created?', () => {
      const announcement = AnnouncementFactory.createAnnouncement(
        subject,
        body,
        date,
        author,
        id,
      );

      expect(announcement.subject).to.be.equal(subject);
      expect(announcement.body).to.be.equal(body);
      expect(announcement.date).to.be.equal(date);
      expect(announcement.author).to.be.equal(author);
      expect(announcement.id).to.be.equal(id);
    });
  });
});