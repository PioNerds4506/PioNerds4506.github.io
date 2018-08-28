$("#membersTabs a").on("click", function(){
   $("#membersTabs a").find(".active").removeClass("active");

   if (!$(this).attr('class'))
   {
      $(this).parent().addClass("active");
   }
});

$(document).ready(function() {
   var tabList = [];
   $("#membersTabs a").each(function() { tabList.push($(this).text()) });
   
   var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
   pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

   for (i=0; i<tabList.length; i++)
   {
      var temp = tabList[i].replace(" ","");

      if (location.pathname.includes(tabList[i]))
      {
         $("#membersHeader").text(tabList[i]);
         $("#membersTabs a").each(function() { if ($(this).text() == tabList[i]) $(this).addClass("active") });
         break;
      }
      else if (location.pathname.includes(tabList[i].replace(" ","").toLowerCase()))
      {
         $("#membersHeader").text(tabList[i]);
         $("#membersTabs a").each(function() { if ($(this).text() == tabList[i]) $(this).addClass("active") });
         break;         
      }
   }
   
   if ( $("#membersHeader").text() == "")
   {
      var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
      $("#membersHeader").text(pageName.charAt(0).toUpperCase() + pageName.slice(1));
   }
});
