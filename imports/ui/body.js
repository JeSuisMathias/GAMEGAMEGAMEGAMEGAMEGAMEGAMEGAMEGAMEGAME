 //import utile
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

//import html
import './body.html';
import './horsligne.js';
import './tour1.js';
import './accueil.js';
import './tournoi.js';
import './Bienvenue.js';
import './ptit.js';
import './snake.js';
import './bodysnake.js';
import './howtoplay.js';
// import './chi-fou-mi.js';

//variable de session
//session page = 'nom template'
Session.set('page','First-page');


Template.body.helpers({


    //template dynamique
    currentPage: function(page){
        return Session.get('page');
    },

    username: function(page){
      return Meteor.user().username;
  },

});

//evenement clique boutton
Template.body.events({
	'click .horsligne'(event){
		Session.set('page','horsligne');
	},

	'click .enligne'(event){
		Session.set('page', 'enligne');
	},

	'click .tournoi'(event){
		Session.set('page','tournoi');
	},

	'click .home'(event){
		Session.set('page','acc');
	},

	'click .tour1'(event){
		Session.set('page','tour1');
	},

  'click .login'(event){
    Session.set('page','login');
  },

  'click .about'(event){
    Session.set('page','login');
  },

  'click .how'(event){
    Session.set('page','howto');
  },

  'click .who'(event){
    Session.set('page','lala');
  },

  'click .info'(event){
    Session.set('page','lala');
  },

  'click .menu'(event){
    Session.set('page','First-page');
  },

  'click .shifou'(event){
    Session.set('page','acc');
  },

  'click .snaked'(event){
    Session.set('page','competence');
  },

  'click .snake'(event){
    Session.set('page','bodysnake');
  },

});


console.log('%c Hey ! Que fais tu dans la console ? Elle est réservée au dev !', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
