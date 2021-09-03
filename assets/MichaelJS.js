var button = document.getElementById('lengthdropdown');
button.addEventListener('click', searchMovieLength);

function searchMovieLength() {
  var userInputValue = document.getElementById('lengthdropdown').value;
  var urlBase = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup'
  var searchUrl = urlBase + userInputValue;
  performSearch(searchUrl);
}

function performSearch(searchUrl) {
  var requestData = new XMLHttpRequest();
  requestData.addEventListener('load', lengthResults);
  requestData.open('GET', searchUrl);
  requestData.send();
}

function lengthResults() {
  var responseJSON = JSON.parse(this.response);
  if (responseJSON.error) console.log('Character not found');
  else {
    var urlBase = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup';
    responseJSON.results.forEach(function (value)  {
    const value = document.getElementById('mySearch').value;
    })
    document.getElementById('demo').innerHTML = urlBase;
  }
}
