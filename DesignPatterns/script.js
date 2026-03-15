//  -------- Module Patterns ---------

let Bank = (function () {

    let Balance = 100000;

    function checkBalance() {
        console.log(Balance);

    }
    function setBalance(val) {
        Balance = val;

    }
 
    function withdraw(val) {
        if (val <= Balance) {
            Balance -= val;
            console.log(Balance);

        }
    }

// Module Patterns
    // return {
    //     checkBalance,
    //     setBalance,
    //     withdraw,
    // };

    // ------- Revealing Module Pattern ------
    return {
        check:checkBalance,
        set:setBalance,
        wid:withdraw,
    }
})();

// Bank.checkBalance();
// Bank.withdraw(50000);
// Bank.checkBalance();

Bank.check()
Bank.set(100000)
Bank.check()