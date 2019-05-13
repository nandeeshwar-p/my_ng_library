import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreator implements OnInit {

  @Input() jsonFormData;
  @Input() formGeneratorName;
  constructor() { }

  ngOnInit() {
  }

}