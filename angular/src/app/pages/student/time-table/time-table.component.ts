import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sample_TimeSlot, weekDays } from 'src/app/data';
import { Campus } from 'src/app/models/Campus';
import { Session } from 'src/app/models/Session';
import { TimeSlot } from 'src/app/models/TimeSlot';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
})
export class TimeTableComponent implements OnInit {
  timeslots: TimeSlot[] = sample_TimeSlot;
  user!: User;
  campus!: Campus;
  sessions?: Session[];
  from!: Date;
  weekdays: String[] = weekDays;
  dateList: Date[] = [];

  ngOnInit(): void {
    //this.from = (this.from == null) ? (new Date()) : this.from;
  }

  constructor(private activatedRoute: ActivatedRoute) {
    this.from = this.from == null ? new Date() : this.from;
    this.generateDateList();
  }

  generateDateList() {
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(this.from);
      currentDate.setDate(currentDate.getDate() + i);
      this.dateList.push(currentDate);
    }
  }
}
