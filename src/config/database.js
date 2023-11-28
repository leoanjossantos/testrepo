require('../lib/instrumentation').initEnvironment()

module.exports = {
  dialect: process.env.DB_POSTGRESS_DIALECT,
  host: process.env.DB_POSTGRESS_HOST,
  port: process.env.DB_POSTGRESS_PORT,
  database: process.env.DB_POSTGRESS_DATABASE,
  username: process.env.DB_POSTGRESS_USERNAME,
  password: process.env.DB_POSTGRESS_PASSWORD,
  logging: false,
  dialectOptions: {
        ssl: true
  }
}
