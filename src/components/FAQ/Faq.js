import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What kind of courses we sell??</Accordion.Header>
                <Accordion.Body>
                    Mainly we are selling programming related courses. Like java script, java , css , html, Node js, Express js.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Our Policy</Accordion.Header>
                <Accordion.Body>
                    In this website you are learning free . But if you need premious access you need to login our website. You can login via google, email password or github.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Faq;