import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ManageLink from '../ManageLink/ManageLink';
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
            <ManageLink></ManageLink>
          
           
        </div>
    );
};

export default Home;