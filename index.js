const emailFormatValidation = (value) => {
    let emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}



// ----Selecting Form element-----
const form = document.querySelector(".form");
const firstname = document.querySelector("#first-name");
const lastname = document.querySelector("#last-name")
const emailAddress = document.querySelector("#email-address");
const queryType = document.querySelectorAll("input[name='query-type']")
const generalEnquiry = document.querySelector("#general-enquiry");
const supportRequest = document.querySelector("#support-request");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent")
const successMessage = document.querySelector("#success-message")


const handleTextInput = (element, errElement) => {
    let isValid;
    if(element.value === ""){
        errElement.classList.remove("hidden");
        isValid = false;
    }
    else{
        errElement.classList.add("hidden");
        isValid = true;
    }
    return isValid;
}

const handleQueryInput = (elements, errElement) => {
    let isValid
    let count = 0
    elements.forEach(element => {
       if(element.checked){
           count += 1;
       } 
    })

    if(count){
        isValid = true;
        errElement.classList.add("hidden");
    }else {
        isValid = false;
        errElement.classList.remove("hidden");
    }
    return isValid;
}

const handleConsent = (element, errElement) => {
    let isValid;
    if(element.checked){
        isValid = true;
        errElement.classList.add("hidden");
    }else {
        isValid = false;
        errElement.classList.remove("hidden")
    }
    return isValid;
}

const handleEmailInput = (element, errElement) => {
    let isValid;
    if(element.value === ""){
        isValid = false;
        errElement.classList.remove("hidden");
    }else if(!emailFormatValidation(element.value)){
        isValid = false;
        errElement.classList.remove("hidden");
    }else {
        isValid = true;
        errElement.classList.add("hidden");
    }
    return isValid;
}

const displaySuccessMessage = (element) => {
    element.classList.remove('hidden');
    element.setAttribute('aria-hidden', false);
    setTimeout(() => {
        element.classList.add('hidden');
        element.setAttribute('aria-hidden', true);
    }, 5000)
}

const validateForm = (event) => {
    event.preventDefault();
    
    const fnRequired = document.querySelector(".fn-required");
    const isFirstnameValid = handleTextInput(firstname, fnRequired);
    
    const lnRequired = document.querySelector(".ln-required");
    const isLastnameValid = handleTextInput(lastname, lnRequired);
    
    const emRequired = document.querySelector(".ea-required");
    const isEmailValid = handleEmailInput(emailAddress, emRequired);
    
    const queryRequired = document.querySelector(".qr-required");
    const isChecked = handleQueryInput(queryType, queryRequired);
    
    const mgRequired = document.querySelector(".mg-required");
    const isMessageValid = handleTextInput(message, mgRequired);
    
    const cnRequired = document.querySelector(".cn-required");
    const isConsentChecked = handleConsent(consent, cnRequired);
    
    let textInputValid = isFirstnameValid && isLastnameValid && isEmailValid && isMessageValid;
    let checkInputValid = isChecked && isConsentChecked;
    
    if(textInputValid && checkInputValid){
        displaySuccessMessage(successMessage);
        form.reset();
    }
}
console.log(queryType);
form.addEventListener("submit", validateForm);
