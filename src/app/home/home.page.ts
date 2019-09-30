import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from "@angular/forms";
import { IThought } from "../models/thought.interface";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private thoughtsForm: FormGroup;
  private thoughtsList: Array<IThought> = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.initForms();
  }
  initForms(){
    this.thoughtsForm = this.fb.group({
      thoughtText: ['', Validators.required]
    });
  }
  publishThought() {
    let thought: IThought = {
      thought: this.thoughtsForm.get('thoughtText').value
    };
    this.thoughtsList.push(thought);
  }
}
