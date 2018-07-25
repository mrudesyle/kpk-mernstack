import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
const PORT = process.env.PORT || 3000;

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

// app.listen(config.port, (err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.info('Server started on port %s.', config.port)
// })
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
