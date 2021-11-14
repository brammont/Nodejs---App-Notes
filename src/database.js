const mongoose = require('mongoose')
const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGO_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGO_DATABASE}`
//console.log(process.env)
//MONGODB_URI='mongodb://localhost/notes-app'
mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true
})
    .then( db => console.log('Database is connected'))
    .catch(err => console.log(err));