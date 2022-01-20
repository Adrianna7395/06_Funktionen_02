
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung
2. Auswahl Rechenart
3. Fkt. Grundrechenarten
4. Ausgabe in Konsole
*/


// application / App

startApp();
function startApp() {
    output(calculator(2,2,getOp()));
    output(calculator(getNumber(),getNumber(),getOp()));
}

// data input
function getNumber() {
    return 2;
}
// module: input operator
// output (getOp());
function getOp()  {
    const displayStr = "Bitte Operator eingeben";
    let op = prompt(displayStr);

    // if op is not valid and user didn't click at Abbrechen
    while (!isOpValid(op) && (op !== null)) {

        op = prompt(displayStr);

    }
   return op;
}

// module: check operator 

// output(isOpValid("+"));
// output(isOpValid("-"));
// output(isOpValid("*"));
// output(isOpValid("/"));
// output(isOpValid("h"));
// output(isOpValid(""));
function isOpValid(op) {
    // erste Variante
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true
        default:
            return false;
    }
}

// 2nd Variante 
// return op == "+" || op == "-" || op == "*" || op == "/"
// }




// module: calculus | test:
// output(calculator(2,2,"")); 
// output(calculator(2,2,"+"));

// output(calculator(2,2,"-"));

// output(calculator(2,2,"*"));

// output(calculator(2,2,"/"));

// output(calculator(2,0,"/"));

// output(calculator(2,0,"#!"));

function calculator(a,b,op) {
   
    switch (op) {
            case "+":   //addition
            return add(a,b);
                
            case ("-"): // subtraction
            return sub(a,b);
               
            case ("*"): //multiplication
            return multiplication(a,b);
                
            case ("/"): //division
            return divide(a,b);
               
    
        default:
            return "Something went wrong";
    }
}

// module: dividieren

// output(divide(25,5));
// output(divide(0,2));
// output(divide(2,0));

function divide(a,b) {

    if (b == 0) { // Ausnahme
        return "x";
    } 
        return a / b; // Regel
    
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
    if (typeof outputData == "number") {
        console.log("The result is: " + outputData);
    } else {
        console.log("Error: " + outputData);
    }
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
