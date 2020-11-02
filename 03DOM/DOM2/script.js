const red = document.querySelector( '.red' ) ;
const cyan = document.querySelector( '.cyan' ) ;
const violet = document.querySelector( '.violet' ) ;
const orange = document.querySelector( '.orange' ) ;
const pink = document.querySelector( '.pink' ) ;

const center = document.querySelector( '.center' ) ;

// console.log( window.getComputedStyle( red ).backgroundColor ) ;

const getBgColor = ( selctedElement ) => {

    return window.getComputedStyle( selctedElement ).backgroundColor ;

}

console.log( `getBgColor( red ) = ${ getBgColor( red ) }` ) ;
console.log( `getBgColor( cyan ) = ${ getBgColor( cyan ) }` ) ;
console.log( `getBgColor( violet ) = ${ getBgColor( violet ) }` ) ;
console.log( `getBgColor( orange ) = ${ getBgColor( orange ) }` ) ;
console.log( `getBgColor( pink ) = ${ getBgColor( pink ) }` ) ;