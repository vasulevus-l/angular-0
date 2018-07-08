import { Component } from '@angular/core';  //імпортуємо необхідний

@Component({                                //метадані та шаблон містяться в декораторі @Component
  selector: 'app-root',                     //
  templateUrl: './app.component.html',      //
  styleUrls: ['./app.component.css']        //
})
export class AppComponent {                 //експортуємо клас typescript для того, щоб він був доступний і іншим компонентам.
  title:string = 'app';                     //typescript strong typing визначає клас.
}
