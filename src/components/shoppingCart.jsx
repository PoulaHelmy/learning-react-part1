import React, {Component} from "react";
import Product from "./Product";

class ShoppingCart extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1>
                {this.props.products.map((product) => (
                    <Product key={product.id}
                             product={product}
                             onAdd={this.props.onIncrement}
                             onDelete={this.props.onDecrement}/>
                ))}
                <button className="btn btn-secondary m-2" onClick={this.props.onReset}>Reset</button>
            </React.Fragment>
        );
    }
}

export default ShoppingCart;
