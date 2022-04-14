import { DataSource } from "typeorm";

export default new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: isNaN(parseInt(process.env.DB_PORT || "")) ? 3306 : parseInt(process.env.DB_PORT || "0"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || "gold_moon",
  synchronize: true,
  logging: false,
  migrations: [`${__dirname}/migration/*.ts`],
});
