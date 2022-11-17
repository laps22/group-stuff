var selectOptions = document.getElementById('activity')

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('select');
  var instances = M.FormSelect.init(dropdowns, '');
});

var submitButton = document.getElementById('#submit');
//Element to track my checked or unchecked boxes
var checkboxes = document.querySelectorAll('input[name="Genre"]');
var selectedGenres = document.querySelectorAll('input[name="Genre"]:checked');

//If statement to display error message If no values are picked
// checkboxes.forEach(function(checkbox) {
//     if (checkbox.checked==false) 
//     alert('Please select your Genre');
// });

//set values that will go into final API URL
var genreID = selectedGenres.value;

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
var explicit = '';
var noExplicit = 'No';
var yesExplicit = 'Yes';

// dark mode / hopefully explicit filter later on
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (darkToggle) {
    explicit = explicit.concat(yesExplicit)
  }
  if (!darkToggle) {
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

const searchElem = document.querySelector('#submit');
searchElem.addEventListener('click', (event) => {
  getContent(searchElem.value);
});

const getContent = (search) => {
  const url = new URL('https://itunes.apple.com/search');
  var rangeValue = sliderValue.value;
  const params = { term: search, media: 'music', limit: rangeValue, explicit: explicit, genreIndex: genreID};
  url.search = new URLSearchParams(params);
  fetch(url, { method: 'POST' })
    .then(results => results.json())
};

var generateButton = document.querySelector("Generate");

function displayPlaylist(){
    var playlist = getContent();
    var playlistText = document.querySelector("#generatedPlayList");
    playlist.value = playlist
}

generateButton.addEventListener("click", displayPlaylist)