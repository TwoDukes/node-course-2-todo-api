const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').deleteMany({name: 'Dustin'}).then((res) => {
    console.log(res);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('588556a9e1541f3a7ff17e19')}).then((res) => {
    console.log(res);
  });

  //db.close();
});
