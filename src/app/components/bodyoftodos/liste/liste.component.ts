import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
todoo?: Todos[];
currentTask?: Todos;
currentIndex = -1;
title = '';        
  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
  }
  retrieveTask(): void {
    this.taskservice.getAll()
      .subscribe(
        data => {
          this.todoo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTask();
    this.currentTask = undefined;
    this.currentIndex = -1;
  }

  setActiveTask(todoo: Todos, index: number): void {
    this.currentTask = todoo;
    this.currentIndex = index;
  }

  removeAllTask(): void {
    this.taskservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.taskservice.findByTitle(this.title)
      .subscribe(
        data => {
          this.todoo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
