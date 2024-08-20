import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '6857c1caa24e41cb83b3a8cdbf9966b1';
  private apiUrl = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) {}

  getNews(query?: string, fromDate?: string, toDate?: string, sortBy?: string): Observable<any> {
    // Check if the required parameter 'q' is provided
    if (!query) {
      return throwError({ status: 'error', message: 'Required parameter "q" is missing.' });
    }

    let params = new HttpParams().set('apiKey', this.apiKey);

    params = params.set('q', query);

    if (fromDate) {
      params = params.set('from', fromDate);
    }
    if (toDate) {
      params = params.set('to', toDate);
    }
    if (sortBy) {
      params = params.set('sortBy', sortBy);
    } else {
      params = params.set('sortBy', 'popularity');
    }

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Error fetching news:', error);
        return throwError(error);
      })
    );
  }
}
