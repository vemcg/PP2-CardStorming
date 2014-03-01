define (["jquery"
//    "path/to/xxx",
//    "path/to/yyy"
// ], function (xxx, yyy) { "use strict"
], function () { "use strict"
    var SampleConstructor = (function () {
        var CLASS_CONSTANT = 42;
        var classVariable = 84;
        function SampleInstance () {
            var publicInstanceMethod;
            var privateInstanceVariable;
            function privateMessage () {

            }
            function publicMethod () {

            }
            function sayHello() {
                function nextStep() {
                    $('#amd').text('Hello Module');
                }
                setTimeout(nextStep,5000);
            }
            // Public Interface
            //  this.publicVariable = publicVariable;
            debugger;
            this.publicMethod = publicMethod;
            this.sayHello = sayHello;
        }
        debugger;
        return SampleInstance;
    }());
    // Choose either:

    var MyStuff = new SampleConstructor(); // Returns and instance of SampleInstance (a singleton)
    debugger;
    return MyStuff;
    // return SampleConstructor; // Returns SampleConstructor (a Constructor for multiple instances)
});
