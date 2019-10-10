import React, { Component } from 'react';

class IsRented extends Component {
    render() {
        return (
            <div>
            <button className='add-button' onClick = {this.rentMovie}>Add</button>
            </div>
        );
    }
}

export default IsRented;