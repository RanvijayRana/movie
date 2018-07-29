$(document).ready(() => {
		$(".sub").click(() => {
			retreive();
		});


});

let retreive = () => {
	let movId = $(".searchById").val();
	let movTitle = $(".searchByTitle").val();
	let movYear = $(".searchByYear").val();

	$.ajax({
		type: 'GET',
		dataType: 'json',
		async: true,
		url: 'http://www.omdbapi.com/?i=tt3896198&apikey=bfabb086',
		success: (response) => {
			if((response.imdbID == movId) || (response.Title == movTitle) || (response.Year == movYear)){
					$(".content").css("display","block");
					$(".contentImg").css("display","flex");
					$("#title").append(response.Title);
					$("#year").append(response.Year);
					$("#rated").append(response.Rated);
					$("#released").append(response.Released);
					$("#runtime").append(response.Runtime);
					$("#genre").append(response.Genre);
					$("#director").append(response.Director);
					$("#writer").append(response.Writer);
					$("#plot").append(response.Plot);
					$("#language").append(response.Language);
				let ratingReport = ``;
				console.log(response.Ratings);
					for(value in response.Ratings){
						ratingReport = `${ratingReport} ${response.Ratings[value].Source} (${response.Ratings[value].Value}) ;`;
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
				$(".image").html('<img src="' + response.Poster + '" alt="Smiley face">')
				//$(".contentImg").append(response.Poster);
			}
			else{
				$(".content").css("display","none");
				$(".contentImg").css("display","none");
				alert("movie id not present in directory");
			}

		}
	});
}
