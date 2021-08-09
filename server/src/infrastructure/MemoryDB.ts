export type MemoryDbTable<T> = Record<string, T>

export abstract class MemoryDB<T> {
  protected table: MemoryDbTable<T> = {};

  constructor() {
    this.setup();
  }

  abstract setup(): void;
}