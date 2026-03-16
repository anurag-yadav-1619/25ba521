 //function:A JavaScript function is a reusable block of code that performs a specific task,
        //  takes optional input (parameters/arguments), and can return a value.
        function demo(){
            console.log("hello js");
        }
        demo();//function calling
        //with parameters
        function demo1(text){
            console.log("hello"+ text);
        }
        demo1("React");
        //with default parameter
        function cal(a,b=11){
            console.log("addition of two number is" + (a+b));
        }
        cal(12);6 
        //array function using multiline
        let add= (a,b)=>{
            console.log("first number is : "+ a);
            console.log("second number is : "+ b);
            console.log("addition of two number is : "+(a+b));

        }
        add(5,6);

        //   iife
        (function(){
            console.log("IIFE in js");

        })();
        (()=>console.log("IIFE using array"))();



        //call back function
