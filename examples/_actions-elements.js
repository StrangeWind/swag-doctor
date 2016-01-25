'use strict';

module.exports = function(ob, faker, mongoose, jwt, definitions, errors, headers){
  module.createElementsBoard = {
    name: 'Create elements board',
    description: 'Create an elements board within a given world',
    method: 'POST',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.world, ['world_id'])
        },
      },
      body: {
        elements_board: {
          example: ob.pick(definitions.elements_board, ['title'])
        },
      },
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          elements_board: {
            example: ob.pick(definitions.elements_board, ['elements_board_id', 'world_id', 'title', 'date_created', 'date_modified']),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getElementsBoards = {
    name: 'Get elements boards',
    description: 'Get all elements boards for a given world',
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
          elements_boards: {
            example: [
              ob.pick(definitions.elements_board, ['elements_board_id', 'world_id',
                'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
              ob.pick(definitions.elements_board, ['elements_board_id', 'world_id',
                'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
              ob.pick(definitions.elements_board, ['elements_board_id', 'world_id',
                'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
            ],
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getElementsBoard = {
    name: 'Get elements board',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.world, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements_board_id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.clone(definitions.elements_board)
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateElementsBoard = {
    name: 'Update elements board',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.world, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements_board_id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
      },
      body: ob.pick(definitions.elements_board, ['title', 'is_archived', 'sort_order']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.pick(definitions.elements_board, ['elements_board_id', 'world_id', 'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteElementsBoard = {
    name: 'Delete elements board',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.world, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements_board_id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_elements_board: {
            example: ob.pick(definitions.elements_board, ['elements_board_id', 'world_id'])
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createElement = {
    name: 'Create element',
    description: 'Create an element within a given elements board',
    method: 'POST',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.elements_board, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements board id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
      },
      body: {
        element: {
          example: ob.pick(definitions.element, ['title', 'content', 'color', 'attachments'])
        },
      },
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          element: {
            example: ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id', 'title', 'color', 'content', 'attachments', 'date_created', 'date_modified'])
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getElements = {
    name: 'Get elements',
    description: 'Get all elements for a given elements board',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.elements_board, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements board id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
      }
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          elements: {
            example: [
              ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id', 'title', 'color', 'content', 'attachments', 'sort_order', 'date_created', 'date_modified']),
              ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id', 'title', 'color', 'content', 'attachments', 'sort_order', 'date_created', 'date_modified']),
              ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id', 'title', 'color', 'content', 'attachments', 'sort_order', 'date_created', 'date_modified'])
            ],
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getElement = {
    name: 'Get element',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.elements_board, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements board id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
        element_id: {
          description: 'The element id',
          example: ob.pick(definitions.element, ['element_id'])
        },
      }
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          element: {
            example: ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id', 'title', 'color', 'content', 'attachments', 'sort_order', 'date_created', 'date_modified'])
          }
        }
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateElement = {
    name: 'Update element',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.elements_board, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements board id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
        element_id: {
          description: 'The element id',
          example: ob.pick(definitions.element, ['element_id'])
        },
      },
      body: ob.pick(definitions.element, ['title', 'color', 'content', 'attachments', 'sort_order'])
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id', 'title', 'color', 'content', 'attachments', 'sort_order', 'date_created', 'date_modified'])
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteElement = {
    name: 'Delete element',
    method: 'DELETE',
    headers: [headers.tokenHeader],
     params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.elements_board, ['world_id'])
        },
        elements_board_id: {
          description: 'The elements board id',
          example: ob.pick(definitions.elements_board, ['elements_board_id'])
        },
        element_id: {
          description: 'The element id',
          example: ob.pick(definitions.element, ['element_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_element: {
            example: ob.pick(definitions.element, ['element_id', 'elements_board_id', 'world_id'])
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