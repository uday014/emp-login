import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-editcrud',
  templateUrl: './editcrud.component.html',
  styleUrls: ['./editcrud.component.scss'],
})
export class EditcrudComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditcrudComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private userdata: UsersdataService
  ) {}

  public Name: any = {
    name: '',
    candidate: '',
    shift: '',
    password: '',
    conpassword: '',
  };

  ngOnInit(): void {
    this.Name.name = this.data.name;
    this.Name.candidate = this.data.candidate;
    this.Name.shift = this.data.shift;
  }
  test: any;
  addInfo() {
    this.userdata.edit(this.data._id, this.Name).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
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
