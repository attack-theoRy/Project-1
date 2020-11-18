

var searchFunction = function (event) {
    event.preventDefault()
    
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events?"
    var searchEvent = "keyword=" + document.querySelector('#searchEvent').value

    var searchClassification = '&classificationName=' + document.querySelector('#classification').value

    var sortFilter = '&sort=' + document.querySelector('#sort').value
    
    var city = "&city=" + document.querySelector('#searchCity').value
    var stateCode = "&stateCode=" + document.querySelector('#searchState').value
   // var countryCode = '&countryCode=' + document.querySelector('#searchCountry').value
    var startDate = '&startDateTime=' + document.querySelector('#startDateTime').value
   // var endDate = '&endDateTime=' + document.querySelector('#endDate').value
    var query = "&apikey=rjC9JcYGVmI9QLKslEzKTEDnb93gABPp"
    var locale = "&locale=*"

    console.log('debugHere')
   // console.log(document.querySelector('#startDate').value)
   // console.log(document.querySelector('#endDate').value)

    $.ajax({
        type: "GET",
        url: queryURL + query + locale + searchEvent + searchClassification +  startDate + sort + city + stateCode,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(searchEvent)
            console.log(searchCity)
            console.log(json)

            // empty the search results first
            $('#searchCards').empty()

            console.log(city)
            console.log(stateCode)
            console.log(json)

            // clear results 
            $('#searchResults').text('')

            if(json.page.totalElements > 0)
            {
                console.log(json)
            // loop through all results
            for (var i = 0; i < json._embedded.events.length; i++) {
                
                // console debug
                console.log(json._embedded.events[i])


                // to abbreviate the calls
                var thisResult = json._embedded.events[i]
                 
                // STARTING TO DISPLAY RESULTS AS CARD  -- should eventually be styled better
                var card = $("<div>").addClass("uk-card-secondary")


                var cardBody = $("<div>").addClass("uk-card-body");

                //var eventTitle = $("<h4>").addClass("uk-card-title").text(thisResult.name);

                // get the hyperlink to buy tickets for event
                var link = $("<a>").attr("href", thisResult.url);

                // make the link the card title
                link.addClass('uk-card-title')

                
                // set the text for the link
                link.text(thisResult.name)

             
                // dates of the concert
                if(thisResult.dates.start.localTime)
                {
                var dates = $('<p>').text('Date / Time : ' + thisResult.dates.start.localDate + ' at ' + thisResult.dates.start.localTime)
                dates.css({"font-family": "Garamond, bold", 'color': 'red', 'font-size' : '120%'} )
            }
            else{
                var dates = $('<p>').text('Date / Time : ' + thisResult.dates.start.localDate + ' time TBA' )
                dates.css({"font-family": "Garamond, bold", "color" : "red", "font-size": "120%"} )

            }


                // debug console
                console.log(link)

                // put the link on a separate line
                var linkText = $('<h2>').append(link)

                // event image
                var image = $("<img>").attr("src", json._embedded.events[i].images[0].url)

                // responsive images
                image.addClass('img-fluid')

              // change the image height and width
                image.height(200)
                image.width(300)

                // venue
                var venue = $('<p>').addClass('card-text').text("Venue:  " + thisResult._embedded.venues[0].name )

                venue.css({'color': 'white'})
                venue.css({"font-family": "Garamond, bold", "font-size": "150%"} )

                var venueAddress = $('<p>').addClass('card-text').text("Address: " + thisResult._embedded.venues[0].address.line1)


                // make sure price range exists
                if(thisResult.priceRanges)
                {

                
                    // get the price range for tickets
                    var priceText = $('<p>').addClass('card-text').text("Price range: $" + thisResult.priceRanges[0].min 
                    + '  to:  $' + thisResult.priceRanges[0].max)

                    // change text to green
                    priceText.css({'color': 'green'})

                    // add the content to the cardBody
                    cardBody.append(linkText, image, dates, priceText, venue, venueAddress)
                }
                else{

                    var priceText = $('<p>').addClass('card-text').text('Price range: TBA')
                    
                    // change text to green
                    priceText.css({'color': 'green'})

                    cardBody.append(linkText, image, dates, priceText, venue, venueAddress )
                }
                

                
                // add the cardBody to the card
                card.append(cardBody);

                // put a border on the cards
                card.css('border', 'solid 4px black');

                // add default styling to result cards
                card.addClass('uk-card uk-card-default')
                
                
                // add the card to the page
                $('#searchCards').append(card)
              //  $('#searchCards').show(1000)
            }
        }
        else
        {
            // error checking display  --- feel free to style differently
            $('#searchResults').text('No results with that criteria')   
            $('#searchResults').css({'color':'white'})
            $('#searchResults').css({'background-color':'black'})
            console.log('No results with that criteria')
        }
        
            // Do other things.
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        
        }
    });
}

