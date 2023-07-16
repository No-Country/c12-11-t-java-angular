import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faArrowLeft, faCirclePlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faArrowLeft=faArrowLeft;
  faPlus=faPlus;
  faMinus=faMinus;


  public state:string="";
  public textAddress:string="";
  public optionsDelivery:string="0";
  public newAddress:any={
  }
  public valueDefaul:number=1;
  public price:number=4000;
  public priceCurrent=4000;
  public direcciones:any[]=[];
  public hasDireccion:boolean=false;
ngOnInit(): void {

  this.direcciones=[

  ];



}
  private router=inject(Router);
  addAddress(){

    this.newAddress={
      title:this.textAddress
    }
    if(this.newAddress.title==''){
      return
    }
    this.direcciones.push(this.newAddress);

    this.textAddress='';


  }

  public addproduct(){
    this.valueDefaul++;
    this.price=this.price+this.priceCurrent;
  }
  public minusProduct(){
    if(this.valueDefaul>1){
      this.valueDefaul--;
      this.price=this.price-this.priceCurrent;
    }
  }
  public goBack(){
    this.router.navigateByUrl('/container/menu');

  }

}
