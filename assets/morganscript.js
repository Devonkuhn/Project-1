var genreBtn = document.getElementById("genreBtn");

var getGenre = function(genre) {
    var apiURL = '#'

    fetch(apiURL).then(function (response) {    
        if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
         displayGenre(data, fillin);
            });
        } 
   })
}

var displayGenre = function() {

}

genreBtn.addEventListener('submit', displayGenre);


// genreBtn.onClick = function() {
//     alert(select.options[select.selectedIndex].value);
// }