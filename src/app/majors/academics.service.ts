import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicsService {

  constructor(private http: HttpClient, private apiService: ApiService) {}



}
