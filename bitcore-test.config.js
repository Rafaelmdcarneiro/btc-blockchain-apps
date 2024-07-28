const testConfig = require('./bitcore-test.config.json');

const BITCOIN_HOST = 'bitcoin';
const GETH_HOST = 'geth';
const ERIGON_HOST = 'erigon';
const RIPPLED_HOST = 'rippled';

const { chains } = testConfig.bitcoreNode;

if (chains) {
  // BTC
  if (chains.BTC && chains.BTC.regtest) {
    const btcRegtest = chains.BTC.regtest;
    if (btcRegtest.trustedPeers && btcRegtest.trustedPeers[0]) {
      btcRegtest.trustedPeers[0].host = BITCOIN_HOST;
    }
    if (btcRegtest.rpc) {
      btcRegtest.rpc.host = BITCOIN_HOST;
    }
  }

  // ETH 
  if (chains.ETH && chains.ETH.regtest) {
    const ethRegtest = chains.ETH.regtest;
    if (ethRegtest.trustedPeers && ethRegtest.trustedPeers[0]) {
      ethRegtest.trustedPeers[0].host = GETH_HOST;
      ethRegtest.trustedPeers[0].port = 30303;
    }
    if (ethRegtest.providers) {
      ethRegtest.providers[0].host = ERIGON_HOST;
      ethRegtest.providers[0].port = 8545;
      if (ethRegtest.providers[1]) {
        ethRegtest.providers[1].host = GETH_HOST;
        ethRegtest.providers[1].port = 8546;
      }
    }
  }
  
  if (chains.MATIC && chains.MATIC.regtest) {
    const maticRegtest = chains.MATIC.regtest;
    if (maticRegtest.trustedPeers && maticRegtest.trustedPeers[0]) {
      maticRegtest.trustedPeers[0].host = GETH_HOST;
      maticRegtest.trustedPeers[0].port = 30303;
    }
    if (maticRegtest.providers && maticRegtest.providers[0]) {
      maticRegtest.providers[0].host = GETH_HOST;
      maticRegtest.providers[0].port = 8546;
    }
  }
  
  if (chains.XRP && chains.XRP.testnet) {
    const xrpTestnet = chains.XRP.testnet;
    if (xrpTestnet.provider) {
      xrpTestnet.provider.host = RIPPLED_HOST;
      xrpTestnet.provider.port = 6006;
      xrpTestnet.provider.dataHost = RIPPLED_HOST;
    }
  }
}

module.exports = testConfig;

