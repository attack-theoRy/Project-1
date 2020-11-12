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
  },
  {
    email : 'PiroozWallace@gmail.com',
    sn : 'theoRy',
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

  // load the savedUsers onto the array
  var getStoredArray = JSON.parse(localStorage.getItem('saveUserArray'))

  // make sure there is something stored
  if(getStoredArray !== null)
  {
  storedUsers = getStoredArray
  console.log(storedUsers)
  }

  console.log(storedUsers)

}

var form = document.getElementById("registerForm");

var clear = document.getElementById("clearLocal");

// for debugging, used to clear out the localStorage array of user accounts
clear.addEventListener('click', function(event) {
  event.preventDefault()
  localStorage.clear()
  $('#form_results').text('Local Storage is Cleared')
})

// event listener for the submit function
form.addEventListener("submit", function(event) {
  event.preventDefault()
  registerEmail()
})

loadUsers()

// function to register Email
function registerEmail()
{

  // debug console
  console.log('registerClick')
  

  // get the user's email
  var emailInput = $('#email').val()

  // get the user's password
  var passwordInput = $('#pw').val()

  // get the usernameInput
  var usernameInput = $('#sn').val()

  
  // set to form fields
  var newUser = {
    email : emailInput,
    sn : usernameInput,
    pw : passwordInput
  }

  // make sure there is something stored, otherwise dont check
  if(storedUsers !== null)
  {
    // check the localStorage array and see if there are any duplicates
  for(var i = 0; i < storedUsers.length; i++)
  {
    // check if email or username is the same
    if(emailInput == storedUsers[i].email)
    {
      $('#form_results').text('Email already taken')
      isUnique = false
      console.log('notUnique')
    }
    else if(usernameInput == storedUsers[i].sn)
    {
      $('#form_results').text('Username already taken')
      isUnique = false
      console.log('notUnique')
    }
  }
}
  
  // add it to the query - deprecrated
  // queryURL += emailInput

  // ajax call with mailboxlayer api
$.ajax({
    url: queryURL + emailInput,
    method: "GET"
  })
  .then(function (response){

    // debug console
    console.log('form submitted')

    // debug response object
    console.log(response)

    // check to make sure email is valid
    if(response.format_valid && response.mx_found && isUnique)
    {

      // add new user to object array and then also to localStorage
      storedUsers.push(newUser)

      // add it localstorage
      localStorage.setItem('saveUserArray', JSON.stringify(storedUsers))

      // debug
      console.log(isUnique) 
      console.log("email valid")
      console.log(storedUsers)

      // change the username at the top of the page
      $('#user').text(usernameInput)

        
      // display if email is valid
      $('#form_results').text('Email is VALID!')

      // debug console
      console.log(newUser)
    }
    else
    {
      // display if it is not
      $('#form_results').text('Email not valid')
    
    }

     // reset back unique to true for the next click
  isUnique = true

    // reset the queryURL and email input
    //$('#email').empty()
    //queryURL = url + apiKey + '&email='

  
  })

 

}


function login()
{
  

}