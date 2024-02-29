const countStudents = require('./3-read_file_async');

// Basic Integration testing
countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
