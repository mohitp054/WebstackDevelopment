const { error } = require('console');
const fs = require('fs');
const path = require('path');

fs.unlike(path.join(__dirname, '/posts','blogPost.txt'), (err) => {
    if (err) {
        console.log('No such file is present');
        return;
    }
});