/*Carousel------------------------------------------------------*/


const images = [
  "images/16x9_HP_NSwitch2_MetroidPrime4BeyondNS2Ed_HeroShelf_textless.jpg",
  "images/16x9_HP_NSwitch2_HyruleWarriorsAOI_HeroCar_GB_en.jpg",
  "images/16x9_HP_Others_PikminCloseToYou.jpg",
  "images/16x9_HP_NSwitch2_AnimalCrossingNewHorizonsNS2E_HeroCar.jpg",
  "images/16x9_HP_NSwitch2_PokemonLegendsZA_MegaDimension_GB_en.jpg",
];

let current = 0;
const carouselImage = document.querySelector('.carousel-image');

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  carouselImage.src = images[current];
});

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % images.length;
  carouselImage.src = images[current];
});





/*popup menu-https://www.w3schools.com/howto/howto_js_sidenav.asp-------------------------------------------------------------*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Event listeners toevoegen zodra de pagina geladen is
document.addEventListener('DOMContentLoaded', function() {
  // Alle links in de sidebar selecteren
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  
  // Voor elke link een click event toevoegen
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Voorkomt dat de pagina scrollt
      openNav();
    });
  });
  
  // Close button
  const closeBtn = document.querySelector('.closebtn');
  closeBtn.addEventListener('click', closeNav);
});


/* Close pop up- Chatgpt- Prompt: "Hoe zorg ik er voor dat als je buiten het pop up menu klikt deze verdwijnt?"-----------------------------------*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Event listeners toevoegen zodra de pagina geladen is
document.addEventListener('DOMContentLoaded', function() {
  const sidenav = document.getElementById("mySidenav");
  const sidebar = document.querySelector('.sidebar');
  
  // Alle links in de sidebar selecteren
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  
  // Voor elke link een click event toevoegen
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Voorkomt dat de pagina scrollt
      e.stopPropagation(); // Voorkomt dat de click doorgaat
      openNav();
    });
  });
  
  // Close button
  const closeBtn = document.querySelector('.closebtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeNav();
    });
  }
  
  // Voorkom dat clicks binnen sidenav het menu sluiten
  sidenav.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
  // Sluit menu bij klik ergens anders
  document.addEventListener('click', function(e) {
    // Check of sidenav open is door de width te checken
    const sidenavWidth = sidenav.offsetWidth;
    if (sidenavWidth > 0) {
      closeNav();
    }
  });
});


/* hamburger menu voor table en phone Chatgpt prompt: Hoe maak ik hier een hamburger menu die alleen te zien is op tablet en phone?*/

function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('active');
}