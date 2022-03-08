import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <p className='footer'>CopyRight &copy;2022, All rights Reserved to Pizza Store</p>
                </Row>
            </Container>
        </>
    )
}

export default Footer