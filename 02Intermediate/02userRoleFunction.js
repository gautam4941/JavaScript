/*
function getUserRole( name, role )
{
    switch( role )
    {
        case 'admin' : 
            return `${name} has Full ${name} has Access`

        case 'subadmin' : 
            return `${name} has Access to Create/Delete Course` ;

        case 'testprep' : 
            return `${name} has Access to Create/Delete Test` ;
            
        case 'user' : 
            return `${name} has Access to Take a Course` ;
            
        default:
            return `${name} has no Access` ;
            
    }

}

console.log( `\ngetUserRole( name = 'Gautam', role = 'admin' ) = 
${ getUserRole( name = 'Gautam', role = 'admin' ) }\n` ) ;
*/

/*
//Storing Function in a variable
var f1 = function getUserRole( name, role )
{
    switch( role )
    {
        case 'admin' : 
            return `${name} has Full ${name} has Access`

        case 'subadmin' : 
            return `${name} has Access to Create/Delete Course` ;

        case 'testprep' : 
            return `${name} has Access to Create/Delete Test` ;
            
        case 'user' : 
            return `${name} has Access to Take a Course` ;
            
        default:
            return `${name} has no Access` ;
            
    }

}

console.log( `\nf1( name = 'Gautam', role = 'admin' ) = 
${ f1( name = 'Gautam', role = 'admin' ) }\n` ) ;
*/

//Arrow Function
var f1 = ( name, role ) =>
{
    switch( role )
    {
        case 'admin' : 
            return `${name} has Full ${name} has Access`

        case 'subadmin' : 
            return `${name} has Access to Create/Delete Course` ;

        case 'testprep' : 
            return `${name} has Access to Create/Delete Test` ;
            
        case 'user' : 
            return `${name} has Access to Take a Course` ;
            
        default:
            return `${name} has no Access` ;
            
    }

}

console.log( `\nf1( name = 'Gautam', role = 'admin' ) = 
${ f1( name = 'Gautam', role = 'admin' ) }\n` ) ;

