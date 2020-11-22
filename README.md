# Project Wknd


Pirooz Wallace | Hector Garcia | Eli Derjabin

<img src='screenshots\LandingPage.png' alt=homepage>

Welcome to Wknd. where you can find something to do this weekend in seconds. 

<h3> APIs / Frameworks / Tech Used: </h3>
- Ticketmaster Discovery API
- Mailboxlayer API
- UI Kit CSS Framework
- JQuery
- LocalStorage for accounts

You can start either by going directly to the 'FIND' page to start searching for events immediately using the Ticketmaster Discovery API or you can register an account and select your city for automatic results when loading the page.  Our register page has a lot of error-checking on it. It needs a complex password and uses the mailboxlayer API to verify that the email is valid.

<img src='screenshots\Register.png' alt='Register'>

If you registered correctly then your account will be added to localStorage and you will be taken to your profile so you can see your profile data. 

<img src='screenshots\Profile.png' alt='Profile'>

If you had a previous profile, you can also use the login page to load your stored profile

<img src='screenshots\Login.png'  alt='Login'>

Ok now lets finally get to some searching!  If your account is loaded, you will see your username in the upper left corner and when you come to the search page your home city will be automatically loaded and used to display search results. Otherwise you can search for whatever you like on this page. There are a bunch of filters so have fun!  You can search by keyword, category, state, city and dates. The first date input box is to find events that start after that date, while the second date input box is to find events that end before that date, so by using both dates, you can find events within a specified interval. You can also sort results by Name, Date, or Random (must press submit to sort). IF there is more than one page, you can use the next and previous buttons to scroll through them.

<img src='screenshots\SearchResults.png' alt='SearchResults1'>

All types of results for whatever your desire is! <b><u>Remember you can click on the title to buy tickets for each event.</u></b>  All the relevant info is displayed on the cards including the title/ticket info, address, venue, dates and price range for tickets.

<img src='screenshots\SearchResults2.png' alt='SearchResults2'> 


                                           




