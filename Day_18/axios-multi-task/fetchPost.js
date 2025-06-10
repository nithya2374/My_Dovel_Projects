<<<<<<< HEAD
const axios = require('axios');
const fs = require('fs');

axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        const content = `Title: ${res.data.title}\nBody: ${res.data.body}`;
        fs.writeFileSync('output.txt', content);
        console.log("✅ Post written to output.txt");
    })
    .catch(err => {
        console.log("❌ Error:", err.message);
    });
=======
const axios = require('axios');
const fs = require('fs');

axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        const content = `Title: ${res.data.title}\nBody: ${res.data.body}`;
        fs.writeFileSync('output.txt', content);
        console.log("✅ Post written to output.txt");
    })
    .catch(err => {
        console.log("❌ Error:", err.message);
    });
>>>>>>> a9d48f6 (commit)
