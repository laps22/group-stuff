
var submitButton = document.getElementById('submit-button');
//Element to track my checked or unchecked boxes
var checkboxes = document.querySelectorAll('input[name="Genre"]');
var selectedGenres = document.querySelectorAll('input[name="Genre"]:checked');

//If statement to display error message If no values are picked
checkboxes.forEach(function(checkbox) {
    if (checkbox.checked==false) 
    alert('Please select your Genre');
});

//set values that will go into final API URL
var genreID = selectedGenres.value;

var getRepos = function (user) {
    var apiUrl = 'https://itunes.apple.com/search?parameterkeyvalue';
    
    
  };
