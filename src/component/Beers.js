import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  view: PropTypes.string.isRequired,
  id: PropTypes.number,
  image_url: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  first_brewed: PropTypes.string,
};

class Beers extends Component {

onHandleModal(image,text){
// console.log(image);
// console.log(text);
  this.props.handlingModal(image,text);
};

  render() {
    const { view, id, name, image_url, abv, tagline, first_brewed } = this.props;
    const flexClass = `flex-item card ${view}`;
    const infoClass = ' beer-info beer-brewed'
    return (
      <li id={id} className={flexClass} key={id}>
         <div className={infoClass}> {first_brewed}</div>
         
            <img className="beer-img" onClick={(event) => this.onHandleModal({image_url},{tagline})} src={image_url} alt={tagline}/>
            <div className="beer-info">
                <span className="beer-name"> {name}</span>
                <span className="beer-abv"> {abv}%</span>
            </div>
              {/* <button onClick={this.props.clickHandler}></button> */}
      </li>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;