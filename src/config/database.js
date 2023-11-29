require('../lib/instrumentation').initEnvironment()

module.exports = {
  dialect: 'postgres',
  host: 'ec2-3-210-173-88.compute-1.amazonaws.com',
  port: 5432,
  database: 'dcji2v6o3kbgg2',
  username: 'dzwjifurzpvlzm',
  password: '9be273ec6c149ca0b5d9381d935749ae2b4afac55974c8d60b1ab88b1e4b5f60',
  logging: false,
  dialectOptions: {
        ssl: true
  }
}
