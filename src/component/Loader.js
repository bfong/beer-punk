import React from 'react'
// Sample From: https://codepen.io/ispal/pen/mVaaJe
class Loader extends React.Component {
    render () {
         return (
            <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        )
    }
}

export default Loader
