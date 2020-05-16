import React, { Component } from 'react';

class Picture extends Component {
    render() {
        const { img } = this.props;
        return (
            <div className="picture">
                <img src={img} alt={this.props.alt} />
            </div>
        );
    }
}

export default Picture; 