function onPhotoClick(element) {
   document.getElementById("photoImg").src = element.src;
   $("#gallery").addClass("hidePhoto");
   $("#fullPhoto").removeClass("hidePhoto");
}

function onFullPhotoClick() {
   document.getElementById("photoImg").src = "";
   $("#gallery").removeClass("hidePhoto");
   $("#fullPhoto").addClass("hidePhoto");
}