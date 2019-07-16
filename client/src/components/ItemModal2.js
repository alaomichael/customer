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
    email: ''
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
      email: this.state.email
     
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Add Customer
          </Button>
        ) : (
          <h4 className='mb-3 ml-4'>Please log in to manage Customers Details</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Customers Data</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add Customer Name'
                  onChange={this.onChange}
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
               <Button color='dark' style={{ marginTop: '2rem' }} block>
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
