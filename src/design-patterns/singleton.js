// P263 8.2.1
// singleton 1
var single = {};

// singleton 2

// expected result:
var my_log = new Logger();
my_log.log('some event');
// ... 1000 lines of code later ...
var other_log = new Logger();
other_log.log('some new event');
alert(other_log === my_log); // true

// 8.2.2.1 全局变量
function Logger(){
    if(typeof global_log === 'undefined'){
        global_log = this;
    }
    return global_log;
}

var a = new Logger();
var b = new Logger();
alert(a === b); // true

// 8.2.2.2 构造器属性
function Logger(){
    if(typeof Logger.single_instance === 'undefined'){
        Logger.single_instance = this;
    }
    return Logger.single_instance;
}

// 8.2.2.3 使用私有属性