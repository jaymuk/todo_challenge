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
});