(function(){

	var loadingImg	=	$(".loading"),
		header		=	$(".header");


	function sourcesList(lista) {

		console.log(lista);

		var sourceTemplate 	= 	document.getElementById("source-template").innerHTML,
			sourceCompiled	=	Handlebars.compile(sourceTemplate),
			sourceRender	=	sourceCompiled(lista),
			fuente	 		= 	document.getElementById("source-list");

			fuente.innerHTML = sourceRender;
	}

	var apiUrl 		= 	"https://newsapi.org/v1/sources?language=en&",
		key 		= 	"apiKey=2a3d0185f6844aec8deae27977faa16d",
		url2		=	apiUrl + key,
		url 		= 	"https://newsapi.org/v1/articles?source=mashable&apiKey=2a3d0185f6844aec8deae27977faa16d";


	$.ajax({
	  url: url,
	  dataType: "json",
	  success: function(data) {
	    sourcesList({ lista: data.articles });
	    loadingImg.fadeOut("fast");
	  }
	});

	$(window).on('scroll', function() {

	   	var st = $(this).scrollTop();

	   	if( st > 20){

	   		header.addClass("header-shadow");

	   	} else if( st < 20){
	   		
	   		header.removeClass("header-shadow");
	   	
	   	}

	 });

	
})();


