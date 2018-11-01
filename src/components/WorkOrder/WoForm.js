import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Collapse, CardBody, Card } from 'reactstrap';
import API from '../utils/API';

class WoForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            location: '',
            address: '',
            city: '',
            zipCode: '',
            typeSelect: '',
            typeText: '',
            priority: '',
            aptNumber: '',
            collapse: false,
            modal: false,

        }
        this.toggle2 = this.toggle2.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ modal: !this.state.modal });
    }
    toggle2() {
        this.setState({ collapse: !this.state.collapse });
    }

    handleChange(event) {
        const { name, value } = event.target;

        if (event.target.value === "Other") {
            this.toggle()
        }
        if (event.target.value === "Other (Please Describe Below)") {
            this.toggle2()
        }
        this.setState({
            [name]: value
        })

    }
    setOrderState = () => {
        console.log(this.state)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.username)
        var orderData = {
            username: this.state.username,
            password: this.state.password,
            location: this.state.location,
            priority: this.state.priority,
            address: this.state.address,
            city: this.state.city,
            zipCode: this.state.zipCode,
            aptNumber: this.state.aptNumber,
            typeSelect: this.state.typeSelect,
            typeDescription: this.state.typeDescription
        }
        API.submitOrder(orderData).then(res => {
            console.log(res)
//             address: "uhu"
// aptNumber: ""
// city: "huhu"
// location: "Other"
// password: "hu"
// priority: "Normal"
// typeSelect: ""
// username: "b"
// zipCode: "huhuh"
            var workOrderMessage = {
                receiver: "polo",
                sender: this.state.username,
                body: {
                    username: this.state.username,
                    city: this.state.city
                }
            }
            console.log(workOrderMessage)
        //     alert(            
        //     "username: " + res.username,
        //     "password: " + res.password,
        //     "location: " + res.location,
        //     "address: " + res.address,
        //     "city: " + res.city,
        //     "zipCode: " + res.zipCode,
        //     "typeSelect: " + res.typeSelect,
        //     "typeText: " + res.typeText,
        //     "priority: " + res.priority,
        //     "aptNumber: " + res.aptNumber)
        // })
        })
        // axios.post('/api/workOrders/submit', {
        //     username: this.state.username,
        //     password: this.state.password,
        //     location: this.state.location,
        //     priority: this.state.address,

        // })
        //     .then(response => {
        //         console.log("Order Res")
        //         console.log(response)
        //     }).catch(error => {
        //         console.log('submit error: ')
        //         console.log(error)

        //     })
    }


    render() {
        
        const formStyle = {
            width: "50%",
            margin: "0 auto",
            backgroundColor: "white",
            border: "3px solid green",
            padding: "15px",
            
        }
        return (
            <div>

                <h1>Work Order Form</h1>
                <h2>Work orders placed after 5pm must be marked “urgent” to be submitted for next day.</h2>

                <Form style={formStyle}>
                    <FormGroup>
                        <Label for="username">Email</Label>
                        <Input type="email" onChange={this.handleChange} name="username" id="username" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" onChange={this.handleChange} name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="locationSelect">Location</Label>
                        <Input type="select" name="location" onChange={this.handleChange} id="locationSelect">
                            <option id="0">Select</option>
                            <option id="1">Fox Ridge</option>
                            <option id="2">Green Brier</option>
                            <option id="3">Oak Run</option>
                            <option id="4">Merlin Court</option>
                            <option id="5">The Grove</option>
                            <option id="6">Hillsborough Pond</option>
                            <option id="7">East Martin</option>
                            <option id="8">Palmer Street</option>
                            <option id="9">Other</option>

                        </Input>

                    </FormGroup>
                    <FormGroup>
                        <Label for="aptNumber">Apartment Number</Label>
                        <Input type="text" name="aptNumber" id="aptNumber" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="typeSelect">Work Type</Label>
                        <Input type="select" name="workType" onChange={this.handleChange} id="typeSelect">
                            <option id="select">Select</option>
                            <option id="electrical">Electrical</option>
                            <option id="flooring">Flooring</option>
                            <option id="plumbing">Plumbing</option>
                            <option id="otherType">Other (Please Describe Below)</option>

                        </Input>

                    </FormGroup>
                    <FormGroup>
                        <Label for="priority">Priority</Label>
                        <Input type="select" name="priority" onChange={this.handleChange} id="priority">
                            <option id="select">Select</option>
                            <option id="normal">Normal</option>
                            <option id="urgent">Urgent</option>
                            <option id="estimate">Just Need Estimate</option>

                        </Input>

                    </FormGroup>
                    <div>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <Label onClick={this.open} for="address">Street Address:</Label>
                                    <Input name="address" id="address" placeholder="123 Washington Lane" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="city">City:</Label>
                                    <Input name="city" id="city" placeholder="Durham" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="zipCode">Zip Code:</Label>
                                    <Input name="zipCode" id="zipCode" placeholder="27707" onChange={this.handleChange} />
                                </FormGroup>          </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBody>
                                    <FormGroup>
                                        <Label for="typeText">Describe Work Type</Label>
                                        <Input onChange={this.handleChange} type="textarea" name="typeText" id="typeText" />
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>

                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>

            </div>
        )
    }
}
export default WoForm;