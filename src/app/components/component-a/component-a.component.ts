import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentAComponent {
  newTask = signal('');
  tasks = signal<string[]>(['Task 1', 'Task 2', 'Task 3']);

  addTask() {
    this.tasks.update((tasks) => [...tasks, this.newTask()]);
    this.newTask.set('');
  }

  changeFirstTask() {
    this.tasks.update((tasks) => {
      tasks[0] = `Task 1 (changed) ${new Date().getTime()}`;
      return tasks;
    })
  }

  calcLength(task: string) {
    console.log('calcLength called in PanelAComponent');
    return task.length;
  }

  check() {
    console.log('Called in PanelAComponent');
    return true;
  }
}
