const EMAILJS_PUBLIC_KEY = "WVmoO63aA5ExPfyT5";
const EMAILJS_SERVICE_ID = "service_v2gszkx";
const EMAILJS_TEMPLATE_ID = "template_kbevo8p";

emailjs.init(EMAILJS_PUBLIC_KEY);

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const message = document.getElementById("message").value;
  const email = document.getElementById("email").value;
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  emailjs.send("service_v2gszkx", "template_kbevo8p", {
    message: message,
    email: email,
  })
  .then(
    function (response) {
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000); 
      document.getElementById("contact-form").reset();
    },
    function (error) {
      errorMessage.style.display = "block";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 3000); 
    }
  );
});

