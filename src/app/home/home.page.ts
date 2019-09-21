import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public thought: string = null
  thoughts: Array<string> = []
    
  constructor() {}

  post_thought(){
    this.thoughts.unshift(this.thought)
    console.log(this.thoughts)
  }
}
