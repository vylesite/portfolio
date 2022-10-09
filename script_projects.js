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





    $(document).ready(function(){

        //force page to go back on top everytime page is refreshed
        // history.scrollRestoration = "manual";

        // $(window).on('beforeunload', function(){
        //     $(window).scrollTop(0);
        // });

        // $("#row_1_title span").animate({
        //     opacity: '1'
        // }, 900);

        // $("#row_1_title_1 span").css("animation", "slide-up 0.8s ease-in-out both");
        // $("#row_1_title_1 span").fadeTo(400, 1);
        // $("#row_1_title_1 span:nth-child(1)").css("animation-delay", "0.1s");
        // $("#row_1_title_1 span:nth-child(2)").css("animation-delay", "0.2s");
        // $("#row_1_title_1 span:nth-child(3)").css("animation-delay", "0.3s");


        $("#row_2_col_1_box_1").delay(400).animate({
            left : '0',
            opacity: '1',
        }, 800);

        $("#row_2_col_1_box_2").delay(1000).animate({
            right : '0',
            opacity: '1',
        }, 800);

        $("#visit_1").animate({
            opacity: '1',
        }, 400);


        //scroll function
        $(window).scroll(function() {

            var scroll = $(window).scrollTop();


                if ((scroll >= $(
                    '.pj-2').offset().top) && (scroll < $('.pj-2').offset().top) + 1) {

                        $("#row_1_title_2").fadeTo(400, 1);
                        $("#row_1_title_2 span").css("animation", "slide-up 0.8s ease-in-out both");
                        $("#row_1_title_2 span:nth-child(1)").css("animation-delay", "0.1s");
                        $("#row_1_title_2 span:nth-child(2)").css("animation-delay", "0.2s");
                        $("#row_1_title_2 span:nth-child(3)").css("animation-delay", "0.3s");

                        $("#tree1").delay(400).animate({
                            left : '0',
                            opacity: '1',
                        }, 800);

                        $("#tree2").delay(400).animate({
                            right : '0',
                            opacity: '1',
                        }, 800);

                        $("#row_2_col_1_box_3").delay(400).animate({
                            bottom : '0',
                            opacity: '1',
                        }, 800);

                        $("#row_2_col_1_box_4").delay(1000).animate({
                            bottom : '0',
                            opacity: '1',
                        }, 800);

                        $("#visit_2_1").delay(1800).animate({
                            opacity: '1',
                            TextDecoder : 'none',
                        }, 400);






                  }

                if ((scroll >= $(
                    '.pj-3').offset().top) && (scroll < $('.pj-3').offset().top) + 1) {

                        $("#row_1_title_3").fadeTo(400, 1);
                        $("#row_1_title_3 span").css("animation", "slide-up 0.8s ease-in-out both");
                        $("#row_1_title_3 span:nth-child(1)").css("animation-delay", "0.1s");
                        $("#row_1_title_3 span:nth-child(2)").css("animation-delay", "0.2s");
                        $("#row_1_title_3 span:nth-child(3)").css("animation-delay", "0.3s");
                        $("#row_1_title_3 span:nth-child(4)").css("animation-delay", "0.4s");
                        $("#row_1_title_3 span:nth-child(5)").css("animation-delay", "0.5s");
                        $("#row_1_title_3 span:nth-child(6)").css("animation-delay", "0.6s");

                        $("#row_2_col_1_box_5").delay(400).animate({
                            left : '0',
                            opacity: '1',
                        }, 800);

                        $("#row_2_col_1_box_6").delay(1000).animate({
                            right : '0',
                            opacity: '1',
                        }, 800);

                        $("#visit_2_2").animate({
                            right : '0',
                            opacity: '1',
                        }, 400);


                }

                if ((scroll >= $(
                    '.pj-4').offset().top) && (scroll < $('.pj-4').offset().top) + 1) {


                        $("#row_1_title_4").fadeTo(400, 1);
                        $("#row_1_title_4 span").css("animation", "slide-up 0.8s ease-in-out both");
                        $("#row_1_title_4 span:nth-child(1)").css("animation-delay", "0.1s");
                        $("#row_1_title_4 span:nth-child(2)").css("animation-delay", "0.2s");
                        $("#row_1_title_4 span:nth-child(3)").css("animation-delay", "0.3s");
                        $("#row_1_title_4 span:nth-child(4)").css("animation-delay", "0.4s");
                        $("#row_1_title_4 span:nth-child(5)").css("animation-delay", "0.5s");
                        $("#row_1_title_4 span:nth-child(6)").css("animation-delay", "0.6s");

                        $(".extremely-box").delay(400).animate({
                            opacity: '1',
                        }, 800);

                        $("#row_2_col_1_box_5_4").delay(400).animate({
                            left : '0',
                            opacity: '1',
                        }, 800);

                        $("#row_2_col_1_box_6_4").delay(1000).animate({
                            right : '0',
                            opacity: '1',
                        }, 800);

                        // $(".extremely-logo").delay(300).animate({
                        //     opacity: '1',
                        // }, 800);

                        // $(".extremely-icons").delay(600).animate({
                        //     opacity: '1',
                        // }, 800);

                        $("#visit_2_5").animate({
                            right : '0',
                            opacity: '1',
                        }, 400);

                }


                if ((scroll >= $(
                    '.pj-5').offset().top) && (scroll < $('.pj-5').offset().top) + 1) {

                        $("#row_1_title_5").fadeTo(400, 1);
                        $("#row_1_title_5 span").css("animation", "slide-up 0.8s ease-in-out both");
                        $("#row_1_title_5 span:nth-child(1)").css("animation-delay", "0.1s");
                        $("#row_1_title_5 span:nth-child(2)").css("animation-delay", "0.2s");

                        $("#night_2").delay(400).animate({
                            left : '0',
                            opacity : '1',
                        }, 600)

                        $("#night_1").delay(1000).animate({
                            top : '50%',
                            opacity : '1',
                        }, 600)

                        $("#night_5").delay(1600).animate({
                            left : '10%',
                            opacity : '1',
                        }, 600)

                        $("#night_4").delay(2200).animate({
                            right : '1vw',
                            opacity : '1',
                        }, 600)

                        $("#night_3").delay(2800).animate({
                            right : '0',
                            opacity : '1',
                        }, 600)

                        $("#row_2_col_7_box_3").delay(200).animate({
                            left : '0',
                            opacity : '1',
                        }, 800)

                        $("#visit_2_4").delay(800).animate({
                            opacity : '1',
                        }, 400)



                }


                if ((scroll >= $(
                    '.pj-6').offset().top) && (scroll < $('.pj-6').offset().top) + 1) {

                        $("#row_1_title_6").fadeTo(400, 1);
                        $("#row_1_title_6 span").css("animation", "slide-up 0.8s ease-in-out both");
                        $("#row_1_title_6 span:nth-child(1)").css("animation-delay", "0.1s");

                        $("#gazed_2").delay(400).animate({
                            left : '0',
                            opacity : '1',
                        }, 600)

                        $("#gazed_1").delay(1000).animate({
                            top : '50%',
                            opacity : '1',
                        }, 600)

                        $("#gazed_5").delay(1600).animate({
                            left : '10%',
                            opacity : '1',
                        }, 600)

                        $("#gazed_4").delay(2200).animate({
                            right : '1vw',
                            opacity : '1',
                        }, 600)

                        $("#gazed_3").delay(2800).animate({
                            right : '0',
                            opacity : '1',
                        }, 600)

                        $("#row_2_col_7_box_2").delay(200).animate({
                            left : '0',
                            opacity : '1',
                        }, 800)

                        $("#visit_2_3").delay(800).animate({
                            opacity : '1',
                        }, 400)

                        // $("#row_2_col_7_mobile").delay(200).animate({
                        //     left : '0',
                        //     opacity : '1',
                        // }, 800)

                        // $("#row_2_col_7_box_2_mobile").delay(800).animate({
                        //     left : '0',
                        //     opacity : '1',
                        // }, 800)

                        // $("#visit_2_3_mobile").delay(1400).animate({
                        //     opacity : '1',
                        // }, 400)



                }






            console.log($(window).scrollTop());

        });

    });






})