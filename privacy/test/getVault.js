module.exports = function (callback) {
web3.eth.getStorageAt('0xef2a96484ffbf2b8f5e661afcd3881b2c0a0038e', 0,
  function (err, count) {
    console.log("Current count: " + count);
  });
}
// Output:
// Current count: 6