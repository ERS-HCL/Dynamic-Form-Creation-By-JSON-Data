import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  @Input() jsonFormData;
  @Input() formGeneratorName;
  constructor() { }

  ngOnInit() {
  }

}