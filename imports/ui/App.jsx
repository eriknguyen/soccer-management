import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - collection
import { Players } from '../api/Players';

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

App.propTypes = {
  players: PropTypes.array.isRequired
}

// export default createContainer(() => {
//   return {
//     players: Players.find({}, {sort: {name: 1}}).fetch()
//   }
// })
