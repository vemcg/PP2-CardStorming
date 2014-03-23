define(['viewport/ViewportView', 'jquery'],
function (viewport) { "use strict"
    var AppConstructor = (function () {

        function AppInstance () {

            function init() {
                viewport.init();
            }

            // Public Interface
            this.init = init;
        }   /// End of AppInstance
        return AppInstance;
    } ());
    var app =  new AppConstructor();
    return app;
});