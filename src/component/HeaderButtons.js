import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerButton from './BeerButton.jsx';
import ToggleView from './ToggleView.jsx';

const propTypes = {
  BeerClickHandler: PropTypes.func,
  toggleClickHandler: PropTypes.func,
  sort: PropTypes.string,
};

class HeaderButtons extends Component {
  constructor(props) {
    super();
    this.state = {
      sort: props.initialSort,
    };

    // ES5 example
    // this.onHandleChange = this.onHandleChange.bind(this);
}

onHandleChange(event) {
  this.setState({
    sort: event.target.value});
    this.props.sortSelectHandler(event.target.value);
}

  render() {
    const { BeerClickHandler, toggleClickHandler, sort} = this.props;
    // TEST: const stateSortUpper = this.state.sort.toUpperCase();
    return (
      <header>
        <div className = "button-container">
         <BeerButton
            clickHandler = {BeerClickHandler}
         />
         <ToggleView
            clickHandler = {toggleClickHandler}
         />
          </div>
            
            <p className="note">pick your sort: </p>
            <div className="dropdown">
              <select sorthandler={sort} onChange={(event) => this.onHandleChange(event)}>
                <option value="id">ID</option>
                <option value="first_brewed">Brewed Date</option>
                <option value="abv">abv</option>
              </select>
            </div>
           <p className="note">sorted by: {this.state.sort}</p>
      
      </header>
    );
  }
}

HeaderButtons.propTypes = propTypes;

export default HeaderButtons;