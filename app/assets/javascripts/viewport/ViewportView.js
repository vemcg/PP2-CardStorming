define(['core/EventDispatcher', 'core/Log', 'jquery'],
    function (dispatcher, logger) { "use strict"
        var ViewportView = (function () { // Start of Constructor

            function ViewportView () {

                var cardstock;
                var viewport;

                var xoff = 0;
                var yoff = 0;
                var zidx = 0;

                function addCard() {
                    var card = cardstock.html();
                    yoff = yoff + 2;
                    xoff = xoff + 5;
                    zidx = zidx + 1;
                    var cid = 'card' + zidx;

                    viewport.append(card);
                    $('#TBD').attr('id', cid);
                    cid = '#' + cid;

                    $(cid).attr('margin-top', '' + yoff + 'em');
                    $(cid).attr('margin-left', '' + xoff + 'em');
                    $(cid).attr('z-index', zidx);
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

                    alert("Made it to ViewportView init()");

                    cardstock = $('#cardstock').detach();
                    viewport = $('#viewport');

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
