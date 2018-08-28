import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  teams = [
    {"id": 1, "name": "Green"},
    {"id": 2, "name": "Blue"},
    {"id": 3, "name": "Red"},
    {"id": 4, "name": "Pink"},
    {"id": 5, "name": "Black"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
