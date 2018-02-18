import React, {Component} from  'react';
import Share from './Share.js';

class Modal extends Component {
    render(){
        if (!this.props.show){
            return null;
        }
        return (
            <div className="backdrop">
                <div className="modal-message">
                    {this.props.children}
                    <button
                        className="btn btn-lg btn-close float-left"
                        onClick={this.props.onClick}>close</button>
                <Share text={this.props.text} />
                </div>
            </div>
        )
    }
}
export default Modal;
