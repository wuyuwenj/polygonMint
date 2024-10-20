const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy();  // Deploy the contract
  await nft.deployed();  // Wait for the deployment transaction to be mined
  console.log("NFT deployed to:", nft.address);  // Print the contract address
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
