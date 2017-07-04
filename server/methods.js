import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/Players';

// to create a `insertPlayer` method in meteor
Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  },
  updatePlayer(player) {
    Players.update(player._id, {
      $set: player
    });
  },
  deletePlayer(playerId) {
    Players.remove(playerId);
  }
});