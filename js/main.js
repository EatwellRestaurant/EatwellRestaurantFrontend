const apiUrl = "https://localhost:44398/api/branchs/getall";
const urlContoller = ""

async function getData() {
    // API'ye istek gönderme
    const response = await fetch(apiUrl);
    const data = await response.json();

    // API'den veri alma
    console.log(data);
}

getData();


//datetime - format
function format(inputDate) {
    let date, month, year;

    date = inputDate.getDate();
    month = inputDate.getMonth() + 1; 
    year = inputDate.getFullYear();

    //Bu değerlere sahip olduğunuzda, gerektiğinde aya ve tarihe 0 ekleyebilirsiniz:
    if (date < 10) {
        date = '0' + date;
    }
    
    if (month < 10) {
        month = '0' + month;
    }
    
    date = date.toString().padStart(2, '0');  //İlk parametrede string'in kaç karakter uzunluğunda olacağını,
                                                
    month = month.toString().padStart(2, '0');  //ikinci parametrede ise doldurulacak dizeyi belirleriz.
    //Bu durumda, ayın veya tarihin değerinin her zaman iki basamaklı olmasını isteriz. 
    //Değer ya 0 ile başlamalı ya da doğal olarak iki basamaklı olmalıdır.

    return `${date}/${month}/${year}`;
}


//datetime min-max
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let element = document.getElementById("datePicker");
element.min = new Date().toISOString().split("T")[0];
element.max = new Date().addDays(35).toISOString().split("T")[0];

element.innerHTML = format(element.value);





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


