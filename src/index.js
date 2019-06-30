import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './validator.jsx';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "2"};
  }

  onChangeHandler = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <Validator isRequired>
        <label htmlFor="name">Type and Remove </label>
        <input value={this.state.value} onChange={this.onChangeHandler.bind(this)} id="name"/>
      </Validator>
    )
  }
}

ReactDOM.render(<Input/>, document.getElementById('root'));
