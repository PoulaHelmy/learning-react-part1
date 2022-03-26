import {Component} from "react";
import {getBadgeClasses} from "../utils/styleUtils";


class Product extends Component {


    handleClick = (type, num) => {
        const value = type === 'add' ? this.state.count + num : this.state.count - num;
        this.setState({
            count: value
        });
    };


    render() {
        console.log(this.props);
        return (
            <div className="m-2">
                <span>{this.props.product.name}</span>
                <span
                    className={getBadgeClasses(this.props.product.count)}>
                    {this.props.product.count}
                </span>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                        this.props.onAdd(this.props.product)
                    }}>
                    <i className="fa fa-plus"></i>
                </button>
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                        this.props.onDelete(this.props.product)
                    }}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        );
    }
}

export default Product;
