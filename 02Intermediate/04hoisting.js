var a = 5 ;

//using function before declaration
f1() ;

function f1(){
    var b = 10;              //Lacal
    console.log( `\nInside, b = ${b}\n` ) ;
}

//storing function in a variable
var f2 = () => {
    var b = 10;              //Lacal
    console.log( `\nInside, b = ${b}\n` ) ;
}

//using function after declaration
f2() ;

console.log( `Outside, a = ${a}\n` ) ;
console.log( `Outside, f2 = ${f2} \nand typeof(f2) = ${ typeof(f2) }\n` ) ;
// console.log( `Outside, b = ${b}\n` ) ;      //Error because b is local variable of function

//using function before declaration
f3() ;

//storing function in a variable
var f3 = () =>
{
    var b = 10;              //Lacal
    console.log( `\nInside, b = ${b}\n` ) ;
}