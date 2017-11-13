$("#mainNav a").on("click", function(){
   $("#mainNav li").find(".active").removeClass("active");

   if (!$(this).attr('class'))
   {
      $(this).parent().addClass("active");
   }
});

$(document).ready(function() {
   $('a[href="/' + this.location.pathname.substring(location.pathname.lastIndexOf("/") + 1) + '"]').parents('li').addClass('active');
});

