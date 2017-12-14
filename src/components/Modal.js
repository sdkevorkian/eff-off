import React, {Component} from  'react';

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
                        className="btn btn-close"
                        onClick={this.props.onClick}>close</button>
                </div>
            </div>
        )
    }
}
export default Modal;
