import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'app/router.animations';
import { BodyBackgroundChangerService } from 'app/services/body-background-changer.service';

@Component({
  selector: 'quiz-slides',
  templateUrl: './quiz-slides.component.html',
  styleUrls: ['./quiz-slides.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class QuizSlidesComponent implements OnInit {
  constructor(private backgroundChanger: BodyBackgroundChangerService) { }

  ngOnInit(): void {
    this.backgroundChanger.changeBackground('stars');
  }
}
