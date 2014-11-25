// import Ember from 'ember';

// var TodosCompleteRoute = Ember.Route.extend({
//   // define the model for the template, filtering the
//   // the completed todos
//   model: function() {
//     return this.store.filter('todo', function(todo) {
//       return todo.get('isCompleted');
//     });
//   },
//   // reuse the todos index template and controller using the renderTemplate
//   renderTemplate: function() {
//     this.render('todos.index', {controller: controller});
//   }
// });

// export default TodosCompleteRoute;

import Ember from 'ember';

var TodosCompleteRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos.index', {controller: controller});
    }
});

export default TodosCompleteRoute;
