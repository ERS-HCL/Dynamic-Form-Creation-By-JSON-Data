import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {

  title = 'CodeInfo';

  constructor(private _http: HttpClient) {
  }

  formName = 'Registration';

  formJson: FormTypes[];

  ngOnInit(): void {

      this.getFormInfo();

  }



  getFormInfo() {

    this._http.get('assets/formdata.json').subscribe((res: any) => {

      this.formJson = res;

    }, error => {

      console.log(error);

    });

  }
}


export interface FormTypes {

  label?: string;

  tag: string;

  value?: string;

  type?: string;

  placeholder?: string;

  values?: any;

  name?: string;

  inputStyles?: any;

  labelStyles?: any;

}

