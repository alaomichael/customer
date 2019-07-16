import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, updateItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import UpdateModal from './UpdateModal';

class CustomerList extends Component {
 static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  onEditClick = id => {
    this.props.updateItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            { items.map(({ _id, name, phone, bust, email, underbust, hip, length, waist, shoulder, sleeve, round_sleeve, nip, stk, gown_length, skirt_length, blouse_length, skirt_waist}) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                   <>
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                      <Button
                        className='btn-primary'
                        color='blue'
                        size='sm'
                        onClick={ this.onEditClick.bind(this, _id) }
                      >
                       Edit
                       </Button>
                      <UpdateModal />
                  </>
                  ) : null}
                  { ` Name: ` }{ name }{ ` | Phone: 0` }{ phone }{ ` | E-mail: ` }{ email }<br />{ ` Bust: ` }{ bust }{ `cm | ` }{ ` Underbust: ` }{ underbust }{ `cm | ` }
                  { ` Nip to Nip: ` }{ nip }{ `cm | ` }{ ` Waist: ` }{ waist }{ `cm | ` }{ ` Hip: ` }{ hip }{ `cm | ` }{ ` Length: ` }{ length }{ `cm | ` }{ ` Shoulder to Knee: ` }{ stk }{ `cm` }<br />{ ` Shoulder: ` }{ shoulder }{ `cm | ` }{ ` Sleeve: ` }{ sleeve }{ `cm | ` }{ ` Round Sleeve: ` }{ round_sleeve }{ `cm | ` }{ ` Gown Length: ` }{ gown_length }{ `cm | ` }{ ` Skirt Length: ` }{ skirt_length }{ `cm | ` }{ ` Blouse Length: ` }{ blouse_length }{ `cm | ` }{ ` Skirt Waist: ` }{ skirt_waist }{ `cm` }
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem,updateItem }
)(CustomerList);

