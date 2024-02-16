var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var messageInput = document.getElementById("message");
var specificationsInput = document.getElementById("specifications");
var countryInput = document.getElementById("country");
var timezoneInput = document.getElementById("timezone");

window.onload = function () {
  emailInput.value = "";
  phoneInput.value = "";
  messageInput.value = "";
  specificationsInput.value = "";
  countryInput.value = "";
  timezoneInput.value = "";
}

// SENDING MAIL
function sendEmail() {
  var isSending = false;
  var isWarningShown = false;

  document.getElementById("success-message").style.display = "none";

  var form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isSending || isWarningShown) {
      return;
    }

    document.querySelectorAll(".warning").forEach((warning) => {
      warning.textContent = "";
    });
    document.querySelectorAll(".form-input").forEach((input) => {
      input.classList.remove("input-error");
    });

    var email = emailInput.value;
    var phone = phoneInput.value;
    var message = messageInput.value;
    var specifications = specificationsInput.value;

    if (!email || !phone || !message || !specifications) {
      if (!email) {
        document.getElementById("email-warning").textContent = "* Email is required";
        document.getElementById("email").classList.add("input-error");
      }
      if (!phone) {
        document.getElementById("phone-warning").textContent = "* Phone number is required";
        document.getElementById("phone").classList.add("input-error");
      }
      if (!message) {
        document.getElementById("message-warning").textContent = "* Message is required";
        document.getElementById("message").classList.add("input-error");
      }
      if (!specifications) {
        document.getElementById("specifications-warning").textContent = "* Specifications are required";
        document.getElementById("specifications").classList.add("input-error");
      }
      isWarningShown = true;
      return;
    }

    var country = countryInput.value || "Not disclosed";
    var timezone = timezoneInput.value || "Not disclosed";

    var params = {
      email: email,
      phone: phone,
      country: country,
      message: message,
      specifications: specifications,
      timezone: timezone
    };

    const serviceID = "service_tf72hcv";
    const templateID = "template_j40o7qf";

    document.querySelectorAll(".warning").forEach((warning) => {
      warning.textContent = "";
    });

    isSending = true;

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
        document.getElementById("success-message").style.display = "block";
        document.getElementById("success-message").innerHTML =
          "Your message was sent successfully. <br>Thank you for choosing Next PC Optimization!";
        document.getElementById("submit-button").disabled = true;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        isSending = false;
      });
  });
}
