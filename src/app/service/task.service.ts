import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TaskService {

  private taskUrl: string;
 
  constructor(private http: HttpClient) {
    this.taskUrl = 'http://localhost:8080/openSacTasks';
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }
}
