const form = document.querySelector("form")
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email-address");
const generalQuery = document.getElementById("general-enquiry")
const supportRequest = document.getElementById("support-request");
const message = document.getElementById("message");
const consent = document.getElementById("consent");



form.addEventListener("submit", evt =>{
    validateForm(evt)
})
// create a error message by setting the span tag to block
const createMessage = (element) => {
    element.style.border = "1px solid red";
    let elementNextSibling = element.nextElementSibling;
    elementNextSibling.style.display = "block";
}
// removes an error message by setting the span tag to none
const removeMessage = (element) => {
    let elementNextSibling = element.nextElementSibling
    elementNextSibling.style.display = "none"
    element.style.border = "1px solid var(--Grey-medium)"
}
// validates the form by checking all the input values are correct
 const validateForm = (evt) => {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailAddressValue = emailAddress.value.trim();
    let supportRequestChecked = supportRequest.checked;
    let generalEnquiryChecked = generalQuery.checked;
    let messageValue = message.value.trim()
    let formIsValid = true;
    if(firstNameValue === ""){
        createMessage(firstName);
        formIsValid = false;
        evt.preventDefault()
    }else{
        removeMessage(firstName);
        formIsValid = true;
    }
     if(lastNameValue === ""){
         createMessage(lastName);
         formIsValid = false;
         evt.preventDefault()
     }else{
         removeMessage(lastName);
         formIsValid = true;
     }
    if(emailAddressValue === ""){
        createMessage(emailAddress);
        formIsValid = false;
    }else{
        removeMessage(emailAddress);
        formIsValid = true;
    }
    if(generalEnquiryChecked || supportRequestChecked){
        let queryMessage = document.getElementById("query").nextElementSibling;
        queryMessage.style.display = "none";
        formIsValid = true;
    }else {
        let queryMessage = document.getElementById("query").nextElementSibling;
        queryMessage.style.display = "block";
        formIsValid = false;
    }
    if(messageValue === ""){
        createMessage(message);
        formIsValid = false;
    }else{
        removeMessage(message);
        formIsValid = true;
    }
    if(consent.checked){
        let consentMessage = document.getElementById("consent-message");
        consentMessage.style.display = "none";
    }else {
        let consentMessage = document.getElementById("consent-message");
        consentMessage.style.display = "block";
        formIsValid = false;
    }
    if(formIsValid){
        let successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
    }else{
        evt.preventDefault()
    }
}

