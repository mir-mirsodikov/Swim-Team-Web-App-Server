import 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { 
  IListAnnouncementsResponder,
  IListAnnouncementsResponse,
  IListAnnouncementsUseCase
} from '@application/interfaces/announcement';
import { ListAnnouncementsUseCase } from '@application/announcements/ListAnnouncementsUseCase';
import { MockAnnouncementGateway } from 'tests/mocks/AnnouncementGateway.mock';

const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Announcements list use case', async () => {
  const gateway = new MockAnnouncementGateway();

  const [d1, d2] = await gateway.getAllAnnouncements();
  
  it('Did the use case return a list of announcements?', () => {
    const responder: IListAnnouncementsResponder = 
      (response: IListAnnouncementsResponse) => {
        const [p1, p2] = response;

        expect(p1.subject).to.be.equal(d1.subject);
        expect(p1.body).to.be.equal(d1.body);
        expect(p1.date).to.be.equal(d1.date);
        expect(p1.author).to.be.equal(d1.author);

        expect(p2.subject).to.be.equal(d2.subject);
        expect(p2.body).to.be.equal(d2.body);  
        expect(p2.date).to.be.equal(d2.date);
        expect(p2.author).to.be.equal(d2.author);
      };
    
    const useCase: IListAnnouncementsUseCase = 
      new ListAnnouncementsUseCase(gateway, responder);

    return expect(useCase.listAnnouncement())
      .to.be.eventually.fulfilled;
  });
});