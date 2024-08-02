$(".testimonial-carousel").owlCarousel({
    items: 3,
    margin: 50,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
})


var owl = $('.testimonial-carousel');
owl.owlCarousel();
$('.testimonial_next').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
$('.testimonial_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

// navigation bar toggle
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#menu-toggle").addEventListener("click", () => {
        const menu = document.querySelector("#menu");
        menu.classList.toggle("hidden");
        menu.classList.toggle("menu-open");
    });
});

