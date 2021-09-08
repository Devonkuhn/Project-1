HUTH1QtfQAfqpTYJWHo05rXbQdSw6LmKoEgwF53f
ttps://api.watchmode.com/v1/genres/?apiKey={apiKey}

var genreBtn = document.getElementById("genreBtn");
var apiKey = '9f1f886920cacc5ab769ccbe0ad1489f';
var genre = document.getElementById('genreDropdown').value;
var apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&with_genres=' + genre;
var data = '';
var genreID ='';
var genreList = [
  {
    name: 'Action',
    id: '28'
  },
  {
    name: 'Comedy',
    id: '35'
  },
  {
    name: 'Drama',
    id: '18'
  },
  {
    name: 'Fantasy',
    id: '14'
  },
  {
    name: 'Horror',
    id: '27'
  },
  {
    name: 'Mystery',
    id: '9648'
  },
  {
    name: 'Romance',
    id: '10749'
  },
  {
    name: 'Thriller',
    id: '53'
  }
];

function searchGenre() {
    genre = document.getElementById('genreDropdown').value;
    console.log(genre);
    getGenreList();
    getGenre(genre);
}

function getGenreList() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey + '&language=en-US', {
        headers: { 
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4NDBhOTQwMjRkYjkyN2UwNGQ3NDI5MDc5YThhMyIsInN1YiI6IjYxMzQyY2FhMGI3MzE2MDAyYWM2YWFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58X4jp1eA5k7TlNbmZxRphw11xdo28XelQE9Sd-DGLM'
      }})
    .then(function(response) {
        console.log(response.status);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    for (i = 0; i < genre.length; i++) {
      if (genre == genreList[i].name) {
        genreID = genreList[i].id
        break;
      }
    }
}

function getGenre(genre) {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&with_genres=' + genreID, {
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

var displayGenre = function(data, historic) {
    var html = "";

  if (historic == true) {
    html+="<strong><em>Previous Results</em></strong><br>";
  }

  else if (historic == false) {
    html+="<strong><em>Search Results</em></strong><br>"
  }
  
  for (let i = 0; i < data.results.length && i < 15; i++) {

    var movie = data.results [i];
    html += movie.original_title + "<br>";
  }

  var genreResultsDiv = document.getElementById('results');
  genreResultsDiv.innerHTML = html
}

genreBtn.addEventListener('click', searchGenre);

window.addEventListener('load', function() {
    if (localStorage.genreResults) {
        data = JSON.parse(localStorage.genreResults);
        displayGenre(data, true);
    }
})