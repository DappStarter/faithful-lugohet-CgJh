require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember modify guess kitten bone truck'; 
let testAccounts = [
"0x7ea136459f429ffb21c3c56d17ea02e7e876305a6b7544ec45759af4a5bb1ff3",
"0xea5276e97a3ac55f0b7e6b69684e1ca378cb4a6d595701000b6bf522ca6f7495",
"0xfb1ee68e57d783e9bab6129547ab9749e9239133ab20dd2ae3c630605171ba0f",
"0xae3844f10e59e16da329f7022cba2db06bc3d4e151338117fa48276f54d843ee",
"0x153ffa2e4bf2954b82b2ace3b1347d2bd230107b8197ae07b053c15b941e3963",
"0x4c1744b5448a2a6213f5a3897a3365a3aea52e51ec527abdce802b2d725361a3",
"0x68ae50c5540931be6e7029fd580888afed5e970f8068dbcb2803dff850bbcc57",
"0xe2af0e93e59d472218f7df3ca23fd13124b85df2623a11bc05f61da142b45c71",
"0x886815892f596b9d1a84cda3fba7c077aa7cbda02170086c06d93ad2d703d914",
"0x2bbff24d2c95bdd8b2d19fd236e4a19ec03d77e23777da9f13a7a16754b3bdd6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

