import asyncHandler from 'express-async-handler';
import {Request, Response} from '@controllers/Express';
import { IListAnnouncementsResponder, IListAnnouncementsResponse } from '@application/interfaces/announcement';
import { ListAnnouncementsUseCase } from '@application/announcements/ListAnnouncementsUseCase';
import { MongoModels } from '@db/ModelProvider';
import AnnouncementGateway from '@infrastructure/AnnouncementGateway';

const mongoModel = new MongoModels();
const gateway = new AnnouncementGateway(mongoModel);

export const List = asyncHandler(async (
  req: Request,
  res: Response,
) => {
  const responder: IListAnnouncementsResponder = 
    (response: IListAnnouncementsResponse) => res.json(response);
  
  const useCase = new ListAnnouncementsUseCase(
    gateway,
    responder,
  );

  await useCase.listAnnouncement();
});