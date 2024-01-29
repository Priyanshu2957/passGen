const box = document.getElementById("password");
const len = 15;
const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const low = "abcdefghijklmnopqrstuvwxyz"
const num = "0123456789"
const sym = "!@#$%^&*()?"
const finalchar = upp+low+num+sym;

function genpass(){
    let password = "";
    
    password+=upp[Math.floor(Math.random() * upp.length)];     
    password+=low[Math.floor(Math.random() * low.length)];     
    password+=num[Math.floor(Math.random() * num.length)];     
    password+=sym[Math.floor(Math.random() * sym.length)];
    while(len>password.length){
        password+=finalchar[Math.floor(Math.random() * finalchar.length)];
    }
    box.value = password;
}
function copypass(){
    box.disabled=false;
    box.select();
    document.execCommand("copy");
    box.disabled=true;
}