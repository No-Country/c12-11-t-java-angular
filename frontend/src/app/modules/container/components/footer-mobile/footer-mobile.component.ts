import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent {
@Input()public text:string="text";
@Input() path:string="";
private router= inject( Router );
sgtePage(){

  this.router.navigateByUrl(`/container/${this.path}`);
}
}
