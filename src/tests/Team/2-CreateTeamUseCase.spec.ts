import 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import faker from 'faker';
import { 
  ICreateTeamRequest,
  ICreateTeamResponder,
  ICreateTeamResponse
} from '@application/interfaces/team';
import { CreateTeamUseCase } from '@application/Team/CreateTeamUseCase';
import { MockTeamGateway } from 'tests/mocks/TeamGateway.mock';

const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Test use case CreateNewTeam', () => {
  const teamName = faker.company.companyName();
  const coaches = [faker.name.findName(), faker.name.findName()];
  const uuid = faker.datatype.uuid();
  const regCode = faker.random.alphaNumeric(6);
  const abbrNames = [teamName.substring(0, 3)];
  const division = 'Division 2';
  const classification = '3A';

  const teamGateway = new MockTeamGateway();
  const requestPayload: ICreateTeamRequest = {
    uuid,
    teamName,
    division,
    classification,
    coaches,
    abbrNames,
    regCode,
  };

  describe('Valid create use cases', () => {
    it('Did the use case create a new team?', () => {
      const responder: ICreateTeamResponder = 
        (response: ICreateTeamResponse) => {
          expect(response.uuid).to.be.equal(uuid, 'UUID mismatch');
          expect(response.teamName).to.be.equal(teamName, 'Team name mismatch');
          expect(response.division).to.be.equal(division, 'Division mismatch');
          expect(response.classification).to.be.equal(classification, 'Classification mismatch');
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