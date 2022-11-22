import React, { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import TitleBar from './TitleBar';
import ExchangeBar from './ExchangeBar';
import SectionBar from './SectionBar';


const Home = (props) => {


    return (
    <div>
        <HeaderBar />
        <TitleBar />
        <ExchangeBar />
        <SectionBar />
    </div>
    
    )
}

export default Home;