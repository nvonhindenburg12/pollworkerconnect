

/*
// enter value and put in redirect url to root (/)
const redirectoptions = [
  ["page1", "/page1"],
  ["Road to Vote University", "https://google.com"]
]

//  i can explain it to you later, this is really the whole thing
const redirectToDestination = () =>{
  let notfound = true
  for (x in redirectoptions){
    if(redirectoptions[x][0] == document.getElementById('University').options[document.getElementById('University').selectedIndex].text){
      alert("redirected")
      notfound = false
      location.replace(redirectoptions[x][1]) // function to redirect to new page
    }
  }
  //fail handling for redudency
  if(notfound == true){
    alert("error in redirection")
  }
}


formoutput.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form data
  // where is the defined fuction for form data, you dont need a class for this
  // you can do all of the same things in like 3 lines of code
  var formData = new FormData(this);
  

  // Convert form data to object
  var formObject = {};
  formData.forEach(function(value, key){
    formObject[key] = value;
  });


});

*/


function redirectToPage() {
  var selectElement = document.getElementById('University');
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var url = selectedOption.value;
  if (url) {
    window.location.href = url;
  }
}

