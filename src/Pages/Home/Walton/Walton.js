import React from 'react';
import './Walton.css'
const Walton = () => {
    return (
        <div className='display'>
            <h1 className='fw-bold pt-3 text-center'>Walton</h1>
            <h2 className='text-center'>Our Production facilities</h2>
            <div className='row '>
                <div className='col-lg-5 col-sm-12 text-start p-2 fw-bold fs-5'>
                    <p className='p-3 m-2'>The Manufacturing Plant and Headquarters of WHIPLC is located at Chandra, Kaliakoir, Gazipur, Bangladesh. The plant is treated as one of the sophisticated manufacturing plants in Bangladesh as well as in South Asia. Walton innovates to build a more advanced, sustainable and environment friendly society through the combination of sophisticated technologies and expertise. The manufacturing plant of WHIPLC is approx. 5,000,000 sft. of working space consisting of 19 Buildings and Shades.</p>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <img className='w-100 pt-5 h-75' src="https://i.ibb.co/BB7SgW6/our-production-facilities.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Walton;