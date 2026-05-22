import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  // PRODUCT_MS_HOST: string;
  // PRODUCT_MS_PORT: number;
  // ORDER_MS_HOST: string;
  // ORDER_MS_PORT: number;

  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    // PRODUCT_MS_HOST: joi.string().required(),
    // PRODUCT_MS_PORT: joi.number().required(),
    // ORDER_MS_HOST: joi.string().required(),
    // ORDER_MS_PORT: joi.number().required(),

    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);

const res = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (res.error) {
  throw new Error(`Config validation error: ${res.error.message}`);
}

const envVars: EnvVars = res.value as EnvVars;

export const envs = {
  port: envVars.PORT,
  // productMsHost: envVars.PRODUCT_MS_HOST,
  // productMsPort: envVars.PRODUCT_MS_PORT,
  // orderMsHost: envVars.ORDER_MS_HOST,
  // orderMsPort: envVars.ORDER_MS_PORT,

  natsService: envVars.NATS_SERVERS,
};
