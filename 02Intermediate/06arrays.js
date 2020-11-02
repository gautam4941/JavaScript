a = [ 1, 2, 3, 4 ] ;

console.log( "a = "+a+" and typeof(a) = "+typeof(a) ) ;

/////////////////////DATA INSERTION////////////////

// push
a.push( 9 )
console.log( `push1 a = ${a}` ) ;

a.push( 0 )
console.log( `push2 a = ${a}` ) ;

//unshift
a.unshift( 11 )
console.log( `unshift1 a = ${a}` ) ;

a.unshift( 12 )
console.log( `unshift2 a = ${a}` ) ;


/////////////////////DATA DELETION////////////////

// pop()
a.pop()
console.log( `\npop1 a = ${a}` ) ;
a.pop()
console.log( `pop2 a = ${a}` ) ;

//delete
console.log( `\na = ${ a }` ) ;
console.log( `delete a[2] =  = ${ delete a[2] }` ) ;
console.log( `a = ${ a }` ) ;

//shift
console.log( `\na = ${ a }` ) ;
console.log( `a.shift() =  = ${ a.shift() }` ) ;
console.log( `a = ${ a }` ) ;


//***************Data Deleion and Insertion*********
// array_name.splice( start, end, add_at_start )

a = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] ;

console.log( `\nSplice 1, a = ${ a }` ) ;
console.log( `a.splice( 6 ) = ${ a.splice( 6 ) }` ) ;
console.log( `a = ${ a }` ) ;

console.log( `\nSplice 2, a = ${ a }` ) ;
console.log( `a.splice(0 ,1) = ${ a.splice(0 ,1) }` ) ;
console.log( `a = ${ a }` ) ;


console.log( `\nSplice 3, a = ${ a }` ) ;
console.log( `a.splice(0 ,3, 'Mango0') = ${ a.splice(0 ,3, 'Mango0') }` ) ;
console.log( `a = ${ a }` ) ;

a = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] ;

console.log( `\nSplice 4, a = ${ a }` ) ;
console.log( `a.splice(0 ,3, 'Mango0', 'Mango1', 'Mango2') = ${ a.splice(0 ,3, 'Mango0', 'Mango1', 'Mango2') }` ) ;
console.log( `a = ${ a }` ) ;

console.log( `\nSplice 5, a = ${ a }` ) ;
console.log( `a.splice(0 ,3, 'Mango0', 'Mango1') = ${ a.splice(0 ,3, 'Mango0', 'Mango1' ) }` ) ;
console.log( `a = ${ a }` ) ;

console.log( `\nSplice 6, a = ${ a }` ) ;
console.log( `a.splice(0 ,3, 'Apple0', 'Apple1') = ${ a.splice(0 ,3, 'Apple0', 'Apple1' ) }` ) ;
console.log( `a = ${ a }` ) ;

console.log( `\nSplice 7, a = ${ a }` ) ;
console.log( `a.splice(0 ,3, [ 'Apple3', 'Apple4' ]) = ${ a.splice(0 ,3, [ 'Apple3', 'Apple4' ] ) }` ) ;
console.log( `a = ${ a }` ) ;

//////////Extra Functions
//join()
console.log( `\nBefore join, a = ${ a }` ) ;
a.join( '*' )
console.log( `After 1 join, a = ${ a }` ) ;
a = a.join( '*' )
console.log( `After 2 join, a = ${ a }` ) ;


//split()
console.log( `\nBefore split, a = ${ a }` ) ;
a.split( '*' )
console.log( `After 1 split, a = ${ a }` ) ;
a = a.split( '*' )
console.log( `After 2 split, a = ${ a }` ) ;

//every()
var isEven = ( num ) => { 
    return num%2 == 0 ;
 } ;


console.log( `\n a = ${a} and a.every( isEven ) = ${ a.every( isEven ) }` ) ;
console.log( `[ 2, 4, 6, 8 ].every( isEven ) = ${ [ 2, 4, 6, 8 ].every( isEven ) }` ) ;
console.log( `[ 2, 4, 6, 9 ].every( isEven ) = ${ [ 2, 4, 6, 9 ].every( isEven ) }` ) ;
console.log( `[ 2, 4, 6, 'Hi' ].every( isEven ) = ${ [ 2, 4, 6, 'Hi' ].every( isEven ) }` ) ;
console.log( `[ 2, 4, 6, true ].every( isEven ) = ${ [ 2, 4, 6, true ].every( isEven ) }` ) ;


//concat()
var hege = ["Cecilie", "Lone"] ;
var stale = ["Emil", "Tobias", "Linus"] ;
var kai = ["Robin"] ;

