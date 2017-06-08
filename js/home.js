define(['jquery','handlebar'], function($,hb){
var people = (function(){
	var people = ["Manoj", "Kamal"];

	//cache DOM
	var $el = $("#peopleModule");
	var $button = $el.find("button");
	var $input = $el.find("input");
	var $ul = $el.find("ul");
	var template = $el.find("#people-template").html()

	//bind event
	$button.on('click', addPerson.bind(this));
	$ul.on("click", "i.del", deletePerson.bind(this));

	_render();

	function _render(){
		var compileTemplate = hb.compile(template);
		var data = {people: people};
		var finalHtml = compileTemplate(data);
		$ul.html(finalHtml);
	}

	function addPerson(){
		people.push($input.val());
		_render();
		$input.val('');
	}

	function deletePerson(e){
		var $remove = $(e.target).closest('li');
		var index = $ul.find("li").index($remove);
		people.splice(index, 1);
		_render();
	}

	return {
		addPerson : addPerson,
		deletePerson : deletePerson
	}
})();

(function(){
		var people = {
			people : [],
			init : function(){
				this.cacheDom();
				this.bindEvents();
				this.render();
			},
			cacheDom : function(){
				this.$el = $("#peopleModule");
				this.$button = this.$el.find("button");
				this.$input = this.$el.find("input");
				this.$ul = this.$el.find("ul");
				this.template = this.$el.find("#people-template").html()
			},
			bindEvents : function(){
				this.$button.on('click', this.addPerson.bind(this));
				this.$ul.on("click", "i.del", this.deletePerson.bind(this));
			},
			render : function(){
				var compileTemplate = hb.compile(this.template);
				var data = {people: this.people};
				var finalHtml = compileTemplate(data);
				this.$ul.html(finalHtml);
			},
			addPerson : function(){
				this.people.push(this.$input.val());
				this.render();
				this.$input.val('');
			},
			deletePerson : function(e){
				var $remove = $(e.target).closest('li');
				var index = this.$ul.find("li").index($remove);
				this.people.splice(index, 1);
				this.render();
			}
		}
		people.init();
	})();
});