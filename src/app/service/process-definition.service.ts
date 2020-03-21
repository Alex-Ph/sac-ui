import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Processinstance } from 'src/app/model/processinstance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessDefinitionService {

  private startSacProcessUrl: string;
 
  constructor(private http: HttpClient) {
    this.startSacProcessUrl = 'http://localhost:8080/startSacProcessInstance';
  }

  public startSacProcessInstance(): Observable<Processinstance> {
    return this.http.post<Processinstance>(this.startSacProcessUrl, null);
  }
}
