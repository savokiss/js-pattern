var MYAPP = {};
MYAPP.dom = function(){
    // initialization code
    function _private(){
        // ...body
    }
    return {
        getStyle: function(el, prop){
            console.log('getStyle');
            _private();
        },
        setStyle: function(el, prop, value){
            console.log('setStyle');
        }
    }
}();