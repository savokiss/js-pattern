// P267 8.2.4 装饰器模式
var obj = {
    doSomething: function(){
        console.log('sure, asap');
    },
    // ...
};
obj = obj.getDecorator('deco1');
obj = obj.getDecorator('decol3');
obj = obj.getDecorator('deco5');
obj.doSomething();

// 8.2.4.1 装饰一棵圣诞树
var tree = {};
tree.decorate = function(){
    alert('Make sure the tree won\'t fall');
};
tree.getDecorator = function(deco){
    tree[deco].prototype = this;
    return new tree[deco];
};