var activity = 'skiing'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activity,
    headers: { 'X-Api-Key': 'FdXrMVff6H8zgtnJAdfq2A==B6BXyui3gnWe3vno'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('select');
    var instances = M.FormSelect.init(dropdowns, '');
  });

//  // var getActivity = function (activity){
//     var apiUrl = 'https://api.api-ninjas.com/v1/caloriesburned?activity=' + activtiy;
  
//     fetch(apiUrl)
//     .then(function (response) {
//         if (response.ok) {
//             response.json().then(function (data){
//                 displayActivity(activity);
//             });
//         }
//     })
//     .catch(function (error) {
//         alert('Unable to connect to API');
//     });
//   };