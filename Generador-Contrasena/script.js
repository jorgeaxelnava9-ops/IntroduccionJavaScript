const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strengthValue = document.getElementById("strengthValue");


const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/";


lengthValue.textContent = lengthInput.value;


lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
    });

    generateBtn.addEventListener("click", generatePassword);

    function generatePassword() {

        let characters = "";
        let password = "";
        let length = Number(lengthInput.value);

        if (uppercase.checked) characters += upperChars;
        if (lowercase.checked) characters += lowerChars;
        if (numbers.checked) characters += numberChars;
        if (symbols.checked) characters += symbolChars;

        if (characters ==="") {
            alert("Selecciona al menos una opción");
            return;
        }

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        passwordInput.value = password;
        checkStrength(password); 
       }
       
       function checkStrength(password) {
        
          let strength = "DÉBIL";

          if (password.length >= 12 && symbols.checked && numbers.checked) {
              strength = "FUERTE";
          } else if (password.length >= 10) {
            strength = "MEDIA";
          }

          strengthValue.textContent = strength;
       }

       copyBtn.addEventListener("click", () => {
           navigator.clipboard.writeText(passwordInput.value);
           alert("Contraseña copiada");
       });