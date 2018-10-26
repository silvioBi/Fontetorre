import React, { Component } from 'react';
import './products-cards.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row, Col, Container
} from 'reactstrap';

const Product = () => (
    <div>
        <Card className='product-card'>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </div>
)

const ProductsCards = () => (
    <Container fluid id='products-cards' className="d-flex justify-content-center">
        <Row>
            <Col fluid ><Product /></Col>
            <Col fluid ><Product /></Col>
            <Col fluid><Product /></Col>
        </Row>
    </Container>
)
export default ProductsCards;