const log = console.log ;
const table = console.table ;

const courses = [
    {
        name : "React Js Course"
        ,price : 2.3
    }
    ,{
        name : "Angular Course"
        ,price : 2.5
    }
    ,{
        name : "MERN Course"
        ,price : 2.7
    }
    ,{
        name : "C++ Course"
        ,price : 2.9
    }
    ,{
        name : "React Js Course"
        ,price : 2.3
    }
]

// log( courses ) ;

table( courses ) ;
log( '\n' ) ;

courses.sort(
    (a, b) => {
        log( `a = ${a} and a.name = ${ a.name } and a.price = ${ a.price }` ) ;
        log( `b = ${b} and b.name = ${ b.name } and b.price = ${ b.price }` ) ;
        log( `a.price - b.price = ${ a.price - b.price }\n` ) ;
    }
)

log( '\n' ) ;
table( courses ) ;