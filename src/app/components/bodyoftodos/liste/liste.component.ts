import { Component, OnInit ,EventEmitter ,Input ,Output} from '@angular/core';
import { from } from 'rxjs';
import { Todos } from 'src/app/models/todos';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() todos =  Todos;
 @Output() selectedTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectTodo(){
    this.selectedTodo.emit(this.selectedTodo);
  }

}
