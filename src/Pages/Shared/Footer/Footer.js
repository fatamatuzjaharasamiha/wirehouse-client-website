import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5 pb-5'>
            <div className='container text-center '>
                <div className='row text-start '>
                    <div className='col-lg-3 col-sm-12 mx-auto mt-3'>
                        <h5 className='text-warning mb-4'>Company</h5>
                        <p className=''>Walton is the latest multinational electrical, electronics, automobiles and other appliances brand with one of the largest well equipped R and I facilities in the world.</p>
                    </div>
                    <div className='col-lg-3 col-sm-6 mx-auto mt-3'>
                        <h5 className='text-warning mb-4'>Products</h5>
                        <p>
                            <a href="https://www.highspeedinternet.com/or/walton" className='text-white text-decoration-none'>The providers</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Creativity</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>SourceFiles</a>
                        </p>
                    </div>
                    <div className='col-lg-3 col-sm-6 mx-auto mt-3'>
                        <h5 className='text-warning mb-4'>Useful Links</h5>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Your Account</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Address</a>
                        </p>
                        <p>
                            <a href="https://waltonbd.com/contact" className='text-white text-decoration-none'>Help</a>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;