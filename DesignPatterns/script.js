//  -------- Module Patterns ---------

// let Bank = (function () {

//     let Balance = 100000;

//     function checkBalance() {
//         console.log(Balance);

//     }
//     function setBalance(val) {
//         Balance = val;

//     }

//     function withdraw(val) {
//         if (val <= Balance) {
//             Balance -= val;
//             console.log(Balance);

//         }
//     }

// Module Patterns
// return {
//     checkBalance,
//     setBalance,
//     withdraw,
// };

// ------- Revealing Module Pattern ------
//     return {
//         check:checkBalance,
//         set:setBalance,
//         wid:withdraw,
//     }
// })();

// Bank.checkBalance();
// Bank.withdraw(50000);
// Bank.checkBalance();

// Bank.check()
// Bank.set(100000)
// Bank.check()



//    --------=> Factory Function Pattern <=--------

function Factory(name, price) {

    let stock = 20;
    return {
        name,
        price,
        checkStock(){
            console.log(stock);
            
        },
        buy(qty) {
            if (qty < stock) {
                stock -= qty;
                console.log(`${qty} Booked , ${stock} Pices left `);

            }
            else {
                console.log(`only ${stock} Pices in stock`);

            }
        },
        refil(qty) {
            stock += qty;
            console.log(`${stock} pices in stock`);

        }
    }

}

let mobile = Factory("iphone", 80000);
let Headphones=Factory("HeadPhone",5000);

 