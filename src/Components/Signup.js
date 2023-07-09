import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';


function Signup() {
    return (
        <div>
            <div>
                <h1>Sign Up</h1>
            </div>
            <Form>
                <Row className="mb-3">
                    <FormGroup as={Col} xs={7} controlId="formGridName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="FirstName" />

                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="LastName" />
                    </FormGroup>
                </Row>
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

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check to recieve updates" />
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Signup