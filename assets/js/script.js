var darkToggle = document.querySelector('#darkToggle');
var player = document.querySelector('.btn');

var redirect_uri = "http://127.0.0.1:5500/group-stuff/index.html"

var client_id = "";
var client_secret = "";

const AUTHORIZE = "https://accounts.spotify.com/authorize"

function onPageLoad() {

}

function requestAuthorization() { 
    client_id = document.getElementById("clientID");
    client_secret = document.getElementById("clientSecret");
    localStorage.setItem("client_id", client_id);
    localStorage.setItem("client_secret", client_secret);

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialogue=true";
    url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    window.location.href = url;
}

// dark mode / hopefully explicit filter later on
darkToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
})

// JS for the heart rate slider
var sliderValue = document.getElementById("myRange");
var output = document.getElementById("slideOutput");
output.innerHTML = sliderValue.value;

sliderValue.oninput = function() {
  output.innerHTML = this.value;
}
if (output > 60 && output < 90) {
    // select songs with this range of bpm
} else if (output > 90 && output < 120) {
    // select songs with this range of bpm 
} else if (output > 120 && output < 150) {
    // select songs with this range of bpm
} else {
    // select songs with bpm above 150 for intense exercise
}

