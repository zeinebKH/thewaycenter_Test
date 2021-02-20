import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from 'src/app/models/todos';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() currentTask: Todos = {
    title: '',
    description: '',
    StartDate: '',
    DueDate: '',
    Status: false
  };
  message = '';

  constructor(private taskservice: TaskService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }
  getTask(id: string): void {
    this.taskservice.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status: boolean): void {
    const data = {
      title: this.currentTask.title,
      description: this.currentTask.description,
      published: status
    };

    this.taskservice.update(this.currentTask.id, data)
      .subscribe(
        response => {
          this.currentTask.Status = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
  updateTask(): void {
    this.taskservice.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    this.taskservice.delete(this.currentTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/liste']);
        },
        error => {
          console.log(error);
        });
  }

}