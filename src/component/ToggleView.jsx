import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FancyButton from './FancyButton.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Toggle View',
};

class ToggleView extends Component {
  render() {
    return <FancyButton {...this.props} />;
  }
}

ToggleView.propTypes = propTypes;
ToggleView.defaultProps = defaultProps;

export default ToggleView;