export abstract class DomainError extends Error {
  constructor(
    message: string,
    public readonly details?: string,
  ) { 
    super(message);
  }
}

export class MissingAttributeError extends DomainError {}
export class InvalidAttributeError extends DomainError {}