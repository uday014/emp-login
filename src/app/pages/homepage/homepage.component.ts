import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudComponent } from '../crud/crud.component';
import { UsersdataService } from 'src/app/services/usersdata.service';
import Swal from 'sweetalert2';
import { EditcrudComponent } from '../editcrud/editcrud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  user: any;

  // constructor(private userdata: UsersdataService) {
  //   userdata.user().subscribe((data) => {
  //     this.user = data;
  //     console.warn('data', data);
  //   });
  // }
  ngOnInit(): void {
    this.getdata();
    var test = localStorage.getItem('token');
    if (test != 'login successfull') {
      this.router.navigate(['login']);
      localStorage.clear();
    } else {
      console.log(test);
    }
  }

  constructor(
    public dialog: MatDialog,
    private userdata: UsersdataService,
    private router: Router
  ) {}

  getdata() {
    this.userdata.user().subscribe((data) => {
      this.user = data;
      console.warn('data', data);
    });
  }

  openDialog() {
    this.dialog
      .open(CrudComponent, {
        width: '30%',
        height: '200px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == 'add') {
          this.ngOnInit();
        }
      });
  }

  edit(data: any) {
    this.dialog
      .open(EditcrudComponent, {
        width: '30%',
        height: '200px',
        data,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == 'add') {
          this.ngOnInit();
        }
      });
  }

  condel(data: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.del(data);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  del(data: any) {
    console.log(data);

    this.userdata.delete(data).subscribe({
      next: (res) => {
        this.getdata();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // constructor(private dialoge: MatDialog) {}
  // openDialog() {
  //   this.dialoge
  //     .open(CrudComponent, {
  //       width: '50%',
  //       height: '280px',
  //     })
  //     .afterClosed()
  //     .subscribe((result) => {
  //       if (result == 'add') {
  //         // this.getData();
  //         console.log(this.main1);
  //         // this.str1 = this.main1;
  //         // console.log(this.str1);
  //         //           var storedData = localStorage.getItem();
  //         // const parsedData = JSON.parse(storedData);
  //       }
  //     });
  // }
}
