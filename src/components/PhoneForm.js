import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, //input -> event target, value -> value of value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
        this.setState({
            name:'',
            number:'',
        })
    }


    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                    name="name"
                    placeholder = "name" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                /> {/*input에서 값이 변할 때 마다 함수 호출*/}

                <input 
                    name="number"
                    placeholder = "number" 
                    onChange={this.handleChange} 
                    value = {this.state.number}
                />

                <button type="submit">summit</button>

            </form>
        );
    }
}

export default PhoneForm;