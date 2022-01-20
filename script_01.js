
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung
2. Auswahl Rechenart
3. Fkt. Grundrechenarten
4. Ausgabe in Konsole
*/


// module: dividieren

// output(divide(25,5));
// output(divide(0,2));
// output(divide(2,0));

function divide(a,b) {
    return a / b;
}

// module: multiplication

// output (multiplication(2,3))    //test

function multiplication(a,b) {
  return a * b;
}




// module: subtraction a - b  test: 

// output (sub(3,4));      //test

function sub(a,b) {
    return a - b;
}




// module: addition a + b | test: (modul einer komplexere Aufgabe)

// output (add(2,3));              //test
// output (add(2,-3));             //test
// output (add(2.1,1.1));          //test

function add(a,b) {
    return a + b;
}


// module: console output | test:
// output("Hello");
// output(20);
function output(outputData) {
    console.log(outputData);
}




















/*** Späßle *****/

/*
 Heute bleibt die Küche kalt ...
 wir gehen in den Wienerwald. 
*/

/*
 servieren(anrichten(gemuesekoch(),saucenkoch()));

function servieren(teller) {
    console.log("Einmal einen " + teller +  ", Bitte sehr!")
}

function anrichten(kartoffeln,soße) {
    return "Teller mit: "+ kartoffeln + " " + soße;
}

function gemuesekoch(){
    return "gekochte Kartoffeln";
 }
 
 function saucenkoch() {
     return "lecker Sauce";
 }
 */
