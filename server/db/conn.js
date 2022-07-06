const mongoose = require('mongoose');

const DB = process.env.DATABASE;
// database connection
mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log('connected');
}).catch((err) => console.log('Error'));