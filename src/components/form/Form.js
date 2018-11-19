import React from 'react'
import './form.css'

// React-steps
import Steps, { Step } from 'rc-steps'
import './index.css'
import './iconfont.css'

// Boostrap
import { Row, Col, Button, Container, Form, FormGroup, Label, Input, Card, CardBody, ButtonGroup, CardHeader } from 'reactstrap'

// Redux
import { connect } from 'react-redux'
import { toggleModalOnOff } from '../../redux/actions'

// Icons
import { FaBackward, FaForward } from '../../../node_modules/react-icons/fa'

// JQuery
import $ from 'jquery'

// Utils components
import {
    Payment,
    Address,
    FormInput
} from './FormUtils'

const mapStateToProps = (state, ownProps) => ({
    modalType: state.modalHandler.modalType,
    scroll: state.modalHandler.scroll,
})

const mapDispatchToProps = dispatch => ({
    toggleModalOnOff: () => dispatch(toggleModalOnOff())
})


class customForm extends React.Component {
    state = {
        step: 0
    }

    render() {
        console.log('this.props.forms[this.props.modalType].tabs', this.props.forms[this.props.modalType].tabs[this.state.step])

        return (
            <div>
                <a href="#" class="close" onClick={() => {
                    // Use a class to control the scrolling of the body
                    this.props.toggleModalOnOff()
                    //console.log('scroll', this.props.scroll)
                    //console.log('document', document.documentElement)
                    //document.documentElement.scrollTop = document.body.scrollTop = 1000
                    document.body.classList.remove("no-scrolling")
                }} />
                <Container fluid className="form-container">
                    <Steps current={this.state.step} className="form-steps">
                        <Steps.Step title="Shipping Details" />
                        <Steps.Step title="Payment Information" />
                        <Steps.Step title="Review and Pay" />
                    </Steps>
                    <Container fluid className="d-flex justify-content-center">
                        <h1 className='form-title white'>
                            {this.props.forms[this.props.modalType].tabs[this.state.step].titleIcon}
                            &nbsp;
                                    {this.props.forms[this.props.modalType].tabs[this.state.step].title}
                        </h1>
                    </Container>
                    <Card className='form-card'>
                        {/*
                        This gives a sort of header background but I didn't like it very much
                        <CardHeader className="form-header">
                            <Steps current={this.state.step} className="form-steps">
                                <Steps.Step title="Shipping Details" />
                                <Steps.Step title="Payment Information" />
                                <Steps.Step title="Review and Pay" />
                            </Steps>
                            <Container fluid className="d-flex justify-content-center">
                                <h1 className='form-title'>
                                    {this.props.forms[this.props.modalType].tabs[this.state.step].titleIcon}
                                    &nbsp;
                                    {this.props.forms[this.props.modalType].tabs[this.state.step].title}
                                </h1>
                            </Container>
                        </CardHeader>
                        */}

                        <Form>
                            <CardBody className="form-card-body">
                                {this.props
                                    .forms[this.props.modalType]
                                    .tabs[this.state.step].fields.map((el, i) => {
                                        let key = el.label + el.type + el.name + i
                                        switch (el.kind) {
                                            case 'input': return <FormInput key={key} icon={el.icon} label={el.label} type={el.type} name={el.name} placeholder={el.placeholder} value={el.value} />
                                            case 'payment': return <Payment key={key} icon={el.icon} label={el.label} />
                                            case 'address': return <Address key={key} />
                                        }
                                    })
                                }
                            </CardBody>
                        </Form>
                        <Container fluid className="d-flex justify-content-center">
                            <ButtonGroup className="form-step-buttons">
                                <Button outline color="success" size="lg" onClick={
                                    () => {
                                        this.setState({
                                            step: this.state.step - 1 >= 0 ? this.state.step - 1 : 0
                                        })
                                        if (this.state.step - 1 >= 0) $(".formModal").animate({ scrollTop: 0 }, "fast")
                                    }} >&nbsp;&nbsp;<FaBackward />&nbsp;&nbsp;</Button>
                                <Button outline color="success" size="lg" onClick={
                                    () => {
                                        this.setState({
                                            step: this.state.step + 1 < this.props.forms[this.props.modalType].tabs.length ? this.state.step + 1 : this.state.step
                                        })
                                        if (this.state.step + 1 < this.props.forms[this.props.modalType].tabs.length) $(".formModal").animate({ scrollTop: 0 }, "fast")
                                    }}>&nbsp;&nbsp;<FaForward />&nbsp;&nbsp;</Button>
                            </ButtonGroup>
                        </Container>
                    </Card>
                </Container>
            </div>
        )
    }
}

// The button is connected with the show modal reducer
const ConnectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(customForm)

export default ConnectedForm