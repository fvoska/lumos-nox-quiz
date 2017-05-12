import { Component, OnInit, trigger, transition, animate, style } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BodyBackgroundChangerService } from 'app/services/body-background-changer.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [
    trigger(
      'revealAnimation',
      [
        transition(
        ':enter', [
          style({ opacity: 0 }),
          animate('250ms', style({ opacity: 1 }))
        ]
      ),
      transition(
        ':leave', [
          style({ 'opacity': 1 }),
          animate('250ms', style({ opacity: 0 }))
        ]
      )]
    )
  ]
})
export class VideoComponent implements OnInit {
  public video: string;

  constructor(private backgroundChanger: BodyBackgroundChangerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.backgroundChanger.changeBackground('video');
    this.route.params.subscribe((params: any) => {
      this.video = null;
      setTimeout(() => {
        this.video = params.video;
      }, 250);
    });
  }
}
