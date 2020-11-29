# Project Wknd


Pirooz Wallace | Hector Garcia | Eli Derjabin

Contact Info: PiroozWallace@outlook.com

LinkedIn: www.linkedin.com/in/piroozwallace

Github Repo: https://github.com/attack-theoRy/ProjectWknd

Github Pages: https://attack-theory.github.io/ProjectWknd/homePage.html

<img src='screenshots\LandingPage.png' alt=homepage>

Welcome to Wknd. where you can find something to do this weekend in seconds. 

<h3> APIs / Frameworks / Tech Used: </h3>
- Ticketmaster Discovery API
- Mailboxlayer API
- UI Kit CSS Framework
- JQuery
- LocalStorage for accounts

Pirooz Wallace - Ticketmaster API (filters + results) / Mailboxlayer API / localStorage account system  

Hector Garcia - Ticketmaster API framework

Eli Derjabin - UI Kit / Front End


You can start either by going directly to the 'FIND' page to start searching for events immediately using the Ticketmaster Discovery API or you can register an account and select your city for automatic results when loading the FIND page.  Our register page has a lot of error-checking on it. It needs a complex password and uses the mailboxlayer API to verify that the email is valid.

<img src='screenshots\Register.png' alt='Register'>

If you registered correctly then your account will be added to localStorage and you will be taken to your profile so you can see your profile data. 

<img src='screenshots\Profile.png' alt='Profile'>

If you had a previous profile, you can also use the login page to load your stored profile. You can also log out of your profile if you want to here.

<img src='screenshots\Login.png'  alt='Login'>

Ok now lets finally get to some searching!  If your account is loaded, you will see your username in the upper right corner and when you come to the search page your home city search results will be displayed. Otherwise you can search for whatever you like on this page. There are a bunch of filters so have fun!  You can search by keyword, category, state, city and dates. The first date input box is to find events that start after that date, while the second date input box is to find events that end before that date, so by using both dates, you can find events within a specified interval. You can also sort results by Name, Date, or Random (must press submit to sort). IF there is more than one page, you can use the next and previous buttons to scroll through them.

<img src='screenshots\SearchResults.png' alt='SearchResults1'>

All types of results for whatever your desire is! <b><u>Remember you can click on the title to buy tickets for each event.</u></b>  All the relevant info is displayed on the cards including the title/ticket info, address, venue, dates and price range for tickets. Everytime you hit next or previous the ticketmaster API is called again with different page parameters. 

<img src='screenshots\SearchResults2.png' alt='SearchResults2'> 



MIT License
Copyright (c) 2020 Pirooz Wallace (https://attack-theory.github.io/Portfolio/) Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

English Česky
                                           




