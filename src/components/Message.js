import React, {Component} from  'react';
var api = require('../utils/api');

class Field extends Component {
    constructor(props) {
        super(props);
    }
    onFieldChange(e){
        var name = e.target.name;
        var value = e.target.value;
        this.props.onChange(name, value);
    }
    render () {
        return (
                <div>
                    <label htmlFor="field">{this.props.field}</label>
                    <input type="text"
                        name={this.props.field}
                        placeholder={this.props.field}
                        onChange = {this.onFieldChange.bind(this)}/>
                </div>
                );
    }
}

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            fields: {}
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(field, value){
        var newField = field;
        var fields = this.state.fields;
        fields[newField] = value;
        this.setState({
            fields
        });
    }
    handleClick(){
        var paramString = '';
        for (var field in this.state.fields) {
            paramString+= '/' + this.state.fields[field];
        }
        console.log(paramString);
    }
    render(){
        return (
                <div>
                    <h3>{this.props.fuckOff}</h3>
                    <p>{this.props.url}</p>
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
                    <button onClick={this.handleClick.bind(this)}>Tell your friends to FUCK OFF!</button>
                </div>
        )
    }
}

export default Message;
