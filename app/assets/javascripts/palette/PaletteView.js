define(['jquery'],
    function () { "use strict"
        var PaletteView = (function () {

            function PaletteView () {

                function pause () {

                }
                function resume () {

                }

                function init() {
                   // alert("This is the init() of Palette.");
                }

                // Public Interface
                this.pause = pause;
                this.resume = resume;
                this.init = init;
            }   // End of PaletteViewInstance
            return PaletteView;
        } ()); // End of ViewportViewClass

        return new PaletteView(); // Returns and instance of SampleInstance (a singleton)
        // return SampleInstance; // Returns SampleInstance (a Constructor for multiple instances)
    });
