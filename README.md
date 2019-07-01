React Validator Wrapper provides a validating wrapper and marks your form input as invalid, if it is required and has no value.

**Installation**
```
  npm install --save react-validator-wrapper
```

### Props

|   _Prop_    |               _Description_                 | _Default value_ |
| :---------: | :-----------------------------------------: | :-------------: |
| isRequired  | tells wrapper to validate input             |                 |
| msg         | displayed when input is validated           | *It is required |


**Example:**
```react
import Validator from 'validator';

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
      <Validator isRequired msg="*required">
        <label htmlFor="name">Type and Remove </label>
        <input value={this.state.value} onChange={this.onChangeHandler.bind(this)} id="name"/>
      </Validator>
    )
  }
}

ReactDOM.render(<Input/>, document.getElementById('root'));
```

## Style invalid messages

Use the following classes to style:
 - .invalid - This styles the input element.
 - .invalid-msg - This styles the message displayed after invalidation.
 - .validator-wrapper - This styles the container wrapping input element and invalid-message.
**Refer validator.css**

## LICENCE
MIT
