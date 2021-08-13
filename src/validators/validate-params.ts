import FastestValidator, { ValidationSchema } from 'fastest-validator';

const validator = new FastestValidator();

function validateProperties(
  validationSchema: ValidationSchema,
) {
  const check = validator.compile(validationSchema);
}