
var passwordButton = document.getElementById("password-display");
const len = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowwerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "@#$&";
const number = "1234567890";

const all = upperCase + lowwerCase + symbol + number;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowwerCase[Math.floor(Math.random() * lowwerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
     
    while(len > password.length){
        password += all[Math.floor(Math.random() * all.length)];
    }

    passwordButton.value = password;
    console.log(password);
    
}
createPassword();

function copy(){
    passwordButton.select();
    document.execCommand('copy');
}
copy();

