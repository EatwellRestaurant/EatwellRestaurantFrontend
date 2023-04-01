// Selection of form elements
const fullName = document.getElementById("name-surname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const branchName = document.getElementById("branch");
const datePicker = document.getElementById("datePicker");
const timePicker = document.getElementById("timePicker");
const guestNumber = document.getElementById("guest");
const messageArea = document.getElementById("message");
const getReservation = document.getElementById("reservation-btn");
const warn = document.getElementById("warn");

// The guests and branch format are adjusted to the back-end
let branchNumber = Number(branchName.value);
let guestsNumber = Number(guestNumber.value);


// Splitting the full name information from the user into two as first and last name
const nameArray = fullName.value.split(" ");
let firstName = "";
let lastName = "";
for (let i=0; i < nameArray.length; i++) {
    if(i == nameArray.length - 1) {
        lastName = nameArray[i];
    }
    else {
        firstName += nameArray[i] + " ";
    }
};


function hideWarn() {
    warn.style.display = "none";
};

// input value check
phoneNumber.addEventListener('input', function () {

    // Delete and show warning if input value contains non-numeric character

    if (/\D/g.test(phoneInput.value)) {
        warn.classList.add("warn");
        warn.textContent = "Lütfen yalnızca sayısal karakter kullanın.";
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
        setTimeout(hideWarn, 5000);
        phoneInput.value = phoneInput.value.substring(0, phoneInput.value.length - 1);
    }

    warn.style.display = "inline";
});


$.ajax({
    url: "https://localhost:44398/api/branchs/getall",
    dataType: "json",
    success: response => {
        for(let key in response) {
            console.log(key + ":", response[key]);
        }
    },
    error:  function (jqXHR, textStatus, errorThrown) {
        console.log(`Veri alınırken bir hata oluştu: ${textStatus}, ${errorThrown}`);

    }
});

$.get( "https://localhost:44398/api/branchs/getall", function( data ) {
    
    let incomingData = data.data;

    for(let i=0; i < incomingData.length; i++){

        if(i == 2){
            $('.address').append(incomingData[i].address)
            $('.email').append(incomingData[i].email)
            $('.phone').append(incomingData[i].phone)
        }
    }

    console.log( "Başarılı" );
});






// Sending data to API with reservation button
getReservation.addEventListener("click", (e) => {

    e.preventDefault()

    // user information is converted to json format and sent to api

    $(document).ready(function () {
        let reservation = {
            "firstName": `${firstName}`,
            "lastName": `${lastName}`,
            "email": `${email.value}`,
            "phone": `${phoneNumber.value}`,
            "branchId": `${branchNumber}`,
            "reservationDate": `${datePicker.value}`,
            "reservationTime": `${timePicker.value}`,
            "personCount": `${guestsNumber}`,
            "note": `${messageArea.value}`
        };

        var model = JSON.stringify(reservation);
        
        $.ajax({
            url: "https://localhost:44398/api/reservations/add",
            contentType: "application/json",
            type: "post",
            dataType: "json",
            data: model,
            success: response => {
                console.log(`Başarıyla tamamlandı!`);

                for(let key in response) {
                    console.log(key + ":", response[key]);
                }
            },
            error:  function (jqXHR, textStatus, errorThrown) {
                console.log(`Veri gönderilirken bir hata meydana geldi: ${textStatus}, ${errorThrown}`);

            }
        });

    });

});




    