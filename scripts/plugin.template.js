/*
* Vanilla JS plugin Template
*
* */
(function ( window, document) {

    "use strict";
    var pluginName = "plugin";
    function Plugin( element, options ){

        var defaults = {
            setting1: "",
            setting2: ""
        };

        this.element	= element;
        this.options	= { defaults, options};
        this._name		= pluginName;

        this._init();

    };

    Plugin.prototype._init = function(){
            let _self = this;
    }
        // Public  method
    Plugin.prototype.something =function(str){
            let _self = this;
    }
        // Private method
    Plugin.prototype._something =function(){
            let _self = this;
    }


    window.prototype.Plugin[pluginName] = function ( options ) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                let element = document.querySelector(this);
                if (!element.dataset('IDEA_' + pluginName)) {
                    element.dataset('IDEA_' + pluginName, new Plugin( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;
            this.each(function () {
                let element = document.querySelector(this);
                let instance = element.dataset('IDEA_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
                if (options === 'destroy') {
                    element.dataset('IDEA_' + pluginName, null);
                }
            });
            return returns !== undefined ? returns : this;
        }
    };

})(window,document);
