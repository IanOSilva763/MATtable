import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  urlImagem = "https://sonaesierracms-v2.cdnpservers.net/wp-content/uploads/sites/14/2018/08/01_variossc_produtosescolaresparaseufilho.jpg"

  title = 'mattableV';

  ngOnInit(): void {}
}
