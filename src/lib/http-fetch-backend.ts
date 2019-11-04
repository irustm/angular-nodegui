import { HttpBackend, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import fetch from 'node-fetch';

function strMapToObj(strMap) {
  const obj = Object.create(null);

  for (const [k, v] of strMap.headers) {
    obj[k] = v;
  }
  return obj;
}

export class HttpFetchBackend extends HttpBackend {
  handle(req: HttpRequest<any>): Observable<any> {
    return from(
      fetch(req.url, {
        method: req.method,
        cache: 'no-cache',
        credentials: req.withCredentials ? 'same-origin' : undefined,
        headers: req.headers ? strMapToObj(req.headers) : undefined,
        body: req.body ? JSON.stringify(req.body) : undefined
      })
    );
  }
}
