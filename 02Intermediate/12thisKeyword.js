console.log( this ) ;

console.log( '\n' ) ;

var user = {
    f_name : 'Gautam'
    ,couseCount : 4
    ,getCourseContent : () => {
        console.log( 'Line 9, ', this ) ;
    }
}

user.getCourseContent() ;