import { useState, useEffect } from 'react';
import { Modal, ModalBody, Row } from 'reactstrap';
import './Hero.css';

const Hero = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState('');
  const [cid, setCid] = useState('');
  //   console.log(state);

  useEffect(() => {
    const { contract } = state;

    const description = async () => {
      const descriptionText = await contract.methods.description().call();
      //   console.log(descriptionText);
      setDescription(descriptionText);
    };
    contract && description();
  }, [state]);

  useEffect(() => {
    const { contract } = state;

    const cidOfImage = async () => {
      const cid = await contract.methods.imageLink().call();
      //   console.log(cid);
      setCid(cid);
    };
    contract && cidOfImage();
  }, [state]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <p>
            <span>Khadijat </span>
            is a Full-Stack Blockchain Developer From Nigeria.
          </p>
          <h1>I develop decentralised apps in web3 space.</h1>
          <h3>{description}</h3>
          {/*  =========popup bootstrap==========  */}

          <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalBody>
              <Row className="text-align">
                <label htmlFor="" toggle={() => setModal(!modal)}>
                  Enter your email
                </label>
              </Row>
            </ModalBody>
          </Modal>

          <button className="msg-btn" onClick={() => setModal(true)}>
            Get in Touch
          </button>
          {/*  =========popup bootstrap end==========  */}
        </div>
        <div className="hero-img">
          <div className="img-container">
            <img
              src={`https://gateway.pinata.cloud/ipfs/${cid}`}
              alt="profilePhoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
