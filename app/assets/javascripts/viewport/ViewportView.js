define(['jquery'],
    function () { "use strict"
        var ViewportView = (function () {

            function ViewportView () {

                function pause() {

                }
                function resume() {

                }

                function init() {
                   alert("This is the init() of viewport.");
                }

                // Public Interface
                this.pause = pause;
                this.resume = resume;
                this.init = init;
            }   // End of ViewportViewInstance
            return ViewportView;
        } ()); // End of ViewportViewClass

        return new ViewportView(); // Returns and instance of SampleInstance (a singleton)
        // return SampleInstance; // Returns SampleInstance (a Constructor for multiple instances)
    });
