import React, { Component } from 'react';
import Message from './components/Message';
var api = require('./utils/api');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null,
            loading: true
        }
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
            <div className="App">
                <h1>Eff Off</h1>
                {this.state.loading ? <h2>loading...</h2>
                    : options.map(function(option){
                        return <Message
                            key = {option.url}
                            fuckOff ={option.name}
                            url={option.url}
                            fields = {option.fields}
                        />
                    })}
            </div>
        );
    }
}

export default App;
