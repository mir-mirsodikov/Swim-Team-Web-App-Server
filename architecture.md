<h1>Clean Architecture</h1>

- [Domain](#domain)
  - [Model Creation](#model-creation)
  - [Domain Gateway Interfaces](#domain-gateway-interfaces)
- [Application (Use Cases)](#application-use-cases)
  - [Request Interface and Use Case](#request-interface-and-use-case)
  - [Response Interface and Use Case](#response-interface-and-use-case)
  - [Use Cases](#use-cases)
- [Gateways](#gateways)

![](CleanArchitecture.jpeg)
# Domain
The models/interfaces for each business rule.

1. Create an interface for each item
2. Build a "base" class that implements the interface
   1. If needed, create other classes that extend the base class
3. Create a factory class with a function that returns a new object of the interface type

## Model Creation
``` ts
// domain/vehicle/index.ts

export interface IVehicle {
  brand: string,
  make: string,
  trim?: string,
}

export class VehicleModel implements IVehicle {
  constructor(
    public readonly brand: string,
    public readonly make: string,
    public readonly trim?: string
  ) {

  }
}

export class VehicleFactory {
  static createVehicle(
    brand: string,
    make: string,
    trim?: string
  ): VehicleModel {
    return new VehicleModel(
      brand,
      make,
      trim
    );
  }
}
```

## Domain Gateway Interfaces
A folder for interfaces where the Gateways are declared.

Gateways are for use cases to interact with data/domain

i.e.

``` ts
// domain/interfaces/index.ts

import VehicleModel from '@model/vehicle'

export interface IVehicleGateway {
  createVehicle(
    vehicle: VehicleModel
  ): Promise<VehicleModel>;

  deleteVehicle(
    vehicle: VehicleModel
  ): Promise<VehicleModel>;
}
```

# Application (Use Cases)
The models created in the domain are now given use cases.  
Each use case interacts with data using the appropriate gateway for the model.

Define a folder of interfaces that contain an interfaces for the different models.  
These interfaces define request and responses for the models.  

---

## Request Interface and Use Case
A request interface is written as a template for the data that would be sent to the desired endpoint.  
The request interface is then used as a parameter type for a function in a use case interface. This function then completes its given endpoint task. 

``` ts
// application/interfaces/vehicle.d.ts

/*
  Create Vehicle Use Case
*/
export interface ICreateVehicleRequest {
  brand: string,
  make: string,
  trim?: string,
}

export interface ICreateVehicleUseCase {
  createVehicle(
    dto: ICreateVehicleRequest
  ): Promise<void>;
}
```

---

## Response Interface and Use Case
Much like the request, an interface is made for the response to the request.  
The response interface is then used as a parameter type in a function in a responder interface.

``` ts
// application/interfaces/vehicle.d.ts

/*
  Create Vehicle Use Case
*/
export interface ICreateVehicleResponse extends ICreateVehicleRequest {}

export interface ICreateVehicleResponder {
  (payload: ICreateVehicleResponse): void;
}
```

---

## Use Cases
There is a use case file and class for each use case declared for the request types in the interface file.  
For example, there was a `ICreateVehicleUseCase` above, and so there will be a use case class that implements this interface.  

Into this file, several modules are imported: 
- Factory class made for the model
- Gateway for the model
- The request interface and use case
- The response interface and responder

``` ts
// application/vehicle/CreateVehicleUseCase.ts
import { VehicleFactory } from '@domain/vehicle';
import { IVehicleGateway } from '@domain/interfaces';
import {
  ICreateVehicleRequest,  
  ICreateVehicleUseCase,
  ICreateVehicleResponse,
  ICreateVehicleResponder,
} from '@application/interfaces/vehicle.d.ts';

export class CreateVehicleUseCase implements ICreateVehicleUseCase {
  constructor(
    private gateway: IVehicleGateway,
    private useCaseResponse: ICreateVehicleResponder,
  ) {}

  async createVehicle(dto: ICreateVehicleRequest): Promise<void> {
    const { brand, make, trim } = dto;

    const Vehicle = VehicleFactory.createVehicle(
      brand,
      make,
      trim,
    );

    const newModel = await this.gateway.createVehicle(Vehicle);

    const response: ICreateVehicleResponse = {
      brand,
      make,
      trim,
    };

    this.useCaseResponse(response);
  }
}
```

---

# Gateways

The gateways interfaces created in the domain are now implemented in this folder. 

