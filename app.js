//toggle navebar
const navtoggler = document.querySelector(".nav-toggle");
navtoggler.addEventListener("click",togglenav);
function togglenav(){
    navtoggler.classList.toggle("active")
    document.querySelector(".nav").classList.toggle("open");

}

/*close nav when clicking on a nav item*/ 
document.addEventListener("click",function(e){
    if(e.target.closest(".nav-item")){
        togglenav();
    }
})


/*sticky header*/ 
window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        this.document.querySelector(".header").classList.add("sticky");
    }
    else{
        this.document.querySelector(".header").classList.remove("sticky");
    }
})

 //menusection
 const menutabs = document.querySelector(".menu-tabs");
 menutabs.addEventListener("click",function(e){
     if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
         const tar = e.target.getAttribute("data-target");
         menutabs.querySelector(".active").classList.remove("active");
         e.target.classList.add("active");
         const menusection = document.querySelector(".menu-section");
         menusection.querySelector(".menu-tab-content.active").classList.remove("active");
         menusection.querySelector(tar).classList.add("active");
     } 
 });


  AOS.init();




var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });







 