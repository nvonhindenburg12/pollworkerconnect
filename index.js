// Simple scroll function
function scrollToSection(sectionId, customOffset = 280) {
    const element = document.getElementById(sectionId);
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition + customOffset;
    
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

// Function to scroll to map and show state popup after delay
function scrollToMapAndShowTab(offset) {
    // First, scroll to the map section
    scrollToSection('map', offset);
    
    // Then show the full state popup after 1 second
    setTimeout(() => {
        const statePopup = document.getElementById('statePopup');
        const stateTab = document.getElementById('stateTab');
        
        if (statePopup) {
            statePopup.classList.add('show');
            statePopup.style.display = 'block';
        }
        
        // Hide the tab if it's visible
        if (stateTab) {
            stateTab.classList.remove('visible');
        }
    }, 1000);
}

// Set the date and time you're counting down to
const targetDate = new Date("November 3, 2026 ").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Click functionality to navigate to state pages
$("path, circle").click(function(e) {
  var stateId = $(this).attr('id');
  
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
    'DC': 'dc.html',
  };
  
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

// COUNTDOWN POPUP - Uses unique variable names
document.addEventListener('DOMContentLoaded', function() {
    const countdownPopup = document.getElementById('countdownPopup');
    const countdownCloseButton = document.getElementById('closeCountdown');
    
    // Show popup after 6 seconds
    setTimeout(() => {
        countdownPopup.style.display = 'block';
    }, 6000);
    
    // Close popup when X is clicked
    countdownCloseButton.addEventListener('click', function() {
        countdownPopup.classList.add('hidden');
        setTimeout(() => {
            countdownPopup.style.display = 'none';
        }, 500);
    });
    
    // Don't close when clicking inside popup
    countdownPopup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
// STATE POPUP - Uses unique variable names
document.addEventListener('DOMContentLoaded', function() {
    const statePopup = document.getElementById('statePopup');
    const stateTab = document.getElementById('stateTab');
    const stateCloseButton = document.getElementById('closePopup');
    
    // Show tab after 6 seconds
    setTimeout(() => {
        stateTab.classList.add('visible');
    }, 6000);
    
    // Click tab to open full popup
    stateTab.addEventListener('click', function() {
        statePopup.classList.add('show');
        statePopup.style.display = 'block';
        stateTab.classList.remove('visible');
    });
    
    // Close popup with X button - return to tab
    stateCloseButton.addEventListener('click', function() {
        statePopup.classList.add('hidden');
        setTimeout(() => {
            statePopup.style.display = 'none';
            statePopup.classList.remove('hidden', 'show');
            stateTab.classList.add('visible');
        }, 500);
    });
    
    statePopup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});