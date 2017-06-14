# Soccer Management Webapp
*A simple webapp built with React and Meteor*

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
        * [meteor-useraccounts](https://github.com/meteor-useraccounts) for adding more functionalities to user account
3. Securing DB transaction with server methods
    * Using `Meteor.methods()` to create a method that can be called from client