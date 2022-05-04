import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './SignIn.css'
const SignIn = () => {
    const emailRef = useRef('')
    const passRef= useRef('')
    const handleSubmit = e =>{
        e.preventDefault()
        const email =emailRef.current.value;
        const password = passRef.current.value;

        console.log(email,password)
    }

    const navigateSignup=e=>{
        Navigate('/signup')
    }

    return (
        <div className='container mx-auto w-50 m-3'>
            <h1 className='sign'>Sign In</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to this site? <span className='text-danger' onClick={navigateSignup}>Pleage Sign Up</span></p>
        </div>
    );
};

export default SignIn;