import './Handles.css';
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiTwotoneAlert,
} from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className="socials">
      <a
        href="https://www.linkedin.com/in/khadijat-adebara"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="icon" />
      </a>
      <a
        href=" https://myportfolio-greaterheightscomputer.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiTwotoneAlert className="icon" />
      </a>
      <a
        href="https://github.com/greaterheightscomputer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="icon" />
      </a>
    </section>
  );
};

export default Handles;
