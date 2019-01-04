import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { merge } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string, isLoading: boolean = true, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<Object> {
    if (!isLoading) {
      options = merge(options, { params: { noLoading: 'active' } });
    }

    return this.httpClient.get(url, options);
  }

  post(url: string, body: any | null, isLoading: boolean = true, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<Object> {
    if (!isLoading) {
      options = merge(options, { params: { 'noLoading': 'active' } });
    }

    return this.httpClient.post(url, body, options);
  }

  delete(url: string, isLoading: boolean = true, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<Object> {
    if (!isLoading) {
      options = merge(options, { params: { 'noLoading': 'active' } });
    }

    return this.httpClient.delete(url, options);
  }

  put(url: string, body: any | null, isLoading: boolean = true, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<Object> {
    if (!isLoading) {
      options = merge(options, { params: { 'noLoading': 'active' } });
    }

    return this.httpClient.put(url, body, options);
  }
}
