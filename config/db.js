const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
    console.error(`Database error: \n${err}`);
});