// 私有属性和方法 P257

var MYAPP = {};
MYAPP.dom = {};
MYAPP.dom.Button = function(text, conf) {
  var styles = {
    font: 'Verdana',
    border: '1px solid black',
    color: 'black',
    background: 'grey'
  };

  function setStyles() {
    for (var i in styles) {
      b.style[i] = conf[i] || styles[i];
    }
  }
  conf = conf || {};
  var b = document.createElement('input');
  b.type = conf['type'] || 'submit';
  b.value = text;
  setStyle();
  return b;
}