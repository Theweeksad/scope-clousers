var hello = 'hello';
var hello = 'Hello +';
let world = 'Hello world'
const helloWorld= 'Hello world'

const anotherFuntion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFuntion();

const helloWorld = () => {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar)

const anotherFuntion = () => {
    var localVar = globalVar = 'im global'
}