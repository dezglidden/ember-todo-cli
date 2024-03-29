import Ember from 'ember';

var TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // get the title of the new title input field
      var title = this.get('newTitle');
      if(!title) {
        return false;
      }
      if(!title.trim()) {
        return;
      }

      // create the new todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // clear the todo input field
      this.set('newTitle', '');

      // save the new model
      todo.save();
    },
    clearCompleted: function() {
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  allAreDone: function(key, value) {
    console.log(key + ' : ' + value);
    if (value === undefined) {
      return this.get('length') > 0  && this.isEvery('isCompleted', true);
    } else {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('@each.isCompleted'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return (remaining === 1) ? 'item' : 'items';
  }.property('remaining')

});

export default TodosController;
