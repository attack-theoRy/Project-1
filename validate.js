// Variable declarations

// api Key to be used
var apiKey = 'ba4e9c96082b0721c5c3dbaf01177cf2'

// starting URL
var url = 'http://apilayer.net/api/check?access_key='

// example API call
var queryURL = url + apiKey + '&email='

// the user's email
var userEmail = ''

// array of objects that will be used to store user profiles
var storedUsers = [
  {
     // each user will have email, screenname and password stored
    email : '',
    sn : '',
    pw : ''
  }
]

/*
 Example api call
http://apilayer.net/api/check

    ? access_key = ba4e9c96082b0721c5c3dbaf01177cf2
    & email = piroozwallace@outlook.com
    & smtp = 1
    & format = 1
*/

function loadUsers()
{
  storedUsers = JSON.parse(localStorage.getItem('saveUserArray'))

  
}

var form = document.getElementById("registerForm");

// event listener for the submit function
form.addEventListener("submit", function(event) {
  event.preventDefault()
  registerEmail()
})

loadUsers()

// function to register Email
function registerEmail()
{

  // get the user's email
  var emailInput = $('#email').val()

  var passwordInput = $('#pw').val()

  var usernameInput = $('#sn').val()

  for(var i = 0; i < storedUsers.length; i++)
  {
    if(emailInput === storedUsers.email)
    {
      $('#form_results').text('Email already taken')

    }
  }

  
  // add it to the query
  queryURL += emailInput


  // ajax call with mailboxlayer api
$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function (response){

    // debug console
    console.log('form submitted')

    // debug response object
    console.log(response)

    if(response.format_valid && response.mx_found)
    {
      // debug
      console.log("email valid")
        
      // display if email is valid
      $('#form_results').text('Email is VALID!')
        console.log("format")
    }
    else
    {
      // display if it is not
      $('#form_results').text('Email not valid')
    
    }


    // reset the queryURL and email input
    $('#email').empty()
    queryURL = url + apiKey + '&email='

  
  })
}


function login()
{

}