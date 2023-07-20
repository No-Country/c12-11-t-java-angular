import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleLeft, faArrowLeft, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent {
  faAngleLeft = faAngleLeft;
  faArrowLeft=faArrowLeft;
  faPenToSquare=faPenToSquare;

  public valueMethod:string="0";
  public textButtom:string="";
  private router= inject( Router );
  public modal= inject( NgbModal );
  public cardsRegister:any[]=[{
    numero:"ds442dff",
    name:'Juan Perez',
  },
  {
    numero:"123433",
    name:'luis Perez',
  }]

  goBack(){
    this.router.navigateByUrl('/container/pay');

  }
}
