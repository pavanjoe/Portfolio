import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
library.add(faLinkedin, faGithub, faTwitter); 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className='tag' href="https://www.linkedin.com/in/pavan-joe-2064a8217/">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a className='tag' href="https://github.com/pavanjoe">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
      <p style={{color:"black"}}>&copy; 2023 My Portfolio</p>
    </footer>
  );
}

export default Footer;
