require ([
//    "path/to/xxx",
//    "path/to/yyy"
// ], function (xxx, yyy) { "use strict"
], function () { "use strict"
    var SampleConstructor = (function () {
        var CLASS_CONSTANT = 42;
        var classVariable = 84;
        function SampleInstance () {
            var publicVariable;
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
            this.publicVariable = publicVariable;
            this.publicMethod = publicMethod;
            this.sayHello = sayHello;
        }
        debugger;
        return SampleInstance;
    }());
    // Choose either:
    var instance = new SampleConstructor(); // Returns an instance of SampleInstance (a singleton)
    return instance;
    // return SampleConstructor; // Returns SampleConstructor (a Constructor for multiple instances)
});

