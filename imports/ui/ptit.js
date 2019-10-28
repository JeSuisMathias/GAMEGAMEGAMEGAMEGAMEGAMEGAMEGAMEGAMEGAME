import './ptit.html';

Template.body.helpers({

  username: function(page){
    return Meteor.user().username;
},

});
