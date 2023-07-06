import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent {
  faAngleLeft = faAngleLeft;
  public valueMethod:string="0";
  public textButtom:string="";
  private router= inject( Router );
  verificarRadio(){
    return this.valueMethod=='0'?this.textButtom='Agregar Tarjeta':this.valueMethod=='1'?this.textButtom='Confirmar Pedido':'';
  }
  goBack(){
    this.router.navigateByUrl('/container/shopping');

  }

}
