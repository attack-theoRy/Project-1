
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


            // Parse the response.

            console.log(json._embedded.events[0].name)
            for (var i = 0; i < 5 /*json._embedded.event.length8*/; i++) {
                
                // console debug
                console.log(json._embedded.events[i])

                
                // display each element
                var thisResult = $('<p>').text(json._embedded.events[i].name)

                 
                // STARTING TO DISPLAY RESULTS AS CARD
                var card = $("<div>").addClass("card");
                var cardBody = $("<div>").addClass("card-body");
                var eventTitle = $("<h4>").addClass("card-title").text(json._embedded.events[i].name);

                //var city = $("<h4>").addClass("card-title").text(response.name);
                
                // var cityDate = $("<h4>").addClass("card-title").text(date);
                
              //   var temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempFahren + " °F");
             //   var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
             //   var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
                var image = $("<img>").attr("src", json._embedded.events[i].images[0].url)

                //var venue = $('<p>').addClass('card-text').text("Venue: " + json._embedded.events[i]. )

                //var priceRange = $('<p>').addClass('card-text').text("Price range: " + json._embedded)
            
                // add to page
                cardBody.append(eventTitle, image)
                //cardBody.append(eventTitle ); 
                card.append(cardBody);
            
              //  $("#currentCity").append(card)
                // thisResult = $('<p>').text('ThisResult Here')
                $('#searchCards').append(card)
            }

            // Do other things.
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!

        }
    });
}
$('#searchBar').submit(searchFunction)