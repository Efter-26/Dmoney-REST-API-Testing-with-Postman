const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/37268268-31bc437c-db20-4c6f-bc40-2fc5cdd34d21?access_key=${process.env.secretKey}`,
    //collection:require('./collection/collection.json'), [this is use for static collection run, but good format is to use directly the key ]
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
