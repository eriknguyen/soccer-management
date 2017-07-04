import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import { createContainer } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

// database - collection
import { Players } from "../api/Players";

import TeamList from "./TeamList";
import TeamStats from "./TeamStats";
import Player from "./Player";
import AccountsWrapper from "./AccountsWrapper";
import EditPlayer from './EditPlayer';

const tempPlayer = {
  name: "Temp Player",
  team: "Temp",
  ballManipulation: 2,
  kickingAbilities: 2,
  passingAbilities: 2,
  duelTackling: 2,
  fieldCoverage: 2,
  blockingAbilities: 2,
  gameStrategy: 2,
  playmakingRisks: 2,
  notes: "This is the temporary player"
};

export class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = { 
      currentPlayer: tempPlayer,
      showEditPlayer: false
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
  }

  renderPlayers() {
    return this.props.players.map(player => {
      return (
        <TeamList
          key={player._id}
          player={player}
          updateCurrentPlayer={this.updateCurrentPlayer}
        />
      );
    });
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player
    });
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false
    });
  }

  showForm() {
    if (this.state.showEditPlayer === true) {
      return (
        <EditPlayer 
          currentPlayer={this.state.currentPlayer}
          showTeamStats={this.showTeamStats}
         />
      );
    } else {
      return (
        <TeamStats players={this.props.players} />
      )
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Management"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={{backgroundColor: '#0277BD'}}
          >
            <AccountsWrapper />
          </AppBar>

          <div className="row">
            <div className="col s12 m7">
              <Player player={this.state.currentPlayer} showEditForm={this.showEditForm} />
            </div>
            <div className="col s12 m5">
              <h2>Team List</h2>
              <Link to="/new" className="waves-effect waves-light btn">
                Add
              </Link>
              <Divider />
              <List>
                {this.renderPlayers()}
              </List>
              <Divider />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <br />
              <Divider />
              {this.showForm()}
              <Divider />              
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired
};

// create a container, that will hold the state from meteor data
export default createContainer(() => {
  Meteor.subscribe("players");
  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, { sort: { name: 1 } }).fetch()
  };
}, App);
