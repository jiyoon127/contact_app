import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;//렌더링 되는 값이 아니면 굳이 state에 넣을 필요 없음

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    });
  }

  handleRemove = (id) => {
      const { information } = this.state;
      this.setState({
        information: information.filter(info => info.id !== id)
      });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id,
              ...data,
            };
            return info;
          }
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        <PhoneInfoList 
          data={this.state.information}
          onRemove = {this.handleRemove}
          onUpdate  = {this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;