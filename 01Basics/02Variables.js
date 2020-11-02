const uid = 'abc123'

var fullName = "Kumar Gautam Pathak", email = "gautam.jadeja000@gmail.com" ;
var password = "1234", confirm_password = "1234", course_count = 0 ;
var isLoggedInFromGoogle = false ;

console.log( "uid = "+uid ) ;
console.log( "fullName = "+fullName ) ;
console.log( "email = "+email ) ;
console.log( "password = "+password ) ;
console.log( "confirm_password = "+confirm_password ) ;
console.log( "course_count = "+course_count ) ;
console.log( "isLoggedInFromGoogle = "+isLoggedInFromGoogle ) ;

var message = `
uid = ${uid}
,fullName = ${fullName}
,email = ${email}
,password = ${password}
,confirm_password = ${confirm_password}
,course_count = ${course_count}
,isLoggedInFromGoogle = ${isLoggedInFromGoogle}
` ;

console.log( `\nmessage = ${message}\n, typeof( message ) = ${typeof( message )}` ) ;

