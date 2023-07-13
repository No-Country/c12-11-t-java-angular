import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent {
  faAngleLeft = faAngleLeft;
  faArrowLeft=faArrowLeft;
faTrashCan=faTrashCan;
  public valueMethod:string="0";
  public textButtom:string="";
  isnewCard:boolean=false;
  public cardsRegister:any[]=[{
    numero:"ds442dff",
    name:'Juan Perez',
  },
  {
    numero:"123433",
    name:'luis Perez',
  }]
  private router= inject( Router );

  verificarRadio(){
    return this.valueMethod=='0'?this.textButtom='Agregar Tarjeta':this.valueMethod=='1'?this.textButtom='Confirmar Pedido':'';
  }
  goBack(){
    this.router.navigateByUrl('/container/shopping');

  }
  deleteCard(index:number){
    this.cardsRegister.splice(index, 1);
    console.log(this.cardsRegister);
  }

}
