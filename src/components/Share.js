import React, {Component} from  'react';

class ShareButton extends Component {
    render(){
    var text = encodeURIComponent(this.props.text);
    var url = this.props.url + text;
        return (
            <button className={"btn btn-lg btn-share col-xs-1 col-sm-2 " +this.props.classes}>
                <a href={url}><i className={"fa-2x fab fa-"+this.props.icon}></i></a>
            </button>
        )
    }
}

export default ShareButton;
