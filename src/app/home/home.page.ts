import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public thought: string = null;
  thoughts: Array<string> = [];
  constructor() {}
  ngOnInit() {

  }
  post_thought() {
    if (this.thought.length !== 0) {
      this.thoughts.unshift(this.thought);
    }
    console.log(this.thoughts);
  }
}
