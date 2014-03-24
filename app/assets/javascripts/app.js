define(['banner/BannerView', 'palette/PaletteView', 'viewport/ViewportView', 'jquery'],
function (banner, palette, viewport) { "use strict"
    var App = (function () {

        function App () {

            function init() {
                banner.init();
                palette.init();
                viewport.init();
            }

            // Public Interface
            this.init = init;
        }   // End of Instance
        return App;
    } ()); // End of Class

    // Choose either:
    return new App(); // Returns an instance of App (a singleton)
    // return App; // Returns App (a Constructor for multiple instances)
});