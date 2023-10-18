import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleResponse } from 'src/app/models/response/schedule-response';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {
  private baseUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {}

  getTimetable(id: number, date_from: String) {
    return this.http.get<ScheduleResponse>(`${this.baseUrl}/timetable/${id}/${date_from}`);
  }
}
