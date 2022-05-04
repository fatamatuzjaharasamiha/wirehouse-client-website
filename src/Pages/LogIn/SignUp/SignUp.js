import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateSignIn = () => {
        navigate('/signin')
    }
    // const handleEmailBlur = e => {
    //     const email = e.target.value;
    //     console.log(email)
    // }
    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
         const password = event.target.password.value;
         console.log(email, password)
         createUserWithEmailAndPassword(email, password)
       
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='w-50 mx-auto m-5 shadow-lg p-5 bg-body rounded'>
            <h3 className='text-center'>sign up</h3>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='w-25' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>Alread have an account? <Link to='/signin' className='text-danger pe-auto text-decoration-none fw-bold' onClick={navigateSignIn}>Please Sign In</Link></p>
        </div>
    );
};

export default SignUp;