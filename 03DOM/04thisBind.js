object1 = {
    f_name : 'gautam'
    ,l_name : 'pathak'
    ,getInfo : function()
               {
                   console.log( 
                    `First Name is : ${this.f_name } and Last name is : ${ this.l_name }`
                    ) ;
               }
} ;

object2 = {
    f_name : 'Manisha'
    ,l_name : 'Raj'
}

object1.getInfo() ;

//object2.getInfo() ;   //Error
object2['getInfo'] =  object1.getInfo.bind( object2 ) ;

object2.getInfo() ;