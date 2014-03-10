define(['path/to/xxx','path/to/yyy','jquery'],
    function (xxx, yyy,$) { "use strict"
        var SampleConstructor = (function () {
            var CLASS_CONSTANT = 42;
            var classVariable = 84;

            function SampleInstance () {
                var publicInstanceMethod;
                var privateInstanceVariable;

                function privateMethod () {

                }
                function publicMethod () {

                }

                function init() {

                }

                // Public Interface
                this.publicVariable = publicVariable;
                this.publicMethod = publicMethod;
                this.init = init;
            }   // End of SampleInstance
            return SampleInstance;
        } ()); // End of SampleClass

        // Choose either:
        return new SampleInstance(); // Returns and instance of SampleInstance (a singleton)
        // return SampleInstance; // Returns SampleInstance (a Constructor for multiple instances)
    });