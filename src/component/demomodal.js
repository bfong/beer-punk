import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

componentDidMount(){
    this.modalTarget = document.createElement('div');
    this.modalTarget.className ='modal';
    document.body.appendChild(this.modalTarget);
    this._render();
} 

componentWillUpdate(){
    this._render();
}

componentWillUnmount(){
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
}

_render(){
    ReactDOM.render(
        <div>{this.props.children}</div>,
        this.modalTarget
        )
}

render (){
    return <noscript/>;}
}

export default Modal;