            await web3.eth.getBlockNumber(function (error, result) {
                blockNumber = result;
            })

            await web3.eth.getBlock(blockNumber-2, false, function (error, result) {
                blockHash = result['hash'];
                console.log("BH-2 web3: " + blockHash)
                console.log("BH-2 web3 base10: " + parseInt(blockHash, 16));
                coin_side = Math.floor(parseInt(blockHash, 16) / FACTOR) != 0;
            });

            await web3.eth.getBlock(blockNumber-1, false, function (error, result) {
                blockHash = result['hash'];
                console.log("BH-1 web3: " + blockHash)
                console.log("BH-1 web3 base10: " + parseInt(blockHash, 16));
                coin_side = Math.floor(parseInt(blockHash, 16) / FACTOR) != 0;
            });
            
            //Web3 BH0 == Contract BH-1
            await web3.eth.getBlock(blockNumber, false, function (error, result) {
                blockHash = result['hash'];
                console.log("BH web3: " + blockHash)
                console.log("BH web3 base10: " + parseInt(blockHash, 16));
                coin_side = Math.floor(parseInt(blockHash, 16) / FACTOR) != 0;
            });