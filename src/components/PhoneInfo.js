import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: "",
    number: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) return true;
    return this.props.info !== nextProps.info;
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    //true->false
    //onUpdate
    //false->true
    //state에 info 값 넣어주기

    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        number: this.state.number
      });
    } else {
      this.setState({
        name: info.name,
        number: info.number
      });
    }
    this.setState({
      editing: !this.state.editing
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.props.info;
    const { editing } = this.state;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    console.log(name);

    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <div>
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              <input
                name="number"
                onChange={this.handleChange}
                value={this.state.number}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{number}</div>
          </Fragment>
        )}
        <button onClick={this.handleRemove}>delete</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? "save" : "modify"}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
