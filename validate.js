// Variable declarations

var apiKey = 'ba4e9c96082b0721c5c3dbaf01177cf2'

var url = 'http://apilayer.net/api/check?access_key='

var queryURL = url + apiKey + '&email=piroozwallace@outlook.com'

var userEmail = ''


/*

http://apilayer.net/api/check

    ? access_key = ba4e9c96082b0721c5c3dbaf01177cf2
    & email = piroozwallace@outlook.com
    & smtp = 1
    & format = 1
*/

function registerEmail()
{

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function (response){

    console.log(response)

    if(response.format_valid)
    {
        $('#form_error').text('Email not formatted properly')
        console.log("format")
    }

  })
}

registerEmail()