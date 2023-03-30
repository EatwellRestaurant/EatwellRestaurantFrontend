import(url("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"))


const nameSurname = document.getElementById("name-surname").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phone").value;
const branch = document.getElementById("branch").value;
const datePicker = document.getElementById("datePicker").value;
const guestNumber = document.getElementById("guest").value;
const messageArea = document.getElementById("message").value;
const reservation = document.getElementById("reservation-btn");

const myArr = nameSurname.split(" ");

let firstName = "";
let lastName = "";

for (let i = 0; i < myArr.length; i++) {
  if(i == myArr.length - 1){
  	lastName = myArr[i];
  }
  else{
  	firstName += myArr[i] + " ";
  }
}



$( document ).ready(function() {
    console.log( "ready!");
    reservation = {
        "firstName": `${firstName}`,
        "lastName": `${lastName}`,
        "email": `${email}`,
        "phone": `${phoneNumber}`,
        "branchId": `${branch}`,
        "reservationDate": `${datePicker}`,
        "personCount": `${guestNumber}`,
        "note": `${messageArea}`
    };

 var model =JSON.stringify(reservation) ;
$.ajax({
        url: "https://localhost:44398/api/reservations/add",
        contentType: "application/json",
        type: "post",
        dataType: "json",
        data: model  ,
        success: function (response) {
$('#demene').append(response);
        console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });

});












