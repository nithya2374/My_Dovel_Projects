<<<<<<< HEAD
const axios = require('axios');
const chalk = require('chalk');
const { formatUser } = require('./utils.cjs');

axios.get('http://jsonplaceholder.typicode.com/users')
    .then(res => {
        res.data.forEach(user => {
            console.log(chalk.green(formatUser(user)));
        });
    })
    .catch(err => {
        console.log(chalk.red("Error fetching users:"), err.message);
    });
=======
const axios = require('axios');
const chalk = require('chalk');
const { formatUser } = require('./utils.cjs');

axios.get('http://jsonplaceholder.typicode.com/users')
    .then(res => {
        res.data.forEach(user => {
            console.log(chalk.green(formatUser(user)));
        });
    })
    .catch(err => {
        console.log(chalk.red("Error fetching users:"), err.message);
    });
>>>>>>> a9d48f6 (commit)
