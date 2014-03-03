/*----------------------Model---------------------------------*/
var Player = Backbone.Model.extend({
	url: '/users',

	defaults: {
		name: 'Unknown',
		age: 18,
		stage: ''
	}
});













/*----------------------Collection---------------------------------*/
var Players = Backbone.Collection.extend({
	model: Player
});


































/*----------------------Views---------------------------------*/
// model view
var PlayerView = Backbone.View.extend({
	el: "body",

	events: {
		'submit' : 'create_player'
	},

	initialize: function() {
    	// alert('hi');
  	},

	create_player: function(event){
		event.preventDefault();
		var name = $("input[name=name]").val();
		var age = $("input[name=age]").val();
		var stage = $("input[name=stage]").val();

		var player = new Player;

		player.save({name: name, age: age, stage: stage} ,{
			success: function(response){
				alert("success " + response.get('name'));

				user = new playerShow({model: response});
				$(document.body).append(user.render().el);
			},
			error: function(response){
				alert("error " + response);
			}
		});

		console.log("Name is:" + name + "  Age is:" + age + "  Stage is:" + stage );
		console.log("Player is:" + player);
		}

});


/*------------------display---------------------*/

var playerShow = Backbone.View.extend({
	tagName: 'div',

	template: _.template($("#player-show").html()),

	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}

});





















/*----------------------Routes---------------------------------*/
var Router = Backbone.Router.extend({
	routes: {
		'': 'index'
	}
});

new PlayerView;
new Router;
Backbone.history.start();