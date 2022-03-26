import React, {Component} from 'react';

import Navbar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";

import './App.css';

class App extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'Burger',
                price: 10,
                count: 0
            },
            {
                id: 2,
                name: 'Milk',
                price: 20,
                count: 0
            },
            {
                id: 3,
                name: 'Coffee',
                price: 30,
                count: 0
            }
        ],
        total: 3
    };
    handleDecrement = (product) => {
        const products = this.state.products.map((item) => {
            if (item.id === product.id) {
                item.count--;
            }
            return item;
        }).filter((item) => {
            if (item.id === product.id) {
                return item.count > 0;
            } else {
                return item;
            }
        });
        this.setState({products});
    };
    handleIncrement = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].count++;
        this.setState({products});
    };
    handleReset = () => {
        const products = this.state.products.map((item) => {
            item.count = 0;
            return item;
        });
        this.setState(products);
    };

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container">
                    <ShoppingCart
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                        products={this.state.products}/>
                </main>
            </React.Fragment>
        );
    }
}


export default App;

