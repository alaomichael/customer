import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, updateItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import UpdateModal from './UpdateModal';

import axios from 'axios';

class CustomerLists extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };
    constructor(props) {
        super(props);

        this.onChangeBust = this.onChangeBust.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        const { bust} = this.props.item;
        
        
        this.state = {
          bust
        }
    }
    componentDidMount() {
        this.props.getItems();
    }

    onChangeBust(e) {
        this.setState({
            bust: e.target.value
        });
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    };

    onEditClick = id => {
        this.props.updateItem(id);
    };

    onSubmit(e) {
        e.preventDefault();
        const { items } = this.props.item;
        const {_id} = items;
          const item = {
            bust: this.state.bust,
            _id          
        };
       

console.log(item);

        axios.put(`http://localhost:5000/api/items/`, item)
            .then(res => console.log(res.data));

// this.props.history.push(`/items/${id}`);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
           <h3>Update</h3>
            <form onSubmit={ this.onSubmit }>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>

                        { items.map(({ _id, name, phone, bust, email, underbust, hip, length, waist, shoulder, sleeve, round_sleeve, nip, stk, gown_length, skirt_length, blouse_length, skirt_waist }) => (
                            <CSSTransition key={ _id } timeout={ 500 } classNames='fade'>
                                <ListGroupItem>
                                { this.props.isAuthenticated ? (
                                    <>
                                        <Button
                                            className='remove-btn'
                                            color='danger'
                                            size='sm'
                                            onClick={ this.onDeleteClick.bind(this, _id) }
                                        >
                                            &times;
                    </Button>

                                    </>
                                ) : null }

                                    { ` Name: ` }{ name }{ ` | Phone: 0` }{ phone }{ ` | E-mail: ` }{ email }<br />{ ` Bust: ` }{ bust }{ `cm` }

                                <div className="form-group">
                                    <label>Bust: </label>
                                    <input type="text"
                                        className="form-control"
                                        value={ this.state.bust }
                                        onChange={ this.onChangeBust }
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Update" className="btn btn-primary" />
                                </div>
                                </ListGroupItem>
                            </CSSTransition>
                        )) }
                            </TransitionGroup>
                            </ListGroup >
                        </form>
                   </Container >
            );
        }
    }
    
const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem, updateItem }
)(CustomerLists);

