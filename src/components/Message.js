import React, {Component} from  'react';
import Modal from './Modal.js';
var api = require('../utils/api');

function Field(props) {
    function onFieldChange(e){
        var name = e.target.name;
        var value = e.target.value;
        props.onChange(name, value);
    }
    function handleKeyPress(e){
        if (e.charCode===13){
            props.loadMessage();
        }
    }
        return (
                <div className="field">
                    <label htmlFor="field">{props.field}</label>
                    <input type="text"
                        name={props.field}
                        placeholder={props.field}
                        onChange = {onFieldChange}
                        onKeyPress={handleKeyPress}/>
                </div>
                );
}

class Message extends Component {
    state = {
            message: '',
            loading: false,
            fields: {},
            error: null,
            showModal: false
        };

    onChange = (field, value) =>{
        var newField = field;
        var fields = this.state.fields;
        fields[newField] = value;
        this.setState({
            fields
        });
    }
    loadMessage = () => {
        var paramString = '';
        for (var field in this.state.fields) {
            paramString+= '/' + this.state.fields[field];
        }
        if (paramString===''){
            this.setState({
                error: 'Please fill out the fields below'
            });
        } else {
            this.setState({
                loading: true,
                error: null
            });
            api.getMessage(this.props.url, paramString).then((message)=>{
                this.setState({
                    message: message,
                    loading: false,
                    showModal: true
                });
            });
        }
    }
    toggleModal = () =>{
        this.setState(function(prevState){
            return {
                showModal: !prevState.showModal
            }
        });
    }
    render(){
        return (
                <div className="col-lg-4 col-sm-6 message">
                    <h3>{this.props.fuckOff}</h3>
                    <p>{this.props.url}</p>
                    {this.state.loading ? <p>Loading...</p> :
                            <Modal
                                show={this.state.showModal}
                                onClick={this.toggleModal}>
                                <p className="message-body">
                                    {this.state.message.message}
                                    <span className="message-subtitle">{this.state.message.subtitle}</span></p>
                            </ Modal>}
                    {this.state.error ? <p className="error">{this.state.error}</p> : ''}
                    <ul>
                    {
                        this.props.fields.map(function(field){
                            return <li key={field.field}>
                                            <Field
                                                field ={field.name}
                                                onChange= {this.onChange}
                                                loadMessage ={this.loadMessage}
                                                />
                                        </li>;
                        }.bind(this))
                    }
                    </ul>
                    <button
                        onClick={this.loadMessage}
                        className="btn btn-info">Fuck 'em!</button>
                </div>
        )
    }
}

export default Message;
