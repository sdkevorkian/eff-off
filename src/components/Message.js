import React, {Component} from  'react';
var api = require('../utils/api');

class Message extends Component {
    render(){
        return (
                <div>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.url}</p>
                    <ul>
                    {
                        this.props.fields.map(function(field){
                            return <li key={field.field}>{field.name}</li>;
                        })
                    }
                    </ul>
                </div>
        )
    }
}

export default Message;
