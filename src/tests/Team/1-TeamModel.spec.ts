import 'mocha';
import chai from 'chai';
import faker from 'faker';

const expect = chai.expect;

import { TeamFactory } from '@domain/TeamModel';

describe('Team Model Testing', () => {
  const teamName = faker.company.companyName();
  const coaches = [faker.name.findName(), faker.name.findName()];
  const uuid = faker.datatype.uuid();
  const regCode = faker.random.alphaNumeric(6);
  const abbrNames = [teamName.substring(0, 3)];
  const division = 'Division 1';
  const classification = '4A';

  describe('Valid model creation', () => {
    it('Was a valid model created?', () => {
      const team = TeamFactory.createTeam(
        uuid,
        teamName,
        division,
        classification,
        coaches,
        abbrNames,
        regCode,
      );

      expect(team.uuid).to.be.equal(uuid);
      expect(team.teamName).to.be.equal(teamName);
      expect(team.division).to.be.equal(division);
      expect(team.classification).to.be.equal(classification);
      expect(team.regCode).to.be.equal(regCode);
      expect(team.abbrNames).to.be.equal(abbrNames);
    });
  });
});