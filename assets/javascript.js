//

var button = document.getElementById('yearButton');
button.addEventListener('click', searchreleaseYear);

function searchreleaseYear() {
  var length = document.getElementById('yearInput').value;

  performSearch(length);
}

function performSearch(length) {
  fetch("https://developers.themoviedb.org/3/discover/movie?sort_by&primary_release_date.gte=2-15-01-01&primary_release_date.lte=2020-01-01"+length, {
    headers: { 
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4NDBhOTQwMjRkYjkyN2UwNGQ3NDI5MDc5YThhMyIsInN1YiI6IjYxMzQyY2FhMGI3MzE2MDAyYWM2YWFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58X4jp1eA5k7TlNbmZxRphw11xdo28XelQE9Sd-DGLM'
  }})
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displaySearch (data, false);
      localStorage.lengthResults = JSON.stringify(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}

function displaySearch(data, historic){

    var html = "";
  
    if (historic == true){
      html+="<strong><em>Previous Results</em></strong><br>";
    }
  
    else if (historic == false){
      html+="<strong><em>Search Results</em></strong><br>"
    }
    
    for (let i = 0; i < data.results.length && i < 15; i++) {
  
      var movie = data.results [i];
      html += movie.original_title + "<br>";
    }
  
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = html
  }
  
  window.addEventListener('load', function() {
    if (localStorage.lengthResults){
       var data = JSON.parse(localStorage.lengthResults);
       displaySearch (data, true)
    }
});
  