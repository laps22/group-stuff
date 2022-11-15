document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('select');
  var instances = M.FormSelect.init(dropdowns, '');
});

// add event listener to onclick

var getActivity = function (activity) {
  var apiUrl = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity;

  fetch(apiUrl, {
    headers: { 'X-Api-Key': 'FdXrMVff6H8zgtnJAdfq2A==B6BXyui3gnWe3vno' },
    contentType: 'application/json',
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayActivity(activity);
        });
      }
    })
    .catch(function (error) {
      // alert('Unable to connect to API');
      console.log(error)
    });
}

getActivity('yoga');



