var isMatch = false

var storedUsers = [
  {
     // each user will have email, screenname and password stored
    email : "default@aol.com",
    sn : 'admin',
    pw : 'password',
    city : 'Sacramento',
    state : 'CA'
  },
  {
    email : 'PiroozWallace@gmail.com',
    sn : 'theoRy',
    pw : 'password',
    city : 'Berkeley',
    state : 'CA'
  }
]


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

  // debug console
  console.log(storedUsers)

  //var currentUser = JSON.parse(localStorage.getItem('currentUser'))
  //if(currentUser !== null)
 // {
 //     $('#user').text(currentUser.sn)
 // }

 // feel free to give better styling
 $('#credentialsMsg').css({'color':'yellow'})
 $('#credentialsMsg').css({'background-color':'black'})


}

loadUsers()

// get registerForm variable and clear button variable to add event listeners
var form = document.getElementById("loginForm");

// event listener for the submit function
form.addEventListener("submit", function(event) {
    event.preventDefault()
    login()
  })

function login()
{


     // debug console
  console.log('registerClick')

  console.log(storedUsers)
  

  // get the user's email
  var emailInput = $('#email').val()

  // get the user's password
  var passwordInput = $('#pw').val()

  // get the usernameInput
  var usernameInput = $('#sn').val()

  

 // make sure there is something stored, otherwise dont check
 if(storedUsers !== null)
 {
   // check the localStorage array and see if there are any duplicates
 for(var i = 0; i < storedUsers.length; i++)
 {
   // check if username
   if(usernameInput == storedUsers[i].sn && passwordInput == storedUsers[i].pw)
   {

     // set the current user in localstorage memory
     localStorage.setItem('currentUser', JSON.stringify(storedUsers[i]))

     // change the user at the top as well
     $('#user').text(storedUsers[i].sn)
     isMatch = true
     window.location = 'Profile.html'
     return
  }
   else
   {
     // if there is no match for the username and password
      isMatch = false
  }
 }

 // error message if dont match up with any of the saved objects
 if(!isMatch)
 {
 $('#credentialsMsg').text('Username and/or password dont match')
  }
}

}