import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Address } from '@shared/interfaces/address.interface';
import { AddressService } from '@shared/services/address.service';

@Component({
  selector: 'app-delivery-container',
  templateUrl: './delivery-container.component.html',
  styleUrls: ['./delivery-container.component.scss']
})
export class DeliveryContainerComponent implements OnInit{
  faTrashCan=faTrashCan;
  public textAddress:string="";
  public optionsDelivery:string="0";
  public newAddress:any={
  }
  public valueDefaul:number=1;
  public price:number=4000;
  public priceCurrent=4000;
  public direcciones:Address[]=[];
  public hasDireccion:boolean=false;
  public addressform!:FormGroup;
  private router=inject(Router);
  private addressService=inject(AddressService);
  private fb=inject(FormBuilder);

  ngOnInit(): void {
      this.addressform = this.fb.group({
        zona:['',Validators.required],
        nombreCalle:['',Validators.required],
        altura:['',Validators.required],
        tipoVivienda:['',Validators.required]
      });
      this.listAddress();

  }

  addAddress(){
    console.log(this.addressform.value);
   /*  this.addressService.crearDirreccion(this.addressform.value).subscribe(resp=>{
      console.log(resp)});
    this.listAddress();
 */


  }
  public listAddress(){
    this.addressService.listarDirecciones().subscribe(direcciones=>{
      this.direcciones=direcciones;

    })
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
