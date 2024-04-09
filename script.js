function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    const emailError2 = document.getElementById('emailError2');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please provide a valid email address';
      emailError2.textContent = 'Please provide a valid email address';
      emailInput.focus();
    } else {
      emailError.textContent = 'The email address is correct';
      emailError2.textContent = 'The email address is correct'; 
    }
  }
  