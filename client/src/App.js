import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CustomerList from './components/CustomerList';
import ItemModal from './components/ItemModal';
import ProductItem from './components/ProductItem';
import AddProduct from './AddProduct';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    

    // {constructor(props) {
    //     super(props);

    //     this.state = {
    //         products: this.props
    //     };

    //     this.onDelete = this.onDelete.bind(this);
    //     this.onAdd = this.onAdd.bind(this);
    //     this.onEditSubmit = this.onEditSubmit.bind(this);
    // }
    // componentWillMount() {
    //     const products = this.getProducts();
    //     this.setState({ products });
    // }

    // getProducts() {
    //     return this.state.items;

    // }

    // componentDidMount() {
    //   store.dispatch(loadUser());
    // }

    // onAdd(name, bust) {
    //     const products = this.getProducts();
    //     products.push({
    //         name, bust
    //     });

    //     this.setState({ products });

    // }

    // onDelete(name) {
    //     const products = this.getProducts();
    //     const filteredProducts = products.filter(product => {
    //         return product.name !== name;
    //     });

    //     this.setState({ products: filteredProducts });
    // }

    // onEditSubmit(name, bust, originalName) {
    //     let products = this.getProducts();

    //     products = products.map(product => {
    //         if (product.name === originalName) {
    //             product.name = name;
    //             product.bust = bust;
    //         }
    //         return product;
    //     });

    //     this.setState({ products });
    // }}

    render() {
        return (
            <Provider store={ store }>
                <div className='App'>
                    <AppNavbar />
                    <Container>
                        <ItemModal />
                        <CustomerList />
                        <ProductItem />
                    </Container>
                </div>
            </Provider>
                // <h1>Product Manager</h1>

                //  {
                //     this.state.products.map(product => {
                //         return (
                //             <ProductItem
                //                 key={ product.name }
                //                 { ...product }
                //                 onDelete={ this.onDelete }
                //                 onEditSubmit={ this.onEditSubmit }
                //             />
                //         );
                //     })
                // }

           
        );
    }
}

export default App;
