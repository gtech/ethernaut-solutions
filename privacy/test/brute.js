module.exports = function (callback) {

console.log("fuck node");

var answer = '0xed2a0ca74e236c332625ad7f4db75b63d2a2ee7e3fe52c2c93c8dbc4e06906d1';

for (var num = 0,  guess = ""; guess != answer; num++){
    guess = web3.utils.soliditySha3(
        web3.utils.padLeft(num,'4'));
}
console.log(guess);
console.log(web3.utils.padLeft(num,'4'));
console.log(num);
}
