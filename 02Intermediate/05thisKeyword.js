console.log( this ) ;
console.log( `this = ${ this }\n` ) ;

function sayName()
{
    console.log( this ) ;
    console.log( `\nInside Function, this = ${ this }\n` ) ;
}

sayName() ;

