// import React from 'react';
// import { useWeb3 } from 'web3-react';

// // component for connecting to an Ethereum wallet
// const WalletConnect = () => {
//   // hook to get the current Ethereum provider and account
//   const { web3, account, setConnector } = useWeb3();

//   // function to connect to MetaMask
//   const connectToMetaMask = async () => {
//     // import the MetaMask connector
//     const MetaMask = new Web3.providers.Web3Provider(window.ethereum);
//     // set the connector
//     await setConnector('MetaMask', MetaMask);
//   };

//   // function to connect to WalletConnect
//   const connectToWalletConnect = async () => {
//     // import the WalletConnect connector
//     const WalletConnect = new WalletConnectProvider({
//       infuraId: 'YOUR_INFURA_ID',
//     });
//     // set the connector
//     await setConnector('WalletConnect', WalletConnect);
//   };

//   // function to connect to Trust Wallet
//   const connectToTrustWallet = async () => {
//     // import the Trust Wallet connector
//     const TrustWallet = new Web3.providers.Web3Provider(window.ethereum);
//     // set the connector
//     await setConnector('TrustWallet', TrustWallet);
//   };

//   // render the buttons to connect to the different wallets
//   return (
//     <div>
//       <button onClick={connectToMetaMask}>Connect to MetaMask</button>
//       <button onClick={connectToWalletConnect}>Connect to WalletConnect</button>
//       <button onClick={connectToTrustWallet}>Connect to Trust Wallet</button>
//     </div>
//   );
// };

// export default WalletConnect;
