import axios from 'axios';

axios.get('http://jsonplaceholder.typicode.com/posts/2')
  .then(res => {
    console.log("Post Body:", res.data.body);
  })
  .catch(err => {
    console.log("Error:", err.message);
  });
