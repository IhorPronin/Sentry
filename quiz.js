// async example
function hi(count){
    console.log(`Hello async ${count}`);
}
setTimeout(() => hi(2), 5000);
setTimeout(() => hi(1), 0);
console.log('Hello sync');

// scope example
var a = 1;
function scope(){
    a = 2
    function scope1(){
        a = 3
    }
}
scope()
console.log(a)

// scope advanced

function closure(){
    var c = 1
    console.log('I am here')
    return function (b){
        console.log(`I am here ${c} ${b}`)
    }
}

var closureFunc = closure();
closureFunc(2)
