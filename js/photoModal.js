function onPhotoClick(element) {
   document.getElementById("modalImg").src = element.src;
   document.getElementById("photoModal").style.display = "block";
}