import React, { Component } from 'react';
import Message from './components/Message';
var api = require('./utils/api');

class App extends Component {
    state = {
        options: null,
        loading: true
    }
    componentDidMount() {
        api.getAllOptions().then((options)=>{
            return this.setState(function(){
                return {
                    options: options,
                    loading: false
                }
            })
        })
    }
    render() {
        var options = this.state.options;
        return (
            <div className="App container-fluid">
                <h1>Eff Off</h1>
                <h2>Tell your friends to FUCK OFF!!</h2>
                <div className="row">
                    {this.state.loading ? <h2>loading...</h2>
                        : options.map(function(option){
                            return <Message
                                key = {option.url}
                                fuckOff ={option.name}
                                url={option.url}
                                fields = {option.fields} />
                        })}
                    </div>
            </div>
        );
    }
}

export default App;
