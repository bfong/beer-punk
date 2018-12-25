import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FancyButton from './FancyButton.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Get Some Beers',
};

class BeerButton extends Component {
  render() {
    return <FancyButton {...this.props} />;
  }
}

BeerButton.propTypes = propTypes;
BeerButton.defaultProps = defaultProps;

export default BeerButton;