import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/Players';

// to create a `insertPlayer` method in meteor
Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  }
});