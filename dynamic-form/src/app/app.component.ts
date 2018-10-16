import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  formName = 'Registration';
  formJson:FormTypes[] =[
    {
      "label":"Username",
      "tag":"input",
      "type":"text",
      "placeholder":"enter name",
      value:"Srinivas",
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
    },
    {
      "label":"Email Id",
      "tag":"input",
      "type":"email",
      "placeholder":"please enter email",
      value:"sri@gmail.com",
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
    },
    {
      "label":"Password",
      "tag":"input",
      "type":"password",
      "placeholder":"please enter your password",
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
    },
    {
      "label":"Mobile Number",
      "tag":"input",
      "type":"tel",
      "placeholder":"enter mobile number",
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
    },   
    {
      "label":"Gender",
      "tag":"input",
      "type":"radio",
      "name":"gender",
      "placeholder":"enter name",
      values:['male','female'],
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
    },
    {
      tag:'select',
      values:['1','2','3','4'],
      label:'user choice',
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
    },
    {
      tag:'input',
      type:'checkbox',
      label:'select courses',
      values:['java','c','.net'],
      "lableStyles":{'font-weight':'bold'},
      "inputStyles":{'background-color':'#d2d8e0','color':'black'}
              
    },
    {
      "value":"cancel",
      "tag":"button"
    },
    {
      "type":"submit",
      "value":"submit",
      "tag":"button",
      "buttonStyle":{'background-color':'#26b536'}
    }
  ]
}

export interface FormTypes{
  label?:string;
  tag:string;
  value?:string;
  type?:string;
  placeholder?:string;
  values?:any;
  name?:string;
  lableStyles?:any;
  inputStyles?:any;
  buttonStyle?:any;
}
