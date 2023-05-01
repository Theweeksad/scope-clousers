const helloWorld = () => {
    const hello = 'Hello Worl';
    console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "i am global";

const funtionScope = () => {
    var scope = "i am just a local";
    const func = () => {
        return scope
    }
    console.log(func());
};

funtionScope();
console.log(scope);