import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  opened!: boolean;
  formData!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formData = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
