import { Mongo } from "meteor/mongo";

// a collection in mongo db
export const Players = new Mongo.Collection("players");

// define a new player schema for mongo
const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  ballManipulation: { type: Number, defaultValue: 0 },
  kickingAbilities: { type: Number, defaultValue: 0 },
  passingAbilities: { type: Number, defaultValue: 0 },
  duelTackling: { type: Number, defaultValue: 0 },
  fieldCoverage: { type: Number, defaultValue: 0 },
  blockingAbilities: { type: Number, defaultValue: 0 },
  gameStrategy: { type: Number, defaultValue: 0 },
  playmakingRisks: { type: Number, defaultValue: 0 },
  notes: { type: String, optional: true }
});

// attach/subscribe schema to mongo collection
Players.attachSchema(PlayerSchema);
