import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl = "http://localhost:8080/api";
  //tells the server that the content-type is JSON
  baseOptions = { 'Content-Type': 'application/json' };

  //creates an instance of HttpHeaders that can be used by other services
  getHttpHeaders(headers = {}) {
    const httpOptions = {
      headers: new HttpHeaders({ ...this.baseOptions, ...headers })
    };
    return httpOptions;
  }
  constructor() { }
}
