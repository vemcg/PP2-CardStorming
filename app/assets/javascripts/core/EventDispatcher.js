define(['core/Log'],
    function (logger) { "use strict"
        var EventDispatcherConstructor;
        EventDispatcherConstructor = (function () {

            function EventDispatcherInstance() {

                var LOG_LEVEL = 1;
                var events = {};

                function log (level, message) {
                    if (LOG_LEVEL <== level) {
                        logger.log (message);
                    }
                }

                function indexOf(list, item) {
                    for (var i = 0; i < list.length; i++) {
                        if (list[i] === item) return i;
                    }
                    return -1;
                }
                function remove(list, item) {
                    var i = indexOf(list, item);
                    if (-1 < i) {
                        list.splice(i, 1);
                    }
                }
                function append(list, item) {
                    list.push(item);
                }
                function on(eventName, callback) {
                    if (!events.hasOwnProperty(eventName)) {
                        events[eventName] = [];
                    }
                    remove(events[eventName], callback);   // Callback can only be listed once ...
                    append(events[eventName], callback);   // ... at the end of the list.
                }

                function off(eventName, callback) {
                    if (!events.hasOwnProperty(eventName)) {
                        events[eventName] = [];
                    }
                    remove(events[eventName], callback);   // Remove callback if present
                }

                function fire(eventName, eventInfo) {
                    var i, n, list;

                    if (event.hasOwnProperty(eventName)) {
                        list = events[eventName];
                        n = list.length;

                        if (0 < n) {
                            log(1, 'EVENTS: Firing ' + eventName + ' (' + n + ' callbacks)');
                        }

                        for (i = 0; i < n; i++) {
                            list[i](eventInfo);   // Call callbacks
                        }
                    } else {
                        log(1, 'EVENTS: No callbacks for ' + eventName);
                    }
                }

                // Public Interface
                this.on = on;
                this.off = off;
                this.fire = fire;
            }   // End of Instance
            return EventDispatcherInstance;
        }()); // End of Class

        return new EventDispatcherInstance();
    });