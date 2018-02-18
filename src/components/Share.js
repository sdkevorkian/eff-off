import React, {Component} from  'react';

class Share extends Component {
    render(){
    var text = encodeURIComponent(this.props.text);
        return (
            <div className="float-right">
                <button className="btn btn-lg btn-share">
                    <a href={"https://twitter.com/intent/tweet?url=&text="+text}><i className="fa-2x fab fa-twitter"></i></a>
                </button>
                <button className="btn btn-lg btn-share">
                    <a href={"https://facebook.com/sharer.php?u=test.com&quote="+text}><i className="fa-2x fab fa-facebook-square"></i></a>
                </button>
            </div>
        )
    }
}

export default Share;
