import React from 'react';
import './form.css'

// React-steps
import Steps, { Step } from 'rc-steps'
import './index.css'
import './iconfont.css'

// Boostrap
import { Row, Col, Button, Container, Form, FormGroup, Label, Input, Card, CardBody, ButtonGroup } from 'reactstrap';

// Redux
import { connect } from 'react-redux'
import { toggleModalOnOff } from '../../redux/actions'

// Credit card
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { FaBackward, FaForward } from '../../../node_modules/react-icons/fa';

const mapStateToProps = (state, ownProps) => ({
    modalType: state.modalHandler.modalType,
    scroll: state.modalHandler.scroll,
})

const mapDispatchToProps = dispatch => ({
    toggleModalOnOff: () => dispatch(toggleModalOnOff())
})

const FormInput = ({ name, type, icon, label, placeholder, value }) => (
    <FormGroup>
        <Label className='very-light-green big-label' size="lg">{icon} {label}</Label>
        <Input className='transparent-input almost-very-light-green' name={name} type={type} placeholder={placeholder} bsSize="lg" defaultValue={value} />
    </FormGroup>
);

class Payment extends React.Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: '',
    }

    render() {
        return (
            <div>
                <Label className='very-light-green big-label' size="lg">{this.props.icon} {this.props.label}</Label>
                <Cards
                    number={this.state.number}
                    name={this.state.name}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    focused={this.state.focused}
                />
                <br />
                <FormGroup>
                    <Input
                        maxlength='19'
                        className='transparent-input almost-very-light-green'
                        name='card-number'
                        type='tel'
                        placeholder='Card number'
                        bsSize="lg"
                        onChange={e => {
                            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
                            this.setState({ ...this.state, number: e.target.value, focused: 'number' })
                        }} />
                </FormGroup>
                <FormGroup>
                    <Input className='transparent-input almost-very-light-green' name='card-name' type='text' placeholder='Name' bsSize="lg" onChange={e => this.setState({ ...this.state, name: e.target.value, focused: 'name' })} />
                </FormGroup>
                <Row form>
                    <Col md={8}>
                        <Input
                            maxlength='5'
                            className='transparent-input almost-very-light-green'
                            name='card-expiry'
                            type='text'
                            placeholder='Expiry date'
                            bsSize="lg"
                            onChange={e => {
                                e.target.value = e.target.value.replace(/^(\d\d)(\d)$/g, '$1/$2').replace(/^(\d\d\/\d\d)(\d+)$/g, '$1/$2').replace(/[^\d\/]/g, '')
                                this.setState({ ...this.state, expiry: e.target.value, focused: 'expiry' })
                            }
                            } />
                    </Col>
                    <Col md={4}>
                        <Input
                            maxlength='4'
                            className='transparent-input almost-very-light-green'
                            name='card-cvc'
                            type='text'
                            placeholder='CVC'
                            bsSize="lg"
                            onChange={e => {

                                this.setState({ ...this.state, cvc: e.target.value, focused: 'cvc' })
                            }
                            } />
                    </Col>
                </Row>

            </div>
        )
    }
}


class customForm extends React.Component {
    state = {
        step: 0
    }

    render() {
        return (
            <div>
                <a href="#" class="close" onClick={() => {
                    // Use a class to control the scrolling of the body
                    this.props.toggleModalOnOff()
                    //console.log('scroll', this.props.scroll)
                    //console.log('document', document.documentElement)
                    //document.documentElement.scrollTop = document.body.scrollTop = 1000;
                    document.body.classList.remove("no-scrolling")
                }} />
                <Container fluid className="form-container">
                    <Card className="form-card">
                        <Steps current={this.state.step} className="form-steps">
                            <Steps.Step title="Address" />
                            <Steps.Step title="Payment and Shipping" />
                            <Steps.Step title="Review and Pay" />
                        </Steps>

                        <Form>
                            <CardBody>
                                <Container fluid className="d-flex justify-content-center">
                                    <h1 className="justify-content-center">
                                        {this.props.forms[this.props.modalType].tabs[this.state.step].titleIcon}
                                        &nbsp;
                                    {this.props.forms[this.props.modalType].tabs[this.state.step].title}
                                    </h1>
                                </Container>
                                {this.props.forms[this.props.modalType].tabs.map(tab =>
                                    tab.fields.map((el, i) => {
                                        switch (el.kind) {
                                            case 'input': return <FormInput key={el.label + el.type + el.name + i} icon={el.icon} label={el.label} type={el.type} name={el.name} placeholder={el.placeholder} value={el.value} />
                                            case 'payment': return <Payment key={el.label + el.type + el.name + i} icon={el.icon} label={el.label} />
                                        }
                                    })
                                )}
                            </CardBody>
                        </Form>
                        <Container fluid className="d-flex justify-content-center">
                            <ButtonGroup className>
                                <Button outline color="success" size="lg" >&nbsp;&nbsp;<FaBackward />&nbsp;&nbsp;</Button>
                                <Button outline color="success" size="lg" >&nbsp;&nbsp;<FaForward />&nbsp;&nbsp;</Button>
                            </ButtonGroup>
                        </Container>
                    </Card>
                </Container>
            </div>
        );
    }
}

// The button is connected with the show modal reducer
const ConnectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(customForm)

export default ConnectedForm