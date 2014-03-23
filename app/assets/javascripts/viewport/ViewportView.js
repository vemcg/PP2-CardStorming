define(['core/EventDispatcher', 'core/Log', 'jquery'],
    function (dispatcher, logger) { "use strict"
        var ViewportView = (function () { // Start of Constructor

            function ViewportView () {

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
