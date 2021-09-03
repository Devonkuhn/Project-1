var genreBtn = document.getElementById("genreBtn");

var getGenre = function(genre) {

    var apiURL = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup';
    var userInputValue = document.getElementById('genreDropdown').value;
    var searchURL = apiURL + userInputValue;

    displayGenre(searchURL);

}

var displayGenre = function(searchURL) {
    fetch(apiURL).then(function (response) {    
    if (response.status !== 200) {

    } 
    response.json().then(function (data) {
        console.log(data);
        displayGenre(data);
        });
    })
}

genreBtn.addEventListener('submit', displayGenre);