define(['banner/BannerView','viewport/ViewportView', 'palette/PaletteView','jquery'],
function (banner, viewport, palette) { "use strict"
    var App = (function () {

        function App () {


            function init() {
              banner.init();
              viewport.init();
              palette.init();
              }


            // Public Interface
            this.init = init;
        }   /// End of AppInstance
        return App;
    } ());
    var app =  new App(); // Returns and instance of SampleInstance (a singleton)
    // return AppConstructor; // Returns AppConstructor (a Constructor for multiple instances)
    ////debugger;

    return app;
});
