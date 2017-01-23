const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find(
  //   {
  //     _id: new ObjectID("5885531f9ad5e038c0f1923b")
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to print documents', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to print documents', err);
  // });

  db.collection('Users').find({name: 'Dustin'}).toArray().then((users) => {
    console.log('Users');
    console.log(users);
  }, (err) => {
    console.log(err);
  })

  db.close();
});
