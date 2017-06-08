requirejs.config({
	baseUrl:"js",
	paths: {
		jquery:[
			"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min",
			"jquery.min"
		],
		handlebar:["https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min",
		"handlebars.min"],
		home:"home"
	}
});

require(["home"]);

