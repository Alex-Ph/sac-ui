import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagetaskService {

  constructor(private http: HttpClient) {
  }

  // return observable to be able to check if it worked or not
  public completeTask(id: string, signature: string): Observable<string>{
    let url = `http://localhost:8080/completeTask/`
    let task = {
      id,
      signature
    }

    return this.http.post<string>(url, task);
  }

  public claimTask(id: string, assignee: string){
    let url = `http://localhost:8080/claimTask/`
    let task = {
      id,
      assignee
    }
    return this.http.post<string>(url, task).subscribe();
  }
}
