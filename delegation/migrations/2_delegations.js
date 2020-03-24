var Delegation = artifacts.require("Delegation");
var Delegate = artifacts.require("Delegate");
module.exports = function(deployer) {
    deployer.deploy(Delegate,"0x68756ad5e1039e4f3b895cfaa16a3a79a5a73c59").then(function(){
        return deployer.deploy(Delegation, Delegate.address)
    });
};