import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';


const Footer = ({content}) => {
    return (<Row className="Footer">
        <Col >{content.leftMessage}</Col>
        <Col className='text-right'>{content.rightMessage}</Col>
    </Row>)
}

export default Footer;