var user = {
    first_name : "Gautam"
    ,last_name : "Pathak"
    ,role : "Admin"
    ,login_count : 32
    ,course_list : []
    ,buycourse : ( course_name ) => {

        if( user.course_list.includes( course_name ) )
            console.log( `\n${ user.first_name } has already enrolled for ${ course_name } course\n` ) ;
        
        else
            user.course_list.push( course_name ) ;
    }
    ,course_count : () => {
        return `${ user.first_name } has enrolled for ${ user.course_list.length } courses` ;
    }
}

console.table( user ) ;

user.buycourse( 'Python' ) ;

console.table( user ) ;

user.buycourse( 'ML' ) ;

console.table( user ) ;

user.buycourse( 'ML' ) ;

console.table( user ) ;

console.log( `\nuser.course_count() = ${ user.course_count() }` ) ;

console.log( user.course_list ) ;