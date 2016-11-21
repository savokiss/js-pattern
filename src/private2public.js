var MYAPP = {};
MYAPP.dom = (function(){
    var _setStyle = function(el, prop, value){
        console.log('setStyle');
    };
    var _getStyle = function(el, prop){
        console.log('getStyle');
    };
    return {
        setStyle: _setStyle,
        getStyle: _getStyle,
        yetAnother: _setStyle
    }
})();