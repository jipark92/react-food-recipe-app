import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className='contact-container'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="email" placeholder="John" />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Doe" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="123-123-1234" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Write your comment here"/>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Submit
                        </Button>
                    </div>
                </Form.Group>
            </Form>

            <div className=''>
                <h4>Address</h4>
                <p>1234 Test Street</p>
                <p>Test City, Test State, 12345-6789</p>
                <h5>Phone Number</h5>
                <p>987-654-3210</p>
            </div>
        </div>
    )
}