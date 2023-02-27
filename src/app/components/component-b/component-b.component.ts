import { Component } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent {
  newTask = '';
  tasks = ['Task 1', 'Task 2', 'Task 3'];

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  changeFirstTask() {
    this.tasks[0] = `Task 1 (changed) ${new Date().getTime()}`;
  }

  calcLength(task: string) {
    console.log('calcLength called in PanelBComponent');
    return task.length;
  }

  check() {
    console.log('Called in PanelBComponent');
    return true;
  }
}
