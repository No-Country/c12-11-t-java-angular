import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddIdAddress } from 'src/app/store/actions/pedido.actions';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
ngOnInit(): void {
  this.store.select('pedido').subscribe(rep=>{
    console.log(rep);

  })
}
@Input()public text:string="text";
@Input() path:string="";
@Input() idAddress:number=0;
isButtonSuccessDisabled = false;
private store= inject(Store);

}
