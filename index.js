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
					$(".result").html("<p>sonu monu</p>")
					$(".result").append(response.Title);
			}
			else{
				alert("movie id not present in directory");
			}

		}
	});
}
