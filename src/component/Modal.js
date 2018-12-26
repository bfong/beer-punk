import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

 class Modal extends Component {
  
    onClose = (e) => {
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Modal deactivate on ESC key 
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
    }

    render() {
      
        if (!this.props.show) {
            return null;
        }
        return ( <div className="modal">
        <div className="modal-main">
            {this.props.children}
            <div className="modal-close">
                <button onClick={(e) => { this.onClose(e)}}>
                    Close
                </button>
            </div>
        </div>
    </div>)
    }
}

Modal.propTypes = propTypes;

export default Modal;