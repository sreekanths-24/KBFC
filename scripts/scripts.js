var mainmenuholder = document.getElementById('mainmenuholder');
var menuHolder = document.getElementById('menuHolder');
var siteBrand = document.getElementById('siteBrand');
var prevScrollPos = window.pageYOffset;
var scrollTimeout;

function menuToggle() {
  if (menuHolder.classList.contains("drawMenu")) {
    menuHolder.classList.remove("drawMenu");
  } else {
    menuHolder.classList.add("drawMenu");
  }
}

function closeMenu() {
  if (menuHolder.classList.contains("drawMenu")) {
    menuHolder.classList.remove("drawMenu");
  }
}

function updateNavbarVisibility() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    mainmenuholder.classList.remove("navbar-hidden");
  } else {
    // Scrolling down, hide the navbar with a delay
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      mainmenuholder.classList.add("navbar-hidden");
    }, 100); // Adjust the delay as needed
  }
  prevScrollPos = currentScrollPos;
}

if (window.innerWidth < 426) siteBrand.innerHTML = "KBFC";

window.onresize = function () {
  if (window.innerWidth < 420) siteBrand.innerHTML = "KBFC";
  else siteBrand.innerHTML = "Kerala Blasters Football Club";
};

// Event listener for clicking on a nav-menu-item
var navMenuItems = document.querySelectorAll('.nav-menu-item');
navMenuItems.forEach(function (item) {
  item.addEventListener('click', closeMenu);
});

// Event listener for clicking outside the navbar
document.addEventListener('click', function (event) {
  if (
    !mainmenuholder.contains(event.target) &&
    !event.target.classList.contains('siteLink')
  ) {
    closeMenu();
  }
});

window.onscroll = updateNavbarVisibility;
//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          // Use a cubic-bezier easing function for the animation
          const cubicBezierTiming = 'cubic-bezier(0.42, 0, 0.58, 1)';
          
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
              timingFunction: cubicBezierTiming
          });
      }
  });
});


// Intersection Observer API for scrolling animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('shower');
      } else {
          entry.target.classList.remove('shower');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hiddener');
hiddenElements.forEach(element => observer.observe(element));

// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
  
//   myFunction()
// };

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
