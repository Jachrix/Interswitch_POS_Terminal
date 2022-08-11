function validateForm(){
    console.log('entering----', localStorage.getItem("FormData"));
    //Regex Validation
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneFormat = /^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/;
    const inquiry1 = document.forms["myForm"]["yes"].value;
    const inquiry2 = document.forms["myForm"]["no"].value;
    
    //Get values of input fields
    let firstName = document.forms["myForm"]["first_name"].value;
    let lastName = document.forms["myForm"]["last_name"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
    let saleRegion = document.forms["myForm"]["sell_area"].value;
    let businessType = document.forms["myForm"]["bus_type"].value;
    let turnover = document.forms["myForm"]["turnover"].value;
    let enquiry = inquiry1 ? inquiry1 : inquiry2;
    let privacy = document.forms["myForm"]["agree"].value;
    let disableButton = false;
    
    //validate form field values
    
    if(firstName === ''){
        alert("First name is required");
        disableButton = true;
        return false;
    } 
    if(lastName === ''){
        alert("Last name is required");
        disableButton = true;
        return false;
    } 
    if(!email.match(mailformat))
    {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
        disableButton = true;
        return false;
    }
    if(!phone.match(phoneFormat)){
        alert("You have entered an invalid phone number!");
        document.form.phone.focus();
        disableButton = true;
        return false;
    }
    if(saleRegion === ''){
        alert("You must select a sales region");
        disableButton = true;
        return false;
    }
    if(businessType === ''){
        alert("You must select your business type");
        disableButton = true;
        return false;
    }
    if(turnover === ''){
        alert("You must select turnover amount");
        disableButton = true;
        return false;
    }
    if(enquiry === ''){
        alert("You must select an option if integrating a business management software");
        disableButton = true;
        return false;
    }
    if(privacy === ''){
        alert("You must agree to our policy");
        disableButton = true;
        return false;
    }
    
    console.log('validation passed++++');
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        saleRegion: saleRegion,
        businessType: businessType,
        turnover: turnover,
        enquiry: enquiry,
        privacy: privacy
    }
    
    let userData = localStorage.setItem("formData", formData);
    
    // let firstNameStore = localStorage.setItem('firstName', firstName);
    // let lastNameStore = localStorage.setItem('lastName', lastName);
    // let emailStore = localStorage.setItem('email', email);
    // let phoneStore = localStorage.setItem('phone', phone);
    // let saleRegionStore = localStorage.setItem('saleRegion', saleRegion);
    // let businessTypeStore = localStorage.setItem('businessType', businessType);
    // let turnoverStore = localStorage.setItem('turnover', turnover);
    // let enquiryStore = localStorage.setItem('enquiry', enquiry);
    // let privacyStore = localStorage.setItem('privacy', privacy);
    
}

