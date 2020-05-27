// jQuery Plugin Template
(function ( window, document) {

    "use strict";
    var pluginName = "PLUGIN_NAME";

    function Plugin( element, options ){

        var defaults = {
            setting1: "",
            setting2: ""
        };

        this.element	= element;
        this.options	= jQuery.extend( {}, defaults, options) ;
        this._name		= pluginName;

        this._init();

    };

    jQuery.extend( Plugin.prototype, {

        _init: function(){
            var _self = this;

        },
        // Public  method
        someting: function(str){
            var _self = this;

        },
        // Private method
        _somthing: function(){
            var _self = this;


        }

    });

    window.fn[pluginName] = function ( options ) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!jQuery.data(this, 'IDEA_' + pluginName)) {
                    jQuery.data(this, 'IDEA_' + pluginName, new Plugin( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;
            this.each(function () {
                var instance = jQuery.data(this, 'IDEA_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
                if (options === 'destroy') {
                    jQuery.data(this, 'IDEA_' + pluginName, null);
                }
            });
            return returns !== undefined ? returns : this;
        }
    };

})(window,document);
