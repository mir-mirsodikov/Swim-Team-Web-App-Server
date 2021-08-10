import 'mocha';
import chai from 'chai';
import faker from 'faker';

const expect = chai.expect;

import { AnnouncementFactory } from '@domain/announcements';

/**
 * Testing for the creation of the Announcement model
 */
describe('Announcement Model Testing', () => {
  const subject = 'Test subject';
  const body = 'Test body';
  const date = new Date();
  const author = faker.name.findName();

  describe('Valid model creation', () => {
    it('Was a valid model created?', () => {
      const announcement = AnnouncementFactory.createAnnouncement(
        subject,
        body,
        date,
        author,
      );

      expect(announcement.subject).to.be.equal(subject);
      expect(announcement.body).to.be.equal(body);
      expect(announcement.date).to.be.equal(date);
      expect(announcement.author).to.be.equal(author);
    });
  });
});