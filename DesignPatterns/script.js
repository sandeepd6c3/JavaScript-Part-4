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

    return {
        checkBalance,
        setBalance,
        withdraw,
    };
})();

Bank.checkBalance();
Bank.withdraw(50000);
Bank.checkBalance();