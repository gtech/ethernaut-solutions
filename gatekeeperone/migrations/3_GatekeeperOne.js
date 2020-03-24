var GatekeeperOne = artifacts.require("./GatekeeperOne.sol");

module.exports = function(deployer) {
  deployer.deploy(GatekeeperOne);
};
