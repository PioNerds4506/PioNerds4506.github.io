function aboutNavClicked() {
   var x = document.getElementById("aboutNav");
   var y = document.getElementById("mediaNav");
   var z = document.getElementById("membersNav");

   y.className = y.className.replace(" w3-show", "");
   z.className = z.className.replace(" w3-show", "");

   if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
   } 
   else { 
      x.className = x.className.replace(" w3-show", "");
   }
}

function mediaNavClicked() {
   var x = document.getElementById("mediaNav");
   var y = document.getElementById("aboutNav");
   var z = document.getElementById("membersNav");

   y.className = y.className.replace(" w3-show", "");
   z.className = z.className.replace(" w3-show", "");

   if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
   } 
   else { 
      x.className = x.className.replace(" w3-show", "");
   }
}

function membersNavClicked() {
   var x = document.getElementById("membersNav");
   var y = document.getElementById("aboutNav");
   var z = document.getElementById("mediaNav");

   y.className = y.className.replace(" w3-show", "");
   z.className = z.className.replace(" w3-show", "");

   if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
   } 
   else { 
      x.className = x.className.replace(" w3-show", "");
   }
}
