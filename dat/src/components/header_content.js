import React from "react";
import Pic1 from './header/img/pic4.jpg'
import SearchIcon from './header/img/search.svg'
import './header/style.css'

function Header_content() {
  return <>
  <div className="Header_content">
  <h1>Sell your decentralize apps on DappsTrading and become rich</h1>
  <input className="SearchInput" type="search" placeholder="Find type of apps you want..."/>
  <input className="SearchInputBTN" type="button" value="Search"/>
  <img className="SearchIcon"  src={SearchIcon}/>
  <img className="Header_content_image" src={Pic1}></img>
  </div>
  </>;
}

export default Header_content;
