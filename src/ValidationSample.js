import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
    
  state = {
      password : '',
      checked : false,
      vali : false
  };

  handleInput = (e) => {
    this.setState({
        password : e.target.value
    });
};
  

  handleClick = () => {
      this.setState({
          checked : true,
          vali : this.state.password === '1111'
      });
      this.input.focus();
  };

  render () {
      return(
          <>
          <input
          type="password"
          value={this.state.password}
          onChange={this.handleInput}
          className={this.state.checked ? (this.state.vali ? 'success' : 'failure') : ''}
          ref={(ref) => this.input=ref}
          />
          <button
          onClick={this.handleClick}
          >확인</button>
          </>
      )
  }
}

export default ValidationSample;
