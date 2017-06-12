import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../imports/ui/App";
import PlayerForm from "../imports/ui/PlayerForm";
import Lost from "../imports/ui/Lost";

injectTapEventPlugin();

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/new" component={PlayerForm} />
        <Route component={Lost} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("render-target")
  );
});