console.log( `\nBefore concat, hege = ${hege}` ) ;
console.log( `Before concat, stale = ${stale}` ) ;
console.log( `Before concat, kai = ${kai}` ) ;

var children = hege.concat(stale, kai, 11, 'Hello', 5.6, true, false);

console.log( `After concat 1, hege = ${hege}` ) ;
console.log( `After concat 1, stale = ${stale}` ) ;
console.log( `After concat 1, kai = ${kai}` ) ;
console.log( `After concat 1, children = ${children}` ) ;


console.log( `\nAfter concat 2, hege = ${hege}` ) ;
console.log( `After concat 2, stale = ${stale}` ) ;
console.log( `After concat 2, kai = ${kai}` ) ;
console.log( `After concat 2, children = ${children}` ) ;

//constructor
console.log( `\na.constructor = ${ a.constructor }` ) ;
console.log( `\n'hi'.constructor = ${ 'hi'.constructor }` ) ;
console.log( `\n(2).constructor = ${ (2).constructor }` ) ;

a = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] ;

//copyWithin
console.log( `\nBefore copyWithin, a = ${ a } and a.length = ${ a.length }` ) ;
console.log( `a.copyWithin(0) = ${ a.copyWithin(0) } and a.length = ${ a.length }` ) ;
console.log( `a.copyWithin(0, 2) = ${ a.copyWithin(0, 2) } and a.length = ${ a.length }` ) ;
console.log( `a.copyWithin(0, 2, 4 ) = ${ a.copyWithin(0, 2, 4 ) } and a.length = ${ a.length }` ) ;
console.log( `After copyWithin, a = ${ a } and a.length = ${ a.length }` ) ;


//entries()
var fruits = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
var f = fruits.entries();

console.log( `\nf = ${f}` ) ;

console.log( f.next() ) ;
console.log( f.next() ) ;
console.log( f.next().done ) ;
console.log( f.next().value ) ;
console.log( f.next().value[0] ) ;
console.log( f.next().value[1] ) ;
console.log( f.next() ) ;

//fill()
var fruits = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

console.log( `1. fruits = ${ fruits }` ) ;
fruits.fill("Kiwi");
console.log( `2. fruits = ${ fruits }` ) ;
fruits.fill("apple", 2);
console.log( `3. fruits = ${ fruits }` ) ;
fruits.fill("banana", 2, 6);
console.log( `4. fruits = ${ fruits }` ) ;


//filter()
var fruits = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

console.log( `\nfilter, fruits = ${ fruits }` ) ;
console.log( `fruits = ${ fruits.filter( ( num ) => num%2 == 0 ) }` ) ;
console.log( `After filter fruits = ${ fruits }` ) ;


//map()
var fruits = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
console.log( `\nmap, fruits = ${ fruits }` ) ;
console.log( `fruits.map( (num) => { return num*2 } ) = ${ fruits.map( (num) => { return num*2 } ) }` ) ;
console.log( `After filter fruits = ${ fruits }` ) ;


//map()
var fruits = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
console.log( `\nmap, fruits = ${ fruits }` ) ;
console.log( `fruits.map( (num1, num2 ) = ${ fruits.map( (num1, num2 ) => { 
    // return num1+num2 
    console.log( `\tInside map(), num1 = ${ num1 } and num2 = ${ num2 }` )
} ) }` ) ;

console.log( `\nAfter filter fruits = ${ fruits }` ) ;

//reverse()
var fruits = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

console.log( `\nBefore reverse, fruits = ${ fruits }` ) ;
console.log( `fruits.reverse() =  ${ fruits.reverse() }` ) ;
console.log( `After reverse, fruits = ${ fruits }` ) ;


//sort()
console.log( `\nBefore sort, a = ${ fruits }` ) ;
console.log( `fruits.sort() =  ${ fruits.sort() }` ) ;
console.log( `After sort, fruits = ${ fruits }` ) ;


//slice()
console.log( `\nBefore slice 1, a = ${ fruits }` ) ;
console.log( `fruits.slice() =  ${ fruits.slice() }` ) ;
console.log( `After slice 1, fruits = ${ fruits }` ) ;

console.log( `\nBefore slice 2, a = ${ fruits }` ) ;
console.log( `fruits.slice( 4 ) =  ${ fruits.slice( 4 ) }` ) ;
console.log( `After slice 2, fruits = ${ fruits }` ) ;


console.log( `\nBefore slice 3, a = ${ fruits }` ) ;
console.log( `fruits.slice( 4, 8 ) =  ${ fruits.slice( 4, 8 ) }` ) ;
console.log( `After slice 3, fruits = ${ fruits }` ) ;

// NOTE : splice = slice + add more value with replacement