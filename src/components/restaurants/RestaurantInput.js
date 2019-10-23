import React, { Component } from 'react';
//import cuid from 'cuid';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
