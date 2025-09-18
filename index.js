// Simple scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - -60; // Adjust this value to control positioning
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}


// Optional: Auto-scroll tour button
function startAutoScroll() {
    const sections = ['hero', 'benefits', 'map'];
    let index = 0;
    
    const scrollNext = () => {
        if (index < sections.length) {
            scrollToSection(sections[index]);
            index++;
            setTimeout(scrollNext, 3000);
        }
    };
    
    scrollNext();
}

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



// NEW: Click functionality to navigate to state pages
$("path, circle").click(function(e) {
  var stateId = $(this).attr('id');
  
  // State ID to filename mapping
  var statePages = {
    'AL': 'alabama.html',
    'AK': 'alaska.html', 
    'AZ': 'arizona.html',
    'AR': 'arkansas.html',
    'CA': 'california.html',
    'CO': 'colorado.html',
    'CT': 'connecticut.html',
    'DE': 'delaware.html',
    'FL': 'florida.html',
    'GA': 'georgia.html',
    'HI': 'hawaii.html',
    'ID': 'idaho.html',
    'IL': 'illinois.html',
    'IN': 'indiana.html',
    'IA': 'iowa.html',
    'KS': 'kansas.html',
    'KY': 'kentucky.html',
    'LA': 'louisiana.html',
    'ME': 'maine.html',
    'MD': 'maryland.html',
    'MA': 'massachusetts.html',
    'MI': 'michigan.html',
    'MN': 'minnesota.html',
    'MS': 'mississippi.html',
    'MO': 'missouri.html',
    'MT': 'montana.html',
    'NE': 'nebraska.html',
    'NV': 'nevada.html',
    'NH': 'newHampshire.html',
    'NJ': 'newJersey.html',
    'NM': 'newMexico.html',
    'NY': 'newYork.html',
    'NC': 'northCarolina.html',
    'ND': 'northDakota.html',
    'OH': 'ohio.html',
    'OK': 'oklahoma.html',
    'OR': 'oregon.html',
    'PA': 'pennsylvania.html',
    'RI': 'rhodeIsland.html',
    'SC': 'southCarolina.html',
    'SD': 'southDakota.html',
    'TN': 'tennessee.html',
    'TX': 'texas.html',
    'UT': 'utah.html',
    'VT': 'vermont.html',
    'VA': 'virginia.html',
    'WA': 'washington.html',
    'WV': 'westVirginia.html',
    'WI': 'wisconsin.html',
    'WY': 'wyoming.html',
    'DC': 'dc.html', //fix link//
  };
  
  // Navigate to the state page
  var statePage = statePages[stateId];
  if (statePage) {
    window.location.href = statePage;
  }
});

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}


document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('countdownPopup');
    const closeButton = document.getElementById('closeCountdown');
    
    // Show popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);
    
    // Close popup when X is clicked
    closeButton.addEventListener('click', function() {
        popup.classList.add('hidden');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    });
    
    // Don't close when clicking inside popup
    popup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Add your existing countdown timer code here

