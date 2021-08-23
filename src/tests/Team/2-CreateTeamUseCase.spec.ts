import 'mocha';
import chai from 'chai';
import faker from 'faker';
import { MongoSchemas } from '@db/interfaces';
import { MongoModels } from '@db/ModelProvider';
import { 
  ICreateTeamRequest,
  ICreateTeamResponder,
  ICreateTeamResponse
} from '@application/interfaces/team';
import { CreateTeamUseCase } from '@application/Team/CreateTeamUseCase';

const expect = chai.expect;

describe('Test use case CreateNewTeam', () => {
  const teamName = faker.company.companyName();
  const coaches = [faker.name.findName(), faker.name.findName()];
  const uuid = faker.datatype.uuid();
  const regCode = faker.random.alphaNumeric(6);
  const abbrNames = [teamName.substring(0, 3)];

  const dbSchemas: MongoSchemas = new MongoModels();
  // @ts-ignore
  const teamGateway = new TeamGateway(dbSchemas);
  const requestPayload: ICreateTeamRequest = {
    uuid,
    teamName,
    abbrNames,
    coaches,
    regCode,
  };

  describe('Valid create use cases', () => {
    it('Did the use case create a new team?', () => {
      const responder: ICreateTeamResponder = 
        (response: ICreateTeamResponse) => {
          expect(response.uuid).to.be.equal(uuid, 'UUID mismatch');
          expect(response.teamName).to.be.equal(teamName, 'Team name mismatch');
          expect(response.coaches).to.be.equal(coaches, 'Coaches mismatch');
          expect(response.regCode).to.be.equal(regCode, 'Registration code mismatch');
          expect(response.abbrNames).to.be.equal(abbrNames, 'Abbreviated names mismatch');
        };
      
      const useCase: CreateTeamUseCase =
        new CreateTeamUseCase(teamGateway, responder);

      return expect(useCase.createTeam({...requestPayload}))
        .to.be.eventually.fulfilled;
    });
  });
});