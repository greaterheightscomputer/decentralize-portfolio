import { useState, useEffect } from 'react';
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from 'reactstrap';
import './Projects.css';

const Projects = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState('');

  useEffect(() => {
    const { contract } = state;

    const projectDetails = async () => {
      const projects = await contract.methods.allProjects().call();
      //   console.log(projects);
      setProjects(projects);
    };
    contract && projectDetails();
  }, [state]);

  const donateEth = async (e) => {
    e.preventDefault();
    try {
      const { web3, contract } = state;
      //   console.log(web3);
      let eth = document.querySelector('#eth').value;
      //   console.log(eth);
      const weiValue = web3.utils.toWei(eth, 'ether'); //convert ether to wei
      //   console.log(weiValue);
      const accounts = await web3.eth.getAccounts(); //get the connected account //its return an array of account
      //   console.log(accounts);
      await contract.methods
        .donate()
        .send({ from: accounts[0], value: weiValue, gas: 480000 }); //send() is use to change the state of the blockchain
      e.target.elements.ethDonate.value = '';
      alert('Transaction Successful');
    } catch (error) {
      console.log(error.message);
      alert('Transaction is not successful');
    }
  };

  return (
    <section className="project-section">
      <h1 className="title">Projects </h1>
      <div className="card-wrapper">
        {projects != '' &&
          projects.map((project) => {
            const githubLink = `https://github.com/greaterheightscomputer/${project.githubLink}`;
            return (
              <a
                href={githubLink}
                className="project-card"
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
              >
                <div className="card-img">
                  <img
                    src={`https://gateway.pinata.cloud/ipfs/${project.image}`}
                    alt="image"
                  />
                </div>
                <div className="card-text">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            );
          })}
      </div>
      {/*  =========popup bootstrap==========  */}

      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Enter the ETH you want to donate!
        </ModalHeader>
        <ModalBody>
          <form onSubmit={donateEth}>
            <Row>
              <input id="eth" type="text" name="ethDonate" />
              <Button className="mt-4">Send</Button>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      {/*  =========popup bootstrap end==========  */}
      <p className="donate" onClick={() => setModal(true)}>
        Liked the dummyValue's ? Consider donating Eth's{' '}
        <FaDonate className="icon" />
      </p>
    </section>
  );
};

export default Projects;
