define(['core/EventDispatcher', 'core/Log', 'jquery'],
    function (dispatcher, logger) { "use strict"
        var CardView = (function () {

            function CardView () {
                var cardstock;

                function addCard (cardStackAttributes) {
                    var card = cardstock.html();

                    $(card).addClass(cardStockAttributes.styling);

                    dispatcher.fire('newCard', $(card).html());
                }

                function init() {
                    dispatcher.on('getNewCard', addCard);

                    cardstock = $('#cardstock'); // maybe not.detach();
                }

                // Public Interface
                this.init = init;
            }   // End of Instance
            return CardView;
        } ()); // End of Class

        // Choose either:
        // return new CardView(); // Returns an instance (a singleton)
        return CardView; // Returns a Constructor for multiple instances
    });