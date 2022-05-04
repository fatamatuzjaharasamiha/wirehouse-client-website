import React from 'react';
import Banner from '../Banner/Banner';
import Walton from '../Walton/Walton';
import WaltonInfo from '../WaltonInfo/WaltonInfo';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Walton></Walton> 
            <WaltonInfo></WaltonInfo>
        </div>
    );
};

export default Home;