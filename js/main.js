$.ajax({
    url: "https://localhost:44398/api/branchs/getall",
    dataType: "json",
    error:  function (jqXHR, textStatus, errorThrown) {
        console.log(`Veri alınırken bir hata oluştu: ${textStatus}, ${errorThrown}`);

    }
});

$.get( "https://localhost:44398/api/branchs/getall", function( data ) {
    
    let incomingData = data.data;

    for(let i=0; i < incomingData.length; i++){

        if(i == 2){
            $('#footer-address').append(incomingData[i].address)
            $('#footer-email').append(incomingData[i].email)
            $('#footer-phone').append(incomingData[i].phone)
            $('.facebook').attr("href", incomingData[i].facebook);
            $('.instagram').attr("href", incomingData[i].instagram);
            $('.twitter').attr("href", incomingData[i].twitter);
            $('.google').attr("href", incomingData[i].gmail);
        }
    }

    console.log( "Veriler Getirildi" );
});



// navbar - scroll
$(document).ready(function($) {

	"use strict";

    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.site_navbar'),
                    sd = $('.js-scroll-wrap');

            if (st > 150) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');	
                }
            } 
            if (st < 150) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            } 
            if ( st > 350 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');	
                }
                
                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 350 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    
});



//scroll-up
let calcScrollValue = () =>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = 
    `conic-gradient(#262323 ${scrollValue}%, #aaaaaa ${scrollValue}% )`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


