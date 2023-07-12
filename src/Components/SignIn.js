import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import { FormGroup } from 'react-bootstrap';


function Signin() {

    // const url = `${process.env.REACT_APP_BACKEND_URI}`


    return (
        <div>
            <div>
                <h1>Sign in</h1>
            </div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={7} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <p> Don't have an account <a href="/Signup">Sign Up</a></p>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Signin

