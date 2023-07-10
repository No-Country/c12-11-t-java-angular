import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
menu:any[]=[
  {
    title:"Tipo de Entrega",
    path:"shopping"
  },{
    title:"Método de Pago",
    path:"pay"
  }
  ,{
    title:'Todo Listo',
    path:""
  }
]
}
