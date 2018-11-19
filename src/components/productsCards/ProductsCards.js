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
import { toggleModalOnOff, setScrollPosition } from '../../redux/actions'

const mapStateToProps = state => ({
    modal: state.modalHandler.modal,
    scroll: state.modalHandler.scroll
})

const mapDispatchToProps = dispatch => ({
    toggleModal: (modalType) => dispatch(toggleModalOnOff(modalType)),
    setScrollPosition: scroll => dispatch(setScrollPosition(scroll)),
})

class ProductButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonClassName: "product-card-button " + props.type,
            showIcon: true,
            modal: props.modal,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.modal != this.state.modal) {
            let buttonClassName = !nextProps.modal ? "product-card-button " + this.props.type : this.state.buttonClassName
            this.setState({
                buttonClassName: buttonClassName,
                showIcon: this.state.showIcon,
                modal: nextProps.modal,
            })
            // Use a timeout to wait for the button animation to finish to show the icon again
            setTimeout(() => {
                this.setState({
                    buttonClassName: buttonClassName,
                    showIcon: !nextProps.modal,
                    modal: nextProps.modal,
                })
            }, 500)
        }
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
                    this.props.setScrollPosition(window.scrollY)
                    // Use a timeout to wait for the button animation to finish
                    setTimeout(() => {
                        this.props.toggleModal(this.props.type) // Pass the type of the button to show the correct modal as well
                        // Use a class to control the scrolling of the body
                        document.body.classList.add("no-scrolling")
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
    mapStateToProps,
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
                {/*<ConnectedProductButton type={'recycle'} icon={<FaSync />} />*/}
                <CardText>{product.description}</CardText>
                <span className="price">{product.price}{product.currency}</span>
            </CardBody>
        </Card>
    </div>
)

const ProductsCards = ({ products }) => {
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