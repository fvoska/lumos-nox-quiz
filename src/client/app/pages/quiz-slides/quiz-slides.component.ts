import { Component, OnInit } from '@angular/core';

import { BodyBackgroundChangerService } from 'app/services/body-background-changer.service';

@Component({
  selector: 'quiz-slides',
  templateUrl: './quiz-slides.component.html',
  styleUrls: ['./quiz-slides.component.scss']
})
export class QuizSlidesComponent implements OnInit {
  constructor(private backgroundChanger: BodyBackgroundChangerService) { }

  ngOnInit(): void {
    this.backgroundChanger.changeBackground('stars');
  }
}
