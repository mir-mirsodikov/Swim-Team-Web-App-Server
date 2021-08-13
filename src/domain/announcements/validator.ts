import { RuleDate, RuleString } from 'fastest-validator';

export const subject: RuleString = {
  type: 'string',
  max: 80,
};

export const body: RuleString = {
  type: 'string',
  max: 512,
};

export const date: RuleDate = {
  type: 'date',
};

export const author: RuleString = {
  type: 'string',
};

export const id: RuleString = {
  type: 'string',
  optional: true,
};

export const AnnouncementSchema = {
  subject,
  body,
  date,
  author,
  id,
};