import * as path from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
export default (): PostgresConnectionOptions => ({
  url: process.env.DbUrl,
  type: 'postgres',
  entities: [path.resolve(__dirname, '../entities/*.ts')],
  synchronize: true,
});
