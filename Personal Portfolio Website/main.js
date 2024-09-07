/*---------------------------toggle icon navbar----------------------------*/

let icon = document.querrySelector(".icon");
let navbar = document.querrySelector(".navbar");

icon.addEventListener("click", () => {
    navbar.classList.toggle("showData");

    if(navbar.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
});
   

/*---------------------------scroll section active link----------------------------*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

  /*---------------------------sticky navbar----------------------------*/  
  let header = document.querrySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

 
};

/*---------------------------scroll reveal----------------------------*/
ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay :200,
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


