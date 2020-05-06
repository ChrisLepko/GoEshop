import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/service/product-data.service';
import { ProductCategory } from 'src/app/common/product-category';
import { AlertService } from 'src/app/service/alert-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryId = ''
  categoryName = ''

  constructor(private productService: ProductDataService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  validate(){
    if(this.categoryId == '' || this.categoryName == ''){
      this.alertService.error("Please enter all the details !")
    } else{
      this.addCategory()
    }
  }

  addCategory(){

    this.productService.addCategory(this.categoryId, this.categoryName).subscribe(
      res => {
        this.alertService.success(`Category:  ${this.categoryName} has been added sucessfully !`, true)
        
        window.location.reload();
      },
      error => {
        if(error.status == 500){
          this.alertService.error("Category with given ID already exists and it is in use !")
        } else{
          this.alertService.error("Error Occured during saving", false);
        }
      }
    )
  }

}
