const miGlobal = 0;
// Crearemos una funcion que dentro tenga otra funcion y que va a tener otra funcion.

function miFuncion() {
    const miNumero = 1;
    console.log(miGlobal);

    function parent() { // Funcion interna aca ya tenemos un closure
        const inner = 2;
        console.log(miNumero, miGlobal);

        function hijo() {
            console.log(inner, miNumero, miGlobal);
        }

        return hijo();
    }

    return parent();
}

miFuncion();


// ejemplo

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
}
    
let myMoneyBox = moneyBox()
myMoneyBox(4)
myMoneyBox(10)
myMoneyBox(6)



