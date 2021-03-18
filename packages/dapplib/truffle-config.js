require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner neck fringe speak guard render remain exchange gloom clip bone skull'; 
let testAccounts = [
"0x7b8d5455219545ef9262f16f700bd8e4ed8126b331a591e7fd11d9c51952e1c3",
"0x6d7bb3cf10e54237ce9d5f36b75de9459188e9060872efda860751fc1f7541a1",
"0x86804b0f72e931f29df584be6ba0e777e43eafd3e5c54373299a5b43cb4a5a00",
"0xf261aaba27af8b1ed661746781148e99ca1cf7fedb4915c4e0e0ce451ad57bf9",
"0x0d69effc7036944aeda4da215a04fe11c9743f252f377e0fe10bc29c67dc748b",
"0x766133e94af02438c9d231f9a8e80f8cdee636a4df1054ceae5b76c541924260",
"0x2cd72f5f611c188b2a9c44f87df3d021ebee9ccc6017c89d6009917bf5cf8a3f",
"0x1cf26f7fed477c0df2e928fcf5cfed39396d493545f2e7e56287722ba4247a58",
"0xe28b07604eda0299e1cb5c205b1b4ec06de966153827971a02668f1ca35b6059",
"0x84b7441a7a8e90c9f2857d1c08ab466321b7b4160bdeea9d10c31cc111941cef"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

