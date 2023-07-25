import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faAngleLeft, faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { PaymentIntentDto } from '@shared/interfaces/paymentIntentDto.interface';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { PaymentService } from '../../../../shared/services/payment.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faArrowLeft=faArrowLeft;
faTrashCan=faTrashCan;
  public valueMethod:string="0";
  public textButtom:string="";
  isnewCard:boolean=false;
  error:string="";
  public cardsRegister:any[]=[]
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;


  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  stripeTest!: FormGroup;
  private router= inject( Router );
  private stripeService= inject(StripeService);
 private fb= inject (FormBuilder);
  private paymentService = inject(PaymentService);
  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
  createToken(): void {
    const name = this.stripeTest.get('name')?.value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          const paymentIntentDto: PaymentIntentDto = {
            token: result.token.id,
            amount:2000,
            currency: 'cop',
            description: "plato 3"
          };
          this.paymentService.pagar(paymentIntentDto).subscribe(resp=>{
            console.log(resp);
          })
          this.error = "";
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          this.error=result.error.message as string;

          console.log(result.error.message);
        }
      });
  }

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
