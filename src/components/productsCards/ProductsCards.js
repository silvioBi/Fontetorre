import React, { Component } from 'react';
import './products-cards.css';

// Boostrap
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
    Row, Col, Container
} from 'reactstrap';

// Icons
import { FaShoppingCart, FaSync } from 'react-icons/fa';

// Redux
import { connect } from 'react-redux'
import { toggleModalOnOff } from '../../redux/actions'


const mapDispatchToProps = dispatch => ({
    toggleModal: (e, modalType) => dispatch(toggleModalOnOff(e, modalType))
})

class ProductButton extends Component {
    state = {
        buttonClassName: "product-card-button " + this.props.type,
        showIcon: true,
    }
    render() {
        return (
            <a className={this.state.buttonClassName}
                onClick={e => {
                    // Start the animation
                    this.setState({
                        buttonClassName: this.state.buttonClassName + ' scaled',
                        showIcon: !this.state.showIcon,
                    })
                    // Use a timeout to wait for the button animation to finish
                    setTimeout(() => {
                        this.props.toggleModal(e, this.props.type) // Pass the type of the button to show the correct modal as well
                    }, 500)
                }}>
                {this.state.showIcon ?
                    <span>
                        {this.props.icon}
                    </span> :
                    null
                }
            </a>
        )
    }
}
// The button is connected with the show modal reducer
const ConnectedProductButton = connect(
    null,
    mapDispatchToProps
)(ProductButton);

const Product = ({ product }) => (
    <div>
        <Card className='product-card text-center'>
            <CardImg className="product-card-image" top width="100%" src={product.img} alt="Card image cap" />
            <CardBody>
                <CardTitle className="product-card-title">{product.name}</CardTitle>
                {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                <ConnectedProductButton type={'buy'} icon={<FaShoppingCart />} />
                <ConnectedProductButton type={'recycle'} icon={<FaSync />} />
                <CardText>{product.description}</CardText>
                <span className="price">{product.price}{product.currency}</span>
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
export default ProductsCards