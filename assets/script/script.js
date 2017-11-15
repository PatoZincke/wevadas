(function(){

	var loadingImg	=		$(".loading"),
			header			=		$(".header");


	///////////// Cargar Source

	function sourcesList(lista) {

		console.log(lista);

		var sourceTemplate 	= 	document.getElementById("source-template").innerHTML,
			sourceCompiled	=	Handlebars.compile(sourceTemplate),
			sourceRender	=	sourceCompiled(lista),
			fuente	 		= 	document.getElementById("general-wrapper");

			fuente.innerHTML = sourceRender;
	}

	///////////// Ajax Source

	var apiUrl 		= 	"https://newsapi.org/v1/sources?language=en",
			key 			= 	"&apiKey=2a3d0185f6844aec8deae27977faa16d",
			url 			=		apiUrl + key;

	$.ajax({
	  url: url,
	  dataType: "json",
	  success: function(data) {
	  	console.log(data);
	    sourcesList({ lista: data.sources });
	    loadingImg.fadeOut("fast");
	  }
	});

	///////////// Cargar Noticias

	function newsList(lista) {

		console.log(lista);

		var sourceTemplate 	= 	document.getElementById("news-template").innerHTML,
			sourceCompiled	=	Handlebars.compile(sourceTemplate),
			sourceRender	=	sourceCompiled(lista),
			fuente	 		= 	document.getElementById("general-wrapper");

			fuente.innerHTML = sourceRender;
	}
	

	///////////// Ajax Noticias

	function newsRequest(){

		var apiUrl 		= 	"https://newsapi.org/v1/sources?language=en&",
				key 			= 	"apiKey=2a3d0185f6844aec8deae27977faa16d",
				url2			=		apiUrl + key,
				url 			= 	"https://newsapi.org/v1/articles?source=mashable&apiKey=2a3d0185f6844aec8deae27977faa16d";

		$.ajax({
		  url: url,
		  dataType: "json",
		  success: function(data) {
		    newsList({ lista: data.articles });
		    loadingImg.fadeOut("fast");
		  }
		});
	}

	///////////// Sombra Menu on Scroll

	$(window).on('scroll', function() {

	   	var st = $(this).scrollTop();

	   	if( st > 20){

	   		header.addClass("header-shadow");

	   	} else if( st < 20){
	   		
	   		header.removeClass("header-shadow");
	   	
	   	}

	 });

	
})();


