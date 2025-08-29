// script.js
// Set the date and time you're counting down to
const targetDate = new Date("November 3, 2025 ").getTime();  // Set your specific date and time here

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the difference between now and the countdown date
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = 
        `${days} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// State popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('statePopup');
    const closeButton = document.getElementById('closePopup');
    
    // Show popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);
    
    // Close popup when X is clicked
    closeButton.addEventListener('click', function() {
        popup.classList.add('hidden');
        // Completely hide after animation
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    });
    
    // Optional: Close popup when clicking outside
    document.addEventListener('click', function(event) {
        if (!popup.contains(event.target) && !popup.classList.contains('hidden')) {
            popup.classList.add('hidden');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 500);
        }
    });
    
    // Don't close popup when clicking inside it
    popup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
