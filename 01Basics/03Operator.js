var actualPrice = 1111 ;
var offeredPrice = 250 ;

var discount = ( 1 - offeredPrice/actualPrice ) * 100 ;

console.log( `${offeredPrice} ${actualPrice} ${ Math.round(discount) }% off` ) ;