import { ICreateTeamRequest, ICreateTeamResponder, ICreateTeamResponse, ICreateTeamUseCase } from '@application/interfaces/team';
import { ITeamGateway } from '@domain/interfaces';
import { TeamFactory } from '@domain/TeamModel';

/**
 * Create new team use case
 * @param gateway         Team gateway
 * @param useCaseResponse Function to send back the response
 */
export class CreateTeamUseCase implements ICreateTeamUseCase {
  constructor(
    private gateway: ITeamGateway,
    private useCaseResponse: ICreateTeamResponder,
  ) {}

  /**
   * Create new team
   * @param dto Request body of type ICreateTeamRequest
   */
  async createTeam(dto: ICreateTeamRequest): Promise<void> {
    const {
      uuid,
      teamName,
      abbrNames,
      coaches,
      regCode,
    } = dto;

    const team = TeamFactory.createTeam(
      uuid,
      teamName,
      abbrNames,
      coaches,
      regCode,
    );

    const newModel = await this.gateway.createTeam(team);

    const response: ICreateTeamResponse = {
      uuid: newModel.uuid,
      teamName: newModel.teamName,
      abbrNames: newModel.abbrNames,
      coaches: newModel.coaches,
      regCode: newModel.regCode,
    };

    this.useCaseResponse(response);
  }
}