$(document).ready(() => {
	$(".sub").click(function() {
		let def = prompt("hello you","");
		let abc = $(".searchById").value;
		alert(abc);
		alert(def);
	});

	  $.ajax({
	    type: 'GET',
	    dataType: 'json',
	    async: true,
	    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=bfabb086',
	    success: (response) => {
	      $(".result").append(response.Title);
	    //  alert(response);
	    }
	  });
});
