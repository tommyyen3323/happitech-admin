/**
 * Main application routes
 */

'use strict';

const errors = require('./components/errors');

module.exports = app => {
  // Insert routes
  app.use('/api/v1/authenticate', require('./auth'));
  app.use('/api/v1/users', require('./api/v1/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*').get((req, res) => {
    res.sendFile(__dirname + '/../' + app.get('appPath') + '/index.html');
  });
};
