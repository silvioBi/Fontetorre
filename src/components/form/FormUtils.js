import React from 'react'

// Credit card
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

// Boostrap
import { Row, Col, FormGroup, Label, Input, InputGroup } from 'reactstrap'
import { FaUser, FaAddressCard } from 'react-icons/fa';

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
            <div className="payment-form">
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
                            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
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

const FormInput = ({ name, type, icon, label, placeholder, value }) => (
    <FormGroup>
        <Label className='very-light-green big-label' size="lg">{icon} {label}</Label>
        <Input className='transparent-input almost-very-light-green' name={name} type={type} placeholder={placeholder} bsSize="lg" defaultValue={value} />
    </FormGroup>
)

const Address = ({ name, type, icon, label, placeholder, value }) => (
    <div>
        <FormGroup>
            <Label className='very-light-green big-label' size="lg"><FaUser style={{ paddingBottom: '5px' }} /> Personal</Label>
            <InputGroup>
                <Input name='firstName' type='text' placeholder='First Name' bsSize="lg" />
                <Input name='lasttName' type='text' placeholder='Last Name' bsSize="lg" />
            </InputGroup>
        </FormGroup>
        <FormGroup>
            <Label className='very-light-green big-label' size="lg"><FaAddressCard style={{ paddingBottom: '5px' }} /> Address</Label>
            <Input name='address' type='text' placeholder='Address' bsSize="lg" />
            <InputGroup>
                <Input name='city' type='text' placeholder='City' bsSize="lg" />
                <Input name='state' type='text' placeholder='State' bsSize="lg" />
                <Input name='zip' type='text' placeholder='Zip' bsSize="lg" />
            </InputGroup>
        </FormGroup>
    </div>


    /*   

    <Row form>
        <Col md={6}>
            <Input name='firstName' type='text' placeholder='First Name' bsSize="lg" />
        </Col>
        <Col md={6}>
            <Input name='lasttName' type='text' placeholder='Last Name' bsSize="lg" />
        </Col>
    </Row>
    
    
    <FormGroup>
        <Label className='very-light-green big-label' size="lg">{icon} {label}</Label>
        <Input className='transparent-input almost-very-light-green' name={name} type={type} placeholder={placeholder} bsSize="lg" defaultValue={value} />
    </FormGroup>
    */
)

export {
    Payment,
    FormInput,
    Address
}