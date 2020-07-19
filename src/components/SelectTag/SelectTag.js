import React, { Component } from 'react';

class SelectTag extends Component {
    render() {
        return (
            <div>
                <select name="rating-select">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
        );
    }
}

export default SelectTag;