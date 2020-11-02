var roles = 'testprep' ;

switch( roles )
{
    case 'admin' : 
        console.log( "Full Access" ) ;
        break ;

    case 'subadmin' : 
        console.log( "Access to Create/Delete Course" ) ;
        break ;

    case 'testprep' : 
        console.log( "Access to Create/Delete Test" ) ;
        break ;

    case 'user' : 
        console.log( "Access to Take a Course" ) ;
        break ;

    default:
        console.log( 'Invalid Role' ) ;
        break ;
}