var HDWalletProvider = require("truffle-hdwallet-provider")

const MNEMONIC = 'merit major solve meadow dentist science arrange pony defense essay same cigar'
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider:function() {
        return new HDWalletProvider(MNEMONIC,"https://rinkeby.infura.io/v3/bdc1e885c464453bb74b33e658b142d1" )
      }, 
      network_id: 3, 
      gas: 4000000 
    }
  },
};