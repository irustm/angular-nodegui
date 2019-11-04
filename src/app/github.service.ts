import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import fetch from 'node-fetch';

const API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  getUser(username: string) {
    return from(fetch(`${API_URL}/users/${username}`).then(res => res.json()));
  }
}
