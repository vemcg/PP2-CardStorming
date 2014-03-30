define(['cards/CardStackView', 'core/EventDispatcher', 'jquery'],
    function (CardStack, dispatcher) { "use strict"
        var PaletteView = (function () {

            function PaletteView () {

                function addCardStack(cardStackAttributes) {
                    // add the cardStack to #palette
                }

                function pause () {

                }
                function resume () {

                }

                function init() {
                    // alert("This is the init() of Palette.");

                    var cardStackAttributes = {
                        purpose : 'demo',
                        styling : 'tbdClassName'
                    };
                    addCardStack(cardStackAttributes);
                }

                // Public Interface
                this.pause = pause;
                this.resume = resume;
                this.init = init;
            }   // End of Instance
            return PaletteView;
        } ()); // End of Class

        return new PaletteView(); // Returns an instance (a singleton)
        // return SampleInstance; // Returns a Constructor for multiple instances
    });
