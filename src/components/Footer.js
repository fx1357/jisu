import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import '../App.css';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className={"text-center py-3"}>
                        CopyRight &copy; yoon hyuk Jeong
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;