import React, {Component} from  'react';
var api = require('../utils/api');

function Field(props) {
    function onFieldChange(e){
        var name = e.target.name;
        var value = e.target.value;
        props.onChange(name, value);
    }
        return (
                <div>
                    <label htmlFor="field">{props.field}</label>
                    <input type="text"
                        name={props.field}
                        placeholder={props.field}
                        onChange = {onFieldChange}/>
                </div>
                );
}

class Message extends Component {
    state = {
            message: '',
            loading: false,
            fields: {}
        };

    onChange = (field, value) =>{
        var newField = field;
        var fields = this.state.fields;
        fields[newField] = value;
        this.setState({
            fields
        });
    }
    handleClick = () => {
        var paramString = '';
        for (var field in this.state.fields) {
            paramString+= '/' + this.state.fields[field];
        }
        this.setState({
            loading: true
        });
        api.getMessage(this.props.url, paramString).then((message)=>{
            this.setState({
                message: message,
                loading: false
            });
        })
    }
    render(){
        return (
                <div>
                    <h3>{this.props.fuckOff}</h3>
                    <p>{this.props.url}</p>
                    {this.state.loading ? <p>Loading...</p> :
                            <p>{this.state.message.message}{this.state.message.subtitle}</p>}
                    <ul>
                    {
                        this.props.fields.map(function(field){
                            return <li key={field.field}>
                                            <Field
                                                field ={field.name}
                                                onChange= {this.onChange}
                                                />
                                        </li>;
                        }.bind(this))
                    }
                    </ul>
                    <button onClick={this.handleClick}>Tell your friends to FUCK OFF!</button>
                </div>
        )
    }
}

export default Message;
