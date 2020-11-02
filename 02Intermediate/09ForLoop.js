/*
for( let i = 1 ; i <= 10 ; i++ )
    console.log( `i = ${i}` ) ;
*/

const myState = [ 'Bihar', "UP", 'DELHI', 'Orrids', 47, 'Tamil Nadu' ] ;

// for( let i = 0 ; i < myState.length ; i++ )
//     console.log( `myState[${i}] = ${ myState[i] }` ) ;

/*
for( let i = 0 ; i < myState.length ; i++ )
{
    if( typeof( myState[i] ) == 'string' )
        console.log( `myState[${i}] = ${ myState[i] }` ) ;
}
*/

var i = 1 ;
for( ; ; )
{
    if( i > 10 )
        break
    
    console.log( `i = ${i}` ) ;
    i ++ ;
}