import { RuleString, RuleDate } from "fastest-validator";

export const subject: RuleString = {
    type: 'string',
    optional: false,
    max: 60
};

export const body: RuleString = {
    type: 'string',
    optional: false,
    max: 300
};

export const date: RuleDate = {
    type: 'date',
    optional: true
};