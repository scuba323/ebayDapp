require('dotenv').config() ;

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = process.env.INFURA_KEY;
const mnemonic = process.env.MNENOMIC;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
     network_id: 3,       // Ropsten's id
     gas: 5500000,        // Ropsten has a lower block limit than mainnet
    }
  },
compilers: {
    solc: {
      version: "0.4.13",
    },
  }
};
