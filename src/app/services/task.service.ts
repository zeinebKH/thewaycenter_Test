import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../models/todos';

const baseUrl = 'http://localhost:8080/api/body';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  
  getAll(): Observable<Todos[]> {
    return this.http.get<Todos[]>(baseUrl);
  }

  get(id: any): Observable<Todos> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${baseUrl}?title=${title}`);
  }
}
