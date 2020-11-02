const log = console.log ;
const table = console.table ;

/*
var numbers = [ 4, 9, 8, 1, 9 ] ;

log( `numbers = ${ numbers }\n` ) ;

map_output = numbers.map( ( a, b, c ) => {
    log( `\ta = ${ a } and b = ${ b } and c = ${ c }` ) ;
    return a+b ;
} ) ;

log( `\nmap_output = ${ map_output }\n` ) ;
log( `numbers = ${ numbers }\n` ) ;
*/

var myMap = new Map() ;

myMap.set( 'key1', 44 ) ;
myMap.set( 'key2', 11 ) ;
myMap.set( 'key3', 22 ) ;
myMap.set( 'key4', 33 ) ;

log( myMap ) ;
log( '\n' ) ;
table( myMap ) ;
log( '\n' ) ;

for( let element of myMap )
    log( `element = ${ element } and element[0] = ${ element[0] } and element[1] = ${ element[1] }` ) ;

log( '\n' ) ;

for( let element of myMap.keys() )
    log( `keys, element = ${ element }` ) ;

log( '\n' ) ;

for( let element of myMap.values() )
    log( `values, element = ${ element }` ) ;

log( '\n' ) ;
myMap.forEach(
    ( element ) => {
        log( `forEach, Only element = ${ element }` ) ;
    }
)

log( '\n' ) ;
myMap.forEach(
    ( i, j ) => {
        log( `forEach, i( value ) = ${ i } and j( key ) = ${ j }` ) ;
    }
)