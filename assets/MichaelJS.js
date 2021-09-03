var button = document.getElementById('lengthdropdown');
button.addEventListener('click', searchMovieLength);

function searchMovieLength() {
  var userInputValue = document.getElementById('lengthdropdown').value;
  var urlBase = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup'
  var searchUrl = urlBase + userInputValue;
  performSearch(searchUrl);
}

function getApi(urlBase) {
  fetch(urlBase)
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function lengthResults() {
  var responseJSON = JSON.parse(this.response);
  if (responseJSON.error) console.log('Character not found');
  else {
    var urlBase = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup';
    responseJSON.results.forEach(function ()  {
    })
    document.getElementById('lengthdropdown').innerHTML = urlBase;
  }
}
