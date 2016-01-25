'use strict';

module.exports = function(faker, jwt){
  module.tokenHeader = {
    key: 'Authorization',
    description: 'Authentication token is required to associate user with request',
    example: () => jwt.sign({ foo: faker.lorem.words() }, "" + faker.lorem.words()),
  };

  return module;
};