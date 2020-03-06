import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;//렌더링 되는 값이 아니면 굳이 state에 넣을 필요 없음

  state = {
    information: [{
      id: 0,
      name: 'Sam',
      number: '010-0000-0001'
    },{
      id: 1,
      name: 'Matt',
      number: '010-0000-0002'
    },{
      id: 2,
      name: 'Chris',
      number: '010-0000-0003'
    },
  ],
  keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
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
        <input
          onChange = {this.handleChange}
          value = {this.state.keyword}
          placeholder = 'Search...'
        />
        <PhoneInfoList 
          data = {this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove = {this.handleRemove}
          onUpdate  = {this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;