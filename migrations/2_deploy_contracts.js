const KitchenSkreppies = artifacts.require("./KitchenSkreppies.sol")

module.exports = function(deployer) {
    deployer.deploy(KitchenSkreppies);
};
