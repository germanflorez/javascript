//Exercici Rating
function cambiarIcono(id) {
    if (id=="face1") {  
        document.getElementById("face1").className += " colorFace";           
    }  
    if (id=="face2") {
        document.getElementById("face1").className += " colorFace";
        document.getElementById("face2").className += " colorFace";   
    }
    if (id=="face3") {
        document.getElementById("face1").className += " colorFace";
        document.getElementById("face2").className += " colorFace";   
        document.getElementById("face3").className += " colorFace";
    }
    if (id=="face4") {
        document.getElementById("face1").className += " colorFace";
        document.getElementById("face2").className += " colorFace";   
        document.getElementById("face3").className += " colorFace";
        document.getElementById("face4").className += " colorFace";
    }
    if (id=="face5") {
        document.getElementById("face1").className += " colorFace";
        document.getElementById("face2").className += " colorFace";   
        document.getElementById("face3").className += " colorFace";
        document.getElementById("face4").className += " colorFace";
        document.getElementById("face5").className += " colorFace";
    }    
}
function devolverColor(id) {
     if (id=="face1") {  
        document.getElementById("face1").className = " d-inline";           
    }  
    if (id=="face2") {
        document.getElementById("face1").className = " d-inline";
        document.getElementById("face2").className = " d-inline";   
    }
    if (id=="face3") {
        document.getElementById("face1").className = " d-inline";
        document.getElementById("face2").className = " d-inline";   
        document.getElementById("face3").className = " d-inline";
    }
    if (id=="face4") {
        document.getElementById("face1").className = " d-inline";
        document.getElementById("face2").className = " d-inline";   
        document.getElementById("face3").className = " d-inline";
        document.getElementById("face4").className = " d-inline";
    }
    if (id=="face5") {
        document.getElementById("face1").className = " d-inline";
        document.getElementById("face2").className = " d-inline";   
        document.getElementById("face3").className = " d-inline";
        document.getElementById("face4").className = " d-inline";
        document.getElementById("face5").className = " d-inline";
    }   
}
var puntuacion =[0,0,0,0,0];
var total = 0;
function califica(id) { 
    for(var i = 0; i <= puntuacion.length; ++i ){
        if(id == "face"+(i+1) ){ 
            puntuacion[i] += 1;
            total += 1;
        document.getElementById("f"+(i+1)).innerHTML =  puntuacion[i];    
        document.getElementById("total").innerHTML = "Votos : "  + total;
        }
    }
}