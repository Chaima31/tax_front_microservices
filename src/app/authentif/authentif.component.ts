import { Component } from '@angular/core';
import { AuthentifService } from './authentif.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentif',
  templateUrl: './authentif.component.html',
  styleUrls: ['./authentif.component.css']
})
export class AuthentifComponent {
  username: string = '';
  password: string = '';

  constructor(private authentifService: AuthentifService, private router: Router) { }

  login() {
    this.authentifService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Welcome to TNB !',
          showConfirmButton: true,
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/home/cat']); // Redirect to the home route after successful login
          }
        });

      },
      (error) => {
        console.error('Login failed', error);
        Swal.fire({
          icon: 'error',
          title: 'Wrong information!',
          showConfirmButton: true,
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log('Cannot login');
          }
        });
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
  }
}
