// async example
function hi(count){
    console.log(`Hello async ${count}`);
}
setTimeout(() => hi(2), 5000);
setTimeout(() => hi(1), 0);
console.log('Hello sync');
