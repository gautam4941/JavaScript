const myState_arr = [ 'Bihar', "UP", 'DELHI', 'Orrids', 47, 'Tamil Nadu' ] ;

console.log( `myState_arr = ${ myState_arr } and typeof( myState_arr ) = ${ typeof( myState_arr ) }` ) ;

for( i of myState_arr )
    console.log( `for of Loop, i = ${ i } and typeof(i) = ${ typeof(i) }` ) ;

console.log( '\n' ) ;

const myState_obj = { 1 : 'Bihar'
                    , 2 : "UP"
                    , 3 : 'DELHI'
                    , 4 : 'Orrids'
                    , 5 : 47
                    , 6 : 'Tamil Nadu' } ;

//Error
// for( i of myState_obj )
//     console.log( `for of Loop, i = ${ i } and typeof(i) = ${ typeof(i) }` ) ;

for( i in myState_obj )
    console.log( `for in Loop, i = ${ i } & typeof(i) = ${ typeof(i) } and myState_obj[i] = ${
         myState_obj[i] } & typeof( myState_obj[i] ) = ${ typeof( myState_obj[i] ) }` ) ;

