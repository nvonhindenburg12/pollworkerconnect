
function redirectToPage() {
  var selectElement = document.getElementById('University');
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var url = selectedOption.value;
  if (url) {
    window.location.href = url;
  }
}

