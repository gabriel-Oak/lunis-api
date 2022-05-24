import { TypeOrmModule } from '@nestjs/typeorm';
import { Intention } from './models/mongodb/Intention';

export const mongodbRoot = TypeOrmModule.forRoot({
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  port: +process.env.MONGO_PORT,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
  entities: [Intention],
  synchronize: false,
});
