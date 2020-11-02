var isLoggedIn = true ;
var isEmailVerified = true ;
var cardInfo = true ;

var email = 'abc@gmail.com' ;

/*
if( isLoggedIn )
{
    console.log( "Login Success " ) ;

    if( isEmailVerified )
    {
        console.log( `Email : ${email} is verified ` )

        if( cardInfo )
        {
            console.log( 'Successull login' ) ;
        }
    }
}
*/

if( isLoggedIn && isEmailVerified && cardInfo )
    console.log( 'Allowed to Pruchase' ) ;
else
    console.log( 'Not Allowed to Pruchase' ) ;