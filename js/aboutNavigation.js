$("#aboutTabs a").on("click", function(){
   $("#aboutTabs a").find(".active").removeClass("active");

   if (!$(this).attr('class'))
   {
      $(this).parent().addClass("active");
   }
});

$(document).ready(function() {
   var tabList = [];
   $("#aboutTabs a").each(function() { tabList.push($(this).text()) });
 
   var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
   pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)
  
   for (i=0; i<tabList.length; i++)
   {
      if (tabList[i].includes(pageName))
      {
         $("#aboutHeader").text(tabList[i]);
         $("#aboutTabs a").each(function() { if ($(this).text() == tabList[i]) $(this).addClass("active") });
         break;
      }
   }
   
   if ( $("#aboutHeader").text() == "")
   {
      var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
      $("#aboutHeader").text(pageName.charAt(0).toUpperCase() + pageName.slice(1));
   }
});
