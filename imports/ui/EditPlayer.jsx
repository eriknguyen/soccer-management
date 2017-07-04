import React, { Component } from "react";
import PropTypes from "prop-types";
import { Players } from "../api/Players";

export default class EditPlayer extends Component {

  showTeamStats() {
    this.props.showTeamStats();
  }

  editPlayer(event) {
    event.preventDefault();

    // create and insert the object from the form
    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      team: this.refs.team.value,
      ballManipulation: this.refs.ballManipulation.value,
      kickingAbilities: this.refs.kickingAbilities.value,
      passingAbilities: this.refs.passingAbilities.value,
      duelTackling: this.refs.duelTackling.value,
      fieldCoverage: this.refs.fieldCoverage.value,
      blockingAbilities: this.refs.blockingAbilities.value,
      gameStrategy: this.refs.gameStrategy.value,
      playmakingRisks: this.refs.playmakingRisks.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId()
    };

    // meteor way to call a secure method to server
    Meteor.call("updatePlayer", player, error => {
      if (error) {
        alert("Oops something went wrong: " + error.reason);
      } else {
        alert("Player added");
        this.showTeamStats();
      }
    });

    // TODO: redirect the view to homepage after adding player
    // this.context.history.push('/');
  }

  render() {
    const currentPlayer = this.props.currentPlayer;
    return (
      <div className="row">
        <form onSubmit={this.editPlayer.bind(this)} className="col s12">
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Name"
                ref="name"
                type="text"
                className="validate"
                defaultValue={currentPlayer.name}
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Team"
                ref="team"
                className="validate"
                type="text"
                defaultValue={currentPlayer.team}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select ref="ballManipulation"
                      className="browser-default"
                      defaultValue={currentPlayer.ballManipulation} >
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select ref="kickingAbilities" className="browser-default" defaultValue={currentPlayer.kickingAbilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Passing Abilities</h5>
              <select ref="passingAbilities" className="browser-default" defaultValue={currentPlayer.passingAbilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Duel Tackling</h5>
              <select ref="duelTackling" className="browser-default" defaultValue={currentPlayer.duelTackling}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Field Coverage</h5>
              <select ref="fieldCoverage" className="browser-default" defaultValue={currentPlayer.fieldCoverage}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking Abilities</h5>
              <select ref="blockingAbilities" className="browser-default" defaultValue={currentPlayer.blockingAbilities}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Game Strategy</h5>
              <select ref="gameStrategy" className="browser-default" defaultValue={currentPlayer.gameStrategy}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking Risks</h5>
              <select ref="playmakingRisks" className="browser-default" defaultValue={currentPlayer.playmakingRisks}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <textarea
                placeholder="Notes"
                ref="notes"
                type="text"
                className="materialize-textarea"
              />
            </div>
            <div className="input-field col s6">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit<i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
