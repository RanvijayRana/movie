$(document).ready(() => {
		$(".sub").click(() => {
			retreive();
		});
		$(".progress").progress();


});


let retreive = () => {
	let movieId = $(".searchById").val();
	let movieTitle = $(".searchByTitle").val();
	let movieYear = $(".searchByYear").val();

	if(movieYear == "" && movieTitle == "" && movieId == ""){
		alert("search on null field");
		searchMovie(movieId,movieTitle,movieYear);
	}
	else if(movieYear != "" && movieTitle != "" && movieId != ""){
		alert("year, id and title");
	}
	else if(movieYear != "" && movieTitle != ""){
		alert("year and title");
		searchMovie(movieId,movieTitle,movieYear);
	}
	else if(movieYear != "" && movieTitle == ""){
		alert("please provide a movie name")
	}
	else if(movieYear != "" && movieId != ""){
		alert("year and id");
	}
	else if( movieTitle != "" && movieId != ""){
		alert("id and title");
		searchMovie(movieId,movieTitle,movieYear);
	}
	else{
		alert(`id: ${movieId}  title: ${movieTitle}  year:  ${movieYear}`)
		searchMovie(movieId,movieTitle,movieYear);
	}

}

let searchMovie = (movieId,movieTitle,movieYear) => {

		$.ajax({
			type: 'GET',
			dataType: 'json',
			async: true,
			url: 'https://www.omdbapi.com/?i='+movieId+'&t='+movieTitle+'&y='+movieYear+'&apikey=bfabb086',
			success: (response) => {
				if(response.Response == "True"){
						$(".contentImg").css("display","flex");
						$(".image").css("display","flex");
						$(".content").css("display","flex");
						$(".contentBar").css("display","flex");
						$("#titleValue").empty();
						$("#yearValue").empty();
						$("#ratedValue").empty();
						$("#releasedValue").empty();
						$("#runtimeValue").empty();
						$("#genreValue").empty();
						$("#directorValue").empty();
						$("#writerValue").empty();
						$("#actorValue").empty();
						$("#plotValue").empty();
						$("#languageValue").empty();
						$("#countryValue").empty();
						$("#awardValue").empty();
						$("#titleValue").append(response.Title);
						$("#yearValue").append(response.Year);
						$("#ratedValue").append(response.Rated);
						$("#releasedValue").append(response.Released);
						$("#runtimeValue").append(response.Runtime);
						$("#genreValue").append(response.Genre);
						$("#directorValue").append(response.Director);
						$("#writerValue").append(response.Writer);
						$("#actorValue").append(response.Actors);
						$("#plotValue").append(response.Plot);
						$("#languageValue").append(response.Language);
						$("#countryValue").append(response.Country);
						$("#awardValue").append(response.Awards);
					let ratingReport = ``;
						for(value in response.Ratings){
							if(value == 0){
									ratingReport = `${ratingReport} ${response.Ratings[value].Source} (${response.Ratings[value].Value})`;
							}
							else{
									ratingReport = `${ratingReport}, ${response.Ratings[value].Source} (${response.Ratings[value].Value})`;
							}
						}
						$("#ratingsValue").empty();
						$("#metascoreValue").empty();
						$("#imdbratingValue").empty();
						$("#imdbvotesValue").empty();
						$("#imdbidValue").empty();
						$("#typeValue").empty();
						$("#dvdValue").empty();
						$("#boxofficeValue").empty();
						$("#productionValue").empty();
						$("#websiteValue").empty();
						$("#resposeValue").empty();
						$("#ratingsValue").append(ratingReport);
						$("#metascoreValue").append(response.Metascore);
						$("#imdbratingValue").append(response.imdbRating);
						$("#imdbvotesValue").append(response.imdbVotes);
						$("#imdbidValue").append(response.imdbID);
						$("#typeValue").append(response.Type);
						$("#dvdValue").append(response.DVD);
						$("#boxofficeValue").append(response.BoxOffice);
						$("#productionValue").append(response.Production);
						$("#websiteValue").append(response.Website);
						$("#resposeValue").append(response.Response);
						if(response.Poster == "N/A"){
								$(".image").html('<img src="smiley.jpg" alt="Smiley face" class ="img-fluid rounded">')
						}
						else{
								$(".image").html('<img src="' + response.Poster + '" alt="Smiley face" class ="img-fluid rounded">')
						}
				}
				else{
					$(".contentImg").css("display","none");
					$(".image").css("display","none");
					$(".content").css("display","none");
					$(".contentBar").css("display","none");
					alert("movie id not present in directory");
				}

			},
			timeout: 10000,
			error: (err)=>
        {
 					console.log(err);
        	alert("timeout");

        },
       beforeSend: ()=>
       {
      //  $("#ldr").removeClass('vision')
       },
       complete:()=>
       {
        // $("#ldr").addClass('vision')
       }
		}); //end of ajax call

}
