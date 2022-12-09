// esta no funciona
// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: ${saveCoins}`);
// }

// moneyBox(5000);
// moneyBox(5000);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(15);
myMoneyBox(30);

const moneyBoxAna = moneyBox();
moneyBoxAna(20);
moneyBoxAna(20);
moneyBoxAna(20);
