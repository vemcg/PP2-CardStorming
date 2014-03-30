define(['cards/CardView', 'core/EventDispatcher', 'core/Log', 'jquery'],
    function (Card, dispatcher, logger) { "use strict"
        var Sample = (function () {

            function Sample () {
                function createCardStack (cardStackAttributes) {

                }

                function init() {
                    dispatcher.on('getNewCardStack', createCardStack);
                }

                // Public Interface
                this.init = init;
            }   // End of Instance
            return Sample;
        } ()); // End of Class

        // Choose either:
        return new Sample(); // Returns an instance (a singleton)
        // return Sample; // Returns a Constructor for multiple instances
    });