$("#mediaTabs a").on("click", function(){
   $("#mediaTabs a").find(".active").removeClass("active");

   if (!$(this).attr('class'))
   {
      $(this).parent().addClass("active");
   }
});

$(document).ready(function() {
   var tabList = [];
   $("#mediaTabs a").each(function() { tabList.push($(this).text()) });
   
   for (i=0; i<tabList.length; i++)
   {
      if (location.pathname.includes(tabList[i].toLowerCase()))
      {
         $("#mediaHeader").text(tabList[i]);
         $("#mediaTabs a").each(function() { if ($(this).text() == tabList[i]) $(this).addClass("active") });
         break;
      }
   }
   
   if ( $("#mediaHeader").text() == "")
   {
      var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
      $("#mediaHeader").text(pageName.charAt(0).toUpperCase() + pageName.slice(1));
   }
});
