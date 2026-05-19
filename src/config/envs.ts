import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCT_MS_HOST: string;
  PRODUCT_MS_PORT: number;
  ORDER_MS_HOST: string;
  ORDER_MS_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    PRODUCT_MS_HOST: joi.string().required(),
    PRODUCT_MS_PORT: joi.number().required(),
    ORDER_MS_HOST: joi.string().required(),
    ORDER_MS_PORT: joi.number().required(),
  })
  .unknown(true);

const res = envsSchema.validate(process.env);

if (res.error) {
  throw new Error(`Config validation error: ${res.error.message}`);
}

const envVars: EnvVars = res.value as EnvVars;

export const envs = {
  port: envVars.PORT,
  productMsHost: envVars.PRODUCT_MS_HOST,
  productMsPort: envVars.PRODUCT_MS_PORT,
  orderMsHost: envVars.ORDER_MS_HOST,
  orderMsPort: envVars.ORDER_MS_PORT,
};
