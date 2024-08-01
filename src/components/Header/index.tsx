import * as React from 'react';
import profile from "../../assets/profile.png";
import './styles.css';

export default class Header extends React.Component {
  public render() {
    return (
    <header >
        <img id='logo' src='' alt="logo-img" />
        <div className='div-profile'>
          <img src={profile} alt='profile-img' />
          <span>Bem vindo, Marcos</span>
        </div>
    </header>
    );
  }
}
