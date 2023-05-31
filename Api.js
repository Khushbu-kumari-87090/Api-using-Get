const axios = require('axios');
const Model = require('./model');

const data = {
    name: 'khushbu',
    email_id: 'kristina235@gmail.com'
};

axios.post('https://reqres.in/api/user', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });

    

axios.get('https://reqres.in/api/user')
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res);
    }).catch((err) => {
        console.error(err);
    });