import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Walton from '../Walton/Walton';
import WaltonInfo from '../WaltonInfo/WaltonInfo';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Walton></Walton> 
            <WaltonInfo></WaltonInfo>
            <Products></Products>
        </div>
    );
};

export default Home;