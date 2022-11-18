var selectOptions = document.getElementById('activity')

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('select');
  var instances = M.FormSelect.init(dropdowns, '');
});

var submitButton = document.getElementById('#submit');
//Element to track my checked or unchecked boxes
// var selectedGenre = document.querySelectorAll('input[name="fill-in cyan"]:checked');



//If statement to display error message If no values are picked
// checkboxes.forEach(function(checkbox) {
//     if (checkbox.checked==false) 
//     alert('Please select your Genre');
// });

//set values that will go into final API URL
// var genreID = selectedGenre.value;

// Selecting Activity and pulling value

var formSelect = function (event) {
  console.log(event.target.value)
  getActivity(event.target.value);

};

var submitButton = document.getElementById('submit');

//API fetch
var getActivity = function (activity) {
  var apiUrl = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity;

  fetch(apiUrl, {
    headers: { 'X-Api-Key': 'FdXrMVff6H8zgtnJAdfq2A==B6BXyui3gnWe3vno' },
    contentType: 'application/json',
  })
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
    })
    .catch(function (error) {
      console.log(error)
    });
};
var displayActivity = function (activity, value) {
  return;
};

//Event listener once value has been selected
selectOptions.addEventListener('change', formSelect)

var darkToggle = document.querySelector('#darkToggle');

var noExplicit = "No";
var yesExplicit = "Yes";

var explicit = '';

// dark mode / hopefully explicit filter later on
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (darkToggle) {
    explicit = explicit.concat(yesExplicit)
  }
  if (darkToggle === 'checked') {
    explicit = explicit.concat(noExplicit)
  }
})

// Slider for quantity of songs requested
var sliderValue = document.getElementById("myRange");
var output = document.getElementById("slideOutput");
output.innerHTML = sliderValue.value;

sliderValue.oninput = function () {
  output.innerHTML = this.value;
}

const searchElem = document.querySelector('#search');

searchElem.addEventListener('click', (event) => {
  var checkboxes = document.querySelectorAll('input[name="Genre"]');
  var genreId = $('.genres:checkbox:checked').val();
  console.log(genreId)
  getContent(searchElem.value, genreId);
});

const getContent = (search, genreId) => {
  const url = new URL('https://itunes.apple.com/search');
  var rangeValue = sliderValue.value;
  const params = { term: 'search', media: 'music', limit: rangeValue, explicit: explicit, genreIndex: genreId};
  url.search = new URLSearchParams(params);
  fetch(url, { method: 'POST' })
    .then(response => response.json()).then(result => songResults(result))
};


// var generateButton = document.querySelector("Generate");

// function displayPlaylist(){
//     var playlist = getContent();
//     var playlistText = document.querySelector("#generatedPlayList");
//     playlist.value = playlist
// }

// generateButton.addEventListener("click", displayPlaylist)

// var songResults = function (data) {
//   console.log(data);
//   var results = data.results;

//   $(".collection").empty();
//   document.querySelector("title").style.display = "block";
//   for (var i = 0; i < results.length; i++) {
//     var repoInfo =
//       "name: " +
//       results[i].trackName +
//       " (" +
//       results[i].primaryGenreName +
//       ")" +
//       "<br>Length: " +
//       results[i].artistName +
//       "<img src=" +
//       results[i].artworkUrl60 +
//       '" alt="Poster image of ' +
//       results[i].trackName +
//       '"> ';
//     var liElement = $('<li>')
//     liElement.html(repoInfo)
//     $('.collection').append(liElement)
//   }
// };