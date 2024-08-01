import React from 'react';
import profile from "../../assets/profile.png";
import './styles.css';
import logo from "../../assets/play.svg"

export default class Header extends React.Component {
  public render() {
    return (
    <header >
        <img  src={logo} alt="logo-img" />
        <div className='div-profile'>
          <img src={profile} alt='profile-img' />
          <span>Bem vindo, Marcos</span>
        </div>
    </header>
    );
  }
}
