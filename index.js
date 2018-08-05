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
						$("#title").append(response.Title);
						$("#year").append(response.Year);
						$("#rated").append(response.Rated);
						$("#released").append(response.Released);
						$("#runtime").append(response.Runtime);
						$("#genre").append(response.Genre);
						$("#director").append(response.Director);
						$("#writer").append(response.Writer);
						$("#actor").append(response.Actors);
						$("#plot").append(response.Plot);
						$("#language").append(response.Language);
						$("#country").append(response.Country);
						$("#award").append(response.Awards);
					let ratingReport = ``;
						for(value in response.Ratings){
							if(value == 0){
									ratingReport = `${ratingReport} ${response.Ratings[value].Source} (${response.Ratings[value].Value})`;
							}
							else{
									ratingReport = `${ratingReport}, ${response.Ratings[value].Source} (${response.Ratings[value].Value})`;
							}
						}
						$("#ratings").append(ratingReport);
						$("#metascore").append(response.Metascore);
						$("#imdbrating").append(response.imdbRating);
						$("#imdbvotes").append(response.imdbVotes);
						$("#imdbid").append(response.imdbID);
						$("#type").append(response.Type);
						$("#dvd").append(response.DVD);
						$("#boxoffice").append(response.BoxOffice);
						$("#production").append(response.Production);
						$("#website").append(response.Website);
						$("#respose").append(response.Response);
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
			timeout: 6000,
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
