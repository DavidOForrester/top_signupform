const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  const password1 = document.getElementById("password").value;
  const password2 = document.getElementById("confirm_password").value;

  if (password1 === password2) {
    // Allow form submission
  } else {
    // Prevent form submission and display error message
    event.preventDefault();
    alert("Passwords do not match");
  }
});