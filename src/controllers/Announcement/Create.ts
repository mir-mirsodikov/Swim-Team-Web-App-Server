import { ICreateAnnouncementRequest, ICreateAnnouncementResponder, ICreateAnnouncementResponse } from '@application/interfaces/announcement';
import { MongoModels } from '@db/ModelProvider';
import asyncHandler from 'express-async-handler';
import {Request, Response} from '@controllers/Express';
import { CreateNewAnnouncementUseCase } from '@application/Announcement';
import AnnouncementGateway from '@infrastructure/AnnouncementGateway';

const mongoModel = new MongoModels();
const gateway = new AnnouncementGateway(mongoModel);

export const Create = asyncHandler(async (
  req: Request, 
  res: Response,
) => {
  const {
    subject,
    body,
    date,
    author,
  } = req.body as ICreateAnnouncementRequest;

  const responder: ICreateAnnouncementResponder =
    (response: ICreateAnnouncementResponse) => res.json(response);

  const useCase = new CreateNewAnnouncementUseCase(
    gateway,
    responder,
  );

  await useCase.createAnnouncement({
    subject,
    body,
    date,
    author,
  });
});