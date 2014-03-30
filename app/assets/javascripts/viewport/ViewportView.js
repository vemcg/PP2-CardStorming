define(['core/EventDispatcher', 'core/Log', 'jquery'],
    function (dispatcher, logger) { "use strict"
        var ViewportView = (function () { // Start of Constructor

            function ViewportView () {

                var cardstock;
                var viewport;
                var board;

                var fontsize = 100;
                var xoff = 0;
                var yoff = 0;
                var zidx = 0;

                function addCard() {
                    // TODO: Take the card from the event rather than creating it
                    var card = cardstock.html();
                    yoff = yoff + 2;
                    xoff = xoff + 3;
                    zidx = zidx + 1;
                    var cid = 'card' + zidx;

                    fontsize = 0.90 * fontsize;
                    board.css('font-size', fontsize + '%');

                    board.append(card);
                    $('#TBD').attr('id', cid);
                    cid = '#' + cid;

                    // TODO: Put the card where it was dropped
                    board.css('top', yoff + 'px');
                    board.css('left', -xoff + 'px');

                    $(cid).css('top', '' + yoff + 'em');
                    $(cid).css('left', '' + xoff + 'em');
                    $(cid).css('z-index', zidx);
                }

                function pause () {

                }
                function resume () {

                }
                function init() {
                    var infoIn = {str : 'infoIn string'};
                    function t1 (info) {
                        logger.log('T1: info.str = ' + info.str);
                    }
                    function t2(info) {
                        logger.log('T2: info.str = ' + info.str);
                    }
                    logger.log('Hello raw Log from ViewportView');

                    dispatcher.on('test', t1);
                    dispatcher.on('test', t2);
                    dispatcher.on('test', t1);

                    dispatcher.fire ('test', infoIn);

                    dispatcher.on('newCard', addCard);

                    // alert("Made it to ViewportView init()");

                    cardstock = $('#cardstock');
                    viewport = $('#viewport');
                    board = $('#board');

                    viewport.on('click', addCard);
                }

                // Public Interface
                this.pause = pause;
                this.resume = resume;
                this.init = init;
            }   // End of Instance
            return ViewportView;
        } ()); // End of Constructor

        return new ViewportView();
    });
