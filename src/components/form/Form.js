import React from 'react';
import './form.css'

// Boostrap
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

// Redux
import { connect } from 'react-redux'
import { toggleModalOnOff } from '../../redux/actions'

const mapStateToProps = (state, ownProps) => ({
    modalType: state.modal.modalType,
})

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch(toggleModalOnOff())
})

const FormInput = ({ name, type, label, placeholder }) => (
    <FormGroup>
        <Label className='very-light-green' size="lg">{label}</Label>
        <Input className='transparent-input almost-very-light-green' name={name} type={type} placeholder={placeholder} bsSize="lg" />
    </FormGroup>
);


class customForm extends React.Component {
    render() {
        console.log(this.props.forms)
        return (
            <div>
                <a href="#" class="close" />
                <Container fluid  className="d-flex justify-content-center green-background form-container">
                    <Form>
                        <h1 className='very-light-green'>{this.props.forms[this.props.modalType].title}</h1>
                        {this.props.forms[this.props.modalType].fields.map((el, i) => {
                            return <FormInput key={el.label + el.type + el.name + i} label={el.label} type={el.type} name={el.name} placeholder={el.placeholder} />
                        })}
                        <Button className='green-button' outline color="success" size="lg" block>Submit</Button>
                    </Form>
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