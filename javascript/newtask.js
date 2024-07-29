
let newarr = gmail.split("")
let isspecialcontain;
let itDotcontain;

function userId(gmail){
    for(let i=0; i<newarr.length; i++){
        if(newarr[i] == '@'){
            isspecialcontain = true;
        }
        else{
            isDotcontain = false;
        }
    }
    return isspecialcontain;
}

function isdotcontain() {
    for(let i=0; i<newarr.length; i++){
        if(newarr[i] = '.'){
            itDotcontain = true
        }
        else{
            itDotcontain = false;
        }
    }
    return itDotcontain;
}

let a = ("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

function password(pass){
    if(pass.includes(a)){
        console.log("Correct");
    }
}

let checkat = userId();

function passward(pass){
    if(pass.length >= 8) {
        for (let i=0; i>=1; i++){
            if ( pass >= 'A' && pass <= 'Z'){
                return true;
            }
        }
        for (let i=0; i < pass.length; i++){
            if(pass >= 0 && pass <= 9){
                return true;
            }
    
            let spechar = "@";
            pass.includes(spechar);
        }
        
    } 
}
// let bar = passward()

function finaoutput(){
    let gmail = prompt("Enter your gmail");
    let pass = prompt("Enter your  passward");
    if(userlogin(gmail) && passward(pass)){
        console.log("Login successful")
    }
    else{
        console.log("Login Failed")
    }
}

finaoutput()