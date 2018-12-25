import React, { Component } from 'react';
// import classNames from 'classnames';

export default class FancyButton extends Component {
  render() {
    const { clickHandler, text} = this.props;  

    return (
      <button onClick={clickHandler}>
        {text}
      </button>
    );
  }
}