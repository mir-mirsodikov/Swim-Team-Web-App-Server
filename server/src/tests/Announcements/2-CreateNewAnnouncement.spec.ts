import 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { CreateNewAnnouncementUseCase } from '@application/announcements';
import { ICreateAnnouncementRequest, ICreateAnnouncementResponder, ICreateAnnouncementResponse } from '@application/interfaces/announcement';
import AnnouncementGateway from 'infrastructure/AnnouncementGateway';
import { MongoSchemas } from '@db/interfaces';
import { MongoModels } from '@db/ModelProvider';

import { connectDb, clearDatabase, closeDatabase } from '../mocks/mongo.mock';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Test use case CreateNewAnnouncement', () => {
  before(async () =>  await connectDb());
  afterEach(async () => await clearDatabase());
  after(async () => await closeDatabase());

  const subject = 'Test subject';
  const body = 'Test body';
  const date = new Date();
  const author = 'Nelson Mandela';

  const dbSchemas: MongoSchemas = new MongoModels();
  const announcementGateway = new AnnouncementGateway(dbSchemas);
  const requestPayload: ICreateAnnouncementRequest = {
    subject,
    body,
    date,
    author,
  };
  
  describe('Valid create use cases', () => {
    it('Did the use case create a new announcement?', () => {
      const responder: ICreateAnnouncementResponder = 
        (response: ICreateAnnouncementResponse) => {
          expect(response.subject).to.be.equal(subject, 'Subject mismatch');
          expect(response.body).to.be.equal(body, 'Body mismatch');
          expect(response.date).to.be.equal(date, 'Date mismatch');
          expect(response.author).to.be.equal(author, 'Author mismatch');
        };
      
      const useCase: CreateNewAnnouncementUseCase =
        new CreateNewAnnouncementUseCase(announcementGateway, responder);
      
      return expect(useCase.createAnnouncement({...requestPayload}))
        .to.be.eventually.fulfilled;
    });
  });
});