import React, { useEffect, useState } from 'react';
import logo from '../assets/blockworks_logo.png';
import arrow from '../assets/down-arrow-svgrepo-com.svg';
import searchIcon from '../assets/icons8-search.svg';



const HeaderBar = (props) => {


    return (
    <div class="title-bar">
      <div class="left-menu">
        <ul class="menu-items">
          <li class="menu-li">
            <span>NEWS</span>
              <img src={ arrow } alt="down-arrow" class="arrow-icon"/>
          </li>
          <li>
            <span>NEWSLETTER</span>
          </li>
          <li>
            <span>PODCASTS</span>
          </li>
        </ul>
      </div>
      <div class="logo-div">
        <img src={ logo } alt='blockworks_logo'/>
      </div>
      <div class="right-menu">
      <ul class="menu-items">
          <li class="menu-li">
            <span>PRICES</span>
          </li>
          <li>
            <span>RESEARCH</span>
          </li>
          <li>
            <span>EVENTS</span>
          </li>
          <li>
            <span>WEBINAR</span>
          </li>
          <li>
            <img src={ searchIcon } alt="search-icon" class="search-icon"/>
          </li>
        </ul>
      </div>
    </div>
    
    )
}

export default HeaderBar;