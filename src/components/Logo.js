import React from 'react';

class Logo extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return <div className="logo">
            <img src={this.props.image} alt="Logo" className="logo__img" />
            <h1 className="logo__label">Tuneful</h1>

        </div>
    }
}

export default Logo;