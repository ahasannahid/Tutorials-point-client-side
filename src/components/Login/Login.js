import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';




const Login = () => {

    const [error, setError] = useState(' ')
    const navigate = useNavigate();

    const { signIn, providerLogin } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSignSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError(' ')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            }
            )
    }
    
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSIgnIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            // console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
    }

    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubSIgnIn = () => {
        providerLogin(gitHubProvider)
        .then(result => {
            const user = result.user;
            // console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Form onSubmit={handleSignSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p>If you haven't an account please <Link to='/register'>Register</Link></p>
            <div className='text-center mt-3'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSIgnIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>  Login with google</Button>
                    <Button onClick={handleGitHubSIgnIn} variant='outline-dark'><FaGithub></FaGithub> Login with github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;