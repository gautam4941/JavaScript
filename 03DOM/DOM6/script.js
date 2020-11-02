const log = console.log ;
const table = console.table ;

const courses = [
    {
        name : "React Js Course"
        ,price : 2.5
    }
    ,{
        name : "Angular Course"
        ,price : 2.3
    }
    ,{
        name : "MERN Course"
        ,price : 2.9
    }
    ,{
        name : "C++ Course"
        ,price : 2.7
    }
    ,{
        name : "React Js Course"
        ,price : 2.3
    }
]

window.addEventListener( 'load', generateList(courses) ) ;
function generateList( courses )
{
    const ul = document.querySelector( ".list-group" ) ;
    ul.innerHTML = "" ;

    for( course of courses )
    {
        const li = document.createElement( "li" ) ;
        li.classList.add( 'list-group-item' ) ;
        const name = document.createTextNode( course.name ) ;
        li.appendChild( name ) ;

        const span = document.createElement( "span" ) ;
        span.classList.add( "float-right" ) ;
        const price = document.createTextNode( course.price ) ;
        span.appendChild( price ) ;
        
        li.appendChild( span ) ;

        ul.appendChild( li ) ;
    }

}

const add_course_button = document.querySelector( ".add_new_courses_btn" ) ;
add_course_button.addEventListener(
         "click", function addCourse()
         {
             div = document.querySelector( '.container' ) ;
         
             const text1 = document.createElement( "p" ) ;
             text1.appendChild( document.createTextNode( "Course Name : " ) ) ;
             
             const course_name = document.createElement( "input" ) ;
             document.write( "<br>" ) ;
             log( course_name ) ;

             div.appendChild( text1 ) ;
             div.appendChild( course_name ) ;
         
         }
) ;

const sort_by_price_button = document.querySelector( ".sort-by-price-btn" ) ;
sort_by_price_button.addEventListener(
         "click", () => 
                    {
                        courses.sort( (a, b) => a.price - b.price ) ;
                        table( courses ) ;
                        generateList( courses ) ;
                    } 
         ) ;

const sort_by_name_button = document.querySelector( ".sort-by-name-btn" ) ;
sort_by_name_button.addEventListener(
        "click", () => 
                    {
                        courses.sort( (a, b) => {
                            if( a.name.toLowerCase() < b.name.toLowerCase() )
                                return -1 ;
                            else if( a.name.toLowerCase() > b.name.toLowerCase() )
                                return 1 ;

                            return 0 ;
                        } ) ;
                        table( courses ) ;
                        
                        generateList( courses ) ;
                    } 
        ) ;