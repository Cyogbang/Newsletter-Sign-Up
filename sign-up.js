function submit() {
    const inputs = document.getElementById("emailAddress");
    const error = document.querySelector(".errorMSG");
    const signUP = document.querySelector(".container");
    const Successful = document.querySelector(".successMSG");
    const fillIN = document.getElementById("fills");

    const mailAddress = inputs.value;

    if (mailAddress === "") {
        console.log("empty");
        error.innerHTML = "Email field is required";
        error.style.display = "block";
    } else {
        console.log("filled");
        fillIN.innerHTML = mailAddress;
        signUP.style.display = "none";
        Successful.style.display = "block"
    }
}

function dismiss() {
    const signUP = document.querySelector(".container");
    const Successful = document.querySelector(".successMSG");
    const inputs = document.getElementById("emailAddress");


    console.log("return");
    Successful.style.display = "none";
    signUP.style.display = "block";

    inputs.value = "";
    error.innerHTML = "";
    error.style.display = "none";
}