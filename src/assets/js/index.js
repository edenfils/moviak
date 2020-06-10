$(document).ready(function(){


    $('.carousel').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        speed: 2000,
        draggable: true,
        //appendArrows: '.carousel-buttons',
        //prevArrow:'.left-btn',
        //nextArrow:'.right-btn',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });


  });
