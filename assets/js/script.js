
var generateButton = document.querySelector("Generate");

function displayPlaylist(){
    var playlist = getContent();
    var playlistText = document.querySelector("#generatedPlayList");
    playlist.value = playlist
}

generateButton.addEventListener("click", displayPlaylist)