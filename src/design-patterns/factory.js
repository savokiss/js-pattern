
// 8.2.3 工厂模式
var MYAPP = {};
MYAPP.dom = {};
MYAPP.dom.Text = function(){
    this.insert = function(where){
        var txt = document.createTextNode(this.url);
        where.appendChild(txt);
    };
};

MYAPP.dom.Link = function(){
    this.insert = function(where){
        var link = document.createElement('a');
        link.href = this.url;
        link.appendChild(document.createTextNode(this.url));
        where.appendChild(link);
    };
};

MYAPP.dom.Image = function(){
    this.insert = function(where){
        var img = document.createElement('img');
        img.src = this.url;
        where.appendChild(img);
    };
};

// usage
var o = new MYAPP.dom.Image();
o.url = 'http://images.packtpub.com/images/PacktLogoSmall.png';
o.insert(document.body);
var o = new MYAPP.dom.Text();
o.url = 'http://images.packtpub.com/images/PacktLogoSmall.png';
o.insert(document.body);
var o = new MYAPP.dom.Link();
o.url = 'http://images.packtpub.com/iamges/PacktLogoSmall.png';
o.insert(document.body);

// factory mode
MYAPP.dom.factory = function(type){
    return new MYAPP.dom[type];
}

var o = MYAPP.dom.factory(type);
o.url = 'http://...';
o.insert();