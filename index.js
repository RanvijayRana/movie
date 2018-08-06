$(document).ready(() => {
		$(".subAdv").click(() => {
			$(".id").css("display","flex");
			$(".year").css("display","flex");
		});
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
			$(".modal-body").empty();
			$(".modal-body").append(`Please provide Movie Name`);
			$('.modal').modal('show');
	}
	else if(movieYear != "" && movieTitle == ""){
			$(".modal-body").empty();
			$(".modal-body").append(`Please provide Movie Name`);
			$('.modal').modal('show');
	}
	else{
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
					if(movieYear != "" && movieTitle != "" && movieId != ""){
							$(".modal-body").empty();
							$(".modal-body").append(`Movie with combination of Movie Id : "${movieId}", Movie Title : "${movieTitle}" and Movie Year "${movieYear}" not found`);
							$('.modal').modal('show');
					}
					else if(movieYear != "" && movieTitle != ""){
							$(".modal-body").empty();
							$(".modal-body").append(`Movie with combination of Movie Title : "${movieTitle}" and Movie Year "${movieYear}" not found`);
							$('.modal').modal('show');
					}
					else if( movieTitle != "" && movieId != ""){
						$(".modal-body").empty();
						$(".modal-body").append(`Movie with combination of Movie Id : "${movieId}" and Movie Title "${movieTitle}" not found`);
						$('.modal').modal('show');
					}
					else if( movieTitle != "" && movieId == ""){
						$(".modal-body").empty();
						$(".modal-body").append(`Movie with Movie Title: - "${movieTitle}" not found`);
						$('.modal').modal('show');
					}
					else if( movieTitle == "" && movieId != ""){
						$(".modal-body").empty();
						$(".modal-body").append(`Movie with Movie Id : "${movieId}" not found`);
						$('.modal').modal('show');
					}
				}

			},
			timeout: 10000,
			error: (err)=>
        {
						$(".modal-body").empty();
						$(".modal-body").append(`Timeout - you may be on slow Internet connection`);
						$('.modal').modal('show');

        },
       beforeSend: ()=>
       {
				 $(".loader").css("display","flex");
       },
       complete:()=>
       {
				  $(".loader").css("display","none");
       }
		}); //end of ajax call

}
