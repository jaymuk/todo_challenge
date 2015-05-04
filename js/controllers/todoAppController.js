todoApp.controller('todoAppController', [function() {
  var self = this;
  self.tasks = [];


  self.addTask = function() {
    self.tasks.push({'title': self.taskToAdd, 'done':false, 'beingUpdated':false});
    self.taskToAdd = '';
  };

  self.deleteTask = function(index) {
    self.tasks.splice(index, 1);
  };

  self.tasksRemaining = function() {
    var remaining = 0;
    for (var i = 0; i < self.tasks.length; i++) {
      if (self.tasks[i].done === false) {
        remaining += 1;
      }
    }
    return remaining;
  };

  self.tasksComplete = function() {
    var complete = 0;
    for (var i = 0; i < self.tasks.length; i++) {
      if (self.tasks[i].done === true) {
        complete += 1;
      }
    }
    return complete;
  };

  // self.updateTask = function() {
  //   console.log('test');
  //   $('.update').toggleClass('updater', [false, true]);
  // };

  // self.submitUpdate = function() {
  //   console.log('update!!');
  // };
  
}]);

  // when I click on the list item button
  // I want that list item to turn into an input box
  // I want that input box to replace what was in that particular list element upon pressing enter
