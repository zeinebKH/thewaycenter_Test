import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  todo: Todos = {
                title: '',
                description: '',
                StartDate: '',
                DueDate:'',
                Status: false
  };
  submitted = false;

  constructor(private taskservice: TaskService) { }
  ngOnInit() { }

  saveTask(): void {
    const data = {
      title: this.todo.title,
      description: this.todo.description,
      StartDate: this.todo.StartDate,
      DueDate: this.todo.DueDate,
      Status:this.todo.Status
    };

    this.taskservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTask(): void {
    this.submitted = false;
    this.todo = {
      title: '',
      description: '',
      StartDate:'',
      DueDate:'',
      Status: false
    };
  }
}