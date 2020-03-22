import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {
  }

  public findOpenTasks(): Observable<Task[]> {
    let taskUrl = 'http://localhost:8080/openSacTasks';
  
    return this.http.get<Task[]>(taskUrl);
  }

  public findCompletedTasks(): Observable<Task[]> {
    let taskUrl = 'http://localhost:8080/completedSacTasks';
  
    return this.http.get<Task[]>(taskUrl);
  }
}
