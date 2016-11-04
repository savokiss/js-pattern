var APP = {};

APP.dom = {};

APP.dom.Element = function (type, prop) {
  var tmp = document.createElement(type);
  for (var i in prop) {
    tmp.setAttribute(i, prop[i]);
  }
  return tmp;
};

APP.dom.Text = function (txt) {
  return document.createTextNode(txt);
};

// eg
var el1 = new APP.dom.Element('a', {
  href: 'http://phpied.com'
});
var el2 = new APP.dom.Text('click me');
el1.appendChild(el2);
document.body.appendChild(el1);


// namespace
APP.namespace('dom.style');
// equals
APP.dom = {};
APP.dom.style = {};

// code
APP.namespace = function (name) {
  var parts = name.split('.');
  var current = APP;
  for (var i in parts) {
    if (!current[parts[i]]) {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
};