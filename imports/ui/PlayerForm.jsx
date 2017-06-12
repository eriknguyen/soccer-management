import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Players } from '../api/Players';

export default class PlayerForm extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }

  // constructor(props, context) {
  //   super(props, context);
  // }

  submitPlayer(event) {
    event.preventDefault();

    // create and insert the object from the form
    Players.insert({
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
      createdAt: new Date()
    });

    console.log("Success player submitted!");

    // 
    // this.context.history.push('/');
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.submitPlayer.bind(this)} className="col s12">
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Name"
                ref="name"
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Team"
                ref="team"
                className="validate"
                type="text"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select ref="ballManipulation" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select ref="kickingAbilities" className="browser-default">
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
              <select ref="passingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Duel Tackling</h5>
              <select ref="duelTackling" className="browser-default">
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
              <select ref="fieldCoverage" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking Abilities</h5>
              <select ref="blockingAbilities" className="browser-default">
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
              <select ref="gameStrategy" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking Risks</h5>
              <select ref="playmakingRisks" className="browser-default">
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
