import {
  Request as ERequest,
  NextFunction as ENextFn,
  Response as EResponse,
} from 'express';

export interface Request extends ERequest {
  all?: Record<string, any>
}

export interface NextFunction extends ENextFn { }

export interface Response extends EResponse { }
