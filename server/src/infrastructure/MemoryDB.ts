import { MongoSchemas } from '@db/interfaces';

export abstract class MemoryDB<T> {
  constructor(private readonly dbSchemas: MongoSchemas) {
    this.setup();
  }

  abstract setup(): void;
}