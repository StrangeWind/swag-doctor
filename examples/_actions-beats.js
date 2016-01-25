'use strict';

module.exports = function(ob, faker, mongoose, jwt, definitions, errors, headers){
  module.createBeatsBoard = {
    name: 'Create beats board',
    description: 'Create an beats board within a given world',
    method: 'POST',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
      },
      body: {
        beats_board: {
          example: ob.pick(definitions.beats_board, ['title'])
        },
      },
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          beats_board: {
            example: ob.pick(definitions.beats_board, ['beats_board_id', 'world_id', 'title', 'date_created', 'date_modified']),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getBeatsBoards = {
    name: 'Get beats boards',
    description: 'Get all beats boards for a given world',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          beats_boards: {
            example: [
              ob.pick(definitions.beats_board, ['beats_board_id', 'world_id',
                'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
              ob.pick(definitions.beats_board, ['beats_board_id', 'world_id',
                'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
              ob.pick(definitions.beats_board, ['beats_board_id', 'world_id',
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

  module.getBeatsBoard = {
    name: 'Get beats board',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.clone(definitions.beats_board)
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateBeatsBoard = {
    name: 'Update beats board',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      },
      body: ob.pick(definitions.beats_board, ['title', 'is_archived', 'sort_order']),
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.pick(definitions.beats_board, ['beats_board_id', 'world_id', 'title', 'is_archived', 'sort_order', 'date_created', 'date_modified']),
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteBeatsBoard = {
    name: 'Delete beats board',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_beats_board: {
            example: ob.pick(definitions.beats_board, ['beats_board_id', 'world_id'])
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createBeatsBoardDivider = {
    name: 'Create beats board divider',
    description: 'Create a divider within a given beats board',
    method: 'POST',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      },
      body: {
        beats_divider: {
          example: ob.pick(definitions.divider, ['title'])
        },
      },
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          beats_divider: {
            example: ob.pick(definitions.divider, ['divider_id', 'parent_type', 'parent_id', 'title', 'date_created', 'date_modified'])
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getBeatsBoardDividers = {
    name: 'Get beats board dividers',
    description: 'Get all dividers for a given beats board',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      }
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          dividers: {
            example: [
              ob.clone(definitions.divider),
              ob.clone(definitions.divider),
              ob.clone(definitions.divider),
            ],
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getBeatsBoardDivider = {
    name: 'Get beats board divider',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
        divider_id: {
          description: 'The divider id',
          example: ob.pick(definitions.divider, ['divider_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          divider: {
            example: ob.clone(definitions.divider),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateBeatsBoardDivider = {
    name: 'Update beats board divider',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
        divider_id: {
          description: 'The divider id',
          example: ob.pick(definitions.divider, ['divider_id'])
        },
      },
      body: ob.pick(definitions.divider, ['title', 'sort_order'])
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.clone(definitions.divider),
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteBeatsBoardDivider = {
    name: 'Delete beats board divider',
    method: 'DELETE',
    headers: [headers.tokenHeader],
     params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
        divider_id: {
          description: 'The divider id',
          example: ob.pick(definitions.divider, ['divider_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_divider: {
            example: ob.pick(definitions.divider, ['divider_id', 'parent_type', 'parent_id'])
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createBeatsBoardCard = {
    name: 'Create beats board card',
    description: 'Create a beats board card within a given beats board',
    method: 'POST',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      },
      body: {
        beats_card: {
          example: ob.pick(definitions.card, ['title'])
        },
      },
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: {
          beats_card: {
            example: ob.pick(definitions.card, ['card_id', 'parent_type', 'parent_id', 'title', 'date_created', 'date_modified'])
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getBeatsBoardCards = {
    name: 'Get beats board cards',
    description: 'Get all cards for a given beats board',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
      }
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          cards: {
            example: [
              ob.clone(definitions.card),
              ob.clone(definitions.card),
              ob.clone(definitions.card),
            ],
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getBeatsBoardCard = {
    name: 'Get beats board card',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
        card_id: {
          description: 'The card id',
          example: ob.pick(definitions.card, ['card_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          card: {
            example: ob.clone(definitions.card),
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateBeatsBoardCard = {
    name: 'Update beats board card',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
        card_id: {
          description: 'The card id',
          example: ob.pick(definitions.card, ['card_id'])
        },
      },
      body: ob.pick(definitions.card, ['title', 'sort_order'])
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.clone(definitions.card),
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteBeatsBoardCard = {
    name: 'Delete beats board card',
    method: 'DELETE',
    headers: [headers.tokenHeader],
     params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.beats_board, ['world_id'])
        },
        beats_board_id: {
          description: 'The beats board id',
          example: ob.pick(definitions.beats_board, ['beats_board_id'])
        },
        card_id: {
          description: 'The card id',
          example: ob.pick(definitions.card, ['card_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_card: {
            example: ob.pick(definitions.card, ['card_id', 'parent_type', 'parent_id'])
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