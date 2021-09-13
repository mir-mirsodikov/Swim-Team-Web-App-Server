import { Announcement } from '@domain/AnnouncementModel';
import { ITeam } from '@domain/TeamModel';

export interface IAnnouncementGateway { 
  createAnnouncement(
    announcement: Announcement
  ): Promise<Announcement>;

  getAllAnnouncements(): Promise<Announcement[]>;
}

export interface ITeamGateway {
  createTeam(
    team: ITeam
  ): Promise<ITeam>;
}