// event listener for form submission
$('#searchBar').submit(searchFunction)

// displays results from home city
function showHomeResults(homeCity, homeState)
{

        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?"
        var searchEvent = "keyword=" + document.querySelector('#searchEvent').value
        var city = "&city=" + homeCity
        var state = '&state=' + homeState
        var query = "&apikey=rjC9JcYGVmI9QLKslEzKTEDnb93gABPp"
        $.ajax({
            type: "GET",
            url: queryURL + searchEvent + city + state + query,
            async: true,
            dataType: "json",
            success: function (json) {
                console.log(searchEvent)
                console.log(searchCity)
                console.log(json);
    
                // empty the search results first
                $('#searchCards').empty()

                // clear results 
                $('#searchResults').text('')
    
                if(json.page.totalElements > 0)
                {
                    console.log(json)
                // loop through all results
                for (var i = 0; i < json._embedded.events.length; i++) {
                    
                    // console debug
                    console.log(json._embedded.events[i])
    
    
                    // to abbreviate the calls
                    var thisResult = json._embedded.events[i]
                     
                    // STARTING TO DISPLAY RESULTS AS CARD  -- should eventually be styled better
                    var card = $("<div>").addClass("uk-card-secondary")
    
    
                    var cardBody = $("<div>").addClass("uk-card-body");
                   
                   // var eventTitle = $("<h4>").addClass("uk-card-title").text(thisResult.name);
    
                    // get the hyperlink to buy tickets for event
                    var link = $("<a>").attr("href", thisResult.url);
    
                    link.addClass('uk-card-title')
    
                    
                    // set the text for the link
                    link.text(thisResult.name)
    
                 
                    // dates of the concert
                    var dates = $('<p>').text('Dates: ' + thisResult.dates.start.localDate + ' at ' + thisResult.dates.start.localTime)


                    dates.css({"font-family": "Garamond, bold", "font-size": "150%"} )
    
    
                    // debug console
                    console.log(link)
    
                    // put the link on a separate line
                    var linkText = $('<h2>').append(link)
    
                    // event image
                    var image = $("<img>").attr("src", json._embedded.events[i].images[0].url)
    
                    // responsive images
                    image.addClass('img-fluid')
    
                  // change the image height and width
                    image.height(200)
                    image.width(300)
    
                    // venue
                    var venue = $('<p>').addClass('card-text').text("Venue:  " + thisResult._embedded.venues[0].name )
                    venue.css({"font-family": "Garamond, bold", "font-size": "150%"} )
                    venue.css({'color': 'white'})
    
    
                    // make sure price range exists
                    if(thisResult.priceRanges)
                    {
                    
                        // get the price range for tickets
                        var priceText = $('<p>').addClass('card-text').text("Price range: $" + thisResult.priceRanges[0].min 
                        + '  to:  $' + thisResult.priceRanges[0].max)

                        priceText.css({'color': 'green'})
    
                        // add the content to the cardBody
                        cardBody.append(linkText, image, dates, priceText, venue)
                    }
                    else{
                        
                        cardBody.append(linkText, image, dates, venue )
                    }
                    
    
                    
                    // add the cardBody to the card
                    card.append(cardBody);
    
                    // put a border on the cards
                    card.css('border', 'solid 4px black');
    
                    // add default styling to result cards
                    card.addClass('uk-card uk-card-default')
                    
                    
                    // add the card to the page
                    $('#searchCards').append(card)
                  //  $('#searchCards').show(1000)
                }
            }
            else
            {
                // error checking display  --- feel free to style differently
                $('#searchResults').text('No results with that criteria')   
                $('#searchResults').css({'color':'white'})
                $('#searchResults').css({'background-color':'black'})
                console.log('No results with that criteria')
            }
            
                // Do other things.
            },
            error: function (xhr, status, err) {
                // This time, we do not end up here!
            
            }
        });


}