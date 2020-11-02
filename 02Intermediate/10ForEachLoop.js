const myState = [ 'Bihar', "UP", 'DELHI', 'Orrids', 47, 'Tamil Nadu' ] ;

myState.map( ( states ) => { console.log( `Inside map(), states = ${ states }` ) ; } ) ;

console.log( '\n' ) ;

myState.forEach(  ( states ) => { console.log( `Inside forEach(), states = ${ states }` ) ; } ) ;