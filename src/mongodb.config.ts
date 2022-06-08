import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Intention } from './models/mongodb/Intention';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DATABASE,
} = process.env;

export const mongoDBConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}${
    MONGO_PORT ? `:${MONGO_PORT}` : ''
  }/${MONGO_DATABASE}?retryWrites=true&w=majority`,
  entities: [Intention],
  synchronize: false,
};
