import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <nav className={this.props.part}>
                <h3 className="nav__label">{this.props.title}</h3>
                {this.props.children}
            </nav>
        )
    }
}

export default Nav;