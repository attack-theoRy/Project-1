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
    email : "default@aol.com",
    sn : 'admin',
    pw : 'password'
  }
]

//var newUser = new storedUsers

// boolean to check if user is unique
var isUnique = true

// create and set a default user for localStorage
//var defaultUser = storedUsers

//defaultUser.email = "default@aol.com"
//defaultUser.sn = "admin"
//defaultUser.pw = 'password'

// add default user to array
//storedUsers[0] = defaultUser

/*
 Example api call
http://apilayer.net/api/check

    ? access_key = ba4e9c96082b0721c5c3dbaf01177cf2
    & email = piroozwallace@outlook.com
    & smtp = 1
    & format = 1
*/

// load the users from localStorage file
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

  // set to default
  var newUser = storedUsers

  // make sure there is something stored, otherwise dont check
  if(storedUsers !== null)
  {
  for(var i = 0; i < storedUsers.length; i++)
  {
    // check if email or username is the same
    if(emailInput === storedUsers[i].email)
    {
      $('#form_results').text('Email already taken')
      isUnique = false

    }
    else if(usernameInput === storedUsers[i].sn)
    {
      $('#form_results').text('Username already taken')
      isUnique = false
    }
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

      // set the new user with inputs if it's unique and valid email
      if(isUnique)
      {
        // store the new variables in the new user object
        newUser[0].email = emailInput
         newUser[0].pw = passwordInput
         newUser[0].sn = usernameInput

         console.log(newUser)

         // add user to array of objects
        storedUsers.push(newUser[0])

        // add it localstorage
        localStorage.setItem('saveUserArray', JSON.stringify(storedUsers))

        $('<p>').text()

        // debug console
        console.log(storedUsers)
  
      }

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