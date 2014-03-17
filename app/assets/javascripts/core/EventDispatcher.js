define([],
    function () { "use strict"
        var EventDispatcherConstructor = (function () {

            function EventDispatcherInstance () {
                function on() {

                }
                function off() {

                }
                function fire() {

                }

                // Public Interface
                this.on = on;
                this.off = off;
                this.fire = fire;
            }   // End of Instance
            return EventDispatcherInstance;
        } ()); // End of Class

        return new EventDispatcherInstance();
    });