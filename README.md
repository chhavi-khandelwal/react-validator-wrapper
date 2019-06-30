React Validator Wrapper provides a validating wrapper and marks your form input as invalid, if it is required and has no value.

```
  npm install --save react-validator
```
**To Test**
 - yarn install
 - yarn build
 - Open http://localhost:7700/ for example

**Example:**
```react
/*
  import Validator from 'validator';
*/

<Validator isRequired>
  <label htmlFor="name">Type and Remove </label>
  <input value={this.state.value} onChange={this.onChangeHandler.bind(this)} id="name"/>
</Validator>
```

## Style invalid messages

Use the following classes to style:
 - .invalid - This styles the input element.
 - .invalid-msg - This styles the message displayed after invalidation.
 - .validator-wrapper - This styles the container wrapping input element and invalid-message.
**Refer validator.css**

## LICENCE
MIT
