import { TypeOrmModule } from '@nestjs/typeorm';
import { Intention } from './models/mongodb/Intention';

export const mongodbRoot = TypeOrmModule.forRoot({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: 'api',
  password: 'api123',
  database: 'lunis',
  entities: [Intention],
  synchronize: false,
});
