import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()

    const navigateSignIn =()=>{
        navigate('/signin')
    }
    return (
        <div className='w-50 mx-auto m-5 shadow-lg p-5 bg-body rounded'>
        <h3 className='text-center'>sign up</h3>
        <Form  className=''>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />

                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />

            </Form.Group>
            {/* <p>{error}</p>
            {
                loading && <h6 className='text-center'>loading....</h6>
            } */}
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
        <p>Alread have an account? <Link to='/signin' className='text-danger pe-auto text-decoration-none' onClick={navigateSignIn}>Please Sign In</Link></p>
    </div>
    );
};

export default SignUp;