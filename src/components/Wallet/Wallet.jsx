// import { useState } from 'react';
// // import Web3 from 'web3';
// // import ABI from './ABI.json';
// import './Wallet.css';

// const Wallet = ({ init }) => {
//   const [connected, setConnected] = useState(true);

//   //   const { connected, init } = initState;
//   //   const init = async ({ saveState }) => {
//   //     try {
//   //       const web3 = new Web3(window.ethereum); //window.ethereum object is an object that is avaliable on our web browser
//   //       await window.ethereum.request({ method: 'eth_requestAccounts' }); //its will open MetaMask
//   //       const contract = new web3.eth.Contract(
//   //         ABI,
//   //         '0x008340c4dc6257be29051bc61cb5238f901ada46'
//   //       ); //create instance of our smart contract in order to interact with the contract
//   //       setConnected(false); //once connected to metaMask set connected to false in order to deactive connect button on the browser
//   //       console.log(contract);
//   //       saveState({ web3: web3, contract: contract });
//   //     } catch (e) {
//   //       alert('Please Install Metamask');
//   //     }
//   //   };
//   return (
//     <>
//       <div className="header">
//         {false && (
//           <button className="connectBTN">
//             <a href="https://metamask.app.link/dapp/sriche.netlify.app/">
//               Click For Mobile
//             </a>
//           </button>
//         )}
//         <button className="connectBTN" onClick={init} disabled={!connected}>
//           {connected ? 'Connect Metamask' : 'Connected'}
//         </button>
//       </div>
//     </>
//   );
// };
// export default Wallet;
