# Soccer Management Webapp
*A simple webapp built with React and Meteor*

## //TODO
* Redirect to main page after adding player. Use of `browserHistory` from `react-router` failed

## Setup
* Have the following installed:
    * Meteor
    * Node/NPM
    * Yarn
* Create base Meteor app: `$ meteor create soccer-management`
* Install npm dependencies: `$ meteor npm install` (use `meteor` infront of `npm` command)
* Meteor packages: Meteor will rebuild it's dependencies based on the list everytime running the app
    * Must remove `autopublish` for encapsulating data & methods
* Use Yarn for installing dependencies:
    * `yarn` (same with `npm install`)
    * `yarn add package_name` (add to package.json too)
* Start app: `$ meteor`

## Notes
1. Meteor data models
    * Using publish/subscribe to handle data passing
    * Server side: `Meteor.publish()`
    * Client side: `Meteor.subscribe()`
    * Data model (Mongo Collection) is shared between both side

2. Add a user login for user leveraging Facebook
    * Notice:
        * Need Xcode for accounts-ui package
        * Warning about bcrypt dependency
    * Step:
        * Install dependencies: `meteor add accounts-ui accounts-facebook`
        * Add Meteor Toys >> allow to see if user logged in or not
        * Add bcrypt from npm: `yarn add bcrypt`
        * `npm rebuild` to rebuild all packages with new version of bcrypt
    * More:
        * [`meteor-useraccounts`](https://github.com/meteor-useraccounts) for adding more functionalities to user account
3. Securing DB transaction with server methods
    * Using `Meteor.methods()` to create a method that can be called from client

#### Players CRUD & Team View
1. State & player view
    * Setup `state.currentPlayer` for app and `updateCurrentPlayer` method for updating player
    * `updateCurrentPlayer` is passed as a prop to a `TeamList` component and set as `onClick`
    * Update the `Player` view to display player that get from `App.state.currentPlayer`

2. Editing players
    * Add edit player button and `EditPlayer` component holding the edit form
    * A `player` instance is passed to `EditPlayer` component for updating
    * `EditPlayer` call server method `updatePlayer` to update it to db
    * `deletePlayer` is implemented similarly

3. Team stat with `Chart.js`
    * Install npm dependencies: [`react-chartjs-2`](https://github.com/gor181/react-chartjs-2)  and `chart.js`
    * User a `Radar` chart component for team stats
    * Calculate team stats from players's stats and display

## Next Steps
* Explore other areas:
    * Relay
    * GraphQL
    * React Native

* App Improvement:
    * Image uploader
    * Better user feedback
    * Improve navigation
