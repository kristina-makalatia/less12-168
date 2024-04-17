"use strict";

// show hide password
let icon = document.getElementById("iconShow");
let input = document.getElementById("passwfield");

icon.addEventListener("click", function () {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

// email validation
let emailinput = document.getElementById("emailfield");

function emailValidation() {
  let emalilValue = document.getElementById("emailfield").value;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailError = document.getElementById("errorEmail");

  if (emailPattern.test(emalilValue)) {
    emailError.innerText = "Your Email is Valid";
    emailError.style.color = "green";
  } else {
    emailError.innerText = "Your Email is Invalid";
    emailError.style.color = "red";
  }

  if (emalilValue === "") {
    emailError.innerText = "";
  }
}

emailinput.addEventListener("keyup", emailValidation);

// axios
axios
  .get("https://kristina-makalatia.github.io/test222/server.json")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
