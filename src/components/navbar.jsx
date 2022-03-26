import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <span className="badge bg-primary">3</span>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
