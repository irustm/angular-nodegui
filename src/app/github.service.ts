import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import fetch from 'node-fetch';

const API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  /**
   * Get user profile
   */
  getUser(username: string): Observable<any> {
    return from(fetch(`${API_URL}/users/${username}`).then(res => res.json()));
  }
}
