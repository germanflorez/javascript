//Exercici Rating
function cambiarIcono(id) {
    var num = id.charAt(id.length - 1);
    for (var i = 1; i <= num; i++) {
        document.getElementById("face"+i).className += " colorFace";
    }
}
function devolverColor(id) {
    var res = id.charAt(id.length - 1);
    for (var i = 1; i <= res; i++) {
        document.getElementById("face"+i).className = " d-inline";
    }
}
var puntuacion = [0, 0, 0, 0, 0];
var total = 0;
function califica(id) {
    for (var i = 0; i <= puntuacion.length; ++i) {
        if (id == "face" + (i + 1)) {
            puntuacion[i] += 1;
            total += 1;
            document.getElementById("f" + (i + 1)).innerHTML = puntuacion[i];
            document.getElementById("total").innerHTML = "Votos : " + total;
        }
    }
}