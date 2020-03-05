import React, { Component } from 'react';

class PhoneInfo extends Component {

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }
    render() {
        const { name, number } = this.props.info;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }
        return (
            <div style = {style}>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    {number}
                </div>
                <button onClick = {this.handleRemove}>delete</button>
            </div>
        );
    }
}

export default PhoneInfo;