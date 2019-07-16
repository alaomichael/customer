import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        phone: '',
        underbust: '',
        hip: '',
        length: '',
        waist: '',
        sleeve: '',
        round_sleeve: '',
        nip: '',
        stk: '',
        shoulder: '',
        gown_length: '',
        skirt_length: '',
        blouse_length: '',
        skirt_waist: '',
        email: '',
        bust: ''            
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            underbust: this.state.underbust,
            hip: this.state.hip,
            length: this.state.length,
            waist: this.state.waist,
            sleeve: this.state.sleeve,
            round_sleeve: this.state.round_sleeve,
            nip: this.state.nip,
            stk: this.state.stk,
            shoulder: this.state.shoulder,
            gown_length: this.state.gown_length,
            skirt_length: this.state.skirt_length,
            blouse_length: this.state.blouse_length,
            skirt_waist: this.state.skirt_waist,
            bust: this.state.bust,
        };

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
    };

    render() {
        return (
            <div>
                { this.props.isAuthenticated ? (
                    <Button
                        color='dark'
                        style={ { marginBottom: '2rem' } }
                        onClick={ this.toggle }
                    >
                        Add Customer
          </Button>
                ) : (
                        <h4 className='mb-3 ml-4'>Please log in to manage Customers Details</h4>
                    ) }

                <Modal isOpen={ this.state.modal } toggle={ this.toggle }>
                    <ModalHeader toggle={ this.toggle }>Add To Customers Data</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={ this.onSubmit }>
                            <FormGroup>
                                <Label for='item'>Name</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='item'
                                    placeholder='Add Customer Name'
                                    onChange={ this.onChange }
                                />

                                <Label for='phone'>Phone</Label>
                                <Input
                                    type='text'
                                    name='phone'
                                    id='phone'
                                    placeholder='Add Customer Phone Number'
                                    onChange={ this.onChange }
                                />
                                <Label for='email'>E-mail</Label>
                                <Input
                                    type='text'
                                    name='email'
                                    id='email'
                                    placeholder='Add Customer E-mail'
                                    onChange={ this.onChange }
                                />
                                <Label for='bust'>Bust</Label>
                                <Input
                                    type='text'
                                    name='bust'
                                    id='bust'
                                    placeholder='Add Customer Bust'
                                    onChange={ this.onChange }
                                />
                                <Label for='underbust'>UnderBust</Label>
                                <Input
                                    type='text'
                                    name='underbust'
                                    id='underbust'
                                    placeholder='Add Customer UnderBust'
                                    onChange={ this.onChange }
                                />
                                <Label for='hip'>Hip</Label>
                                <Input
                                    type='text'
                                    name='hip'
                                    id='hip'
                                    placeholder='Add Customer Hip'
                                    onChange={ this.onChange }
                                />
                                <Label for='length'>Length</Label>
                                <Input
                                    type='text'
                                    name='length'
                                    id='length'
                                    placeholder='Add Customer Length'
                                    onChange={ this.onChange }
                                />
                                <Label for='waist'>Waist</Label>
                                <Input
                                    type='text'
                                    name='waist'
                                    id='waist'
                                    placeholder='Add Customer Waist'
                                    onChange={ this.onChange }
                                />
                               <Label for='nip'>Nip to Nip</Label>
                                <Input
                                    type='text'
                                    name='nip'
                                    id='nip'
                                    placeholder='Add Customer Nip to Nip'
                                    onChange={ this.onChange }
                                />
                                <Label for='gown_length'>Gown Length</Label>
                                <Input
                                    type='text'
                                    name='gown_length'
                                    id='gown_length'
                                    placeholder='Add Customer Gown Length'
                                    onChange={ this.onChange }
                                />
                                <Label for='skirt_length'>Skirt Length</Label>
                                <Input
                                    type='text'
                                    name='skirt_length'
                                    id='skirt_length'
                                    placeholder='Add Customer Skirt Length'
                                    onChange={ this.onChange }
                                />
                                <Label for='blouse_length'>Blouse Length</Label>
                                <Input
                                    type='text'
                                    name='blouse_length'
                                    id='blouse_length'
                                    placeholder='Add Customer Blouse Length'
                                    onChange={ this.onChange }
                                />
                                 <Label for='skirt_waist'>Skirt Waist</Label>
                                <Input
                                    type='text'
                                    name='skirt_waist'
                                    id='skirt_waist'
                                    placeholder='Add Customer Skirt Waist'
                                    onChange={ this.onChange }
                                />
                                <Label for='stk'>Shoulder to Knee</Label>
                                <Input
                                    type='text'
                                    name='stk'
                                    id='stk'
                                    placeholder='Add Customer Shoulder to Knee'
                                    onChange={ this.onChange }
                                /> 
                                <Label for='shoulder'>Shoulder</Label>
                                <Input
                                    type='text'
                                    name='shoulder'
                                    id='shoulder'
                                    placeholder='Add Customer Shoulder'
                                    onChange={ this.onChange }
                                />
                                <Label for='sleeve'>Sleeve</Label>
                                <Input
                                    type='text'
                                    name='sleeve'
                                    id='sleeve'
                                    placeholder='Add Customer Sleeve'
                                    onChange={ this.onChange }
                                />
                                <Label for='round_sleeve'>Round Sleeve</Label>
                                <Input
                                    type='text'
                                    name='round_sleeve'
                                    id='round_sleeve'
                                    placeholder='Add Customer Round Sleeve'
                                    onChange={ this.onChange }
                                />

                                <Button color='dark' style={ { marginTop: '2rem' } } block>
                                    Add Item
                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { addItem }
)(ItemModal);
