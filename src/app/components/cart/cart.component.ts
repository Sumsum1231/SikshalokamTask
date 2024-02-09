import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../api/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public detailList:any;
  constructor(private api:ProductsService) {}

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      //console.log(res);
      this.detailList=res;
    })
    
  }

  

  

}
