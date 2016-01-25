'use_strict';

module.exports = function(ob, faker, mongoose, jwt, definitions, errors, headers){
  module.createCharacterBody = ob.pick(definitions.character, ['primary_name', 'aliases', 'avatar','cover_image']);
  module.createCharacterBody.aliases.optional = true,
  module.createCharacterBody.avatar.optional = true,
  module.createCharacterBody.cover_image.optional = true
  module.createCharacterResponse = ob.pick(definitions.character, ['character_id', 'world_id', 'primary_name', 'aliases', 'avatar','cover_image', 'is_archived', 'sort_order', 'date_created', 'date_modified']);
  module.createCharacter = {
    name: 'Create character',
    description: 'Create a character in a given world',
    method: 'POST',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.character, ['world_id'])
        },
      },
      body: module.createCharacterBody,
    },
    responses: [
      {
        name: 'Created',
        status: 201,
        body: ob.omit(module.createCharacterResponse, ['is_archived', 'sort_order'])
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacters = {
    name: 'Get characters',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.character, ['world_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          characters: {
            example: [
              ob.omit(module.createCharacterResponse, ['aliases', 'cover_image']),
              ob.omit(module.createCharacterResponse, ['aliases', 'cover_image']),
              ob.omit(module.createCharacterResponse, ['aliases', 'cover_image']),
              ob.omit(module.createCharacterResponse, ['aliases', 'cover_image']),
              ob.omit(module.createCharacterResponse, ['aliases', 'cover_image']),
            ],
          },
        },
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacter = {
    name: 'Get character',
    method: 'GET',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.character, ['world_id'])
        },
        character_id: {
          description: 'The character id',
          example: ob.pick(definitions.character, ['character_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          character: {
            example: ob.clone(definitions.character),
          },
        }
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterBody = ob.pick(module.createCharacterResponse, ['primary_name', 'aliases', 'avatar','cover_image', 'is_archived', 'sort_order']);
  module.updateCharacterBody.primary_name.optional = true,
  module.updateCharacterBody.aliases.optional = true,
  module.updateCharacterBody.avatar.optional = true,
  module.updateCharacterBody.cover_image.optional = true,
  module.updateCharacterBody.is_archived.optional = true,
  module.updateCharacterBody.sort_order.optional = true,

  module.updateCharacter = {
    name: 'Update character',
    method: 'PUT',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.character, ['world_id'])
        },
        character_id: {
          description: 'The character id',
          example: ob.pick(definitions.character, ['character_id'])
        },
      },
      body: module.updateCharacterBody
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: ob.clone(module.createCharacterResponse)
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacter = {
    name: 'Delete character',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    params: {
      url: {
        world_id: {
          description: 'The world id',
          example: ob.pick(definitions.character, ['world_id'])
        },
        character_id: {
          description: 'The character id',
          example: ob.pick(definitions.character, ['character_id'])
        },
      },
    },
    responses: [
      {
        name: 'Success',
        status: 200,
        body: {
          deleted_character: {
            example: ob.pick(definitions.character, ['character_id', 'world_id'])
          },
        }
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createCharacterBioDivider = {
    name: 'Create character bio divider',
    method: 'POST',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterBioDividers = {
    name: 'Get character bio dividers',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterBioDivider = {
    name: 'Get character bio divider',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterBioDivider = {
    name: 'Update character bio divider',
    method: 'PUT',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacterBioDivider = {
    name: 'Delete character bio divider',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createCharacterBioCard = {
    name: 'Create character bio card',
    method: 'POST',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterBioCards = {
    name: 'Get character bio cards',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterBioCard = {
    name: 'Get character bio card',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterBioCard = {
    name: 'Update character bio card',
    method: 'PUT',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacterBioCard = {
    name: 'Delete character bio card',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createCharacterAttribute = {
    name: 'Create character attribute',
    method: 'POST',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterAttributes = {
    name: 'Get character attributes',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterAttribute = {
    name: 'Get character attribute',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterAttribute = {
    name: 'Update character attribute',
    method: 'PUT',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacterAttribute = {
    name: 'Delete character attribute',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createCharacterGene = {
    name: 'Create character gene',
    method: 'POST',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterGenes = {
    name: 'Get character genes',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterGene = {
    name: 'Get character gene',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterGene = {
    name: 'Update character gene',
    method: 'PUT',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacterGene = {
    name: 'Delete character gene',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createCharacterRelationship = {
    name: 'Create character relationship',
    method: 'POST',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterRelationships = {
    name: 'Get character relationships',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterRelationship = {
    name: 'Get character relationship',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterRelationship = {
    name: 'Update character relationship',
    method: 'PUT',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacterRelationship = {
    name: 'Delete character relationship',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.createCharacterGallery = {
    name: 'Create character gallery',
    method: 'POST',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Created',
        status: 201,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterGalleries = {
    name: 'Get character galleries',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.getCharacterGallery = {
    name: 'Get character gallery',
    method: 'GET',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.updateCharacterGallery = {
    name: 'Update character gallery',
    method: 'PUT',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  module.deleteCharacterGallery = {
    name: 'Delete character gallery',
    method: 'DELETE',
    headers: [headers.tokenHeader],
    responses: [
      {
        name: 'Success',
        status: 200,
      },
      errors.unauthorizedError,
      errors.permissionsError,
      errors.notFoundError,
    ],
  };

  return module;
};