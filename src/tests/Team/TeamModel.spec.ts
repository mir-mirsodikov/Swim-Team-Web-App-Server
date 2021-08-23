import 'mocha';
import chai from 'chai';
import faker from 'faker';

const expect = chai.expect;

import { TeamFactory } from '@domain/team';

describe('Team Model Testing', () => {
  const teamName = faker.company.companyName();
  const coaches = [faker.name.findName(), faker.name.findName()];
  const uuid = faker.datatype.uuid();
  const regCode = faker.random.alphaNumeric(6);
  const abbrNames = [teamName.substring(0, 3)];

  describe('Valid model creation', () => {
    it('Was a valid model created?', () => {
      const team = TeamFactory.createTeam(
        uuid,
        teamName,
        coaches,
        regCode,
        abbrNames,
      );

      expect(team.uuid).to.be.equal(uuid);
      expect(team.teamName).to.be.equal(teamName);
      expect(team.coaches).to.be.equal(coaches);
      expect(team.regCode).to.be.equal(regCode);
      expect(team.abbrNames).to.be.equal(abbrNames);
    });
  });
});