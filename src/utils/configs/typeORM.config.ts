import * as path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
export const pgConfigDev: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_SBnpgPUk5Ms9@ep-lucky-bird-a1ez2vsq-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  type: 'postgres',
  entities: [path.resolve(__dirname, '../../entities/*.ts')],
  synchronize: true,
};
