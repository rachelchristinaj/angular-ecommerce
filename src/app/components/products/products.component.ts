import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProduccttService } from '../../services/product/producctt.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisible: boolean = false;
  productObj: any =
  {
    "ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": new Date(),
    "DeliveryTimeSpan": "",
    "CategoryId": 0,
    "ProductImageUrl": "",
    "UserId": 0
  }

  constructor(private productServ: ProduccttService){}

categoryList: any[] = [];
productList:any[]=[];


  ngOnInit(): void {
    this.getALlCategory();
    this.getProducts();
  }

  getProducts(){
    this.productServ.getProducts().subscribe((res:any)=>{
      this.categoryList=res.data;
    })
  }

  getALlCategory(){
    this.productServ.getCategory().subscribe((res:any)=>{
      this.productList=res.data;
    })
  }

  OnSave(){
    this.productServ.saveProducts(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("product created");
        this.getProducts();
      }else{
        alert(res.message)
      }
    })
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeidePanel(){
    this.isSidePanelVisible = false;

  }
}
