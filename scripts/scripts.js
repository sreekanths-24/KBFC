var menuHolder = document.getElementById('menuHolder')
var siteBrand = document.getElementById('siteBrand')
function menuToggle(){
  if(menuHolder.className === "drawMenu") menuHolder.className = ""
  else menuHolder.className = "drawMenu"
}
if(window.innerWidth < 426) siteBrand.innerHTML = "KBFC"
window.onresize = function(){
  if(window.innerWidth < 420) siteBrand.innerHTML = "KBFC"
  else siteBrand.innerHTML = "Kerala Blasters Football Club"
}
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
