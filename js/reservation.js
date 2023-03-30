const phoneInput = document.getElementById("phone");
const warn = document.getElementById("warn");

function hideWarn() {
    warn.style.display = "none";
};

// input value check

phoneInput.addEventListener('input', function () {

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

// Selection of form elements

const fullName = document.getElementById("name-surname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const branchName = document.getElementById("branch");
const datePicker = document.getElementById("datePicker");
const guestNumber = document.getElementById("guest");
const messageArea = document.getElementById("message");
const getReservation = document.getElementById("reservation-btn");

// Sending data to API with reservation button

getReservation.addEventListener("click", (e) => {

    // Splitting the full name information from the user into two as first and last name

    const nameArray = fullName.value.split(" ");
    let firstName = "";
    let lastName = "";
    for (let i = 0; i < nameArray.length; i++) {
        if (i == nameArray.length - 1) {
            lastName = nameArray[i];
        }
        else {
            firstName += nameArray[i] + " ";
        }
    };

    // The date, guests and branch format are adjusted to the back-end

    let date = datePicker.value;
    date = new Date();
    let branch = Number(branchName.value);
    let guests = Number(guestNumber.value)
    e.preventDefault()

    // user information is converted to json format and sent to api

    $(document).ready(function () {
        console.log("ready!");
        let reservation = {
            "firstName": `${firstName}`,
            "lastName": `${lastName}`,
            "email": `${email.value}`,
            "phone": `${phoneNumber.value}`,
            "branchId": `${branch}`,
            "reservationDate": `${date}`,
            "personCount": `${guests}`,
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
                console.log(`Başarıyla tamamlandı: ${response}`);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(`Veri gönderilirken bir hata meydana geldi: ${textStatus}, ${errorThrown}`);
            }
        });

    });

});

