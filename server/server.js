var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((res) => {
//     console.log('Saved Todo', res)
//   }, (err) => {
//     console.log('unable to save Todo', err);
//   }
// );


var otherTodo = new Todo({
  text: 'Cook dinner',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((res) => {
  console.log('Added Todo', res);
}, (err) => {
  console.log(err);
});
