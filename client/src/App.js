import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CustomerList from './components/CustomerList';
import CustomerLists from './components/CustomerLists';
import ItemModal from './components/ItemModal';
import ProductItem from './components/ProductItem';
import AddProduct from './AddProduct';
import EditTodo from './components/EditModal'
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
     render() {
        return (
            <Provider store={ store }>
                <div className='App'>
                    <AppNavbar />
                    <Container>
                        <ItemModal />
                        <CustomerList />
                        <CustomerLists />
                       </Container>
                </div>
            </Provider>      
        );
    }
}

export default App;
