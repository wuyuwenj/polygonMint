// Import Moralis SDK
import Moralis from "moralis";

// Function to fetch NFT metadata
async function fetchNFTMetadata() {
    try {
    // Start Moralis with your API key
    await Moralis.start({
      apiKey:
        process.env.MORALIS_API_KEY
    });
  

    const response1 = await Moralis.EvmApi.nft.getNFTCollectionStats({
    "chain": "0x13882",
    "address": "0x3b87c61180B8494fC0e59BD07bb475AE89E1A0b2"
  });
    console.log(response1.raw);
    const total_tokens=response1.raw.total_tokens
    console.log(response1.raw.total_tokens);

    const tokenIds = [];
    for (let i = 0; i < 3; i++) { 
      tokenIds.push(total_tokens- i);
    }

    const tokens = tokenIds.map(tokenId => ({
      "tokenAddress": "0x3b87c61180B8494fC0e59BD07bb475AE89E1A0b2", // NFT contract address
      "tokenId": tokenId.toString(), // Convert tokenId to string
    }))
    console.log(tokens);
    const response = await Moralis.EvmApi.nft.getMultipleNFTs({
      "chain": "0x13882", // Ethereum mainnet
      "tokens": tokens,
    });

    // Log the metadata for each token
    console.log(response.raw);
  
  } catch (e) {
    // Handle any errors
    console.error(e);
  }
}

// Call the function to test it
fetchNFTMetadata();
