define(['banner/BannerView', 'palette/PaletteView', 'projectView/ProjectView', 'jquery'],
function (banner, palette, projectView) { "use strict"
    var App = (function () {

        function App () {

            function init() {
                banner.init();
                palette.init();
                projectView.init();
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
