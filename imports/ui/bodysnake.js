import './bodysnake.html';

//import utile
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Session.set('j','none');
Session.set('ia','none');
Session.set('option', ['pierre','feuille','ciseaux',]);
Session.set('resultat','none');
Session.set('score','0')

function resultatfunction (j,ia){
	if((j=="pierre") && (ia=="ciseaux") || (j=="feuille") && (ia=="pierre") || (j=="ciseaux") && (ia=="feuille")){
		return('Vous avez gagné');
	} else if((j=="pierre") && (ia=="feuille") || (j=="feuille") && (ia=="ciseaux") || (j=="ciseaux") && (ia=="pierre")){
		return('Vous avez perdu');
	} else if((j=="pierre") && (ia=="pierre") || (j=="feuille") && (ia=="feuille") || (j=="ciseaux") && (ia=="ciseaux")){
		return('Egalité');
	}
	else{
		return 'probleme';
	}
};

Template.bodysnake.helpers({
	joueur: function(Var){
		return Session.get("j");
	},
	ia: function(Var){
		return Session.get('ia');
	},
	resultat: function(){
		return Session.get('resultat');
	}
	});

Template.bodysnake.events({
	"click .pierre"(event){
		Session.set("j","pierre");
		Session.set('ia',Session.get('option')[Math.floor(Math.random() * 3)]);
		Session.set('resultat',resultatfunction(Session.get("j"),Session.get("ia")));
	},

	"click .feuille"(event){
		Session.set("j","feuille");
		Session.set('ia',Session.get('option')[Math.floor(Math.random() * 3)]);
		Session.set('resultat',resultatfunction(Session.get("j"),Session.get("ia")));
	},

	"click .ciseaux"(event){
		Session.set("j","ciseaux");
		Session.set('ia',Session.get('option')[Math.floor(Math.random() * 3)]);
		Session.set('resultat',resultatfunction(Session.get("j"),Session.get("ia")));
	}

});
