
// Exercici JavaScript Bàsic

//Ejercicio 1
function ejerc_1() {
    console.log("hola mundo");
    document.getElementById("result").innerHTML = "<h1> hola mundo --- POR CONSOLA </h1>";
}

//Ejercicio 2
function ejerc_2() {
    alert(" Mi nombre es German Florez");
}

//Ejercicio 3
function ejerc_3() {

    var nombre = "German ";
    var apellido = "FLOREZ";

    alert(nombre+apellido);
    
}
//Ejercicio 4
function ejerc_4() {

    var num_1 = prompt("DIGITE LA PRIEMERA CANTIDAD");
    var num_2 = prompt("DIGITE LA SEGUNDA CANTIDAD");
    var resultado = parseInt(num_1)  + parseInt(num_2);

    var enPantalla = "<h1>"+ num_1 + " + " + num_2 + " = " + resultado+"</h1>";
    document.getElementById("result").innerHTML = enPantalla;
    
}

//Ejercicio 5
function ejerc_5() {

    var nota_examen = prompt("POR FAVOR DIGITE SU NOTA AQUI");
    
    if (nota_examen < 5) {


        var enPantalla = "<h1>"+"CALIFICACIÓN: "+ nota_examen + "   Lo siento =(  usted no aprobo." +"</h1>";                
        document.getElementById("result").innerHTML = enPantalla;

    }else{

        var enPantalla = "<h1>"+"CALIFICACIÓN: "+ nota_examen + "   Muy bien =)  usted  aprobo." +"</h1>";                
        document.getElementById("result").innerHTML = enPantalla;
        
       
    } 
     
    
}

//Ejercicio 6
function ejerc_6() {

    var cotxe = "Tinc un cotxe de color verd";
    var color = prompt("Tinc un cotxe de color verd" + "\n Nou color :" );
    
    cotxe = cotxe.replace("verd", color);

    letra =  prompt(cotxe + "\n canvi la lletra o :" );
    
    var enPantalla = "<h1>"+ cotxe.replace(/o/g, letra)+ "</h1>";
    document.getElementById("result").innerHTML = enPantalla;
    
}

//Ejercicio 7
function ejerc_7(){
    
    var lista = [ "taula", "cadira" , "ordinador", "libreta" ];
    var i ;
    obje = "";

    for (var i = 0;i<lista.length;i++) {

        obje += "<p>"+ lista[i] +" "+ i + "</p>";

        document.getElementById("result").innerHTML = obje;
            
    
    }
   
}

//Ejercicio 8
function pedirValores(){
    
   var valor1 = parseInt(prompt("DIGITE LA PRIEMERA CANTIDAD"));

   var operador = prompt("DIGITE SU OPERADOR + - * ");

   var valor2 = parseInt(prompt("DIGITE LA PRIEMERA CANTIDAD"));

   

    var resultado = calculadora(operador,valor1,valor2);

    var enPantalla = "<h1>"+ valor1 + " " + operador + " " + valor2 + " = " + resultado + "</h1>";
    
    document.getElementById("result").innerHTML = enPantalla; 
}
function calculadora(operador, valor1,valor2){
    var operacion = 0;

 switch (operador) {
     case "+" : 
            operacion = valor1 + valor2 ;
         
         break;
      case "-" : 
            operacion = valor1 - valor2 ;
         
         break; 

      case "*" : 
         operacion = valor1 * valor2 ;
      
      break;   
         
      default:
        break;
    
 }

 return operacion;

}


