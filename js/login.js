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

}

// event listener for the submit function
form.addEventListener("submit", function(event) {
    event.preventDefault()
    login()
  })

function login()
{


     // debug console
  console.log('registerClick')
  

  // get the user's email
  var emailInput = $('#email').val()

  // get the user's password
  var passwordInput = $('#pw').val()

  // get the usernameInput
  var usernameInput = $('#sn').val()

  // 
  var cityInput = $('#city').val()

  
  // set to form fields
  var newUser = {
    email : emailInput,
    sn : usernameInput,
    pw : passwordInput,
    city : cityInput
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