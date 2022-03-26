import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">Navbar</a>
                        <span className="badge bg-primary">{this.props.count}</span>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
