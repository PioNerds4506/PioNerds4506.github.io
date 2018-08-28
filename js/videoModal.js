function onVideoClick(videoId) {
   document.getElementById("uTubeVideo").src = "https://www.youtube.com/embed/" + videoId + "?rel=0";
   document.getElementById("videoModal").style.display = "block";
}