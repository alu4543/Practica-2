"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result1, result2;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+(?:\.\d+)?)?)\s*(º?(f(arenheit)?|c(elsius)?)|(k(elvin)?))\s*$/i;

  var m = temp.match(regexp);
  //console.log("m[0] " + m[0] + ";"+"m[1] " + m[1] + ";"+"m[2] " + m[2] + ";");
  if (m) {

    var num = m[1];
    var type = m[2].replace('º','').toLowerCase();
    num = parseFloat(num);
    //console.log("num " + num + " type " + type + ".");


    if (type.substr(0) == 'c') {
      //Celsius	to Fahrenheit	ºF = ºC x 1.8 + 32
      result1 = (num * 1.8)+32;
      result1 = result1.toFixed(1)+" Farenheit"

      //Celsius to	Kelvin	K = ºC + 273.15
      result2 = num + 273.15;
      result2 = result2.toFixed(1)+" Kelvin"
    }
    else if (type.substr(0) == 'f'){
      //Fahrenheit to	Celsius	ºC = ( ºF - 32) / 1.8
      result1 = (num - 32)*5/9;
      result1 = result1.toFixed(1)+" Celsius"

      //Fahrenheit to	Kelvin	K = ( ºF + 459.67) / 1.8
      result2 = (num + 459.67) / 1.8;
      result2 = result2.toFixed(1)+" Kelvin"
    }
    else {
      //Kelvin	Fahrenheit	ºF = K × 1.8 - 459.67
      result1 = (num * 1.8) - 459.67;
      result1 = result1.toFixed(1)+" Farenheit"

      //Kelvin to	Celsius	ºC = K – 273.15
      result2 = (num - 273.15);
      result2 = result2.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result1;
    converted2.innerHTML = result2;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '0celsius, 32ºF, -45K, 3.4e2 c, -2.3e-4kelvin,..";
    converted2.innerHTML = "ERROR! Try something like '0celsius, 32ºF, -45K, 3.4e2 c, -2.3e-4kelvin,..";
  }
}



/*
Fahrenheit	Celsius	ºC = ( ºF - 32) / 1.8
Celsius	Fahrenheit	ºF = ºC x 1.8 + 32
Fahrenheit	Kelvin	K = ( ºF + 459.67) / 1.8
Kelvin	Fahrenheit	ºF = K × 1.8 - 459.67
Celsius	Kelvin	K = ºC + 273.15
Kelvin	Celsius	ºC = K – 273.15
*/

// umeros exponenciales(Transformar): http://tip.dis.ulpgc.es/numeros-texto/default.aspx
// Expresiones regulares(Graficamente) : http://regexper.com
// Expresiones regulares : http://www.arumeinformatica.es/blog/expresiones-regulares-conceptos-basicos/
//* : Busca el caracter precedente 0 (cero) o más veces.
//+ : Busca el caracter precedente 1 o más veces.
//? : Busca el caracter precedente 0 (cero) o 1 (una) vez.
