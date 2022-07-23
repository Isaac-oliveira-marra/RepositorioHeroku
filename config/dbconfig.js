const moongose = require('mongoose');
require('dotenv').config()

  module.exports = function starDB () {
    moongose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, 
    () => console.log('db concectado'))
}
