import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  colors = [
    {value: 'Red', viewValue: 'Red'},
    {value: 'Green', viewValue: 'Green'},
    {value: 'Blue', viewValue: 'Blue'}
  ]

  ngOnInit(): void {
  }

}
