require ([
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
            this.publicVariable = publicVariable;
            this.publicMethod = publicMethod;
            this.sayHello = sayHello;
        }
        debug;
        return SampleInstance;
    }());
    // Choose either:
    return new SampleConstructor(); // Returns and instance of SampleInstance (a singleton)
    // return SampleConstructor; // Returns SampleConstructor (a Constructor for multiple instances)
});

