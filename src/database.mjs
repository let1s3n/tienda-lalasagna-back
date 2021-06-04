import mongoose from 'mongoose'
console.log(process.env.LALASAGNADB_URI);
const URI = process.env.LALASAGNADB_URI;

mongoose.connect(URI, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology: true
});


const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is connected');
})