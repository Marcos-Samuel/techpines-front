import React from 'react';
import './styles.css';
import addIcon from '../../assets/adicionarIcon.png';

interface FooterProps {
  openModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  return (
    <footer>
      <div className='div-text'>
        <h2></h2>
        <p></p>
      </div>
      <div className='container-footer'>
        <div className='div-button'>
          <button
            style={{ all: 'unset' }}
            onClick={() => openModal()}
          >
            <img
              src={addIcon}
              alt='Icon de adicionar álbum'
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
