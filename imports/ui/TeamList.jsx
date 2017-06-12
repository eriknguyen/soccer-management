import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

export default class TeamList extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = {
      
    }
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="erik.jpg" />} />
    )
  }
}