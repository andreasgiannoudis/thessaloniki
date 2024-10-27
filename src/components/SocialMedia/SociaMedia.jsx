import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
    </div>
  );
}

export default SocialMedia;
