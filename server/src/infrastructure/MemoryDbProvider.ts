import { MongoSchemas } from '@db/interfaces';
import { MongoModels } from '@db/ModelProvider';
import { IAnnouncementGateway } from '@domain/interfaces';
import AnnouncementGateway from './AnnouncementGateway';
import { IGatewayProvider } from './interfaces';

class MemoryDbProvider implements IGatewayProvider {
  private _announcement?: IAnnouncementGateway;

  public get announcement(): IAnnouncementGateway {
    return this._announcement ?? new AnnouncementGateway();
  }
}

export default MemoryDbProvider;