// 配置对象 P255

// a constructor that creates buttons
var MYAPP = {};
MYAPP.dom = {};
MYAPP.dom.Button = function(text, type) {
  var b = document.createElement('input');
  b.type = type || 'submit';
  b.value = text;
  return b;
}

// better
MYAPP.dom.Button = function(text, conf) {
  var type = conf.type || 'submit';
  var font = conf.font || 'Verdana';
  // ...
}

// eg.
var config = {
  font: 'Arial, Verdana, sans-serif',
  color: 'white'
};
new MYAPP.dom.Button('puuush', config);

// eg2.
document.body.appendChild(
  new MYAPP.dom.Button('dude', { color: 'red' })
);