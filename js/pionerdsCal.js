---
---

$(document).ready(function() {
  $('#calendar').fullCalendar({
    fixedWeekCount: false,
//    events: {{ site.data.frc_schedule | jsonify }},
    events: getEvents(),
    eventRender: function (event, element) {
      element.attr('href', 'javascript:void(0);');
      element.click(function() {
        if (event.url)
        {
          $("#urlLink").removeClass("hideURL");          
          $("#urlLink").addClass("showURL");
        }
        else
        {
          $("#urlLink").removeClass("showURL");          
          $("#urlLink").addClass("hideURL");          
        }
        
        $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
        $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
        if (event.end)
        {
          $("#endTimeLabel").addClass("show");
          $("#endTimeLabel").removeClass("hide");
        }
        else
        {
          $("#endTimeLabel").addClass("hide");
          $("#endTimeLabel").removeClass("show");
        }
        $("#eventInfo").html(event.description);
        $("#eventLink").attr('href', event.url);
        $("#eventContent").dialog({ modal: true, title: event.title, width:350 });
      });
    }
  })
});

function getEvents() {
  var events = {{ site.data.frc_schedule | jsonify }};
  
  var fllEvents = {{ site.data.fll_schedule | jsonify }};

  for (i=0; i < fllEvents.length; i++)
  {
    events.push(fllEvents[i]);  
  }
  
  return events;
};
