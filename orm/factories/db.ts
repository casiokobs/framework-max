import pgPromise from 'pg-promise';

const pgp = pgPromise();
const connectionObject = {
  host: localhost,
  port: 5432,
  database: teste,
  user: admin,
  password: 123
};
export const db = pgp(connectionObject);
