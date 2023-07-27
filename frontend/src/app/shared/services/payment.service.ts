import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DOMAIN } from '@environments/environment';
import { Pay } from '@shared/interfaces/pay.interface';
import { PaymentIntentDto } from '@shared/interfaces/paymentIntentDto.interface';
import { Observable } from 'rxjs';

type NewType = string;

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  domain = 'http://localhost:8080';
  stripeUrl = `${this.domain}/stripe`;
  payUrl = `${this.domain}/pago`;
  private http = inject(HttpClient);

  //Pasarela de pago
  public pagar(paymentIntentDto: PaymentIntentDto): Observable<string> {
    return this.http.post<string>(
      this.stripeUrl + '/paymentintent',
      paymentIntentDto
    );
  }

  public confirmar(id: string): Observable<string> {
    return this.http.post<string>(this.stripeUrl + `/confirm/${id}`, {});
  }

  /* public cancelar(id: string): Observable<string> {
  return this.http.post<string>(this.stripeUrl + `cancel/${id}`, {},);
} */

  //servicio Pago

  public CrearPago(pay:Pay): Observable<Pay> {
    console.log(pay);
    const token ="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MDM5MTkzOCwiaXNzIjoiaHR0cDovL3d3dy5leGFtcGxlLmNvbS8iLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJmaXJzdG5hbWUiOiJ0ZXN0IiwibGFzdG5hbWUiOiJwcnVlYmEiLCJpc0FjdGl2ZSI6dHJ1ZSwiZXhwIjoxNjkwNDc4MzM4fQ.zHMOj_fu0kVLwu554up1h-3K2Svr5nAHAFyXhHaV6Lq0sdcVPPdkqxUb-5cz6GtdimqQDbdEQhsAZ6-HOu2Hlw"
    return this.http.post<Pay>(`${this.payUrl}/crearPago`, pay,{headers:{'Authorization':token}});
  }
}
