import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error?.message}</p>
    }

    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    //reset
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }
console.log(user)

    return (
        <div className='container mx-auto w-50 m-3 w-50 mx-auto m-5 shadow-lg p-5 bg-body rounded'>
            <h1 className='sign'>Sign In</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control className='bg-success p-2 text-dark bg-opacity-25' ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control className='bg-success p-2 text-dark bg-opacity-25' ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button className='d-block mx-auto mb-2' variant="dark" type="submit">
                    Sign In
                </Button>
            </Form>
            {errorElement}
            <p>New to this site? <Link to='/signup' className='text-primary pe-auto text-decoration-none fw-bold'>Please SignUp</Link></p>
            <p>Forget Password?<button className='btn btn-link text-primary fw-bold pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default SignIn;