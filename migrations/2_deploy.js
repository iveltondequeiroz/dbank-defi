const Token = artifacts.require("Token");
const dBank = artifacts.require("dBank");

module.exports = async function(deployer) {
	//deploy Token
	await deployer.deploy(Token);

	const token = await Token.deployed();
	
	await deployer.deploy(dBank, token.address);

	const bank = await dBank.deployed();

	await token.passMinterRole(bank.address);
};