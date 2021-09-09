// HUTH1QtfQAfqpTYJWHo05rXbQdSw6LmKoEgwF53f
// https://api.watchmode.com/v1/genres/?apiKey=HUTH1QtfQAfqpTYJWHo05rXbQdSw6LmKoEgwF53f

var genreBtn = document.getElementById("genreBtn");
var apiKey = 'HUTH1QtfQAfqpTYJWHo05rXbQdSw6LmKoEgwF53f';
var genre = document.getElementById('genreDropdown').value;
var apiUrl = 'https://api.watchmode.com/v1/list-titles/?apiKey=' + apiKey + '&genre=' + genreID
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
    fetch('https://api.watchmode.com/v1/genres/?apiKey=' + apiKey)
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
    fetch('https://api.watchmode.com/v1/list-titles/?apiKey=' + apiKey + '&genre=' + genreID)
      .then(function (response) {
        console.log(response.status);
        if (response.status !== 200) {
          responseText.textContent = response.status;
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayGenre(data, false);
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
  
  for (let i = 0; i < data.titles.length && i < 15; i++) {

    var movie = data.titles[i].title;
    html += movie + "<br>";
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