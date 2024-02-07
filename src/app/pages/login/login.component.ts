import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersdataService } from 'src/app/services/usersdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  full: any;
  namesArray: any;
  name: any;
  password: any;
  str: any;

  passwordArray: any;
  constructor(private userdata: UsersdataService, private router: Router) {
    this.userdata.user().subscribe((data) => {
      this.full = data;
      console.warn('data', data);
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  Login: any = {
    name: '',
    password: '',
  };

  check() {
    console.log(this.full);
    this.userdata.Login(this.Login).subscribe({
      next: (res: any) => {
        if (res.message == 'user not found') {
          alert('user not found');
        } else if (res.message == 'password not match') {
          alert('password is wrong');
        } else if (res.message == 'login successfull') {
          alert('login successfull');
          localStorage.setItem('token', res.message);
          this.router.navigate(['homepage']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this.namesArray = this.full.map((user: any) => user.name);

    // this.passwordArray = this.full.map((user: any) => user.password);

    // for (var i = 0; i < this.full.length; i++) {
    //   if (this.Login.name == this.namesArray[i]) {
    //     if (this.Login.password == this.passwordArray[i]) {
    //       this.str = 'homepage';
    //       break;
    //     } else {
    //       alert('incorrect username or password');
    //     }
    //   }
    // }
  }
}
