// script.js
// Set the date and time you're counting down to
const targetDate = new Date("November 5, 2024 ").getTime();  // Set your specific date and time here

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
