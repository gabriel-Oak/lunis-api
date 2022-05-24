import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Intention } from './models/mongodb/Intention';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const mongoDBConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  port: +process.env.MONGO_PORT,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
  entities: [Intention],
  synchronize: false,
};
