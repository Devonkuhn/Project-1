//

var button = document.getElementById("yearButton");
button.addEventListener("click", searchreleaseYear);

function searchreleaseYear() {
<<<<<<< HEAD
  var length = document.getElementById("yearInput").value;
=======
  var length = document.getElementById("yearButton").value;
>>>>>>> 3182fe9573c2880d6cf204564f5a383b5955ff49

  performSearch(length);
}

function performSearch(length) {
  fetch(
<<<<<<< HEAD
    "https://developers.themoviedb.org/3/discover/movie?sort_by&primary_release_date.gte=2-15-01-01&primary_release_date.lte=2020-01-01" +
=======
    "https://developers.themoviedb.org/3/discover/movie?sort_by&primary_release_date.gte=2000-15-01-01&primary_release_date.lte=2020-09-09" +
>>>>>>> 3182fe9573c2880d6cf204564f5a383b5955ff49
      length,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGI4NDBhOTQwMjRkYjkyN2UwNGQ3NDI5MDc5YThhMyIsInN1YiI6IjYxMzQyY2FhMGI3MzE2MDAyYWM2YWFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58X4jp1eA5k7TlNbmZxRphw11xdo28XelQE9Sd-DGLM",
      },
    }
  )
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displaySearch(data, false);
      localStorage.lengthResults = JSON.stringify(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displaySearch(data, historic) {
  var html = "";

  if (historic == true) {
    html += "<strong><em>Previous Results</em></strong><br>";
  } else if (historic == false) {
    html += "<strong><em>Search Results</em></strong><br>";
<<<<<<< HEAD
  }

  for (let i = 0; i < data.results.length && i < 15; i++) {
    var movie = data.results[i];
    html += movie.original_title + "<br>";
  }

  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = html;
}

window.addEventListener("load", function () {
  if (localStorage.lengthResults) {
    var data = JSON.parse(localStorage.lengthResults);
    displaySearch(data, true);
  }
});

//modal
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

modal.addEventListener("click", () => {
  modal.classList.remove("is-active");
=======
  }

  for (let i = 0; i < data.results.yearResults && i < 15; i++) {
    var movie = data.results[i];
    html += movie.original_title + "<br>";
  }

  var resultsDiv = document.getElementById("yearResults");
  resultsDiv.innerHTML = html;
}

window.addEventListener("load", function () {
  if (localStorage.yearResults) {
    var data = JSON.parse(localStorage.yearResults);
    displaySearch(data, true);
  }
>>>>>>> 3182fe9573c2880d6cf204564f5a383b5955ff49
});
