import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private userdata: UsersdataService) {
    userdata.user();
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  public Name: any = {
    name: '',
    candidate: '',
    shift: '',
    password: '',
    conpassword: '',
  };

  reg() {
    console.log(this.Name);
    this.userdata.adddata(this.Name).subscribe((result) => {
      console.log(result);
    });
    (this.Name.name = ''),
      (this.Name.candidate = ''),
      (this.Name.shift = ''),
      ((this.Name.conpassword = ''), (this.Name.password = ''));
  }
}
