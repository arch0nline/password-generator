
let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-+/"
let passwordLength = 8;


function generatePassword(){
    
    
    let pass="";    
    for(let i = 0; i < passwordLength; i++){
        pass += characters[ Math.floor(Math.random() * characters.length) ]
    }    
    return pass;
}

function populatePasswords() {
    
    passwordLength = Number(document.getElementById("passwordLength").value);
    document.getElementById("outputBox1").textContent = generatePassword();
    document.getElementById("outputBox2").textContent = generatePassword();
    document.getElementById("outputBox3").textContent = generatePassword();
    document.getElementById("outputBox4").textContent = generatePassword();
}