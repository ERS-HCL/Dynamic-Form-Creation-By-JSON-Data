# Dynamic-Form-Creation-by-JSON is a Component developed in Angular
Dynamic-Form is a simple component used to creat a form which is designed in angular and bootstrap.

<p align="center">
    <img  alt="Dynamic-Form-Creation-by-JSON" src="Images/dynamic-form-output.png" class="img-responsive">
</p>

To preview demo of Dynamic form creation by json data Component, [Click here](https://angular-sllofh.stackblitz.io)

## Using the complete angular component

Download the src folder in dynamic-form folder and install the required packages and run the application.

### Installing

```
> npm install
```

### Run server

```
> ng serve
```

## Adding Dynamic-form component in your project
 Download the Dynamic-Form-Creation-by-JSON.component to your angular project and include required components from angular.

```html

<app-form-generator [jsonFormData]='formJson' [formGeneratorName]='formName'></app-form-generator>

```
FormName is the input to the Dynamic-Form-Creation-by-JSON of type **String**.
formJson is the input for the Dynamic-Form-Creation-by-JSON of type **FormTypes**

### FormTypes Interface

```typescript

FormTypes{
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
  
```

## How it works
  
   User will pass the data in property binding format i.e like above mentioned tag
    then Json data object will hold this information and gives to **input decorator**
    
### @Input Decorator

     @Input() jsonFormData;
     @Input() formGeneratorName;

In dynamic form creation, we use *NgFor loop to iterate the json Data.Inside the for loop ,it checks the condition 
for the **type** based on the status we will use *ngIf to create particular form tag.

