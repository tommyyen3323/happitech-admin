// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/environment');
const User = require('./api/v1/user/user.model');

const conn = mongoose.connect(config.mongo.uri, config.mongo.options, err => {
  mongoose.connection.db.dropDatabase();

  User.create(
    {
      name: 'justin',
      email: 'justin@happitech.com',
      role: 'admin',
      password: 'password'
    },
    {
      name: 'martin',
      email: 'martin@happitech.com',
      role: 'manager',
      password: 'password'
    },
    {
      name: 'tester',
      email: 'tester@happitech.com',
      password: 'password'
    },
    {
      name: 'bobby',
      email: 'bobby@happitech.com',
      password: 'password'
    },
    () => {
      console.log('Finished populating users.');
    }
  );
});
