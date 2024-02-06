/* Form Variables */
const userInput = document.querySelector(".user-input");
const userPhone = document.querySelector(".user-phone");
const userMail = document.querySelector(".user-mail");
const userMessage = document.querySelector(".user-message");
/* Slider Variables */
const control1 = document.getElementById("control1");
const control2 = document.getElementById("control2");
const control3 = document.getElementById("control3");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
/*Services Variables */
const professionalSrv = document.getElementById("Professional-srv");
const productSrv = document.getElementById("products-srv");
const consulSrv = document.getElementById("Consultation")
const outSrv = document.getElementById("Outsourcing")
const product = document.getElementById("product");
const service = document.getElementById("service");
/* Testimonial Variables */
const bckBtn = document.getElementById("bck-btn");
const nxtBtn = document.getElementById("nxt-btn");
const testi = document.getElementById("testi");
const testiBox =document.querySelector("test-box");
nxtBtn.onclick = function(){
    testi.classList.add("transf");
}
bckBtn.onclick = function(){
    testi.classList.remove("transf");
    
}
/* Form Validation */
document.forms[0].onsubmit = function(e){
    let userValid = false;
    let phoneValid = false;
    let emailValid = false;
    let messValid = false; 

    if( userInput.value !== ""){
        userValid = true;
    }
    if( userPhone.value !== ""){
        phoneValid = true;
    }
    if( userMail.value !== ""){
        emailValid = true;
    }
    if( userMessage.value !== ""){
        messValid = true;
    }
    if(userValid === false || phoneValid === false || emailValid === false || messValid === false){
        e.preventDefault();
    }
}
/* Slider */
control2.onclick = function(e){
    slider1.classList.add("d-none");
    slider2.classList.remove("d-none");
    slider3.classList.add("d-none");
    e.target.classList.add("active");
    control1.classList.remove("active");
    control3.classList.remove("active");

}
control1.onclick = function(e){
    slider1.classList.remove("d-none");
    slider3.classList.add("d-none");
    slider2.classList.add("d-none");
    e.target.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}
control3.onclick = function(e){
    slider1.classList.add("d-none");
    slider2.classList.add("d-none");
    slider3.classList.remove("d-none");
    e.target.classList.add("active");
    control1.classList.remove("active");
    control2.classList.remove("active");
}
/*Services */
service.onclick = function(){
    professionalSrv.classList.remove("d-none");
    productSrv.classList.add("d-none");
}
product.onclick = function(){
    professionalSrv.classList.add("d-none");
    productSrv.classList.remove("d-none");
}
/* Testimonials */
bckBtn.onclick = function(){

}
/* Contactus */

function toggleContactForms() {

    var contactus = document.getElementById("Contactus");

    var contactusAgain = document.getElementById("ContactusAgain");

 

    // Toggle the visibility of the cards

    contactus.classList.toggle("d-none");

    contactusAgain.classList.toggle("d-none");

}
