'use strict';

module.exports = function(ob, faker, mongoose, jwt, definitions, errors, headers){
  module.createWorldBody = ob.pick(definitions.world, ['title', 'color']);
  module.createWorldBody.color.optional = true;
  module.createWorld = {
    name: 'Create world',
    method: 'POST',
    description: 'Allows user to create a world',
    headers: [headers.tokenHeader],
    params: {
      body: {
        world: {
          example: module.createWorldBody
        },
      },
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          world: {
            example: ob.pick(definitions.world, ['world_id', 'title', 'color', 'date_created', 'date_modified']),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getWorlds = {
    name: 'Get all worlds for current user',
    description: 'Returns all worlds for the currently logged-in user',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          worlds: {
            example: [definitions.world, definitions.world, definitions.world],
          },
        },
      },
    ],
  };

  module.getWorld = {
    name: 'Get world',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.world, ['world_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          world: {
            example: definitions.world,
          },
        },
      },
      errors.notFoundError,
    ],
  };

  module.updateWorldBody = ob.pick(definitions.world, ['world_id', 'title', 'color', 'sort_order', 'is_archived']);
  module.updateWorldBody.title.optional = true;
  module.updateWorldBody.color.optional = true;
  module.updateWorldBody.sort_order.optional = true;
  module.updateWorldBody.is_archived.optional = true;

  module.updateWorld = {
    name: 'Update world',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(definitions.world, ['world_id']),
      body: module.updateWorldBody,
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          world: {
            example: ob.pick(definitions.world, ['world_id', 'title', 'color', 'sort_order', 'is_archived', 'date_modified']),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteWorld = {
    name: 'Delete world',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(definitions.world, ['world_id']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_world: {
            description: 'The ID of the deleted world',
            example: () => mongoose.Types.ObjectId(),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.addWorldUserProperties = ob.merge(
    {
      'access': {
        description: "Indicates if a user should be granted read-only or write access",
        example: () => faker.random.arrayElement(["read", "write"])
      }
    },
    ob.merge(ob.pick(definitions.user, ['user_id']), ob.pick(definitions.world, ['world_id']))
  );
  module.addWorldUser = {
    name: 'Add world user',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(module.addWorldUserProperties, ['world_id']),
      body: ob.pick(module.addWorldUserProperties, ['access', 'user_id']),
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          world_user: {
            example: module.addWorldUserProperties,
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getWorldUsers = {
    name: 'Get world users',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: ob.pick(definitions.world, ['world_id']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          world_users: {
            example: ob.pick(definitions.world, ['owner_id', 'writers', 'readers']),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateWorldUser = {
    name: 'Update world user',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: ob.merge(ob.pick(definitions.world, ['world_id']), ob.pick(definitions.user, ['user_id'])),
      body: ob.pick(module.addWorldUserProperties, ['access']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          world_user: {
            example: module.addWorldUserProperties,
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.removeWorldUser = {
    name: 'Remove world user',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    params: {
      url: ob.merge(ob.pick(definitions.world, ['world_id']), ob.pick(definitions.user, ['user_id'])),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          removed_id: {
            example: () => mongoose.Types.ObjectId(),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.toggleGlobalWorld = {
    name: 'Toggle global world',
    description: 'This endpoint allows an admin to toggle a world\'s global indicator',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      body: ob.pick(definitions.world, ['world_id']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          world: {
            description: 'The world id and global status<br><strong><small>NOTE:</small></strong> Example Response may incorrectly show <code>false</code> for <code>is_global</code>',
            example: ob.pick(definitions.world, ['world_id', 'is_global']),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getGlobalWorlds = {
    name: 'Get all global worlds',
    description: 'This endpoint allows an admin to retrieve a list of global worlds',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          worlds: {
            description: 'The global worlds<br><strong><small>NOTE:</small></strong> Example Response may incorrectly show <code>false</code> for <code>is_global</code>',
            example: [
              ob.omit(definitions.world, ['writers', 'readers']),
              ob.omit(definitions.world, ['writers', 'readers']),
              ob.omit(definitions.world, ['writers', 'readers']),
            ],
          },
        },
      },
    ],
  };

  return module;
};