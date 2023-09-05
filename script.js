// HAMBURGER AWAL
const hamburgerMenu = document.querySelector('.hamburger');
const sidebar = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  sidebar.classList.toggle('active');
});

const hamburger = document.querySelector('.hamburger');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !sidebar.contains(e.target)){
        sidebar.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    }
});
// HAMBURGER AKHIR
// TEXT WRAPPER
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1800,
    delay: (el, i) => 45 * i
  });
// TEXT WRAPER AKHIR

// NAVBAR AWAL KETIKA DIKLIK
const navbarLinks = document.querySelectorAll('.navbar nav');

navbarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Menghentikan tindakan bawaan link
    
    const targetId = link.getAttribute('href'); // Mendapatkan nilai atribut href
    const targetSection = document.querySelector(targetId); // Mengambil elemen tujuan berdasarkan ID
    
    if (targetSection) {
      const yOffset = -50; // Sesuaikan offset (pergeseran) sesuai kebutuhan
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth' // Efek scroll halus
      });
    }
  });
});
// NAVBAR AKHIR 

// SLIDER IMAGE
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 4000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

var button = document.getElementById("fb");
  
// Tambahkan event listener untuk mengarahkan ke link saat tombol diklik
button.addEventListener("click", function() {
  // Ganti URL dengan link yang diinginkan
  window.location.href = "https://www.facebook.com/profile.php?id=100079884707519";
});

var button = document.getElementById("ig");
  
// Tambahkan event listener untuk mengarahkan ke link saat tombol diklik
button.addEventListener("click", function() {
  // Ganti URL dengan link yang diinginkan
  window.location.href = "https://www.instagram.com/dnnisabizar/";
});
var button = document.getElementById("wa");
  
// Tambahkan event listener untuk mengarahkan ke link saat tombol diklik
button.addEventListener("click", function() {
  // Ganti URL dengan link yang diinginkan
  window.location.href = "https://api.whatsapp.com/send?phone=6281387272149"
});
