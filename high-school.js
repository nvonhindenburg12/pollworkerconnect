function checkAge() {
  // Get the age input value
  var age = parseInt(document.getElementById('ageInput').value);

  // Redirect based on age
  if (age < 16) {
    window.location.href = "DCunder16.html";
  } else if (age >= 16 && age <= 17) {
    window.location.href = "DC16-17.html";
  } else {
    window.location.href = "DCover18.html";
  }
}