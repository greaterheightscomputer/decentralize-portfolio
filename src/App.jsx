import { useState } from 'react';
import Web3 from 'web3';
import ABI from './components/Wallet/ABI.json';
import Hero from './components/hero/Hero';
// import Wallet from './components/Wallet/Wallet';
import Handles from './components/handles/Handles';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import './index.css';
import './components/Wallet/Wallet.css';
function App() {
  const [connected, setConnected] = useState(true);
  const [state, setState] = useState({ web3: null, contract: null });
  const isAndroid = /android/i.test(navigator.userAgent); //for android mobile phone only

  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum); //window.ethereum object is an object that is avaliable on our web browser
      await window.ethereum.request({ method: 'eth_requestAccounts' }); //its will open MetaMask
      const contract = new web3.eth.Contract(
        ABI,
        '0x008340c4dc6257be29051bc61cb5238f901ada46'
      ); //create instance of our smart contract in order to interact with the contract
      setConnected(false); //once connected to metaMask set connected to false in order to deactive connect button on the browser
      // console.log(web3);
      setState({ web3: web3, contract: contract });
    } catch (e) {
      alert('Please Install Metamask');
    }
  };
  // console.log(state);

  return (
    <div>
      {/*<Wallet saveState={saveState} />
        <Wallet init={init} />
    */}

      <div className="header">
        {
          //- let build the dapp like this
          //C:\computerd\Decentralize-Portfolio\startercode\client> npm run build
          //MetaMask deep link generator
          //- to make metamask available on your dapp while on mobile screen go to https://metamask.github.io/metamask-deeplinks/
          //- click on Open a dapp button
          //- enter your dApp url inside the input field and click on Generate URL

          //- let deploy the dapp to github
          //*  C:\computerd\Decentralize-Portfolio\startercode\client> git init
          //*  C:\computerd\Decentralize-Portfolio\startercode\client> git add .
          //*  C:\computerd\Decentralize-Portfolio\startercode\client> git commit -m "decentralize portfolio"
          //*  C:\computerd\Decentralize-Portfolio\startercode\client> git branch -M main
          //*  C:\computerd\Decentralize-Portfolio\startercode\client> git remote add origin https://github.com/greaterheightscomputer/decentralize-portfolio.git
          //*  C:\computerd\Decentralize-Portfolio\startercode\client> git push -u origin main
          //let deploy the dapp to Net

          isAndroid && (
            <button className="connectBTN">
              <a href="https://metamask.app.link/dapp/sriche.netlify.app/">
                Click For Mobile
              </a>
            </button>
          )
        }
        <button className="connectBTN" onClick={init} disabled={!connected}>
          {connected ? 'Connect Metamask' : 'Connected'}
        </button>
      </div>
      <Hero state={state} />
      <Handles />
      <Projects state={state} />
      <Skills />
      <Experience state={state} />
      <Contact state={state} />
      <Handles />
    </div>
  );
}

export default App;
