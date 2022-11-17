var selectOptions = document.getElementById('activity')

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('select');
  var instances = M.FormSelect.init(dropdowns, '');
});

// Selecting Activity and pulling value

var formSelect = function (event) {
  console.log(event.target.value)
  getActivity(event.target.value);

};

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

