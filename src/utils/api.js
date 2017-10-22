var axios = require('axios');

function getAllOptions(){
    return axios.get('https://www.foaas.com/operations')
        .then(function(options){
            return options.data;
        }).catch(function(err){
            console.warn(err);
            return err;
        });
}

function getMessage(option, params){
    var url = option.replace(new RegExp('/:.+$'), params);
    console.log(url);
    return axios.get('https://www.foaas.com' +url)
        .then(function(message){
            return message.data;
        }).catch(function(err){
            console.warn(err);
            return err;
        })
}
module.exports = {
    getAllOptions : getAllOptions,
    getMessage: getMessage
};
