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

// function Factory(name, price) {

//     let stock = 20;
//     return {
//         name,
//         price,
//         checkStock(){
//             console.log(stock);
            
//         },
//         buy(qty) {
//             if (qty < stock) {
//                 stock -= qty;
//                 console.log(`${qty} Booked , ${stock} Pices left `);

//             }
//             else {
//                 console.log(`only ${stock} Pices in stock`);

//             }
//         },
//         refil(qty) {
//             stock += qty;
//             console.log(`${stock} pices in stock`);

//         }
//     }

// }

// let mobile = Factory("iphone", 80000);
// let Headphones=Factory("HeadPhone",5000);

//  ------=> Observer Pattern <=------

class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name}, You have subscribed the channel.`);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`${user}, You have un-subscribed the channel.`);
  }

  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

let sheryians = new YoutubeChannel();
let user1 = new User("Harsh");
let user2 = new User("Amit");

sheryians.unsubscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("new video is live on the channel..");
```

// ---

// ## Output kya aayega?
// ```
// Harsh, Harsh You have subscribed the channel.
// Amit, Amit You have subscribed the channel.
// Harsh, new video is live on the channel..
// Amit, new video is live on the channel..