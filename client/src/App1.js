import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CustomerList from './components/CustomerList';
import ItemModal from './components/ItemModal';
//import ProductItem from './components/ProductItem';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

   render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <ItemModal />
            <CustomerList />
           </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
