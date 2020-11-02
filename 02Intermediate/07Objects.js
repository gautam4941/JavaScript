var arr = new Array() ;

var dict = {
    'one' : 1
    ,'two' : 2
    ,'three' : 3
    ,four : 4
    ,five : 5
}


console.log( `arr = ${ arr }` ) ;
arr.push( 9 ) ;
arr.push( 19 ) ;
console.log( `arr = ${ arr }` ) ;

//in and not in
console.log( `\n'one' in dict = ${ 'one' in dict }` ) ;
// console.log( `'one' not in dict = ${ 'one' not in dict }` ) ;       //Error


console.log( `\n0 in arr = ${ 0 in arr }` ) ;
console.log( `1 in arr = ${ 1 in arr }` ) ;
console.log( `2 in arr = ${ 2 in arr }` ) ;
console.log( `9 in arr = ${ 9 in arr }` ) ;


console.log( `\ndict.one = ${ dict.one }` ) ;
console.log( `dict['two'] = ${ dict['two'] }` ) ;
console.log( `dict['six'] = ${ dict['six'] }` ) ;       //undefined
console.log( `dict.six = ${ dict.six }\n` ) ;                //undefined


// keys()
console.log( `Object.keys( dict ) = ${ Object.keys( dict ) }` ) ;
console.log( `Object.keys( dict ) = ${ Object.keys( dict ).map( (key) => { console.log( key ) } ) }` ) ;

//values()
console.log( `\nObject.values( dict ) = ${ Object.values( dict ) }` ) ;

//entries()
console.log( `\nObject.entries( dict ) = ${ Object.entries( dict ) } 
    and typeof( Object.entries( dict ) ) = ${ typeof( Object.entries( dict ) ) }` ) ;

// console.table
console.log( '\n' ) ;
console.table( dict ) ;

dict[ 'six' ] = 6 ;
console.log( `\n` ) ;
console.table( dict ) ;