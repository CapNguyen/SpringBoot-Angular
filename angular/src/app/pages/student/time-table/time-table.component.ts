import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
// import {
//   sample_Group,
//   sample_Session,
//   sample_StudentGroup,
//   sample_TimeSlot,
//   sample_campus,
//   sample_user,
//   weekDays,
// } from 'src/app/data';
import { Campus } from 'src/app/models/Campus';
import { Session } from 'src/app/models/Session';
import { Course } from 'src/app/models/Course';
import { TimeSlot } from 'src/app/models/TimeSlot';
import { User } from 'src/app/models/User';
import { Group } from 'src/app/models/Group';
import { Student_Group } from 'src/app/models/Student_group';
import { ScheduleService } from 'src/app/services/lecturer/Schedule/schedule.service';
import { TokenService } from 'src/app/services/token/token.service';
@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
})
export class TimeTableComponent implements OnInit {
  user_id!: string | null;
  fullname!: string|null;
  constructor(
    private timetableService: ScheduleService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    //this.timetableService.getTimetable()
    this.user_id = this.tokenService.getUserId();
    this.fullname = this.tokenService.getFullname();
  }
}
