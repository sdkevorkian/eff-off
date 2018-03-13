import React, {Component} from  'react';
import ShareButton from './Share.js';

class Modal extends Component {
    render(){
        if (!this.props.show){
            return null;
        }
        return (
            <div className="backdrop">
                <div className="modal-message">
                    {this.props.children}
                    <div>
                    </div>
                    <div className="row">
                        <button
                            className="btn btn-lg btn-close col-xs-1 col-sm-4"
                            onClick={this.props.onClick}>close</button>
                        <ShareButton text={this.props.text} url="https://twitter.com/intent/tweet?url=&text=" icon="twitter" classes="offset-sm-3"/>
                        <ShareButton text={this.props.text} url="https://facebook.com/sharer.php?u=test.com&quote=" icon="facebook-square" classes="offset-sm-1"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;
