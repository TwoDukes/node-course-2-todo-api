const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '588e85ee1473f731588dc4b511';
//
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) return console.log('Id not found');
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5886cbd17b523f1e0892f806').then((user) => {
  if(!user) return console.log('Unable to find user');
  console.log('user', user);
}, (e) => {
  console.log(e);
});
