import { Injectable } from '@angular/core';

@Injectable()
export class BodyBackgroundChangerService {
  public changeBackground(newBackgroundClass: string): void {
    const $body: HTMLElement = document.querySelector('body');
    $body.className = '';
    $body.classList.add(newBackgroundClass);
  }
}
