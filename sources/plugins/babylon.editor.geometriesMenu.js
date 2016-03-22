var BABYLON;
(function (BABYLON) {
    var EDITOR;
    (function (EDITOR) {
        var GeometriesMenuPlugin = (function () {
            /**
            * Constructor
            * @param toolbar: the main toolbar instance
            */
            function GeometriesMenuPlugin(mainToolbar) {
                // Public members
                this.menuID = "GEOMETRIES-MENU";
                this._createCubeID = "CREATE-CUBE";
                this._createSphereID = "CREATE-SPHERE";
                var toolbar = mainToolbar.toolbar;
                this._core = mainToolbar.core;
                // Create menu
                var menu = toolbar.createMenu("menu", this.menuID, "Geometry", "icon-bounding-box");
                // Create items
                toolbar.createMenuItem(menu, "button", this._createCubeID, "Add Cube", "icon-box-mesh");
                toolbar.addBreak(menu);
                toolbar.createMenuItem(menu, "button", this._createSphereID, "Add Sphere", "icon-sphere-mesh");
                // Etc.
            }
            /**
            * Called when a menu item is selected by the user
            * Returns true if a menu of the plugin was selected, false if no one selected
            */
            GeometriesMenuPlugin.prototype.onMenuItemSelected = function (selected) {
                // 
                switch (selected) {
                    case this._createCubeID:
                        EDITOR.SceneFactory.AddBoxMesh(this._core);
                        break;
                    case this._createSphereID:
                        EDITOR.SceneFactory.AddSphereMesh(this._core);
                        break;
                    default: break;
                }
            };
            return GeometriesMenuPlugin;
        })();
        EDITOR.GeometriesMenuPlugin = GeometriesMenuPlugin;
        // Finally, register the plugin using the plugin manager
        EDITOR.PluginManager.RegisterMainToolbarPlugin(GeometriesMenuPlugin);
    })(EDITOR = BABYLON.EDITOR || (BABYLON.EDITOR = {}));
})(BABYLON || (BABYLON = {}));