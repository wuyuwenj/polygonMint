const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const nftAddress = "0xYourDeployedNFTContractAddress";  // Replace with the deployed contract address

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = MyNFT.attach(nftAddress);

  console.log("Minting a new NFT...");
  const tx = await nft.mint(owner.address);
  await tx.wait();

  console.log("NFT minted successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
