describe('todoAppController', function() {
  beforeEach(module('todoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoAppController');
  }));

  it('initialises with no tasks', function() {
    expect(ctrl.taskToAdd).toBeUndefined();
  });

  describe('when user adds a task', function() {

    it('displays the task in the list of tasks', function() {
      ctrl.taskToAdd = "Fake task";
      ctrl.addTask();
      expect(ctrl.tasks.length).toBe(1);
    });
  });

    it('can delete that task', function() {
      ctrl.taskToAdd = "Fake task";
      ctrl.addTask();
      expect(ctrl.tasks.length).toBe(1);
      ctrl.deleteTask();
      expect(ctrl.tasks.length).toBe(0);
    });

    it('can display total tasks added', function() {
      ctrl.taskToAdd = "Fake task 1";
      ctrl.addTask();
      ctrl.taskToAdd = "Fake task 2";
      ctrl.addTask();
      expect(ctrl.tasksRemaining()).toBe(2);
    });

    it('can mark tasks as done', function() {
      ctrl.taskToAdd = "Fake task 1";
      ctrl.addTask();
      ctrl.taskToAdd = "Fake task 2";
      ctrl.addTask();
      ctrl.tasks[1].done = true;
      console.log(ctrl.tasks[1]);
      expect(ctrl.tasksRemaining()).toBe(1);
    });

    xit('can update/change that task', function() {
      ctrl.taskToAdd = "This task will be updated";
      crl.addTask();
      ctrl.updateTask("This task HAS BEEN updated");
      expect(ctrl.tasks[0].title).toBe("This task HAS BEEN updated");
    });

  describe('user can filter tasks', function() {
    it('to show only completed tasks', function() {
      ctrl.taskToAdd = "Fake task 1";
      ctrl.addTask();
      ctrl.tasks[0].done = true;
      ctrl.taskToAdd = "Fake task 2";
      ctrl.addTask();

    });
  });

});