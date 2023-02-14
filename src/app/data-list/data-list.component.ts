import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent {
  constructor(private router: Router) {}

  // headers = ['ID', 'Employee Name', 'Joining Date'];

  // rows = [
  //   {
  //     ID: '1',
  //     'Employee Name': 'Rutuja',
  //     'Joining Date': '22-02-2022',
  //   },
  // ];

  add() {
    this.router.navigateByUrl('/employee');
  }
}
