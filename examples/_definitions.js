'use strict';

module.exports = function(ob, faker, mongoose, jwt){
  module.token = {
    description: 'Authentication token for a user',
    example: () => jwt.sign({ foo: faker.lorem.words() }, "" + faker.lorem.words())
  };

  module.user = {
    'user_id': {
      description: 'The user id',
      example: () => mongoose.Types.ObjectId()
    },
    'name': {
      description: 'The user name',
      example: () => faker.name.firstName() + ' ' + faker.name.lastName()
    },
    'email':{
      description: 'The user email address',
      example: () => faker.internet.email()
    },
    'username': {
      description: 'The username',
      example: () => faker.internet.userName()
    },
    'password': {
      description: 'The password',
      example: () => faker.lorem.sentence()
    },
    'last_login': {
      description: 'Last login timestamp',
      example: () => faker.date.future()
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  module.world = {
    'world_id': {
      description: 'The world id',
      example: () => mongoose.Types.ObjectId()
    },
    'title': {
      description: 'The title for the world',
      example: () => faker.lorem.sentence()
    },
    'color': {
      description: 'A color hex code for the world',
      example: () => faker.internet.color()
    },
    'owner_id': {
      description: 'The id of the user who owns the world',
      example: () => mongoose.Types.ObjectId()
    },
    'writers': {
      description: 'All the users who have write access to the world',
      example: [
        ob.pick(module.user, ['user_id', 'username', 'name', 'email']),
        ob.pick(module.user, ['user_id', 'username', 'name', 'email']),
        ob.pick(module.user, ['user_id', 'username', 'name', 'email']),
      ]
    },
    'readers': {
      description: 'All the users who have read-only access to the world',
      example: [
        ob.pick(module.user, ['user_id', 'username', 'name', 'email']),
        ob.pick(module.user, ['user_id', 'username', 'name', 'email']),
        ob.pick(module.user, ['user_id', 'username', 'name', 'email']),
      ]
    },
    'is_global': {
      description: 'Whether or not the world is global',
      example: () => faker.random.arrayElement([true, false])
    },
    'is_archived': {
      description: 'Whether or not the world is archived',
      example: () => faker.random.arrayElement([true, false])
    },
    'sort_order' : {
      description: 'Sort order for the world',
      example: () => faker.random.number(9)
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  module.attribute = {
    'attribute_id': {
      description: 'The attribute id',
      example: () => mongoose.Types.ObjectId()
    },
    'key': {
      description: 'The key for the attribute pair',
      example: () => faker.lorem.sentence(1, 0)
    },
    'value': {
      description: 'The value for the attribute pair',
      example: () => faker.lorem.sentence(3, 2)
    }
  };

  module.gene = {
    'gene_id': {
      description: 'The gene id',
      example: () => mongoose.Types.ObjectId()
    },
    'question': {
      description: 'The question',
      example: () => faker.lorem.sentence()
    },
    'answer': {
      description: 'The answer',
      example: () => faker.lorem.sentence()
    }
  };

  module.relationship = {
    'relationship_id': {
      description: 'The relationship id',
      example: () => mongoose.Types.ObjectId()
    },
    'character_ids': {
      description: 'An array containing a pair of character ids',
      example: [
        () => mongoose.Types.ObjectId(),
        () => mongoose.Types.ObjectId()
      ]
    },
    'content': {
      description: 'Content describing the relationship',
      example: () => faker.lorem.paragraph(),
    },
  };

  module.gallery = {
    'gallery_id': {
      description: 'The gallery id',
      example: () => mongoose.Types.ObjectId()
    },
    'images': {
      description: 'An array containing gallery images',
      example: [
        faker.image.imageUrl(),
        faker.image.imageUrl(),
        faker.image.imageUrl(),
      ]
    },
  };

  module.element = {
    'element_id': {
      description: 'The element id',
      example: () => mongoose.Types.ObjectId()
    },
    'elements_board_id': {
      description: 'The id of the elements board to which the element belongs',
      example: () => mongoose.Types.ObjectId()
    },
    'world_id': {
      description: 'The world id',
      example: () => mongoose.Types.ObjectId()
    },
    'title': {
      description: 'The title for the element',
      example: () => faker.lorem.sentence()
    },
    'color': {
      description: 'A color hex code for the element',
      example: () => faker.internet.color()
    },
    'content': {
      description: 'Content for the element',
      example: () => faker.lorem.paragraph(),
    },
    'attachments': {
      description: 'An array of media attached to the element',
      example: ['TODO', 'TODO', 'TODO']
    },
    'sort_order' : {
      description: 'Sort order for the element',
      example: () => faker.random.number(99)
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  module.elements_board = {
      'elements_board_id': {
        description: 'The elements board id',
        example: () => mongoose.Types.ObjectId()
      },
      'world_id': {
        description: 'The the id of the world to which the elements board belongs',
        example: () => mongoose.Types.ObjectId()
      },
      'title': {
        description: 'The title for the elements board',
        example: () => faker.lorem.sentence()
      },
      'elements': {
        description: 'An array of element cards belonging to the elements board',
        example: [
          ob.omit(module.element, ['elements_board_id']),
          ob.omit(module.element, ['elements_board_id']),
          ob.omit(module.element, ['elements_board_id']),
        ],
      },
      'is_archived': {
        description: 'Whether or not the elements board has been archived',
        example: () => faker.random.arrayElement([true, false])
      },
      'sort_order' : {
        description: 'Sort order for the elements board',
        example: () => faker.random.number(99)
      },
      'date_created': {
        description: 'Date created',
        example: () => faker.date.future()
      },
      'date_modified': {
        description: 'Date modified',
        example: () => faker.date.future()
      },
  };

  module.beats_board = {
    'beats_board_id': {
      description: 'The beats board id',
      example: () => mongoose.Types.ObjectId()
    },
    'world_id': {
      description: 'The the id of the world to which the beats board belongs',
      example: () => mongoose.Types.ObjectId()
    },
    'title': {
      description: 'The title for the beats board',
      example: () => faker.lorem.sentence()
    },
    'beats': {
      description: 'An array of dividers and cards belonging to the beats board',
      example: 'TODO'
    },
    'is_archived': {
      description: 'Whether or not the beats board has been archived',
      example: () => faker.random.arrayElement([true, false])
    },
    'sort_order' : {
      description: 'Sort order for the beats board',
      example: () => faker.random.number(99)
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  module.dividerCharacter = {
    'character_id': {
      description: 'The character id',
      example: () => mongoose.Types.ObjectId(),
    },
    'primary_name': {
      description: 'The primary name for the character',
      example: () => faker.name.firstName() + ' ' + faker.name.lastName()
    },
    'avatar': {
      description: 'The url for the character avatar image',
      example: () => faker.image.imageUrl()
    },
  }
  module.divider = {
    'divider_id': {
      description: 'The divider id',
      example: () => mongoose.Types.ObjectId()
    },
    'parent_type': {
      description: 'The type of parent the divider belongs to',
      example: () => faker.random.arrayElement(["beats_board", "bio"])
    },
    'parent_id': {
      description: 'The id of the divider parent',
      example: () => mongoose.Types.ObjectId()
    },
    'title': {
      description: 'The title for the divider',
      example: () => faker.lorem.sentence()
    },
    'characters': {
      description: 'An array of characters associated with the divider',
      example: [
        ob.clone(module.dividerCharacter),
        ob.clone(module.dividerCharacter),
        ob.clone(module.dividerCharacter),
      ],
    },
    'elements': {
      description: 'An array of elements associated with the divider',
      example: [
        ob.pick(module.element, ['element_id', 'title']),
        ob.pick(module.element, ['element_id', 'title']),
        ob.pick(module.element, ['element_id', 'title']),
      ]
    },
    'sort_order' : {
      description: 'Sort order for the divider',
      example: () => faker.random.number(99)
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  module.card = {
    'card_id': {
      description: 'The card id',
      example: () => mongoose.Types.ObjectId()
    },
    'parent_type': {
      description: 'The type of parent the card belongs to',
      example: () => faker.random.arrayElement(["beats_board", "bio"])
    },
    'parent_id': {
      description: 'The id of the card parent',
      example: () => mongoose.Types.ObjectId()
    },
    'content': {
      description: 'Content for the card',
      example: faker.lorem.paragraph()
    },
    'sort_order' : {
      description: 'Sort order for the card',
      example: () => faker.random.number(99)
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  module.character = {
    'character_id': {
      description: 'The character id',
      example: () => mongoose.Types.ObjectId()
    },
    'world_id': {
      description: 'The the id of the world to which the character belongs',
      example: () => mongoose.Types.ObjectId()
    },
    'primary_name': {
      description: 'The primary name for the character',
      example: () => faker.name.firstName() + ' ' + faker.name.lastName()
    },
    'aliases' : {
      description: 'An array of aliases for the character',
      example: [
        faker.name.firstName() + ' ' + faker.name.lastName(),
        faker.name.firstName() + ' ' + faker.name.lastName(),
        faker.name.firstName() + ' ' + faker.name.lastName(),
      ]
    },
    'avatar': {
      description: 'The url for the character avatar image',
      example: () => faker.image.imageUrl()
    },
    'cover_image': {
      description: 'The url for the character profile cover image',
      example: () => faker.image.imageUrl()
    },
    'bio': {
      description: 'An array of dividers and cards containing the character bio<br><strong><small>NOTE:</small></strong> Swag Doctor seems to be choking showing properties for both dividers <em>and</em> cards',
      example: [
        ob.clone(module.divider),
        ob.clone(module.card),
        ob.clone(module.divider),
        ob.clone(module.card),
        ob.clone(module.card),
        ob.clone(module.divider),
        ob.clone(module.card),
      ]
    },
    'attributes': {
      description: 'An array of key / value pairs for character attributes',
      example: [
        ob.clone(module.attribute),
        ob.clone(module.attribute),
        ob.clone(module.attribute),
        ob.clone(module.attribute),
        ob.clone(module.attribute),
      ],
    },
    'dna': {
      description: 'An array of question / answer pairs (genes) for character DNA',
      example: [
        ob.clone(module.gene),
        ob.clone(module.gene),
        ob.clone(module.gene),
        ob.clone(module.gene),
        ob.clone(module.gene),
      ],
    },
    'relationships': {
      description: 'An array of character relationships',
      example: [
        ob.clone(module.relationship),
        ob.clone(module.relationship),
        ob.clone(module.relationship),
        ob.clone(module.relationship),
        ob.clone(module.relationship),
      ],
    },
    'galleries': {
      description: 'An array of image galleries associated with the character',
      example: [
        ob.clone(module.gallery),
        ob.clone(module.gallery),
        ob.clone(module.gallery),
        ob.clone(module.gallery),
        ob.clone(module.gallery),
      ],
    },
    'is_archived': {
      description: 'Whether or not the character has been archived',
      example: () => faker.random.arrayElement([true, false])
    },
    'sort_order' : {
      description: 'Sort order for the character',
      example: () => faker.random.number(99)
    },
    'date_created': {
      description: 'Date created',
      example: () => faker.date.future()
    },
    'date_modified': {
      description: 'Date modified',
      example: () => faker.date.future()
    },
  };

  return module;
};