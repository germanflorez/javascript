
var email, passw, state, repassw;

//validar email
function validateEmail(){
    var vEmail;
    email = document.getElementById("email").value;
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(email)===false){
        document.getElementById("email").className += " is-invalid"; 
        vEmail=false;  
    }else{
        document.getElementById("email").className = " form-control form-control-lg" 
        vEmail=true;
    }
    return vEmail;
}
//validar provincia
function validateState() {
    var vState;
    state = document.getElementById("state").value;
    if (state === "Provincia") {
        document.getElementById("state").className += " is-invalid";
        vState=false;
    } else {
        document.getElementById("state").className = " form-control form-control-lg";
        vState=true;
    }
    return vState;
}
//validar contraseña
function validatePassw(){
    var vPass;
    passw = document.getElementById("passw").value;
    var passex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/;  
    if (passex.test(passw) === false) {
        document.getElementById("passw").className += " is-invalid"; 
        vPass=false;   
    } else {
        document.getElementById("passw").className = " form-control form-control-lg"; 
        vPass=true;
    }   
    return vPass;  
}
//validar contraseña
function testPassw() {
    var vTest;
    repassw = document.getElementById("repassw").value;
    if (passw === repassw){
        document.getElementById("repassw").className = " form-control form-control-lg is-valid";
        vTest = true;
    }else{
        document.getElementById("repassw").className += " is-invalid";
        vTest=false;
    }
    return vTest;
}

//validar campos vacios
function validate(){

    state = document.getElementById("state").value;
    email = document.getElementById("email").value;
    passw = document.getElementById("passw").value;
    repassw = document.getElementById("repassw").value; 

    var valido = 0; 

   if(valido < 5){
      
       if ((email === "")|| (!validateEmail())) {
            document.getElementById("email").placeholder = "falta poner el email";
            document.getElementById("email").className += " is-invalid";
        } else {
            valido += 1;
            console.log("valido: " + valido + " entro al email");
        }
       if ((state === "Provincia") || (!validateState())) {
            document.getElementById("state").className += " is-invalid";
        } else {
            valido += 1;
            console.log("valido: " +valido + " entro state");
        }
       if ((passw === "") || (!validatePassw())) {
            document.getElementById("passw").placeholder = "falta poner la contraseña";
            document.getElementById("passw").className += " is-invalid";
        } else {
            valido += 1;
            console.log("valido: " +valido + " entro pass");
        }
       if ((repassw === "") || (!testPassw())) {
            document.getElementById("repassw").placeholder = "falta repetir la contraseña";
            document.getElementById("repassw").className += " is-invalid";
        } else {
            valido += 1;
            console.log("valido: " +valido + "entro repass");
        }
    }
     
    if (valido===4)
    {
       finalizar();

    }

}   

function finalizar(){
    
    $('#msg').modal('show')

}
function recargar() {
    window.location.href = 'register.html';
}


//Exercici Rating


function cambiarIcono(id) {
    if (id=="face1") {  
        document.getElementById("face1").style.color="#ffffff"; 
        document.getElementById("face1").style.transition = "color 0.2s linear 0.1s";
    }  
    if (id=="face2") {
        document.getElementById("face1").style.color="#ffffff";
        document.getElementById("face1").style.transition = "color 0.2s linear 0.1s"; 
        document.getElementById("face2").style.color="#ffffff"; 
        document.getElementById("face2").style.transition = "color 0.2s linear 0.1s";
    }
    if (id=="face3") {
        document.getElementById("face1").style.color="#ffffff";
        document.getElementById("face1").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face2").style.color="#ffffff"; 
        document.getElementById("face2").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face3").style.color="#ffffff";
        document.getElementById("face3").style.transition = "color 0.2s linear 0.1s";  
    }
    if (id=="face4") {
        document.getElementById("face1").style.color="#ffffff";
        document.getElementById("face1").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face2").style.color="#ffffff"; 
        document.getElementById("face2").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face3").style.color="#ffffff";
        document.getElementById("face3").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face4").style.color="#ffffff";
        document.getElementById("face4").style.transition = "color 0.2s linear 0.1s";  
    }
    if (id=="face5") {
        document.getElementById("face1").style.color="#ffffff";
        document.getElementById("face1").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face2").style.color="#ffffff"; 
        document.getElementById("face2").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face3").style.color="#ffffff";
        document.getElementById("face3").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face4").style.color="#ffffff";
        document.getElementById("face4").style.transition = "color 0.2s linear 0.1s";
        document.getElementById("face5").style.color="#ffffff";
        document.getElementById("face5").style.transition = "color 0.2s linear 0.1s"; 
    }   
}




function devolverColor(id) {
    if (id=="face1") {
        document.getElementById("face1").style.color="#000000";
    }
    if (id=="face2") {
        document.getElementById("face1").style.color="#000000"; 
        document.getElementById("face2").style.color="#000000";  
    }
    if (id=="face3") {
        document.getElementById("face1").style.color="#000000"; 
        document.getElementById("face2").style.color="#000000"; 
        document.getElementById("face3").style.color="#000000"; 
    }
    if (id=="face4") {
        document.getElementById("face1").style.color="#000000"; 
        document.getElementById("face2").style.color="#000000"; 
        document.getElementById("face3").style.color="#000000";
        document.getElementById("face4").style.color="#000000"; 
    }
    if (id=="face5") {
        document.getElementById("face1").style.color="#000000"; 
        document.getElementById("face2").style.color="#000000"; 
        document.getElementById("face3").style.color="#000000";
        document.getElementById("face4").style.color="#000000"; 
        document.getElementById("face5").style.color="#000000";
    }
}