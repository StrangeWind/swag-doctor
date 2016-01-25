'use strict';

module.exports = function(ob, faker, mongoose, jwt, definitions, errors, headers){
  module.signInFieldErrors = ob.pick(definitions.user, ['email', 'password']);
  module.signInFieldErrors.email.description = 'An array of errors about the email address';
  module.signInFieldErrors.password.description = 'An array of errors about the password';
  module.signInFieldErrors.email.example = ['There is no account with this email address'];
  module.signInFieldErrors.password.example = ['Your password was invalid'];

  module.signIn = {
    name: 'Authenticate a user',
    method: 'POST',
    params: {
      body: {
        user: {
          example: ob.pick(definitions.user, ['email','password']),
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          token: definitions.token,
        },
      },
      {
        name: 'Field Errors',
        status: 400,
        body: {
          errors: {
            example: module.signInFieldErrors,
          },
        },
      },
      errors.unauthorizedError,
    ],
  };

  module.createUserBody = ob.pick(definitions.user, ['name', 'email', 'username', 'password']);
  module.createUserBody.name.optional = true;

  module.createUserFieldErrorsBody = ob.omit(definitions.user, ['date_created','date_modified', 'user_id']);
  for (let i in module.createUserFieldErrorsBody) {
    module.createUserFieldErrorsBody[i].description = ['Descriptive Errors about this field. There could be more than one since it\'s in an array'];
    module.createUserFieldErrorsBody[i].example = ['Error message one', 'Error message two'];
  }

  module.createUser = {
    name: 'Create user',
    method: 'POST',
    description: 'Allows someone to create a user',
    params: {
      body: {user: {example: module.createUserBody}},
    },
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          user: {
            example: ob.pick(definitions.user, ['user_id','name', 'email', 'username', 'date_created', 'date_modified']),
          },
          token: definitions.token,
        },
      },
      {
        name: 'Field Errors',
        status: 400,
        body: {
          errors: {
            example: module.createUserFieldErrorsBody,
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getUser = {
    name: 'Get user',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(definitions.user, ['user_id']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          user: {
            example: ob.pick(definitions.user, ['user_id','name', 'username']),
          },
        },
      },
      errors.notFoundError,
    ],
  };

  module.updateUserBody = ob.pick(definitions.user, ['name', 'email', 'username']);
  module.updateUserBody.name.optional = true;
  module.updateUserBody.email.optional = true;
  module.updateUserBody.username.optional = true;

  module.updateUser = {
    name: 'Update user',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(definitions.user, ['user_id']),
      body: {
        user: {
          example: module.updateUserBody,
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          user: {
            example: ob.pick(definitions.user, ['user_id','name', 'email', 'username', 'date_created', 'date_modified']),
          },
          token: definitions.token,
        },
      },
      {
        name: 'Field Errors',
        status: 400,
        body: {
          errors: {
            example: module.createUserFieldErrorsBody,
          },
        },
      },
    ],
    headers: [headers.tokenHeader],
  };

  module.deleteUser = {
    name: 'Delete user',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(definitions.user, ['user_id']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_id: {
            description: 'The ID of the deleted user',
            example: () => mongoose.Types.ObjectId(),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  return module;
};