import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from "./TeamList";
import TeamStats from "./TeamStats";
import Player from "./Player";

export default class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = {
      players: []
    };
  }

  componentWillMount() {
    this.setState({
      players: this.getPlayers()
    })
  }

  getPlayers() {
    return [
      {
        _id: 1,
        name: 'Erik',
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks: 2
      }, {
        _id: 2,
        name: 'Leo',
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks: 2
      }, {
        _id: 3,
        name: 'David',
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks: 2
      }
    ]
  }

  renderPlayers() {
    return this.state.players.map((player) => {
      return <TeamList key={player._id} player={player} />
    })
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Management"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} />
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <h2>Team List</h2>
              <Divider />
              <List>
                {this.renderPlayers()}
              </List>
              <Divider />
            </div>
            <div className="col s12 m5"><TeamStats /></div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
