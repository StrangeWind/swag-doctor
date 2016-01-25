'use strict';
import ob from 'objob';
import faker from 'faker';
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let definitions = require('./_definitions.js')(ob, faker, mongoose, jwt);
let errors = require('./_errors.js');
let headers = require('./_headers.js')(faker, jwt);
let users = require('./_actions-users.js')(ob, faker, mongoose, jwt, definitions, errors, headers);
let worlds = require('./_actions-worlds.js')(ob, faker, mongoose, jwt, definitions, errors, headers);
let characters = require('./_actions-characters.js')(ob, faker, mongoose, jwt, definitions, errors, headers);
let elements = require('./_actions-elements.js')(ob, faker, mongoose, jwt, definitions, errors, headers);
let beats = require('./_actions-beats.js')(ob, faker, mongoose, jwt, definitions, errors, headers);

module.exports = {
  name: 'StoryShop REST API - SWAAAG',
  description: 'Documentation for all versions of the REST API',
  paths: {
    /********
     * Users
     ********/
    '/sign-in': {
      actions: [
        users.signIn,
      ],
    },
    '/users': {
      actions: [
        users.createUser,

      ],
    },
    '/users/:user_id': {
      actions: [
        users.getUser,
        users.updateUser,
        users.deleteUser,
      ],
    },

    /*********
     * Worlds
     *********/
    '/worlds': {
      actions: [
        worlds.createWorld,
        worlds.getWorlds,
      ],
    },
    '/worlds/:world_id': {
      actions: [
        worlds.getWorld,
        worlds.updateWorld,
        worlds.deleteWorld,
      ],
    },
    '/worlds/globals': {
      actions: [
        worlds.toggleGlobalWorld,
        worlds.getGlobalWorlds,
      ],
    },
    '/worlds/:world_id/users': {
      actions: [
        worlds.addWorldUser,
        worlds.getWorldUsers,
      ],
    },
    '/worlds/:world_id/users/:user_id': {
      actions: [
        worlds.updateWorldUser,
        worlds.removeWorldUser,
      ],
    },

    /*************
     * Characters
     *************/
    '/worlds/:world_id/characters' : {
      actions: [
        characters.createCharacter,
        characters.getCharacters,
      ],
    },
    '/worlds/:world_id/characters/:character_id' : {
      actions: [
        characters.getCharacter,
        characters.updateCharacter,
        characters.deleteCharacter,
      ],
    },
    '/worlds/:world_id/characters/:character_id/bio_dividers' : {
      actions: [
        characters.createCharacterBioDivider,
        characters.getCharacterBioDividers,
      ],
    },
    '/worlds/:world_id/characters/:character_id/bio_dividers/:bio_divider_id' : {
      actions: [
        characters.getCharacterBioDivider,
        characters.updateCharacterBioDivider,
        characters.deleteCharacterBioDivider,
      ],
    },
    '/worlds/:world_id/characters/:character_id/bio_cards' : {
      actions: [
        characters.createCharacterBioCard,
        characters.getCharacterBioCards,
      ],
    },
    '/worlds/:world_id/characters/:character_id/bio_cards/:bio_card_id' : {
      actions: [
        characters.getCharacterBioCard,
        characters.updateCharacterBioCard,
        characters.deleteCharacterBioCard,
      ],
    },
    '/worlds/:world_id/characters/:character_id/attributes' : {
      actions: [
        characters.createCharacterAttribute,
        characters.getCharacterAttributes,
      ],
    },
    '/worlds/:world_id/characters/:character_id/attributes/:attribute_id' : {
      actions: [
        characters.getCharacterAttribute,
        characters.updateCharacterAttribute,
        characters.deleteCharacterAttribute,
      ],
    },
    '/worlds/:world_id/characters/:character_id/dna' : {
      actions: [
        characters.createCharacterGene,
        characters.getCharacterGenes,
      ],
    },
    '/worlds/:world_id/characters/:character_id/dna/:gene_id' : {
      actions: [
        characters.getCharacterGene,
        characters.updateCharacterGene,
        characters.deleteCharacterGene,
      ],
    },
    '/worlds/:world_id/characters/:character_id/relationships' : {
      actions: [
        characters.createCharacterRelationship,
        characters.getCharacterRelationships,
      ],
    },
    '/worlds/:world_id/characters/:character_id/relationships/:relationship_id' : {
      actions: [
        characters.getCharacterRelationship,
        characters.updateCharacterRelationship,
        characters.deleteCharacterRelationship,
      ],
    },
    '/worlds/:world_id/characters/:character_id/galleries' : {
      actions: [
        characters.createCharacterGallery,
        characters.getCharacterGalleries,
      ],
    },
    '/worlds/:world_id/characters/:character_id/galleries/:gallery_id' : {
      actions: [
        characters.getCharacterGallery,
        characters.updateCharacterGallery,
        characters.deleteCharacterGallery,
      ],
    },

    /******************
     * Elements Boards
     ******************/
    '/worlds/:world_id/elements_boards' : {
      actions: [
        elements.createElementsBoard,
        elements.getElementsBoards,
      ],
    },
    '/worlds/:world_id/elements_boards/:elements_board_id' : {
      actions: [
        elements.getElementsBoard,
        elements.updateElementsBoard,
        elements.deleteElementsBoard,
      ],
    },
    '/worlds/:world_id/elements_boards/:elements_board_id/elements' : {
      actions: [
        elements.createElement,
        elements.getElements,
      ],
    },
    '/worlds/:world_id/elements_boards/:elements_board_id/elements/:element_id' : {
      actions: [
        elements.getElement,
        elements.updateElement,
        elements.deleteElement,
      ],
    },

    /***************
     * Beats Boards
     ***************/
    '/worlds/:world_id/beats_boards' : {
      actions: [
        beats.createBeatsBoard,
        beats.getBeatsBoards,
      ],
    },
    '/worlds/:world_id/beats_boards/:beats_board_id' : {
      actions: [
        beats.getBeatsBoard,
        beats.updateBeatsBoard,
        beats.deleteBeatsBoard,
      ],
    },
    '/worlds/:world_id/beats_boards/:beats_board_id/dividers' : {
      actions: [
        beats.createBeatsBoardDivider,
        beats.getBeatsBoardDividers,
      ],
    },
    '/worlds/:world_id/beats_boards/:beats_board_id/dividers/:divider_id' : {
      actions: [
        beats.getBeatsBoardDivider,
        beats.updateBeatsBoardDivider,
        beats.deleteBeatsBoardDivider,
      ],
    },
    '/worlds/:world_id/beats_boards/:beats_board_id/cards' : {
      actions: [
        beats.createBeatsBoardCard,
        beats.getBeatsBoardCards,
      ],
    },
    '/worlds/:world_id/beats_boards/:beats_board_id/cards/:card_id' : {
      actions: [
        beats.getBeatsBoardCard,
        beats.updateBeatsBoardCard,
        beats.deleteBeatsBoardCard,
      ],
    },
  },
};