// compiled solidity source code using https://chriseth.github.io/cpp-ethereum/
var code = "602a60805260206080f300";
web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
 if (!err)
   console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
});