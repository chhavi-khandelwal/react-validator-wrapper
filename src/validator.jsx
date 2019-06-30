'use strict';

import React from 'react';

class Validator extends React.Component {
  constructor(props) {
    super(props);
    this.validations = {
      msg: props.msg
    }
  }

  validate() {
    for (let i in this.props) {
      if (this.props.hasOwnProperty(i)) {
        switch(i) {
          case "isRequired": {
            return this.props.children.map((child, index) => {
              if (child.type === "input" && (child.props && ((child.props.value + "") === "undefined") || child.props.value === "")) {
                this.validations.msg = this.props.msg || "*It is required";
                
                return React.cloneElement(child, {
                  className: child.props.className ? child.props.className + " invalid" : "invalid",
                  key: child.props.key || Date.now()
                });
              }
              else {
                this.validations.msg = "";
                return child;
              }
            });
            break;
          }
          default:
            break;
        }

      }
    }
  }
 
  render() {
    const children = this.validate();
    return(
      <div className="validator-wrapper">{children}<div className="invalid-msg">{this.validations.msg}</div></div>
    )
  }
}

export default Validator;
