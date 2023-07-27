import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faAngleLeft, faArrowLeft, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {PaymentService} from '../../../../shared/services/payment.service';
import {PedidoRequest, PedidoService} from '@shared/services/pedido.service';


@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faArrowLeft = faArrowLeft;
  faPenToSquare = faPenToSquare;
  public stripeId: string = "";
  public valueMethod: string = "0";
  public textButtom: string = "";
  public modal = inject(NgbModal);
  public fecha: string = new Date().toLocaleString();
  public fechaEstimada: string = "";
  public pedido!: PedidoRequest;
  public cardsRegister: any = {
    name: "david",
    brand: "visa"
  };

  private router = inject(Router);
  private store = inject(Store);
  private paymentService = inject(PaymentService);
  private pedidoService = inject(PedidoService);

  ngOnInit(): void {


    this.getFechas();
    this.getPedido();
    console.log(this.fecha, this.fechaEstimada);
    this.store.select("card").subscribe(resp => {

      if (!resp) {
        return
      }
      this.cardsRegister = resp.card;
    })

  }

  getPedido() {
    this.store.select("pedido").subscribe(resp => {
      const {stripeId} = resp;
      this.stripeId = stripeId;
      const pedido: PedidoRequest = {
        ...resp,
        usuarioId: 1,
        fechaPedido: this.fecha,
        fechaEntrega: this.fechaEstimada,
        fechaEntregaEstimada: this.fechaEstimada,
        estadoPedidoId: 1

      }


      this.pedido = pedido;

    })
  }

  confirm() {

    this.pedidoService.crearPedido(this.pedido).subscribe(() => {

      this.paymentService.confirmar(this.stripeId).subscribe(confirm => {
        console.log(confirm);

      })
    })

  }

  goBack() {
    this.router.navigateByUrl('/container/pay');

  }

  getFechas() {

    let fecha = new Date();
    let fechaEstimada = new Date();
    fechaEstimada.setHours(fecha.getHours() + 1);
    this.fecha = fecha.toLocaleString();
    this.fechaEstimada = fechaEstimada.toLocaleString();


  }
}
