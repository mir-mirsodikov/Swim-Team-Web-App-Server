export interface ITeam {
  uuid: string
  teamName: string
  abbrNames: Array<string>
  coaches: Array<string>
  regCode: string
}

export class Team implements ITeam {
  constructor(
    public readonly uuid: string,
    public readonly teamName: string,
    public readonly coaches: Array<string>,
    public readonly regCode: string,
    public readonly abbrNames: Array<string>,
  ) {}
}

export class TeamFactory {
  static createTeam(
    uuid: string,
    teamName: string,
    abbrNames: Array<string>,
    coaches: Array<string>,
    regCode: string,
  ): Team {
    return new Team(
      uuid,
      teamName,
      coaches,
      regCode,
      abbrNames,
    );
  }
}