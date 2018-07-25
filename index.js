$(document).ready(() => {
	let myData = "http://www.omdbapi.com/?i=tt3896198&apikey=bfabb086";
  //alert(myData);
  console.log(myData);
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
