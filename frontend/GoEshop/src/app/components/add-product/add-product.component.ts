import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/service/alert-service.service';
import { ProductDataService } from 'src/app/service/product-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productName = ''
  sku = ''
  description = ''
  unitPrice = ''
  unitsInStock = ''
  categoryId = ''

  constructor(private httpClient: HttpClient, private alertService: AlertService, private productService: ProductDataService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  

    // Test upload
    title = 'ImageUploaderFrontEnd'
    public selectedFile;
    public event1;
    imgURL: any;
    receivedImageData: any;
    base64Data: any;
    convertedImage: any;
    imageId: any;
    

    public onFileChanged(event){
      this.selectedFile = event.target.files[0];

      //display selected image
      if(this.selectedFile != undefined){
        let reader  = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
          this.imgURL = reader.result;
        }
      } else {
        this.imgURL = undefined;
      }
    }

    addProduct(){
      const uploadData = new FormData();
      uploadData.append('newProduct', this.selectedFile, this.selectedFile.name)

      this.productService.addProduct(this.productName, this.sku, this.description, this.unitPrice, this.unitsInStock, this.categoryId, uploadData).subscribe(
        res => {
          this.alertService.success(`Product ${this.productName} has been added sucessfully !`)
          this.productName = ''
          this.sku = ''
          this.description = ''
          this.unitPrice = ''
          this.unitsInStock = ''
          this.categoryId = ''
          this.selectedFile = null;
          this.imgURL = null;
        },
        err => {
          if(err.status == 500){
            window.scrollTo(0,0)
            this.alertService.error("Given product category ID doesn't exists ! Please enter valid Product category ID !")
          } else{
            window.scrollTo(0,0)
            this.alertService.error("Error Occured during saving", false);
          }
        }
      )
    }

    validate(){
      if(this.productName == '' || this.sku == '' || this.description == '' || this.unitPrice =='' || this.unitsInStock == '' || this.categoryId == '' || this.selectedFile == undefined){
        window.scrollTo(0,0)
        this.alertService.error("Please enter all the details !", false)
      } else if(this.description.length > 255){
        window.scrollTo(0,0)
        this.alertService.error("Description is too long !", false)
      } else {
        this.addProduct()
        window.scrollTo(0,0)
      }
    }

    clickLabel(){
      let label = document.getElementById("add");
      label.click();
    }
  

}
