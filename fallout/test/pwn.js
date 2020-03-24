module.exports = function(callback) {
    const Fallout = artifacts.require("Fallout");
    let own = "0xbBa4c28CF2e98c454314E25EE02F8f900e10B75F";
    let atk = "0xf7926a437Ad0412bb1e4cD950EfA65a123b3E0f1";
    let account_three = "0x60830581AB24E44C3577e1614604EB23c70E5ef5";

    let meta;
    function transact(contractFunction,params){
        Fallout.deployed().then(function(instance){
            meta = instance;
            return meta[contractFunction](...params);
        }).then(function(result) {
            console.log(result)
        }).catch(function(e) {
            console.log("error" + e);
            //error
        })
    }
   transact("allocate",[{from: own, value: web3.toWei(5,'ether')}])
   // transact("allocatorBalance",[atk, {from: own}]);
    transact("collectAllocations",[{from: atk}]);
    //transact("Fal1out",[{from: atk, value: 1}]);
    //transact("allocatorBalance",[own, {from: own}]);
}