import { ICreateTeamRequest } from '@application/interfaces/team';
import { ITeamGateway } from '@domain/interfaces';
import { ITeam, TeamFactory } from '@domain/TeamModel';

export class MockTeamGateway implements ITeamGateway {
  async createTeam(request: ICreateTeamRequest): Promise<ITeam> {
    return TeamFactory.createTeam(
      request.uuid,
      request.teamName,
      request.division,
      request.classification,
      request.coaches,
      request.abbrNames,
      request.regCode,
    );
  }
}