todoApp.controller('todoAppController', [function() {
  var self = this;
  self.tasks = [];


  self.addTask = function() {
    self.tasks.push({'title': self.taskToAdd});
  };
}]);