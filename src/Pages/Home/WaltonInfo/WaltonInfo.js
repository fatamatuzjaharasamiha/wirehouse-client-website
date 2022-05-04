import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './WaltonInfo.css'
const WaltonInfo = () => {
    return (
        <div className=''>
            <h2 className='text-center fw-bold text m-4'>The most loved brand in <span className='text-warning'>2022</span></h2>
            <div className='m-4 row'>
                <div className='col-lg-4 col-sm-12'>
                    <p className='p-3 m-3 info'>WALTON has established a milestone as the highest exporting Bangladeshi enterprise in the field of electronics, with a universal presence in over 20 countries. Our operations are at full swing in the markets of India, Nepal, Bhutan, Myanmar, Maldives, United Arab Emirates, Qatar, Nigeria and West Africa. We are already in the process of penetrating the markets of Australia, Europe, USA, South Africa, Singapore, Poland, Romania, Saudi Arabia, Sri Lanka and the CIS Countries in the near future. Our contribution to serve the global markets have earned us a handful of accolades, both national and international, acknowledging our dedication, expertise and innovation to meet international standards.</p>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <p className='p-3 m-3 info'>A few of the recent awards include, The Golden Globe Tiger Award 2015 in the category of Excellence and Leadership Brand, Asia Best Employer Brand Awards 2015 and DHL-The Daily Star Bangladesh 15th Business Award 2014 for Best Enterprise in Bangladesh. For a strong and sustainable foothold, WALTON is obliged to maintain a 100% compliance since its inception and has achieved certification for ISO 14001:2004 Refrigerators and Air Conditioner Division, ISO 9001:2008 Refrigerators and Air Conditioner Division and OHSAS 18001:2007 Certificate for successfully.For current global operations, WALTON maintains international representative offices located throughout Qatar, China, Thailand, Nepal, India and USA..</p>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <img className='container' src="https://i.ibb.co/cLL1nTw/all-products-d.jpg" alt="" />
                    <img className='container' src="https://i.ibb.co/4JXBPJx/ref-f-new.jpg" alt="" />
                    <img className='container' src="https://i.ibb.co/D19vdwg/superbrands-de.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WaltonInfo;