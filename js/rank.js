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

var f1=0, f2=0, f3=0, f4=0, f5=0;
var total = 0;
function califica(id) { 
    if(id=="face1"){
        /* var item = document.createElement("LI");
        var text = document.createTextNode(" * ");
        item.appendChild(text);
        document.getElementById("rank").appendChild(item);  */
        f1 += 1; 
        total += 1; 
        document.getElementById("f1").innerHTML =  f1;  
        document.getElementById("total").innerHTML = "Votos : "  + total;
    }
    if(id=="face2"){
        f2+= 1;  
        total += 1;
        document.getElementById("f2").innerHTML = f2;
        document.getElementById("total").innerHTML = "Votos : "  + total;
    }
    if(id=="face3"){
        f3 += 1; 
        total += 1; 
        document.getElementById("f3").innerHTML = f3;
        document.getElementById("total").innerHTML = "Votos : "  + total;
    }
    if(id=="face4"){
        total += 1;
        f4 += 1;  
        document.getElementById("f4").innerHTML = f4;
        document.getElementById("total").innerHTML = "Votos : "  + total;
    }
    if(id=="face5"){
        total += 1;
        f5 += 1;  
        document.getElementById("f5").innerHTML = f5;
        document.getElementById("total").innerHTML = "Votos : "  + total;
    }  

}

