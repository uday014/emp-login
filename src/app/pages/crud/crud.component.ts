import { Component, DoCheck } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { UsersdataService } from 'src/app/services/usersdata.service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements DoCheck {
  constructor(
    public dialogRef: MatDialogRef<CrudComponent>,
    private userdata: UsersdataService
  ) {
    userdata.user();
  }

  public Name: any = {
    name: '',
    candidate: '',
    shift: '',
    password: '',
    conpassword: '',
  };
  collect: any = [];
  isdisable: boolean = true;

  ngDoCheck(): void {
    if (Object.values(this.Name).every((value) => value === '')) {
      console.log('All properties are empty.');
    } else if (Object.values(this.Name).some((value) => value === '')) {
      console.log('At least one property is not empty.');
    } else {
      this.isdisable = false;
    }
  }

  addInfo() {
    console.log(this.Name);

    this.userdata.adddata(this.Name).subscribe((result) => {
      console.log(result);
    });
    this.dialogRef.close('add');
  }

  del() {
    this.Name.name = '';
    this.Name.candidate = '';
    this.Name.shift = '';
    this.Name.password = '';
    this.Name.conpassword = '';
  }
}
