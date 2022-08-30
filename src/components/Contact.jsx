import { useState, React } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import contact from '../media/contect.png'





const Contact = ({ darkMode }) => {

    const [templateParams, setTemplateParams] = useState({
        from_name: '',
        email_id: '',
        message: ''
    });

    const onInputChange = e => {
        setTemplateParams({ ...templateParams, [e.target.name]: e.target.value })
    }



    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(templateParams)


        emailjs.send('service_zk3b57n', 'template_2y018go', templateParams  , 'fEYonI154DEJnfewa')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        swal({
            title: "Sent Successfully!",
            text: "Glad to hear from you! I will get back to you as soon possible",
            icon: "success",
        });
        setTemplateParams({
            from_name: '',
            email_id: '',
            message: ''
        })
    }

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Container>
                <Row>
                    <Col lg={4}>
                        <br></br>
                        <h2 className="lead">Contact me!</h2>
                        <p className="contact-text">Drop a suggestion, feedback, opportunities or we can colaborate on a project. Please mention your contact details if you are expecting a reply.</p>

                        <h2 className="lead">Contact Details</h2>
                        <div className="contact-text">
                            <p>Manish Singh Chouhan<br />  At.Post-Baihar,Balaghat, Madhya Pradesh. <br /> Pin No : 481111 <br /> <strong style={{ fontWeight: "600" }}>7020949932</strong>
                                <br />
                                <strong style={{ fontWeight: "600" }}>manishchouhan2396@gmail.com</strong>
                            </p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <br></br>

                        <Form onSubmit={e => onSubmit(e)}>
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.from_name} name="from_name" className="ph name" type="name" placeholder="Enter your name" />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.email_id} name="email_id" className="ph name" type="email" placeholder="Enter your mail id" />
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Control onChange={e => onInputChange(e)} value={templateParams.message} name="message" as="textarea" rows={8} className="ph msg" placeholder="Enter your message" />
                            </Form.Group>
                            <Button style={{ marginTop: "1.3%" }} variant={darkMode ? "outline-light" : "outline-dark"} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <br />
                <img src={contact} alt="contact" className="contact-img img-fluid" />
            </Container>

        </div>
    )
}

export default Contact
