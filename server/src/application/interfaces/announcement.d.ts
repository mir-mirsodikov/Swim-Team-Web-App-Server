// Announcement use cases

import { IAnnouncement } from '@domain/announcements';

/*
Create new announcement use case
*/
export interface ICreateAnnouncementRequest extends IAnnouncement { }

export interface ICreateAnnouncementResponse extends ICreateAnnouncementRequest { }

export interface ICreateAnnouncementUseCase {
  createAnnouncement(
    dto: ICreateAnnouncementRequest
  ): Promise<void>;
}

export interface ICreateAnnouncementResponder {
  (payload: ICreateAnnouncementResponse): void;
}

/* 
List all announcements use case
*/

export interface IListAnnouncementsRequest {}

export type IListAnnouncementsResponse = ICreateAnnouncementResponse[]

export interface IListAnnouncementsUseCase {
  listAnnouncement(): Promise<void>
}

export interface IListAnnouncementsResponder {
  (payload: IListAnnouncementsResponse): void;
}