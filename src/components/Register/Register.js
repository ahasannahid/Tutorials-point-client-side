import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaWindows } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState(' ')
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(' ');
                form.reset();
                navigate('/');

                handleUpdateUserProfile(name, photoURL);

            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        
        updateUserProfile(profile)
        .then( () => {})
        .catch(error => console.error(error));
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required name="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="url">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photoURL" required placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label={<>Accept <Link to='/terms'>Terms And Condition</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

            

            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p>Already have an account please <Link to='/login'>Login</Link></p>
        </Form>

    );
};

export default Register;