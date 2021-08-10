import { AnnouncementFactory } from '@domain/announcements';
import { IAnnouncementGateway } from '@domain/interfaces';
import {
  ICreateAnnouncementRequest,
  ICreateAnnouncementResponse,
  ICreateAnnouncementUseCase,
  ICreateAnnouncementResponder
} from '@application/interfaces/announcement';

/**
 * Create new announcement use case
 * @param gateway         Announcement gateway
 * @param useCaseResponse Function to send back the response
 */
export class CreateNewAnnouncementUseCase implements ICreateAnnouncementUseCase {
  constructor(
    private gateway: IAnnouncementGateway,
    private useCaseResponse: ICreateAnnouncementResponder,
  ) {}

  /**
   * Create new announcement
   * @param dto Request body
   */
  async createAnnouncement(dto: ICreateAnnouncementRequest): Promise<void> {
    const {subject, body, date, author} = dto;
    const announcement = AnnouncementFactory.createAnnouncement(
      subject,
      body,
      date,
      author,
    );

    const newModel = await this.gateway.createAnnouncement(announcement);

    const response: ICreateAnnouncementResponse = {
      subject: newModel.subject,
      body: newModel.body,
      date: newModel.date,
      author: newModel.author,
    };
    
    this.useCaseResponse(response);
  }
}