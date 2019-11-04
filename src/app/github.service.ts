import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http.get(`${API_URL}/users/${username}`);
  }
}
