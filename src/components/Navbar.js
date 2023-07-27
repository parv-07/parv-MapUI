import React, { Component } from 'react';
//import '../header.css';
import '../App.css';
import image1 from './img/Logo.svg';
import image2 from './img/toggle.png';

import ReactDOM from 'react-dom/client';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
const image = [
  {
    imageName: 'components/Logo.svg',
  },
  {
    imageName: Component,
  },
];
function Navbar() {
  return (
    <>
      <header className="header">
        <a href="#">
          <img className="logo" src={image1} alt="logo" />
        </a>
        <a href="#">
          <img className="logo it" src={image2}></img>
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#" className="main-nav-link">
                <HomeOutlined /> Login
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link ">
                <LogoutOutlined /> Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
