import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent {
  formValue!: FormGroup;
  employeeData!: any;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  user: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      fullName: [''],
      address: [''],
      phone: [''],
      email: [''],
      dob: [''],
      gender: [''],
      hobbies: [''],
      role: [''],
    });

    this.getAllEmployee();
    
  }

  postEmployeeDetails() {
    this.employeeModelObj.id = this.formValue.value.id;
    this.employeeModelObj.fullName = this.formValue.value.fullName;
    this.employeeModelObj.address = this.formValue.value.address;
    this.employeeModelObj.phone = this.formValue.value.phone;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.dob = this.formValue.value.dob;
    this.employeeModelObj.gender = this.formValue.value.gender;
    this.employeeModelObj.hobbies = this.formValue.value.hobbies;
    this.employeeModelObj.role = this.formValue.value.role;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Added');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  getAllEmployee() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res;
    });
  }

  deleteEmployee(id: number) {
    this.api.deleteEmployee(id).subscribe((res) => {
      alert('Employee Deleted');
      this.ngOnInit();
      //this.getAllEmployee();
    });
  }
  getEmployeeById(id: number) {
    this.api.getEmployeeId(id).subscribe((data) => {
      this.formValue = data;
    });
  }

  onEdit(row: any) {
    this.employeeModelObj.id = row.id;
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['fullName'].setValue(row.fullName);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['phone'].setValue(row.phone);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['hobbies'].setValue(row.hobbies);
    this.formValue.controls['role'].setValue(row.role);
  }

  updateEmployeeDetails() {
    this.employeeModelObj.id = this.formValue.value.id;
    this.employeeModelObj.fullName = this.formValue.value.fullName;
    this.employeeModelObj.address = this.formValue.value.address;
    this.employeeModelObj.phone = this.formValue.value.phone;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.dob = this.formValue.value.dob;
    this.employeeModelObj.gender = this.formValue.value.gender;
    this.employeeModelObj.hobbies = this.formValue.value.hobbies;
    this.employeeModelObj.role = this.formValue.value.role;
    this.api
      .updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe((res: any) => {
        this.user = res;
        console.log(res);
        alert('Updated');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      });
  }
}
