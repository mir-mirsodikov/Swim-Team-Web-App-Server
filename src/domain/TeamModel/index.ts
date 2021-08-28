export interface ITeam {
  uuid: string
  teamName: string
  coaches: Array<string>
  abbrNames: Array<string>
  regCode?: string
}

export class Team implements ITeam {
  constructor(
    public readonly uuid: string,
    public readonly teamName: string,
    public readonly coaches: Array<string>,
    public readonly abbrNames: Array<string>,
    public readonly regCode?: string,
  ) {}
}

export class TeamFactory {
  static createTeam(
    uuid: string,
    teamName: string,
    coaches: Array<string>,
    abbrNames: Array<string>,
    regCode?: string,
  ): Team {
    return new Team(
      uuid,
      teamName,
      coaches,
      abbrNames,
      regCode,
    );
  }
}