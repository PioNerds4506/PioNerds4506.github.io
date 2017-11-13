function onVideoClick(videoId) {
   document.getElementById("uTubeVideo").src = "https://www.youtube.com/embed/" + videoId + "?rel=0";
   $("#videoGallery").addClass("hidePhoto");
   $("#videoPlayer").removeClass("hidePhoto");
}

function onFullVideoClick() {
   document.getElementById("uTubeVideo").src = "";
   $("#videoGallery").removeClass("hidePhoto");
   $("#videoPlayer").addClass("hidePhoto");
}