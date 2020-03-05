
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
@Injectable()
export class DialogflowService {
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;
  constructor(private http: HttpClient) {}
  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http
      .post(`${this.baseURL}`, data, {headers: httpHeaders});
      // .map(res => {
      //   return res.json();
      // })
  }
  public getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
