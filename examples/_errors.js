'use strict';

module.exports = {
  unauthorizedError: {
    name: 'Unauthorized Error',
    status: 401,
    body: {
      errors: {
        example: {
          unauthorized: {
            description: 'An array of messages stating that a user is not authorized',
            example: ['You are not authorized'],
          },
        },
      },
    },
  },

  permissionsError: {
    name: 'Permissions Error',
    status: 403,
    body: {
      errors: {
        example: {
          permissions: {
            example: ['You do not have permissions to perform this action'],
            description: 'An array of messages about a user\'s permission errors',
          },
        },
      },
    },
  },

  notFoundError: {
    name: 'Not found',
    status: 404,
    body: 'Not found',
  },
};