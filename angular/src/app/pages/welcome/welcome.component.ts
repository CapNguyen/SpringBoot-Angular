import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TokenService } from 'src/app/services/token/token.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  userData!: User | null;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.userData = this.tokenService.getUserData();
  }
}
