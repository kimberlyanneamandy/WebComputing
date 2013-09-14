$(document).ready(function(){
	var app = {};
	$('#searchForm').keypress(function(event){
		
		
			function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
			
	});
	
	
	$(document).ready(function(){
//Movie searcher
    $('#searchForm').submit(function(){
        webSearch();
        return false;
		
    });
	

    function webSearch(){
		
		
        var inp = $('#s').val();
        var apiURL = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
        $.ajax({
            type: "GET",
            data: {
                q: inp,
                apiKey: '62t87dhsk4syxjw52796uc2d',
            },
            url: apiURL,
            dataType:"jsonp",
            success: showMovies
        });
    };
	

	
function showMovies(response) { 
        console.log('response', response);
		var hitTemplate = Handlebars.compile($("#hit-template").html());
        var movies = response.movies;
		var rs = $("#rs");
        rs.empty();
		rs.html(""); 
        for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
		rs.append(hitTemplate({title: movie.title, 
									
									poster: movie.posters.detailed,
									year: movie.year,
									synopsis:movie.synopsis
									
									}));
		
		
        };
		
		
		  
    }; 


    
});
	
	//in theaters
	$('#intheatersbutton').click(function(){
		var theat_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?';
		$.ajax({
			url: theat_url,
				data:{
					apiKey: '62t87dhsk4syxjw52796uc2d'
				},
				dataType: 'jsonp',
				success: theatMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function theatMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#theaters ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#theaters ul').append(getTemplate('search-item', movie));
			}
		}	
	});
	
	//Upcoming
	$('#upcomingbutton').click(function(){
		var upcome_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?';
		$.ajax({
			url: upcome_url,
				data:{
					apiKey: '62t87dhsk4syxjw52796uc2d'
				},
				dataType: 'jsonp',
				success: upcomeMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function upcomeMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#upcoming ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#upcoming ul').append(getTemplate('search-item', movie));
			}
		}	
	});
	
	//Opening
	$('#openbtn').click(function(){
		var open_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?';
		$.ajax({
			url: open_url,
				data:{
					apiKey: '62t87dhsk4syxjw52796uc2d'
				},
				dataType: 'jsonp',
				success: openMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function openMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#opening ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#opening ul').append(getTemplate('search-item', movie));
			}
		}	
	});
	
	
		$('#openingbutton').click(function(){
		var open_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?';
		$.ajax({
			url: open_url,
				data:{
					apiKey: '62t87dhsk4syxjw52796uc2d'
				},
				dataType: 'jsonp',
				success: openMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function openMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#opening ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#opening ul').append(getTemplate('search-item', movie));
			}
		}	
	});
});