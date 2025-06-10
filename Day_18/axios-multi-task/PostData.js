<<<<<<< HEAD
const axios = require('axios');

const newPost = {
    title: "My New Post",
    body: "This is the body of the new post.",
    userId: 1
};

axios.post('http://jsonplaceholder.typicode.com/posts', newPost)
    .then(res => {
        console.log("✅ Post created successfully!");
        console.log("New Post ID:", res.data.id);
    })
    .catch(err => {
        console.log("❌ Error sending post:", err.message);
    });
=======
const axios = require('axios');

const newPost = {
    title: "My New Post",
    body: "This is the body of the new post.",
    userId: 1
};

axios.post('http://jsonplaceholder.typicode.com/posts', newPost)
    .then(res => {
        console.log("✅ Post created successfully!");
        console.log("New Post ID:", res.data.id);
    })
    .catch(err => {
        console.log("❌ Error sending post:", err.message);
    });
>>>>>>> a9d48f6 (commit)
