import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormGroup } from 'react-bootstrap';
// import { FormGroup } from 'react-bootstrap';


const Signin = () => {

    const [profileInput, setProfileInput] = useState({
        userName:'',
        firstName: '',
        lastName: '',
        profilePicture:'',
        emailAddress:'',
        getsUpdates:true,
        password:'',
    })

    //sets the url for profile creation
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile`

    //function to handle the change in the textboxes
    const handleChange = (e) => {
        const value = e.target.value;
        setProfileInput({
            ...profileInput,
            [e.target.name]: value
        });
    }
    //function to handle cnahge in checkbox
    const handleUpdateCheck = (e) => {
        const checked = e.target.checked
        setProfileInput({
            ...profileInput,
            [e.target.name]: checked
        })
    }
    //handles the submit to create the profile in the database
    const handleSubmit = async (e) => {
        const response = await fetch(URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(profileInput)
        })
        if (response.status !== 201) console.log('error')
    }

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
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row className="mb-3">
                    <p> Don't have an account yet? Fill out the form below!</p>
                </Row>
                </Form>
                <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <FormGroup as={Col} xs={7} controlId="formGridName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name='userName' placeholder="username" />
        
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name='firstName' placeholder="FirstName" />

                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name='lastName' placeholder="LastName" />

                        <Form.Label>Profile Picture URL</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name='profilePicture' placeholder="" />
                    </FormGroup>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={7} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  onChange={handleChange} name='emailAddress' placeholder="Enter email" />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" secureTextEntry={true} onChange={handleChange} name='password' placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" defaultChecked={profileInput.getsUpdates} name='getsUpdates' onChange={handleUpdateCheck} label="Check to recieve updates" />
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Signin



