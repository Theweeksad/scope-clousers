var a = 'Hello';

function hello() {
    let b = 'Hello World';
    const c = 'Hello world!';
    if (true) {
        let d = 'Hello world !!';
        debugger
    }
}

hello();

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins+= coins;
        console.log(`MonetBOx: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
