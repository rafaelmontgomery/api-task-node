
// TODO: USE Dotenv
//Configure DB
module.exports = {
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: 'admin',
  database: 'mydb',
  define: {
    timestamps: false // not use createdAt and updatedAt
  },
};