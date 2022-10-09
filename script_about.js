document.addEventListener("DOMContentLoaded", () => {

    function stars() {
        let count = 500;
        let night = document.querySelector('.night');
        let i = 0;
        while (i < count) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let duration = Math.random() * 10;
            let size = Math.random() * 2;

            star.style.left = x+'px';
            star.style.top = y+'px';
            star.style.width = 1+size+'px';
            star.style.height = 1+size+'px';

            star.style.animationDuration = 4+duration+'s';
            star.style.animationDelay = duration+'s';

            night.appendChild(star);
            i++

        }

    }
    stars();


    // var docWidth = document.documentElement.offsetWidth;

    // [].forEach.call(
    // document.querySelectorAll('*'),
    // function(el) {
    //     if (el.offsetWidth > docWidth) {
    //     console.log(el);
    //     }
    // }
    // );


    $(document).ready(function(){

        //force page to go back on top everytime page is refreshed
        // history.scrollRestoration = "manual";

        // $(window).on('beforeunload', function(){
        //     $(window).scrollTop(0);
        // });

        $(".title1").animate({
            opacity: '1'
        }, 900);

        $("#about_box1").animate({
            left : '0',
            opacity: '1'
        }, 800);

        $("#about_box2").animate({
            right : '0',
            opacity: '1'
        }, 800);



        $(window).scroll(function() {

            var scroll = $(window).scrollTop();


                if ((scroll >= $(
                    '.education').offset().top) && (scroll < $('.education').offset().top) + 1) {

                        $(".title2").animate({
                            opacity: '1'
                        }, 900);

                        $("#about_box3").animate({
                            top : '0',
                            opacity: '1'
                        }, 800);

                        $("#about_box4").delay(600).animate({
                            bottom : '0',
                            opacity: '1'
                        }, 800);
                  }

                if ((scroll >= $(
                    '.technical').offset().top) && (scroll < $('.technical').offset().top) + 1) {

                        $(".title3").animate({
                            opacity: '1'
                        }, 900);

                        $("#tech_box").animate({
                            top : '0',
                            opacity: '1'
                        }, 800);

                        $("#circle_line1").delay(1000).animate({
                            left : '80%',
                        }, 1500);

                        $("#circle_line2").delay(1000).animate({
                            left : '75%',
                        }, 1500);

                        $("#circle_line3").delay(1000).animate({
                            left : '70%',
                        }, 1500);

                        $("#circle_line4").delay(1000).animate({
                            left : '65%',
                        }, 1500);

                        $("#circle_line5").delay(1000).animate({
                            left : '65%',
                        }, 1500);

                        $("#circle_line6").delay(1000).animate({
                            left : '50%',
                        }, 1500);

                        console.log("technical section");


                }

                if ((scroll >= $(
                    '.software').offset().top) && (scroll < $('.software').offset().top) + 1) {

                        $(".title4").animate({
                            opacity: '1'
                        }, 900);

                        $("#software_box").animate({
                            bottom : '0',
                            opacity : '1',
                        }, 800);


                        console.log("software section");
                }


                if ((scroll >= $(
                    '.personal').offset().top) && (scroll < $('.personal').offset().top) + 1) {

                        $(".title5").animate({
                            opacity: '1'
                        }, 900);

                        $("#box_content9_1").animate({
                            opacity : '1',
                        }, 800);

                        $("#box_content9_2").delay(600).animate({
                            opacity : '1',
                        }, 800);

                        $("#box_content9_3").delay(600).animate({
                            opacity : '1',
                        }, 800);

                        $("#box_content9_4").animate({
                            opacity : '1',
                        }, 800);

                        $("#box_content9_5").animate({
                            opacity : '1',
                        }, 800);

                        $("#box_content9_6").delay(600).animate({
                            opacity : '1',
                        }, 800);

                        console.log("personal section");
                }


                if ((scroll >= $(
                    '.contact').offset().top) && (scroll < $('.contact').offset().top) + 1) {

                        $(".title6").animate({
                            opacity: '1'
                        }, 900);

                        $("#about_box5").animate({
                            bottom : '0',
                            opacity : '1',
                        }, 800);
                }






            console.log($(window).scrollTop());

        });

    });






})