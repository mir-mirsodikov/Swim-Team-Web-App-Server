import { 
  IListAnnouncementsResponder,
  IListAnnouncementsResponse,
  IListAnnouncementsUseCase
} from '@application/interfaces/announcement';
import { IAnnouncementGateway } from '@domain/interfaces';

/**
 * Create new announcement use case
 * @param gateway         Announcement gateway
 * @param useCaseResponse Function to send back the response
 */
export class ListAnnouncementsUseCase implements IListAnnouncementsUseCase {
  constructor(
    private gateway: IAnnouncementGateway,
    private useCaseResponse: IListAnnouncementsResponder,
  ) {}

  /**
   * @returns All announcements in the database
   */
  async listAnnouncement(): Promise<void> {
    const models = await this.gateway.getAllAnnouncements();

    const response: IListAnnouncementsResponse = 
      models.map((model) => ({
        subject: model.subject,
        body: model.body,
        date: model.date,
        author: model.author,
      }));
    
    this.useCaseResponse(response);
  }
}