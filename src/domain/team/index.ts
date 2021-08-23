export interface ITeam {
  uuid: string
  teamName: string
  coaches: Array<string>
  regCode: string
  abbrNames: Array<string>
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
    coaches: Array<string>,
    regCode: string,
    abbrNames: Array<string>,
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