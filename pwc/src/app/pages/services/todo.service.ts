import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Example GET request
  getTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}

