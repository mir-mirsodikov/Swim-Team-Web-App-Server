// Team use cases

import { ITeam } from '@domain/TeamModel';

/*
Create new team use case
*/

export interface ICreateTeamRequest extends ITeam { }

export interface ICreateTeamResponse extends ICreateTeamRequest {}

export interface ICreateTeamUseCase {
  createTeam(
    dto: ICreateTeamRequest
  ): Promise<void>
}

export interface ICreateTeamResponder {
  (payload: ICreateTeamResponse): void;
}