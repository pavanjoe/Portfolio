import { useEffect, useState } from 'react';
import './Header.css';
import image from './images/mountain.png';

function Header() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi! I'm Pavan :)"; 
  const typingSpeed = 200; 
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="header">
      <h1>{typedText}</h1>
      <h2>&lt; Welcome to my Portfolio Website! &gt;</h2>
      <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default Header;
