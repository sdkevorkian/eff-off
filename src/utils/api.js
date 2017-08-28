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

module.exports = {
    getAllOptions : getAllOptions
};
