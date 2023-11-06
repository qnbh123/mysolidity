require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
networks: {
    scroll: {
      url: "https://1rpc.io/scroll" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
	 etherscan: {
    apiKey: {
      scroll: 'your apikey',
    },
    customChains: [
      {
        network: 'scroll',
        chainId: 534352,
        urls: {
          apiURL: 'https://api.scrollscan.dev/api',
          browserURL: 'https://scrollscan.com/',
        },
      },
    ],
  },
}
