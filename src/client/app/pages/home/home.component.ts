import { BodyBackgroundChangerService } from 'app/services/body-background-changer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private backgroundChanger: BodyBackgroundChangerService) { }

  ngOnInit(): void {
    this.backgroundChanger.changeBackground('stars');
  }
}
