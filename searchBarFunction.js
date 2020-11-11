
var searchFunction = function (event) {
    event.preventDefault()
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?"
    var searchEvent = "keyword=" + document.querySelector('#searchEvent').value
    var searchGenre = "&grenreId=" + document.querySelector('#genreId').value
    var city = "&city=" + document.querySelector('#searchCity').value
    var query = "&apikey=rjC9JcYGVmI9QLKslEzKTEDnb93gABPp"
    $.ajax({
        type: "GET",
        url: queryURL + searchEvent + searchGenre + city + query,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(searchEvent)
            console.log(searchCity)
            console.log(json);

            console.log(json._embedded.events[0].name)

            /*  for(var i = 0; i < json._embedded.event.length; i++)
              {
                  // display each element
                  $('<p>').text(json._embedded.event[i].name)
 
              } */
            // Parse the response.

            console.log(json._embedded.events[0].name)
            for (var i = 0; i < 5 /*json._embedded.event.length8*/; i++) {
                // display each element
                var thisResult = $('<p>').text(json._embedded.events[i].name)
                // thisResult = $('<p>').text('ThisResult Here')
                $('#searchResults').append(thisResult)
            }

            // Do other things.
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!

        }
    });
}
$('#searchBar').submit(searchFunction)