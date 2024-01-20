import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategorieModule } from 'src/app/models/categorie/categorie/categorie.module';
import Swal from 'sweetalert2';
import { CategorieService } from './../../services/Categorie/categorie.service';
import { FormCategoriesComponentComponent } from './form-categories-component/form-categories-component.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: CategorieModule[] = [];

  constructor(private categoriesService: CategorieService,
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.categoriesService.GetAll().subscribe(item => {
      this.categories = item;
      console.log(this.categories);
    }, error => {
      console.log(error);
    })
  }

  openAddForm() {
    const dialogRef = this._dialog.open(FormCategoriesComponentComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.showSuccessAlert('Added!');
          this.GetAll();
        }
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FormCategoriesComponentComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.showSuccessAlert('Updated!');
          this.GetAll();
        }
      },
    });
  }

  Delete(id: Number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You can't undo this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriesService.DeleteCategorie(id).subscribe(data => {
          console.log(data);
          this.showSuccessAlert('Deleted!');
          this.GetAll();
        });
      }
    })
  }

  showSuccessAlert(message: string) {
    Swal.fire({
      title: 'Success!',
      text: `The category has been ${message}`,
      icon: 'success',
      position: 'center',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
