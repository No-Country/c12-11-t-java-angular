import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PaymentIntentDto } from '@shared/interfaces/paymentIntentDto.interface';
import { Observable } from 'rxjs';

type NewType = string;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
stripeUrl="http://localhost:8080/stripe/"
private http= inject(HttpClient);

public pagar(paymentIntentDto: PaymentIntentDto): Observable<string> {
  return this.http.post<string>(this.stripeUrl + 'paymentintent', paymentIntentDto);
}

public confirmar(id: string): Observable<string> {
  return this.http.post<string>(this.stripeUrl + `confirm/${id}`, {});
}

public cancelar(id: string): Observable<string> {
  return this.http.post<string>(this.stripeUrl + `cancel/${id}`, {},);
}
}

