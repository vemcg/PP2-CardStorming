define(['calculator/subtract','students/add','jquery'], 
function (sub, addstudx,$) { "use strict"
    var AppConstructor = (function () {
        var CLASS_CONSTANT = 42;
        var classVariable = 84;

        /// GNH
      console.log(sub(18,5));
  
      //console.log(sq(11));
      console.log("HIIIIIIIIIII");


        /// GNH


        function AppInstance () {
            var publicInstanceMethod;
            var privateInstanceVariable;
            function privateMessage () {

            }
            function publicMethod () {

            }

            function deleteStudent(){
               $("#orderedList li:last").remove();
            // This is what Rajiv used:  $("#orderedList").children().last().remove();
            }
           function clearAllStudent(){
             $("#orderedList").children().remove();
           }


            function init() {
                debugger;
                $("h1").click(addstudx);
                $("#btnAdd").click(addstudx);
                $("#btnDelete").click(deleteStudent);
                $("#btnClear").click(clearAllStudent);
                $(".positive_integer_only").keyup(
                    function () {     
                       this.value = this.value.replace(/[^0-9]/g,'');
                    }
                );
              }

            // Public Interface
            ////this.publicVariable = publicVariable;
            ////this.publicMethod = publicMethod;
            this.init = init;
        }   /// End of AppInstance
        //debugger;
        return AppInstance;
    } ());
    // Choose either:
    var app =  new AppConstructor(); // Returns and instance of SampleInstance (a singleton)
    // return AppConstructor; // Returns AppConstructor (a Constructor for multiple instances)
    ////debugger;

    return app;
});