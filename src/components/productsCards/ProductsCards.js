import React, { Component } from 'react';
import './products-cards.css';
// Boostrap
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Row, Col, Container
} from 'reactstrap';
// Icons
import { FaShoppingCart, FaSync } from 'react-icons/fa';

const Product = ({ product }) => (
    <div>
        <Card className='product-card text-center'>
            <CardImg className="product-card-image" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle className="product-card-title">{product.name}</CardTitle>
                {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                <a className="product-card-button buy"><span><FaShoppingCart /></span></a>
                <a className="product-card-button recycle"><span><FaSync /></span></a>
                <CardText>{product.description}</CardText>
                <span className="price">{product.price}</span>
            </CardBody>
        </Card>
    </div>
)

const ProductsCards = ({ products }) => {
    console.log(products)
    return (
        <Container fluid id='products-cards' className="d-flex justify-content-center">
            <Row>
                {products.map(product =>
                    <Col className="d-flex justify-content-center" fluid ><Product product={product} /></Col>
                )}
            </Row>
        </Container>
    )
}
export default ProductsCards;